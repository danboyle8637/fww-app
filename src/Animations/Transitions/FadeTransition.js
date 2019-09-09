import React from 'react'
import { Transition } from 'react-transition-group'

import fadeInOnEnter from '../Tweens/fadeInOnEnter'
import fadeOutOnExit from '../Tweens/fadeOutOnExit'

const LoginFormTransition = ({ showNode, children }) => {
  return (
    <Transition
      in={showNode}
      timeout={500}
      enter={true}
      exit={true}
      appear={true}
      mountOnEnter={true}
      unmountOnExit={true}
      onEnter={node => fadeInOnEnter(node)}
      onExit={node => fadeOutOnExit(node)}
    >
      {children}
    </Transition>
  )
}

export default LoginFormTransition
