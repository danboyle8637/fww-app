import React, { useState } from 'react'
import styled from 'styled-components'
import { TransitionGroup } from 'react-transition-group'
import { Redirect } from 'react-router-dom'

import MobileBackground from '../images/signup-back-kb-rack-600x700.jpg'
import TabletBackground from '../images/signup-back-kb-rack-834x1112.jpg'
import IpadProBackground from '../images/signup-back-kb-rack-1024x1366.jpg'
import LaptopBackground from '../images/signup-back-kb-rack-1400x900.jpg'
import useRenderBackgroundImage from '../hooks/useRenderBackgroundImage'
import ResetSignUpHeader from '../components/PageHeaders/ResetSignUpHeader'
import ResetStep1Form from '../components/Forms/ResetStep1Form'
import ResetStep2Form from '../components/Forms/ResetStep2Form'
import ResetStep3Form from '../components/Forms/ResetStep3Form'
import ResetStep4Form from '../components/Forms/ResetStep4Form'
import FullPageKettlebellLoader from '../components/Loaders/FullPageKettlebellLoader'
import ErrorIndicator from '../components/Indicators/ErrorIndicator'

const ResetSignUp = () => {
  const [reverse, setReverse] = useState(false)
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [toDashboard, setToDashboard] = useState(false)
  const [toErrorPage, setToErrorPage] = useState(false)
  const [showLogin, setShowLogin] = useState(false)

  // This is for email and password login.
  const [showSecurityLogin, setShowSecurityLogin] = useState(false)

  const title = 'Create your Reset program account'
  const alt =
    'Kindal holding a kettlebell in rack position facing away from you'

  const background = useRenderBackgroundImage(
    MobileBackground,
    TabletBackground,
    IpadProBackground,
    LaptopBackground,
    title,
    alt
  )

  return (
    <>
      {isLoading ? (
        <FullPageKettlebellLoader
          loadingMessage={'Creating Your Fit Profile'}
        />
      ) : null}
      <ResetSignUpContainer>
        <ContentWrapper>
          <ResetSignUpHeader />
          <FormWrapper>
            <TransitionGroup component={null}>
              <ResetStep1Form
                activeQuestion={activeQuestion}
                setActiveQuestion={setActiveQuestion}
                setReverse={setReverse}
              />
              <ResetStep2Form
                activeQuestion={activeQuestion}
                setActiveQuestion={setActiveQuestion}
                reverse={reverse}
                setReverse={setReverse}
              />
              <ResetStep3Form
                reverse={reverse}
                setReverse={setReverse}
                activeQuestion={activeQuestion}
                setActiveQuestion={setActiveQuestion}
                setIsLoading={setIsLoading}
                setToDashboard={setToDashboard}
                setToErrorPage={setToErrorPage}
                setShowLogin={setShowLogin}
              />
              <ResetStep4Form
                activeQuestion={activeQuestion}
                setActiveQuestion={setActiveQuestion}
                reverse={reverse}
                setReverse={setReverse}
                setIsLoading={setIsLoading}
                setShowSecurityLogin={setShowSecurityLogin}
                setToErrorPage={setToErrorPage}
                setShowLogin={setShowLogin}
              />
            </TransitionGroup>
          </FormWrapper>
        </ContentWrapper>
        {background}
      </ResetSignUpContainer>
      <ErrorIndicator />
      {toDashboard ? <Redirect to="/dashboard" /> : null}
      {showSecurityLogin ? <Redirect to="/security-login" /> : null}
      {toErrorPage ? <Redirect to="/error" /> : null}
      {showLogin ? <Redirect to="/login" /> : null}
    </>
  )
}

export default ResetSignUp

const ResetSignUpContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  background: #000000;
  width: 100%;
`

const ContentWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 1;
`

const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`
