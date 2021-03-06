import React from 'react'
import { Transition } from 'react-transition-group'
import { TweenMax, Power2 } from 'gsap/TweenMax'

const BottomMenuTransition = ({ menuOpen, children }) => {
  const menuEnter = node => {
    if (menuOpen) {
      TweenMax.fromTo(
        node,
        0.4,
        {
          y: '100%'
        },
        {
          y: '0%',
          ease: Power2.easeOut
        }
      )
    }
  }

  const menuExit = node => {
    if (!menuOpen) {
      TweenMax.to(node, 0.4, {
        y: '100%',
        ease: Power2.easeOut
      })
    }
  }

  return (
    <Transition
      in={menuOpen}
      timeout={200}
      mountOnEnter={true}
      unmountOnExit={true}
      onEnter={node => menuEnter(node)}
      onExit={node => menuExit(node)}
    >
      {children}
    </Transition>
  )
}

export default BottomMenuTransition
