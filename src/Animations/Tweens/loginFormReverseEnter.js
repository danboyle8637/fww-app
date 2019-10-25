import { TweenMax, Linear } from 'gsap/TweenMax'

const loginFormReverseEnter = node => {
  TweenMax.fromTo(
    node,
    0.3,
    {
      x: -300,
      autoAlpha: 0
    },
    {
      x: 0,
      autoAlpha: 1,
      ease: Linear.easeNone
    }
  )
}

export default loginFormReverseEnter
