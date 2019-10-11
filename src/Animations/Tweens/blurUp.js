import { TweenMax, Linear } from 'gsap/TweenMax'
import TimelineMax from 'gsap/TimelineMax'

const blurUp = (smallImage, largeImage) => {
  const tl = new TimelineMax()

  TweenMax.set(largeImage, { autoAlpha: 0 })

  tl.to(smallImage, 0.2, {
    autoAlpha: 0,
    ease: Linear.easeNone
  }).to(
    largeImage,
    0.2,
    {
      autoAlpha: 1,
      ease: Linear.easeNone
    },
    '-=0.2'
  )
}

export default blurUp
