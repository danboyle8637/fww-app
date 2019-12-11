import { TweenMax, Power2 } from 'gsap/TweenMax'

const mobileMenuTween = (node, isOpen) => {
  if (isOpen) {
    TweenMax.to(node, 0.4, {
      y: -60,
      rotation: 360,
      ease: Power2.easeOut
    })
  } else {
    TweenMax.to(node, 0.4, {
      y: 0,
      rotation: -360,
      ease: Power2.easeOut
    })
  }
}

export default mobileMenuTween
