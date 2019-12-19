import { useState, useEffect, useRef } from 'react'
import { TweenMax, Linear } from 'gsap/TweenMax'
import TimelineMax from 'gsap/TimelineMax'

const useBlurUp = () => {
  // smallImage is the placeholder image
  const [smallImage, setSmallImage] = useState(null)
  // largeImage is the high res image
  const [largeImage, setLargeImage] = useState(null)
  // parentContainer is just that so you can remove the small image after load
  const [parentContainer, setParentContainer] = useState(null)
  const [largeImageLoaded, setLargeImageLoaded] = useState(false)
  const timeline = useRef(new TimelineMax())

  useEffect(() => {
    const tl = timeline.current

    return () => {
      tl.kill()
    }
  }, [])

  useEffect(() => {
    if (largeImage) {
      largeImage.onload = () => setLargeImageLoaded(true)
    } else {
      setLargeImageLoaded(false)
    }
  }, [largeImage])

  useEffect(() => {
    const tl = timeline.current

    if (largeImage) {
      TweenMax.set(largeImage, { autoAlpha: 0 })
    }

    if (largeImageLoaded) {
      tl.to(smallImage, 0.5, {
        autoAlpha: 0,
        ease: Linear.easeNone
      }).to(
        largeImage,
        0.4,
        {
          autoAlpha: 1,
          ease: Linear.easeNone,
          onComplete: () => {
            parentContainer.removeChild(smallImage)
          }
        },
        '-=0.25'
      )
    }
  }, [largeImage, largeImageLoaded, parentContainer, smallImage])

  return [setSmallImage, setLargeImage, setParentContainer]
}

export default useBlurUp
