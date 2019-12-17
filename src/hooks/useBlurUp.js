import { useState, useEffect } from 'react'

import blurUp from '../Animations/Tweens/blurUp'

const useBlurUp = () => {
  // smallImage is the placeholder image
  const [smallImage, setSmallImage] = useState(null)
  // largeImage is the high res image
  const [largeImage, setLargeImage] = useState(null)
  // parentContainer is just that so you can remove the small image after load
  const [parentContainer, setParentContainer] = useState(null)
  const [largeImageLoaded, setLargeImageLoaded] = useState(false)
  const [killTimeline, setKillTimeline] = useState(false)

  useEffect(() => {
    return () => setKillTimeline(true)
  }, [])

  useEffect(() => {
    if (largeImage) {
      largeImage.onload = () => setLargeImageLoaded(true)
    } else {
      setLargeImageLoaded(false)
    }
  }, [largeImage])

  useEffect(() => {
    if (largeImageLoaded) {
      blurUp(smallImage, largeImage, killTimeline)
      setTimeout(() => {
        parentContainer.removeChild(smallImage)
      }, 500)

      return () => {
        clearTimeout()
      }
    }
  }, [killTimeline, largeImage, largeImageLoaded, parentContainer, smallImage])

  return [setSmallImage, setLargeImage, setParentContainer]
}

export default useBlurUp
