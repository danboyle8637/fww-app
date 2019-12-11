import React, { useState, useEffect } from 'react'
import { Redirect, useLocation } from 'react-router-dom'

import FullPageKettlebellLoader from '../components/Loaders/FullPageKettlebellLoader'
import { useUserContext } from '../context/UserContext'
import { useFireBase } from '../components/Firebase/FirebaseContext'
import siteConfig from '../utils/siteConfig'

const SocialLogin = () => {
  const auth = useFireBase()
  // eslint-disable-next-line
  const [userState, dispatchUserAction] = useUserContext()
  const [showDashboard, setShowDashboard] = useState(false)

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
            console.log('fwwUser exists in local storage')
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
            console.log('fwwUser does not exist in local storage')
            user.getIdToken(true).then(token => {
              fetch(url, {
                method: 'GET',
                headers: {
                  Authorization: `Bearer ${token}`
                }
              })
                .then(response => response.json())
                .then(userData => {
                  // TODO Check if the user data contains my error.
                  // If it does... set error and redirect to sign up flow.
                  if (userData.error) {
                    // Set error and redirect
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
                .catch(error => {
                  // TODO Set the error message that user could not be found. Try again.
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
        console.log(error)
      })
  }, [auth, data, dispatchUserAction])

  return (
    <>
      <FullPageKettlebellLoader loadingMessage={'Setting Up Dashboard'} />
      {showDashboard ? <Redirect to="/dashboard" /> : null}
    </>
  )
}

export default SocialLogin
