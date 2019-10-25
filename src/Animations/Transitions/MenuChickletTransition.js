import React from 'react'
import { Transition } from 'react-transition-group'
import { TweenMax, Power2 } from 'gsap/TweenMax'

const MenuChickletTransition = ({ menuOpen, xPosition, children }) => {
  return (
    <Transition
      in={menuOpen}
      mountOnEnter={true}
      unmountOnExit={true}
      addEndListener={(node, done) => {
        if (menuOpen) {
          TweenMax.to(node, 0.3, {
            transformOrigin: '50% 50%',
            x: xPosition,
            rotation: 360,
            ease: Power2.easeInOut,
            onComplete: done
          })
        } else {
          TweenMax.to(node, 0.3, {
            transformOrigin: '50% 50%',
            x: 0,
            rotation: 360,
            ease: Power2.easeInOut,
            onComplete: done
          })
        }
      }}
    >
      {children}
    </Transition>
  )
}

export default MenuChickletTransition
