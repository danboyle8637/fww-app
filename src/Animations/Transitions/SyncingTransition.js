import React from 'react'
import { Transition } from 'react-transition-group'
import { TweenMax, Power2 } from 'gsap/TweenMax'

const SyncingTransition = ({ isSyncing, children }) => {
  const isSyncingEnter = node => {
    TweenMax.fromTo(
      node,
      0.4,
      {
        x: '-100%',
        autoAlpha: 0
      },
      {
        x: '0%',
        autoAlpha: 1,
        ease: Power2.easeOut
      }
    )
  }

  const isSyncingExit = node => {
    TweenMax.to(node, 0.4, {
      x: '-100%',
      autoAlpha: 0,
      ease: Power2.easeOut,
      delay: 0.8
    })
  }

  return (
    <Transition
      in={isSyncing}
      timeout={1200}
      mountOnEnter={true}
      unmountOnExit={true}
      onEnter={node => isSyncingEnter(node)}
      onExit={node => isSyncingExit(node)}
    >
      {children}
    </Transition>
  )
}

export default SyncingTransition
