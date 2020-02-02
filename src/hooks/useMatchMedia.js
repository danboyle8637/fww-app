import { useState, useEffect, useRef } from 'react'

const useMatchMedia = ({ width = 600 }) => {
  const [shouldShow, setShouldShow] = useState(false)
  const mediaQueryRef = useRef(null)

  useEffect(() => {
    if (typeof window !== undefined) {
      mediaQueryRef.current = window.matchMedia(`(min-width: ${width}px)`)

      if (mediaQueryRef.current.matches) {
        setShouldShow(true)
      } else {
        setShouldShow(false)
      }
    }

    const test = event => {
      if (event.matches) {
        setShouldShow(true)
      } else {
        setShouldShow(false)
      }
    }

    mediaQueryRef.current.addListener(test)

    return () => {
      if (test) {
        mediaQueryRef.current.removeListener(test)
      }
    }
  }, [width])

  return shouldShow
}

export default useMatchMedia
