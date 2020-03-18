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
  setIsLoggingIn,
  setShowLogin
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
          const user = result.user
          photoUrl = user.photoURL

          if (localStorage.getItem('fwwUser')) {
            const data = localStorage.getItem('fwwUser')
            const user = JSON.parse(data)

            auth.isAuthenticated = true

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
                  if (userData.error) {
                    dispatchPortalAction({
                      type: 'toggleErrorMessage',
                      value: `😬 ${userData.message}`
                    })
                    setIsLoggingIn(false)
                    setShowLogin(true)
                  } else {
                    auth.isAuthenticated = true

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
                  }
                })
                .catch(error => {
                  const message = error.message
                  console.log(message)

                  auth.isAuthenticated = false
                  auth.logUserOut()
                  dispatchPortalAction({
                    type: 'toggleErrorMessage',
                    value: `😬 ${message}`
                  })
                  setShowLogin(true)
                })
            })
          }
        })
        .catch(error => {
          if (error.code === 'auth/account-exists-with-different-credential') {
            dispatchPortalAction({
              type: 'toggleErrorMessage',
              value: `You already have an account associated with a different way of logging in. If you want to connect this social account, you can login and do so in your Account Page. Contact us if you need any help.`
            })
            setShowLogin(true)
          } else if (error.code === 'auth/auth-domain-config-required') {
            dispatchPortalAction({
              type: 'toggleEmergencyErrorMessage',
              value: {
                redirectSlug: '/contact',
                buttonText: 'Go to Contact Page',
                message: `If you're reading this, it's an app error. Please contact us and tell us you had trouble logging in with either Google or Facebook... when you know you created your account with one of these methods.`
              }
            })
            setShowLogin(true)
          } else if (error.code === 'auth/credential-already-in-use') {
            dispatchPortalAction({
              type: 'toggleEmergencyErrorMessage',
              value: {
                redirectSlug: '/contact',
                buttonText: 'Go to Contact Page',
                message: `Okay something strange is going on here. Your social account is already associate with an account, but not your user account. Please contact us so we can help you. And please share which social account and email you are trying to use.`
              }
            })
            setShowLogin(true)
          } else if (error.code === 'auth/email-already-in-use') {
            dispatchPortalAction({
              type: 'toggleEmergencyErrorMessage',
              value: {
                redirectSlug: '/contact',
                buttonText: 'Go to Contact Page',
                message: `Your email address is already associated with an account in our system but it's not connected to this social account. You can login with a different metod and connect them. If you think this is a mistake, please contact us and we'll try to help.`
              }
            })
            setShowLogin(true)
          } else if (error.code === 'auth/operation-not-allowed') {
            dispatchPortalAction({
              type: 'toggleEmergencyErrorMessage',
              value: {
                redirectSlug: '/contact',
                buttonText: 'Go to Contact Page',
                message: `This error message should not be showing. If it is... some strange error happened. Please contact us and let me know you saw the error message that should not being showing. Thanks!`
              }
            })
            setShowLogin(true)
          } else if (
            error.code === 'auth/operation-not-supported-in-this-environment'
          ) {
            dispatchPortalAction({
              type: 'toggleErrorMessage',
              value: `You are not on a secure network. Please try again later when you are somewhere else.`
            })
            setShowLogin(true)
          } else if (error.code === 'auth/timeout') {
            dispatchPortalAction({
              type: 'toggleErrorMessage',
              value: `The network is really slow and the sign in process timed out. Check your connection... refresh and try again.`
            })
            setShowLogin(true)
          } else {
            dispatchPortalAction({
              type: 'toggleErrorMessage',
              value: `Yikes... something happened and we are not sure what exactly. But don't worry nothing serious. Just refresh the page and try again.`
            })
            setShowLogin(true)
          }
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
          const user = result.user
          photoUrl = user.photoURL

          if (localStorage.getItem('fwwUser')) {
            const data = localStorage.getItem('fwwUser')
            const user = JSON.parse(data)

            auth.isAuthenticated = true

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
                  if (userData.error) {
                    dispatchPortalAction({
                      type: 'toggleErrorMessage',
                      value: `😬 ${userData.message}`
                    })
                    setIsLoggingIn(false)
                    setShowLogin(true)
                  } else {
                    auth.isAuthenticated = true

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
                  }
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
          if (error.code === 'auth/account-exists-with-different-credential') {
            dispatchPortalAction({
              type: 'toggleErrorMessage',
              value: `You already have an account associated with a different way of logging in. If you want to connect this social account, you can login and do so in your Account Page. Contact us if you need any help.`
            })
            setShowLogin(true)
          } else if (error.code === 'auth/auth-domain-config-required') {
            dispatchPortalAction({
              type: 'toggleEmergencyErrorMessage',
              value: {
                redirectSlug: '/contact',
                buttonText: 'Go to Contact Page',
                message: `If you're reading this, it's an app error. Please contact us and tell us you had trouble logging in with either Google or Facebook... when you know you created your account with one of these methods.`
              }
            })
            setShowLogin(true)
          } else if (error.code === 'auth/credential-already-in-use') {
            dispatchPortalAction({
              type: 'toggleEmergencyErrorMessage',
              value: {
                redirectSlug: '/contact',
                buttonText: 'Go to Contact Page',
                message: `Okay something strange is going on here. Your social account is already associate with an account, but not your user account. Please contact us so we can help you. And please share which social account and email you are trying to use.`
              }
            })
            setShowLogin(true)
          } else if (error.code === 'auth/email-already-in-use') {
            dispatchPortalAction({
              type: 'toggleEmergencyErrorMessage',
              value: {
                redirectSlug: '/contact',
                buttonText: 'Go to Contact Page',
                message: `Your email address is already associated with an account in our system but it's not connected to this social account. You can login with a different metod and connect them. If you think this is a mistake, please contact us and we'll try to help.`
              }
            })
            setShowLogin(true)
          } else if (error.code === 'auth/operation-not-allowed') {
            dispatchPortalAction({
              type: 'toggleEmergencyErrorMessage',
              value: {
                redirectSlug: '/contact',
                buttonText: 'Go to Contact Page',
                message: `This error message should not be showing. If it is... some strange error happened. Please contact us and let me know you saw the error message that should not being showing. Thanks!`
              }
            })
            setShowLogin(true)
          } else if (
            error.code === 'auth/operation-not-supported-in-this-environment'
          ) {
            dispatchPortalAction({
              type: 'toggleErrorMessage',
              value: `You are not on a secure network. Please try again later when you are somewhere else.`
            })
            setShowLogin(true)
          } else if (error.code === 'auth/timeout') {
            dispatchPortalAction({
              type: 'toggleErrorMessage',
              value: `The network is really slow and the sign in process timed out. Check your connection... refresh and try again.`
            })
            setShowLogin(true)
          } else {
            dispatchPortalAction({
              type: 'toggleErrorMessage',
              value: `Yikes... something happened and we are not sure what exactly. But don't worry nothing serious. Just refresh the page and try again.`
            })
            setShowLogin(true)
          }
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
