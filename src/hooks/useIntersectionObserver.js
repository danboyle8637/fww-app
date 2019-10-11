import { useEffect, useState, useRef } from 'react'

const useIntersectionObserver = ({
  root = null,
  rootMargin,
  threshold = 1,
  shouldUnobserve = false
}) => {
  const [ratio, setRatio] = useState(0)
  const [previousRatio, setPreviousRatio] = useState(0)
  // runAction sets the flag to do what you want to do.
  const [runAction, setRunAction] = useState(false)
  const [node, setNode] = useState(null)

  const options = {
    root: root,
    rootMargin: rootMargin,
    threshold: threshold
  }

  // Callback sets the intersection ratio so you can start
  // comparing it to it's previous value.
  const startAction = entries => {
    entries.forEach(singleEntry => {
      if (singleEntry.intersectionRatio === 0) {
        //console.log("Setting the entry in state.");
        //setTarget(singleEntry.target);
        setRatio(singleEntry.intersectionRatio)
      }

      if (singleEntry.isIntersecting) {
        //console.log("Node is intersecting, Update values!");
        setRatio(singleEntry.intersectionRatio)
      } else {
        setRatio(singleEntry.intersectionRatio)
      }
    })
  }

  const observer = useRef(new IntersectionObserver(startAction, options))

  // This effect sets the observer when the node is passed in.
  useEffect(() => {
    const currentObserver = observer.current

    if (node) {
      currentObserver.observe(node)
    }

    return () => {
      currentObserver.disconnect()
    }
  }, [node, observer])

  // When the callback runs the ratio is set and this effect runs to track
  // previous ratio vs new ratio and whether the node is on screen.
  useEffect(() => {
    setPreviousRatio(ratio)

    if (ratio > previousRatio) {
      //console.log("Icon is on screen");
      setRunAction(true)
      if (shouldUnobserve) {
        observer.current.unobserve(node)
      }
    }

    if (ratio < previousRatio) {
      //console.log("Icon is off screen");
      setRunAction(false)
    }
  }, [ratio, previousRatio, shouldUnobserve, node])

  return [setNode, runAction]
}

export default useIntersectionObserver
