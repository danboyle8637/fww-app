// * This is for users who choose email and password to login.
// * It's a re-login becuase I directly alter their user account on the backend.

import React, { useState } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

import reloginMobileBg from '../images/re-signin-background-600x1300.jpg'
import reloginTabletBg from '../images/re-signin-background-834x1112.jpg'
import reloginIpadProBg from '../images/re-signin-background-1024x1366.jpg'
import reloginLaptopBg from '../images/re-signin-background-1440x900.jpg'
import FullPageKettlebellLoader from '../components/Loaders/FullPageKettlebellLoader'
import SecurityLoginHeader from '../components/PageHeaders/SecurityLoginHeader'
import SecurityLoginForm from '../components/Forms/SecurityLoginForm'
import useRenderBackgroundImage from '../hooks/useRenderBackgroundImage'
import { useFormStore } from '../context/FormContext'
import Portal from '../components/Shared/Portal'
import ErrorIndicator from '../components/Indicators/ErrorIndicator'
import { above } from '../styles/Theme'

const ResetSecurityLogin = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const [showDashboard, setShowDashboard] = useState(false)
  // eslint-disable-next-line
  const [formState, dispatchFormAction] = useFormStore()

  const title = 'Login to Fit Womens Weekly app'
  const alt = 'Kindal smiling waiting to workout with you'

  const background = useRenderBackgroundImage(
    reloginMobileBg,
    reloginTabletBg,
    reloginIpadProBg,
    reloginLaptopBg,
    title,
    alt
  )

  return (
    <>
      <LoginContainer>
        {background}
        <ContentWrapper>
          <SecurityLoginHeader firstName={formState.firstNameValue.value} />
          <SecurityLoginForm
            setIsLoggingIn={setIsLoggingIn}
            setShowDashboard={setShowDashboard}
          />
        </ContentWrapper>
        <Portal component={<ErrorIndicator />} />
      </LoginContainer>
      {isLoggingIn ? (
        <FullPageKettlebellLoader loadingMessage="Setting Up Dashboard" />
      ) : null}
      {showDashboard ? <Redirect to="/dashboard" /> : null}
    </>
  )
}

export default ResetSecurityLogin

const LoginContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  background: #000;
  height: 100%;
`

const ContentWrapper = styled.div`
  margin: 70px 0 0 0;
  padding: 0 16px;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 1;
  ${above.mobile`
    margin: 160px 0 0 80px;
  `}
  ${above.tablet`
    margin: 240px 0 0 80px
  `}
  ${above.ipadPro`
    margin: 80px 0 0 160px;
  `}
`
