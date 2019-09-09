import { TweenMax, Power2 } from 'gsap/TweenMax'

const fadeInOnEnter = node => {
  TweenMax.fromTo(
    node,
    0.8,
    {
      autoAlpha: 0
    },
    {
      autoAlpha: 1,
      ease: Power2.easeOut,
      delay: 0.3
    }
  )
}

export default fadeInOnEnter
