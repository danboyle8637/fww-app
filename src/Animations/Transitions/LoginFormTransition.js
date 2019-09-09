import React from 'react'
import { Transition } from 'react-transition-group'

import loginFormOnEnter from '../Tweens/loginFormOnEnter'
import loginFormOnExit from '../Tweens/loginFormOnExit'
import loginFormReverseEnter from '../Tweens/loginFormReverseEnter'
import loginFormReverseExit from '../Tweens/loginFormReverseExit'
import { useFormStore } from '../../context/FormContext'

const LoginFormTransition = ({ showNode, reverse, formName, children }) => {
  // eslint-disable-next-line
  const [formState, dispatch] = useFormStore()

  const resetForm = () => {
    if (
      formName === 'UsernamePasswordForm' ||
      formName === 'ForgotPasswordForm'
    ) {
      dispatch({ type: 'resetUsernamePasswordForm' })
      dispatch({ type: 'resetForgotPasswordForm' })
    }
  }

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
      onExited={() => resetForm()}
    >
      {children}
    </Transition>
  )
}

export default LoginFormTransition
