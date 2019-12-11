import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

import { BodyText } from '../../styles/Typography'
import Google from '../../svgs/GoogleButtonIcon'
import Facebook from '../../svgs/FacebookButtonIcon'
import EmailPassword from '../../svgs/EmailPasswordButtonIcon'
import NavigationArrow from '../../svgs/NavigationArrow'
import { useFormStore } from '../../context/FormContext'
import { useUserContext } from '../../context/UserContext'
import { usePortalContext } from '../../context/portalContext'
import { useFireBase } from '../Firebase/FirebaseContext'
import ScreenWidthContext from '../../context/ScreenWidthContext'
import siteConfig from '../../utils/siteConfig'
import { above } from '../../styles/Theme'

const ChooseSignUpMethodCard = ({
  icon,
  buttonText,
  loginType,
  setActiveQuestion,
  setReverse,
  setToDashboard,
  setIsLoading,
  setShowSocialSignUp,
  setSocialProvider
}) => {
  const auth = useFireBase()
  const device = useContext(ScreenWidthContext)
  // eslint-disable-next-line
  const [formState, dispatchFormAction] = useFormStore()
  // eslint-disable-next-line
  const [userState, dispatchUserAction] = useUserContext()
  // eslint-disable-next-line
  const [portalState, dispatchPortalAction] = usePortalContext()

  // * I moved these to the root signup component. If everythign works delete. If not... reuse in this component.
  //const [showSocialSignUp, setShowSocialSignUp] = useState(false)
  //const [socialProvider, setSocialProvider] = useState('')

  const url = `${siteConfig.api.baseUrl}/sign-up-social-account`
  const convertKitUrl = `${siteConfig.api.baseUrl}/add-member-to-convertkit`

  const handleGoogleSignUp = () => {
    setIsLoading(true)

    const firstName = formState.firstNameValue.value
    const biggestObstacle = formState.biggestObstacleValue.value
    const programId = formState.resetWorkoutValue.value
    const totalWorkouts = formState.resetWorkoutValue.options.find(
      option => option.value === programId
    )

    const socialSignUpUser = {
      programId: programId,
      totalWorkouts: totalWorkouts['numberOfWorkouts'],
      biggestObstacle: biggestObstacle
    }

    sessionStorage.setItem('socialSignUpUser', JSON.stringify(socialSignUpUser))

    if (device === 'mobile') {
      setSocialProvider('google')
      setShowSocialSignUp(true)
    } else {
      auth
        .signInWithGoogleProviderPopUp()
        .then(result => {
          const user = result.user

          const userId = user.uid
          const email = user.email
          const photoUrl = user.photoURL

          const signUpData = {
            userId: userId,
            programId: programId,
            totalWorkouts: totalWorkouts['numberOfWorkouts'],
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
            .then(responseArray => {
              const promiseData = responseArray.map(element => element.json())
              return Promise.all(promiseData)
            })
            .then(dataArray => {
              const userData = dataArray[0]
              auth.isAuthenticated = true

              dispatchUserAction({
                type: 'setLoggedInUser',
                value: {
                  userId: userData.userId,
                  firstName: userData.firstName,
                  photoUrl: userData.photoUrl,
                  photoUrlTiny: userData.photoUrlTiny,
                  programs: userData.programs
                }
              })

              const fwwUser = {
                firstName: userData.firstName,
                photoUrl: userData.photoUrl,
                programs: userData.programs
              }

              localStorage.setItem('fwwUser', JSON.stringify(fwwUser))

              setIsLoading(false)
              setToDashboard(true)
            })
            .catch(error => {
              // TODO need to set the error messages for errors
            })
        })
        .catch(error => {
          // const errorCode = error.code
          // const errorMessage = error.message
          // const email = error.email
          // const credential = error.credential
          console.log(error)
        })
    }
  }

  const handleFacebookSignUp = () => {
    setIsLoading(true)

    const firstName = formState.firstNameValue.value
    const biggestObstacle = formState.biggestObstacleValue.value
    const programId = formState.resetWorkoutValue.value
    const totalWorkouts = formState.resetWorkoutValue.options.find(
      option => option.value === programId
    )

    const socialSignUpUser = {
      programId: programId,
      totalWorkouts: totalWorkouts['numberOfWorkouts'],
      biggestObstacle: biggestObstacle
    }

    sessionStorage.setItem('socialSignUpUser', JSON.stringify(socialSignUpUser))

    if (device === 'mobile') {
      setSocialProvider('facebook')
      setShowSocialSignUp(true)
    } else {
      auth
        .signInWithFacebookProviderPopUp()
        .then(result => {
          const user = result.user

          const userId = user.uid
          const email = user.email
          const photoUrl = user.photoURL

          const signUpData = {
            userId: userId,
            programId: programId,
            totalWorkouts: totalWorkouts['numberOfWorkouts'],
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
            .then(responseArray => {
              const promiseData = responseArray.map(element => element.json())
              return Promise.all(promiseData)
            })
            .then(dataArray => {
              const userData = dataArray[0]
              auth.isAuthenticated = true

              dispatchUserAction({
                type: 'setLoggedInUser',
                value: {
                  userId: userData.userId,
                  firstName: userData.firstName,
                  photoUrl: userData.photoUrl,
                  photoUrlTiny: userData.photoUrlTiny,
                  programs: userData.programs
                }
              })

              const fwwUser = {
                firstName: userData.firstName,
                photoUrl: userData.photoUrl,
                programs: userData.programs
              }

              localStorage.setItem('fwwUser', JSON.stringify(fwwUser))

              setIsLoading(false)
              setToDashboard(true)
            })
            .catch(() => {
              // TODO have to handle this error as well
            })
        })
        .catch(error => {
          // const errorCode = error.code
          // const errorMessage = error.message
          // const email = error.email
          // const credential = error.credential
          console.log(error)
        })
    }
  }

  const handleMoveToStep4 = () => {
    setReverse(false)
    setActiveQuestion(prevValue => prevValue + 1)
  }

  return (
    <>
      <CardContainer
        onClick={
          loginType === 'google'
            ? handleGoogleSignUp
            : loginType === 'facebook'
            ? handleFacebookSignUp
            : handleMoveToStep4
        }
      >
        {icon === 'google' ? <GoogleIcon /> : null}
        {icon === 'facebook' ? <FacebookIcon /> : null}
        {icon === 'emailpassword' ? <EmailPasswordIcon /> : null}
        <BodyText>{buttonText}</BodyText>
        <Arrow />
      </CardContainer>
    </>
  )
}

export default ChooseSignUpMethodCard

const CardContainer = styled.div`
  padding: 6px 20px 6px 6px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 12px;
  align-items: center;
  background: ${props => props.theme.mainBackgroundBorderColor};
  border-radius: 50px 8px 8px 50px;
  width: 100%;
  cursor: pointer;
  ${above.mobile`
    width: 80%;
  `}
  ${above.tablet`
    width: 60%;
  `}
`

const GoogleIcon = styled(Google)`
  width: 60px;
`

const FacebookIcon = styled(Facebook)`
  width: 60px;
`

const EmailPasswordIcon = styled(EmailPassword)`
  width: 60px;
`

const Arrow = styled(NavigationArrow)`
  width: 12px;
`
