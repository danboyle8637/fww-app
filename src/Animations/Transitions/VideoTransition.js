import React from 'react'
import { Transition } from 'react-transition-group'
import { TweenMax, Power2 } from 'gsap/TweenMax'

const VideoTransition = ({ children, showVideo }) => {
  const videoEnter = node => {
    TweenMax.fromTo(
      node,
      0.4,
      {
        transformOrigin: '50% 50%',
        scale: 0,
        autoAlpha: 0
      },
      {
        transformOrigin: '50% 50%',
        scale: 1,
        autoAlpha: 1,
        ease: Power2.easeOut
      }
    )
  }

  const videoExit = node => {
    TweenMax.to(node, 0.4, {
      transformOrigin: '50% 50%',
      scale: 0,
      autoAlpha: 0,
      ease: Power2.easeOut
    })
  }

  return (
    <Transition
      in={showVideo}
      timeout={400}
      mountOnEnter={true}
      unmountOnExit={true}
      onEnter={node => videoEnter(node)}
      onExit={node => videoExit(node)}
    >
      {children}
    </Transition>
  )
}

export default VideoTransition
