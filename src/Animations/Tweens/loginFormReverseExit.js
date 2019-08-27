import { TweenMax, Power2 } from 'gsap/TweenMax'

const loginFormReverseExit = node => {
  TweenMax.to(node, 0.3, {
    x: 300,
    autoAlpha: 0,
    ease: Power2.easeIn
  })
}

export default loginFormReverseExit
