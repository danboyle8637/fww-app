import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

import FullPageKettlebellLoader from '../components/Loaders/FullPageKettlebellLoader'
import { useFormStore } from '../context/FormContext'
import { usePortalContext } from '../context/portalContext'
import { useFireBase } from '../components/Firebase/FirebaseContext'
import siteConfig from '../utils/siteConfig'

const EmergencySignUp = () => {
  const auth = useFireBase()
  // eslint-disable-next-line
  const [formState, dispatchFormAction] = useFormStore()
  // eslint-disable-next-line
  const [portalState, dispatchPortalAction] = usePortalContext()
  const [toLogin, setToLogin] = useState(false)

  useEffect(() => {
    const url = `${siteConfig.api.baseUrl}/emergency-create-user`
    const firstName = formState.firstNameValue.value
    const biggestObstacle = formState.biggestObstacleValue.value
    const programId = formState.resetWorkoutValue.value
    const totalWorkouts = formState.resetWorkoutValue.options.find(
      option => option.value === programId
    )
    const email = formState.emailValue.value.toLowerCase()
    const password = formState.passwordValue.value
    const confirmPassword = formState.confirmPasswordValue.value

    auth
      .getCurrentUser()
      .then(user => {
        const userId = user.uid
        const requestBody = {
          userId: userId,
          firstName: firstName,
          biggestObstacle: biggestObstacle,
          programId: programId,
          totalWorkouts: totalWorkouts['numberOfWorkouts'],
          email: email,
          password: password,
          confirmPassword: confirmPassword
        }

        fetch(url, {
          method: 'POST',
          body: JSON.stringify(requestBody)
        })
          .then(() => {
            dispatchPortalAction({
              type: 'toggleErrorMessage',
              message:
                'SUCCESS!! For security reasons we did not automatically log you in. So close this alert and login with the password you choose.'
            })
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
        setToLogin(true)
      })
  }, [
    auth,
    dispatchPortalAction,
    formState.biggestObstacleValue.value,
    formState.confirmPasswordValue.value,
    formState.emailValue.value,
    formState.firstNameValue.value,
    formState.passwordValue.value,
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

export default EmergencySignUp
