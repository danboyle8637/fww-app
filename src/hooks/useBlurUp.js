import { useState, useEffect } from 'react'

import blurUp from '../Animations/Tweens/blurUp'

const useBlurUp = () => {
  const [smallImage, setSmallImage] = useState(null)
  const [largeImage, setLargeImage] = useState(null)
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
    }
  }, [largeImage, largeImageLoaded, smallImage])

  return [setSmallImage, setLargeImage]
}

export default useBlurUp
