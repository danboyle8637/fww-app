import React, { useState, useEffect } from 'react'
import { Redirect, useLocation } from 'react-router-dom'

import FullPageKettlebellLoader from '../components/Loaders/FullPageKettlebellLoader'
import { useUserContext } from '../context/UserContext'
import { usePortalContext } from '../context/portalContext'
import { useFireBase } from '../components/Firebase/FirebaseContext'
import siteConfig from '../utils/siteConfig'

const SocialSignUp = () => {
  const auth = useFireBase()
  // eslint-disable-next-line
  const [userState, dispatchUserAction] = useUserContext()
  // eslint-disable-next-line
  const [portalState, dispatchPortalAction] = usePortalContext()
  const [showDashboard, setShowDashboard] = useState(false)
  const [showErrorPage, setShowErrorPage] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [userCreated, setUserCreated] = useState(false)

  const data = useLocation()

  useEffect(() => {
    const url = `${siteConfig.api.baseUrl}/sign-up-social-account`
    const convertKitUrl = `${siteConfig.api.baseUrl}/add-member-to-convertkit`
    const signUpData = sessionStorage.getItem('socialSignUpUser')
    const userSignUpData = JSON.parse(signUpData)

    const programId = userSignUpData ? userSignUpData.programId : ''
    const totalWorkouts = userSignUpData ? userSignUpData.totalWorkouts : 0
    const biggestObstacle = userSignUpData ? userSignUpData.biggestObstacle : ''

    // showDashboard === false && showErrorPage === false && showLogin === false
    // TODO You need to figure out how to run this better with Google and Facebook
    if (userCreated === false) {
      auth
        .getRedirectResult()
        .then(result => {
          console.log('ONE: ', result)
          const user = result.user
          debugger
          if (user) {
            const userId = user.uid
            const firstName = user.displayName
            const email = user.email
            const photoUrl = user.photoURL

            const signUpData = {
              userId: userId,
              programId: programId,
              totalWorkouts: totalWorkouts,
              firstName: firstName,
              email: email,
              biggestObstacle: biggestObstacle,
              photoUrl: photoUrl
            }

            const convertKitData = {
              firstName: firstName,
              email: email,
              program: programId,
              biggestObstacle: biggestObstacle
            }

            const signUp = fetch(url, {
              method: 'POST',
              body: JSON.stringify(signUpData)
            })

            const addToConvertKit = fetch(convertKitUrl, {
              method: 'POST',
              body: JSON.stringify(convertKitData)
            })

            Promise.all([signUp, addToConvertKit])
              .then(promiseArray => {
                const promiseData = promiseArray.map(element => element.json())
                return Promise.all(promiseData)
              })
              .then(dataArray => {
                const userData = dataArray[0]
                auth.isAuthenticated = true

                dispatchUserAction({
                  type: 'setLoggedInUser',
                  value: {
                    firstName: userData.firstName,
                    photoUrl: userData.photoUrl,
                    programs: userData.programs
                  }
                })

                const fwwUser = {
                  firstName: userData.firstName,
                  photoUrl: userData.photoUrl,
                  programs: userData.programs
                }

                localStorage.setItem('fwwUser', JSON.stringify(fwwUser))
                sessionStorage.removeItem('socialSignUpUser')

                setShowDashboard(true)
              })
              .catch(() => {
                dispatchPortalAction({
                  type: 'toggleEmergencyErrorMessage',
                  value: {
                    redirectSlug: '/emergency-social-sign-up',
                    buttonText: 'Retry Sign Up Process',
                    message: `Network problems caused an incomplete signup process. No worries through, just click the button below and we'll try again to get you set up.`
                  }
                })
                setShowErrorPage(true)
              })
          } else {
            if (data && data.state.provider === 'google') {
              auth.signInWithGoogleProviderRedirect()
              console.log('TWO')
              setUserCreated(true)
              return
            } else if (data && data.state.provider === 'facebook') {
              debugger
              auth.signInWithFacebookProviderRedirect()
              return
            } else {
              return
            }
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
              // TODO This is the error throwing with Facebook Login. Check docs and fix it!
              type: 'toggleEmergencyErrorMessage',
              value: {
                redirectSlug: '/contact',
                buttonText: 'Go to Contact Page',
                message: `This error message should not be showing. If it is... some strange error happened. Please contact us and let me know you saw the error message that should not being showing. Thanks! ${error.code}`
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
            console.log('THREE')
            // dispatchPortalAction({
            //   type: 'toggleErrorMessage',
            //   value: `You are reading this because the code is continuing to run and this shows up.`
            // })
            // setShowLogin(true)
          }
        })
    }
  }, [
    auth,
    data,
    dispatchPortalAction,
    dispatchUserAction,
    showDashboard,
    showErrorPage,
    showLogin,
    userCreated
  ])

  return (
    <>
      <FullPageKettlebellLoader loadingMessage={'Setting Up Dashboard'} />
      {showDashboard ? <Redirect to="/dashboard" /> : null}
      {showErrorPage ? <Redirect to="/error" /> : null}
      {showLogin ? <Redirect to="/login" /> : null}
    </>
  )
}

export default SocialSignUp
