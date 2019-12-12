import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

import FullPageKettlebellLoader from '../components/Loaders/FullPageKettlebellLoader'
import { useFormStore } from '../context/FormContext'
import { usePortalContext } from '../context/portalContext'
import { useFireBase } from '../components/Firebase/FirebaseContext'
import siteConfig from '../utils/siteConfig'

const EmergencySocialSignUp = () => {
  const auth = useFireBase()
  // eslint-disable-next-line
  const [formState, dispatchFormAction] = useFormStore()
  // eslint-disable-next-line
  const [portalState, dispatchPortalAction] = usePortalContext()
  const [toLogin, setToLogin] = useState(false)

  useEffect(() => {
    const url = `${siteConfig.api.baseUrl}/emergency-social-create-user`
    const signUpData = sessionStorage.getItem('socialSignUpUser')
    const userSignUpData = JSON.parse(signUpData)
    const programId = userSignUpData.programId
    const totalWorkouts = userSignUpData.totalWorkouts
    const biggestObstacle = userSignUpData.biggestObstacle

    auth
      .getCurrentUser()
      .then(user => {
        const userId = user.uid
        const firstName = user.firstName
        const email = user.email
        const photoUrl = user.photoURL

        const requestBody = {
          userId: userId,
          firstName: firstName,
          biggestObstacle: biggestObstacle,
          programId: programId,
          totalWorkouts: totalWorkouts['numberOfWorkouts'],
          email: email,
          photoUrl: photoUrl
        }

        fetch(url, {
          method: 'POST',
          body: JSON.stringify(requestBody)
        })
          .then(() => {
            dispatchPortalAction({
              type: 'toggleErrorMessage',
              value:
                '💪 SUCCESS!! For security reasons we did not automatically log you in. So close this alert and login with the password you choose.'
            })
            sessionStorage.removeItem('socialSignUpUser')
            auth.logUserOut()
            setToLogin(true)
          })
          .catch(() => {
            dispatchPortalAction({
              type: 'toggleEmergencyErrorMessage',
              value: {
                redirectSlug: '/contact',
                buttonText: 'Go to Contact Page',
                message: `NOOO!! 😭 Still experiencing network issues. For security reasons, we won't try again. Please contact us and we'll help you get set up correctly.`
              }
            })
            sessionStorage.removeItem('socialSignUpUser')
            auth.logUserOut()
            setToLogin(true)
          })
      })
      .catch(() => {
        dispatchPortalAction({
          type: 'toggleEmergencyErrorMessage',
          value: {
            redirectSlug: '/contact',
            buttonText: 'Go to Contact Page',
            message: `NOOO!! 😭 Still experiencing network issues. For security reasons, we won't try again. Please contact us and we'll help you get set up correctly.`
          }
        })
        sessionStorage.removeItem('socialSignUpUser')
        setToLogin(true)
      })
  }, [
    auth,
    dispatchPortalAction,
    formState.biggestObstacleValue.value,
    formState.emailValue.value,
    formState.firstNameValue.value,
    formState.resetWorkoutValue.options,
    formState.resetWorkoutValue.value
  ])

  return (
    <>
      <FullPageKettlebellLoader loadingMessage="Setting Up Account..." />
      {toLogin ? <Redirect to="/login" /> : null}
    </>
  )
}

export default EmergencySocialSignUp
