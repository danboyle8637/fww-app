import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

import loginMobileBg from '../images/signup-kindal-sitting-600x1300.jpg'
import loginTabletBg from '../images/signup-kindal-sitting-834x1112.jpg'
import loginIpadProBg from '../images/signup-kindal-sitting-1024x1366.jpg'
import loginLaptopBg from '../images/signup-kindal-sitting-1440x900.jpg'
import LoginSignUpHeader from '../components/PageHeaders/LoginSignUpHeader'
import FullPageKettlebellLoader from '../components/Loaders/FullPageKettlebellLoader'
import LoginForms from '../components/Login/LoginForms'
import SyncingIndicator from '../components/Indicators/SyncingIndicator'
import useRenderBackgroundImage from '../hooks/useRenderBackgroundImage'
import fetchAndGetUserData from '../components/Firebase/fetchAndGetUserData'
import { useUserContext } from '../context/UserContext'
import { useFireBase } from '../components/Firebase/FirebaseContext'
import { above } from '../styles/Theme'

const Login = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const [showDashboard, setShowDashboard] = useState(false)
  const [loadingMessage, setLoadingMessage] = useState(
    'Setting Up Dashboard...'
  )
  const [isSyncing, setIsSyncing] = useState(false)
  const [syncingMessage, setSyncingMessage] = useState('')
  // eslint-disable-next-line
  const [userState, dispatchUserAction] = useUserContext()
  const auth = useFireBase()

  useEffect(() => {
    auth
      .getCurrentUser()
      .then(user => {
        auth.isAuthenticated = true
        setIsLoggingIn(true)
        fetchAndGetUserData(user)
          .then(data => {
            dispatchUserAction({
              type: 'setLoggedInUser',
              value: {
                firstName: data.firstName,
                photoUrl: data.photoUrl,
                programs: data.programs
              }
            })
            setShowDashboard(true)
          })
          .catch(() => {})
      })
      .catch(() => {
        auth.isAuthenticated = false
        setShowDashboard(false)
      })
  }, [auth, dispatchUserAction])

  const title = 'Login to Fit Womens Weekly app'
  const alt = 'Kindal sitting and recovering after a hard workout'

  const background = useRenderBackgroundImage(
    loginMobileBg,
    loginTabletBg,
    loginIpadProBg,
    loginLaptopBg,
    title,
    alt
  )

  const handleToggleSyncing = () => setIsSyncing(prevValue => !prevValue)

  return (
    <>
      {isLoggingIn ? (
        <FullPageKettlebellLoader loadingMessage={loadingMessage} />
      ) : (
        <LoginContainer>
          {background}
          <ContentWrapper>
            <LoginSignUpHeader />
            <LoginForms
              setIsLoggingIn={setIsLoggingIn}
              setShowDashboard={setShowDashboard}
              setLoadingMessage={setLoadingMessage}
              handleToggleSyncing={handleToggleSyncing}
              setSyncingMessage={setSyncingMessage}
            />
          </ContentWrapper>
        </LoginContainer>
      )}
      {showDashboard ? <Redirect to="/dashboard" /> : null}
      {isSyncing ? (
        <SyncingIndicator isSyncing={isSyncing} syncMessage={syncingMessage} />
      ) : null}
    </>
  )
}

export default Login

const LoginContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  background: #000;
  height: 100%;
`

const ContentWrapper = styled.div`
  margin: 100px 0 0 0;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  z-index: 1;
  ${above.mobile`
    margin: 160px 0 0 80px;
    width: 60%;
  `}
  ${above.tablet`
    margin: 240px 0 0 160px
    width: 50%;
  `}
  ${above.ipadPro`
    margin: 80px 0 0 160px;
    width: 42%;
  `}
`
