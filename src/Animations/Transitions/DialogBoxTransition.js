import React from 'react'
import { Transition } from 'react-transition-group'
import { TweenMax, Power2 } from 'gsap/TweenMax'

const DialogBoxTransition = ({ toggleDialog, children }) => {
  const dialogEnter = node => {
    TweenMax.fromTo(
      node,
      0.3,
      {
        y: -20,
        autoAlpha: 0
      },
      {
        y: 0,
        autoAlpha: 1,
        ease: Power2.easeOut
      }
    )
  }

  const dialogExit = node => {
    TweenMax.to(node, 0.3, {
      y: -20,
      autoAlpha: 0,
      ease: Power2.easeOut
    })
  }

  return (
    <Transition
      in={toggleDialog}
      timeout={200}
      mountOnEnter={true}
      unmountOnExit={true}
      onEnter={node => dialogEnter(node)}
      onExit={node => dialogExit(node)}
    >
      {children}
    </Transition>
  )
}

export default DialogBoxTransition
