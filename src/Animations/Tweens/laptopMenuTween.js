import { TweenMax, Power2 } from 'gsap/TweenMax'

const laptopMenuTween = (node, isOpen) => {
  if (isOpen) {
    TweenMax.to(node, 0.4, {
      rotation: 360,
      ease: Power2.easeOut
    })
  } else {
    TweenMax.to(node, 0.4, {
      rotation: -360,
      ease: Power2.easeOut
    })
  }
}

export default laptopMenuTween
