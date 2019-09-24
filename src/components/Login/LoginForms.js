import React, { useState } from 'react'
import styled from 'styled-components'
import { TransitionGroup } from 'react-transition-group'

import ChooseLoginMethod from './ChooseLoginMethod'
import UsernamePasswordForm from './UsernamePasswordForm'
import ForgotPasswordForm from './ForgotPasswordForm'
import { useFormStore } from '../../context/FormContext'

const LoginForms = () => {
  const [reverse, setReverse] = useState(false)
  const [showChooseLoginMethod, setShowChooseLoginMethod] = useState(true)
  const [showUsernamePasswordForm, setShowUsernamePasswordForm] = useState(
    false
  )
  const [showForgotPasswordForm, setShowForgotPasswordForm] = useState(false)

  // eslint-disable-next-line
  const [state, dispatch] = useFormStore()

  const handleShowUsernamePasswordForm = () => {
    setReverse(false)
    setShowChooseLoginMethod(false)
    setShowUsernamePasswordForm(true)
  }

  const handleShowForgotPasswordForm = () => {
    setReverse(false)
    setShowUsernamePasswordForm(false)
    setShowForgotPasswordForm(true)
    dispatch({ type: 'resetUsernamePasswordForm' })
  }

  const handleReverseForgotPasswordForm = () => {
    setReverse(true)
    setShowForgotPasswordForm(false)
    setShowUsernamePasswordForm(true)
  }

  const handleReverseUsernamePasswordForm = () => {
    setReverse(true)
    setShowUsernamePasswordForm(false)
    setShowChooseLoginMethod(true)
  }

  return (
    <FormWrapper>
      <TransitionGroup component={null}>
        <ChooseLoginMethod
          showNode={showChooseLoginMethod}
          handleShowUsernamePasswordForm={handleShowUsernamePasswordForm}
        />
        <UsernamePasswordForm
          showNode={showUsernamePasswordForm}
          reverse={reverse}
          handleShowForgotPasswordForm={handleShowForgotPasswordForm}
          handleReverseUsernamePasswordForm={handleReverseUsernamePasswordForm}
        />
        <ForgotPasswordForm
          showNode={showForgotPasswordForm}
          reverse={reverse}
          handleReverseForgotPasswordForm={handleReverseForgotPasswordForm}
        />
      </TransitionGroup>
    </FormWrapper>
  )
}

export default LoginForms

const FormWrapper = styled.div`
  position: relative;
  width: 100%;
`
