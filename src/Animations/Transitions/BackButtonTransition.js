import React from 'react'
import { Transition } from 'react-transition-group'
import { TweenMax, Power2 } from 'gsap/TweenMax'

const BackButtonTransition = ({ showBackButton, children }) => {
  const backButtonEnter = node => {
    TweenMax.fromTo(
      node,
      1,
      {
        x: -200,
        autoAlpha: 0,
        delay: 1
      },
      {
        x: 0,
        rotation: 360,
        autoAlpha: 1,
        ease: Power2.easeOut
      }
    )
  }

  return (
    <Transition
      in={showBackButton}
      timeout={1000}
      mountOnEnter={true}
      unmountOnExit={true}
      onEnter={node => backButtonEnter(node)}
    >
      {children}
    </Transition>
  )
}

export default BackButtonTransition
