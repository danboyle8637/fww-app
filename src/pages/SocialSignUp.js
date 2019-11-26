import React, { useState, useEffect } from 'react'
import { Redirect, useLocation } from 'react-router-dom'

import FullPageKettlebellLoader from '../components/Loaders/FullPageKettlebellLoader'
import { useUserContext } from '../context/UserContext'
import { useFireBase } from '../components/Firebase/FirebaseContext'
import siteConfig from '../utils/siteConfig'

const SocialSignUp = () => {
  const auth = useFireBase()
  // eslint-disable-next-line
  const [userState, dispatchUserAction] = useUserContext()
  const [showDashboard, setShowDashboard] = useState(false)

  const data = useLocation()

  useEffect(() => {
    const url = `${siteConfig.api.baseUrl}/sign-up-social-account`
    const convertKitUrl = `${siteConfig.api.baseUrl}/add-member-to-convertkit`
    const signUpData = sessionStorage.getItem('socialSignUpUser')
    const userSignUpData = JSON.parse(signUpData)

    const programId = userSignUpData.programId
    const totalWorkouts = userSignUpData.totalWorkouts
    const biggestObstacle = userSignUpData.biggestObstacle

    auth
      .getRedirectResult()
      .then(result => {
        const user = result.user
        if (user) {
          const userId = user.uid
          const firstName = user.firstName
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
            .then(responseArray => responseArray.map(element => element.json()))
            .then(dataArray => {
              const userData = dataArray[0]
              auth.isAuthenticated = true

              dispatchUserAction({
                type: 'setLoggedInUser',
                value: {
                  firstName: userData.firstName,
                  photoUrl: userData.photoUrl,
                  photoUrlTiny: userData.photoUrlTiny,
                  programs: userData.programs
                }
              })

              const fwwUser = {
                firstName: userData.firstName,
                photoUrl: userData.photoUrl,
                photoUrlTiny: userData.photoUrlTiny,
                programs: userData.programs
              }

              localStorage.setItem('fwwUser', JSON.stringify(fwwUser))

              setShowDashboard(true)
            })
            .catch(() => {
              // TODO set the big error and let the user know something went wrong. Try again.
              // 1. Clear state
              // 2. Redirect to Sign up step 1
              // 3. Say sorry and try again.
            })
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
        // TODO no user... try again.
        // set big error message
        // 2. Redirect to step 1 because state will have been wiped
        // 3. Say sorry and try again.
      })
  })

  return (
    <>
      <FullPageKettlebellLoader loadingMessage={'Setting Up Dashboard'} />
      {showDashboard ? <Redirect to="/dashboard" /> : null}
    </>
  )
}

export default SocialSignUp
