import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

import BaseButton from '../Buttons/BaseButton'
import GoogleFacebookButton from '../Buttons/GoogleFacebookButton'
import SignUp from './SignUp'
import LoginFormTransition from '../../Animations/Transitions/LoginFormTransition'
import { useFireBase } from '../Firebase/FirebaseContext'
import { useUserContext } from '../../context/UserContext'
import { usePortalContext } from '../../context/portalContext'
import ScreenWidthContext from '../../context/ScreenWidthContext'
import siteConfig from '../../utils/siteConfig'

const ChooseLoginMethod = ({
  activeForm,
  setActiveForm,
  setReverse,
  setShowDashboard,
  setIsLoggingIn
}) => {
  const device = useContext(ScreenWidthContext)
  const auth = useFireBase()
  // eslint-disable-next-line
  const [userState, dispatchUserAction] = useUserContext()
  // eslint-disable-next-line
  const [portalState, dispatchPortalAction] = usePortalContext()
  const [showSocialLogin, setShowSocialLogin] = useState(false)
  const [socialProvider, setSocialProvider] = useState('')

  const handleLoginWithGoogle = () => {
    const url = `${siteConfig.api.baseUrl}/get-user`
    let photoUrl

    if (device === 'mobile') {
      setSocialProvider('google')
      setShowSocialLogin(true)
    } else {
      setIsLoggingIn(true)
      auth
        .signInWithGoogleProviderPopUp()
        .then(result => {
          auth.isAuthenticated = true
          const user = result.user
          photoUrl = user.photoURL

          if (localStorage.getItem('fwwUser')) {
            const data = localStorage.getItem('fwwUser')
            const user = JSON.parse(data)

            dispatchUserAction({
              type: 'setLoggedInUser',
              value: {
                firstName: user.firstName,
                photoUrl: user.photoUrl,
                programs: user.programs
              }
            })

            setShowDashboard(true)
          } else {
            user.getIdToken(true).then(token => {
              fetch(url, {
                method: 'GET',
                headers: {
                  Authorization: `Bearer ${token}`
                }
              })
                .then(response => response.json())
                .then(userData => {
                  dispatchUserAction({
                    type: 'setLoggedInUser',
                    value: {
                      firstName: userData.firstName,
                      photoUrl: photoUrl,
                      programs: userData.programs
                    }
                  })

                  const fwwUser = {
                    firstName: userData.firstName,
                    photoUrl: photoUrl,
                    programs: userData.programs
                  }

                  localStorage.setItem('fwwUser', JSON.stringify(fwwUser))

                  setShowDashboard(true)
                })
                .catch(error => {
                  const message = error.message

                  dispatchPortalAction({
                    type: 'toggleErrorMessage',
                    value: `😬 ${message}`
                  })
                })
            })
          }
        })
        .catch(error => {
          // const errorCode = error.code
          // const errorMessage = error.message
          // const email = error.email
          // const credential = error.credential
          dispatchPortalAction({
            type: 'toggleErrorMessage',
            value: `😬 Had some issues connecting your Google account. Here is what Google is telling us... ${error.message}. Contact us if you need help.`
          })
        })
    }
  }

  const handleLoginWithFacebook = () => {
    setIsLoggingIn(true)
    const url = `${siteConfig.api.baseUrl}/get-user`
    let photoUrl

    if (device === 'mobile') {
      setSocialProvider('facebook')
      setShowSocialLogin(true)
    } else {
      auth
        .signInWithFacebookProviderPopUp()
        .then(result => {
          auth.isAuthenticated = true
          const user = result.user
          photoUrl = user.photoURL

          if (localStorage.getItem('fwwUser')) {
            const data = localStorage.getItem('fwwUser')
            const user = JSON.parse(data)

            dispatchUserAction({
              type: 'setLoggedInUser',
              value: {
                firstName: user.firstName,
                photoUrl: user.photoUrl,
                programs: user.programs
              }
            })

            setShowDashboard(true)
          } else {
            user.getIdToken(true).then(token => {
              fetch(url, {
                method: 'GET',
                headers: {
                  Authorization: `Bearer ${token}`
                }
              })
                .then(response => response.json())
                .then(userData => {
                  dispatchUserAction({
                    type: 'setLoggedInUser',
                    value: {
                      firstName: userData.firstName,
                      photoUrl: photoUrl,
                      programs: userData.programs
                    }
                  })

                  const fwwUser = {
                    firstName: userData.firstName,
                    photoUrl: photoUrl,
                    programs: userData.programs
                  }

                  localStorage.setItem('fwwUser', JSON.stringify(fwwUser))

                  setShowDashboard(true)
                })
                .catch(error => {
                  dispatchPortalAction({
                    type: 'toggleErrorMessage',
                    value: `😬 ${error.message}`
                  })
                })
            })
          }
        })
        .catch(error => {
          // const errorCode = error.code
          // const errorMessage = error.message
          // const email = error.email
          // const credential = error.credential
          dispatchPortalAction({
            type: 'toggleErrorMessage',
            value: `😬 Had some issues connecting your Facebook account. Here is what Facebook is telling us... ${error.message}. Contact us if you need help.`
          })
        })
    }
  }

  const handleUsernamePasswordButton = () => {
    setReverse(false)
    setActiveForm(prevValue => prevValue + 1)
  }

  return (
    <>
      <LoginFormTransition showNode={activeForm === 0}>
        <ButtonContainer>
          <BaseButton handleClick={handleUsernamePasswordButton}>
            Email & Password
          </BaseButton>
          <GoogleFacebookButton
            provider={'google'}
            handleClick={handleLoginWithGoogle}
          >
            Sign In with Google
          </GoogleFacebookButton>
          <GoogleFacebookButton handleClick={handleLoginWithFacebook}>
            Sign In with Facebook
          </GoogleFacebookButton>
          <SignUp />
        </ButtonContainer>
      </LoginFormTransition>
      {showSocialLogin ? (
        <Redirect
          to={{
            pathname: '/social-login',
            state: { provider: socialProvider }
          }}
        />
      ) : null}
    </>
  )
}

export default ChooseLoginMethod

const ButtonContainer = styled.div`
  position: absolute;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, auto);
  gap: 12px;
  width: 100%;
`
