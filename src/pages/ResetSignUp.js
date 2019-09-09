import React, { useState } from 'react'
import styled from 'styled-components'
import { TransitionGroup } from 'react-transition-group'

import ResetSignUpHeader from '../components/PageHeaders/ResetSignUpHeader'
import ResetStep1Form from '../components/Forms/ResetStep1Form'
import ResetStep2Form from '../components/Forms/ResetStep2Form'
import ResetStep3Form from '../components/Forms/ResetStep3Form'

const ResetSignUp = () => {
  const [reverse, setReverse] = useState(false)
  const [showStep1, setShowStep1] = useState(true)
  const [showStep2, setShowStep2] = useState(false)
  const [showStep3, setShowStep3] = useState(false)

  const handleShowStep2 = () => {
    setReverse(false)
    setShowStep1(false)
    setShowStep2(true)
  }

  const handleShowStep3 = () => {
    setReverse(false)
    setShowStep2(false)
    setShowStep3(true)
  }

  const handleReverseStep3 = () => {
    setReverse(true)
    setShowStep2(true)
    setShowStep3(false)
  }

  const handleReverseStep2 = () => {
    setReverse(true)
    setShowStep1(true)
    setShowStep2(false)
  }

  return (
    <ResetSignUpContainer>
      <ResetSignUpHeader
        showStep1={showStep1}
        showStep2={showStep2}
        showStep3={showStep3}
      />
      <TransitionGroup component={null}>
        <ResetStep1Form
          showNode={showStep1}
          handleShowStep2={handleShowStep2}
        />
        <ResetStep2Form
          showNode={showStep2}
          handleShowStep3={handleShowStep3}
          reverse={reverse}
          handleReverseStep2={handleReverseStep2}
        />
        <ResetStep3Form
          showNode={showStep3}
          reverse={reverse}
          handleReverseStep3={handleReverseStep3}
        />
      </TransitionGroup>
    </ResetSignUpContainer>
  )
}

export default ResetSignUp

const ResetSignUpContainer = styled.div`
  margin: 0 0 80px 0;
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
`
