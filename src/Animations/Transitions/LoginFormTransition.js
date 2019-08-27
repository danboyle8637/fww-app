import React from 'react'
import { Transition } from 'react-transition-group'
import loginFormOnEnter from '../Tweens/loginFormOnEnter'
import loginFormOnExit from '../Tweens/loginFormOnExit'
import loginFormReverseEnter from '../Tweens/loginFormReverseEnter'
import loginFormReverseExit from '../Tweens/loginFormReverseExit'

const LoginFormTransition = ({ showNode, reverse, children }) => {
  return (
    <Transition
      in={showNode}
      timeout={500}
      enter={true}
      exit={true}
      appear={true}
      mountOnEnter={true}
      unmountOnExit={true}
      onEnter={node =>
        reverse ? loginFormReverseEnter(node) : loginFormOnEnter(node)
      }
      onExit={node =>
        reverse ? loginFormReverseExit(node) : loginFormOnExit(node)
      }
    >
      {children}
    </Transition>
  )
}

export default LoginFormTransition
