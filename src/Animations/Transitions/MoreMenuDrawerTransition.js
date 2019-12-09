import React from 'react'
import { Transition } from 'react-transition-group'
import { TweenMax, Power2 } from 'gsap/TweenMax'

const MoreMenuDrawerTransition = ({ moreMenuOpen, children }) => {
  const menuEnter = node => {
    if (moreMenuOpen) {
      TweenMax.fromTo(
        node,
        0.4,
        {
          y: '-100%'
        },
        {
          y: '0%',
          ease: Power2.easeOut
        }
      )
    }
  }

  const menuExit = node => {
    if (!moreMenuOpen) {
      TweenMax.to(node, 0.4, {
        y: '-100%',
        ease: Power2.easeOut
      })
    }
  }

  return (
    <Transition
      in={moreMenuOpen}
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

export default MoreMenuDrawerTransition
