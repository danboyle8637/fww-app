import { TweenMax, Power2 } from 'gsap/TweenMax'
import TimelineMax from 'gsap/TimelineMax'

const resetStars = starArray => {
  TweenMax.set(starArray, {
    transformOrigin: '50% 50%',
    scale: 1,
    fill: 'none',
    ease: Power2.easeOut
  })
}

const reviewStarAni = starArray => {
  const tl = new TimelineMax()

  tl.staggerTo(
    starArray,
    0.8,
    {
      transformOrigin: '50% 50%',
      scale: 1.2,
      fill: '#B44CFF',
      ease: Power2.easeOut
    },
    0.1
  ).staggerTo(
    starArray,
    0.8,
    {
      transformOrigin: '50% 50%',
      scale: 1,
      fill: '#aff8ff',
      ease: Power2.easeOut
    },
    0.1,
    '-=0.8'
  )
}

export { reviewStarAni, resetStars }
