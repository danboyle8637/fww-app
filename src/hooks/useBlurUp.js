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

  useEffect(() => {
    if (largeImage) {
      const largeImageIsLoaded = () => {
        return new Promise((resolve, reject) => {
          largeImage.onload = () => {
            resolve()
          }
        })
      }

      largeImageIsLoaded().then(() => setLargeImageLoaded(true))
    }
  }, [largeImage])

  useEffect(() => {
    if (largeImageLoaded) {
      blurUp(smallImage, largeImage)
      parentContainer.removeChild(smallImage)
    }
  }, [largeImage, largeImageLoaded, parentContainer, smallImage])

  return [setSmallImage, setLargeImage, setParentContainer]
}

export default useBlurUp
