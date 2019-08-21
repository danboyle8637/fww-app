import React, { useEffect, useState } from 'react'
import { Transition } from 'react-transition-group'
import { TweenMax } from 'gsap/TweenMax'

const FormInstructionsTransition = ({ isTouched, isTextArea, children }) => {
  const [yPosition, setYPosition] = useState(-37)

  useEffect(() => {
    if (isTextArea) {
      setYPosition(-12)
    }
  }, [isTextArea])

  return (
    <Transition
      in={isTouched}
      mountOnEnter={true}
      unmountOnExit={true}
      addEndListener={(node, done) => {
        if (isTouched) {
          TweenMax.fromTo(
            node,
            0.5,
            {
              x: -300,
              y: yPosition,
              autoAlpha: 0
            },
            {
              x: 13,
              y: yPosition,
              autoAlpha: 1,
              onComplete: done
            }
          )
        } else {
          TweenMax.to(node, 0.5, {
            x: 300,
            y: yPosition,
            autoAlpha: 0,
            onComplete: done
          })
        }
      }}
    >
      {children}
    </Transition>
  )
}

export default FormInstructionsTransition
