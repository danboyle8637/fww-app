import React, { useState } from 'react'
import { TransitionGroup } from 'react-transition-group'

import ResetSignUpHeader from '../components/PageHeaders/ResetSignUpHeader'
import ResetStep1Form from '../components/Forms/ResetStep1Form'
import ResetStep2Form from '../components/Forms/ResetStep2Form'
import ResetStep3Form from '../components/Forms/ResetStep3Form'

const ResetSignUp = () => {
  const [showStep1, setShowStep1] = useState(false)
  const [showStep2, setShowStep2] = useState(true)
  const [showStep3, setShowStep3] = useState(false)

  const handleShowStep2 = () => {
    setShowStep1(false)
    setShowStep2(true)
  }

  const handleShowStep3 = () => {
    setShowStep2(false)
    setShowStep3(true)
  }

  const handleReverseStep3 = () => {}

  const handleReverseStep2 = () => {}

  return (
    <>
      <ResetSignUpHeader />
      <TransitionGroup component={null}>
        <ResetStep1Form
          showNode={showStep1}
          handleShowStep2={handleShowStep2}
        />
        <ResetStep2Form
          showNode={showStep2}
          handleShowStep3={handleShowStep3}
        />
        <ResetStep3Form showNode={showStep3} />
      </TransitionGroup>
    </>
  )
}

export default ResetSignUp
