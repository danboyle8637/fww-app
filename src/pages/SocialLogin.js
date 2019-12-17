import React, { useState, useEffect } from 'react'
import { Redirect, useLocation } from 'react-router-dom'

import FullPageKettlebellLoader from '../components/Loaders/FullPageKettlebellLoader'
import { useUserContext } from '../context/UserContext'
import { usePortalContext } from '../context/portalContext'
import { useFireBase } from '../components/Firebase/FirebaseContext'
import siteConfig from '../utils/siteConfig'

const SocialLogin = () => {
  const auth = useFireBase()
  // eslint-disable-next-line
  const [userState, dispatchUserAction] = useUserContext()
  // eslint-disable-next-line
  const [portalState, dispatchPortalAction] = usePortalContext()
  const [showDashboard, setShowDashboard] = useState(false)
  const [showSignUpPage, setShowSignUpPage] = useState(false)
  const [showLogin, setShowLogin] = useState(false)

  const data = useLocation()

  useEffect(() => {
    auth
      .getRedirectResult()
      .then(result => {
        const user = result.user
        if (user) {
          auth.isAuthenticated = true

          const photoUrl = user.photoURL
          const url = `${siteConfig.api.baseUrl}/get-user`

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
                  if (userData.error) {
                    dispatchPortalAction({
                      type: 'toggleErrorMessage',
                      value: `You don't have an account yet. No worries, it's free. Just start by filling out this quiz and selecting the workout program that fits your fitness level.`
                    })
                    setShowSignUpPage(true)
                  } else {
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
                .catch(() => {
                  dispatchPortalAction({
                    type: 'toggleEmergencyErrorMessage',
                    value: {
                      redirectSlug: '/contact',
                      buttonText: 'Contact Us',
                      message: `Your user account could not be found. Are you sure you've signed up? Are you sure your social account has been connected to your member account. If you think this is an error, contact us a let us know.`
                    }
                  })
                })
            })
          }
        } else {
          if (data.state.provider === 'google') {
            auth.signInWithGoogleProviderRedirect()
          } else if (data.state.provider === 'facebook') {
            auth.signInWithFacebookProviderRedirect()
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
  }, [auth, data, dispatchPortalAction, dispatchUserAction])

  return (
    <>
      <FullPageKettlebellLoader loadingMessage={'Setting Up Dashboard'} />
      {showDashboard ? <Redirect to="/dashboard" /> : null}
      {showSignUpPage ? <Redirect to="/7-day-reset-step1" /> : null}
      {showLogin ? <Redirect to="/login" /> : null}
    </>
  )
}

export default SocialLogin
