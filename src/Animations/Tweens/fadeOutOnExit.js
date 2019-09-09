import { TweenMax, Power2 } from 'gsap/TweenMax'

const fadeOutOnExit = node => {
  TweenMax.to(node, 0.3, {
    autoAlpha: 0,
    ease: Power2.easeIn
  })
}

export default fadeOutOnExit
