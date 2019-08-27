import { TweenMax, Power2 } from 'gsap/TweenMax'

const loginFormOnEnter = node => {
  TweenMax.fromTo(
    node,
    0.3,
    {
      x: 300,
      autoAlpha: 0
    },
    {
      x: 0,
      autoAlpha: 1,
      ease: Power2.easeOut,
      delay: 0.3
    }
  )
}

export default loginFormOnEnter
