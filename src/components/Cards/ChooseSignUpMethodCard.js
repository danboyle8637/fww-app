import React, { useContext } from 'react'
import styled from 'styled-components'

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
  setSocialProvider,
  setToErrorPage,
  setShowLogin
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
            .catch(() => {
              dispatchPortalAction({
                type: 'toggleEmergencyErrorMessage',
                value: {
                  redirectSlug: '/emergency-social-sign-up',
                  buttonText: 'Retry Sign Up Process',
                  message: `Network problems caused an incomplete signup process. No worries through, just click the button below and we'll try again to get you set up.`
                }
              })
              setToErrorPage(true)
            })
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
          } else if (error.code === 'auth/cancelled-popup-request') {
            dispatchPortalAction({
              type: 'toggleErrorMessage',
              value: `Ahhhhh... too many sign up pop up windows triggered. There can only be one. Try again, all of your data should be save so run through the sign up process one more time. Contact us if this keeps happening.`
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
          } else if (error.code === 'auth/popup-blocked') {
            dispatchPortalAction({
              type: 'toggleErrorMessage',
              value: `The sign up popup was blocked! This should not happen, so try it again. Your sign up info you've already entered should still be there. Contact us if you keep having this issue.`
            })
            setShowLogin(true)
          } else if (error.code === 'auth/popup-closed-by-user') {
            dispatchPortalAction({
              type: 'toggleErrorMessage',
              value: `Why did you close the window and not complete signing up??? Probably a mistake... no worries. Your sign up information should be saved so just click through and complete it this time. Or you can choose a different sign up method.`
            })
            setShowLogin(true)
          } else if (error.code === 'auth/unauthorized-domain') {
            dispatchPortalAction({
              type: 'toggleEmergencyErrorMessage',
              value: {
                redirectSlug: '/contact',
                buttonText: 'Go to Contact Page',
                message: `This error message should not be showing. If you're seeing it, contact us and let us know you're getting an UNAUTHORIZED DOMAIN error. This will help us out a lot... thanks!`
              }
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
              dispatchPortalAction({
                type: 'toggleEmergencyErrorMessage',
                value: {
                  redirectSlug: '/emergency-social-sign-up',
                  buttonText: 'Retry Sign Up Process',
                  message: `Network problems caused an incomplete signup process. No worries through, just click the button below and we'll try again to get you set up.`
                }
              })
              setToErrorPage(true)
            })
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
          } else if (error.code === 'auth/cancelled-popup-request') {
            dispatchPortalAction({
              type: 'toggleErrorMessage',
              value: `Ahhhhh... too many sign up pop up windows triggered. There can only be one. Try again, all of your data should be save so run through the sign up process one more time. Contact us if this keeps happening.`
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
          } else if (error.code === 'auth/popup-blocked') {
            dispatchPortalAction({
              type: 'toggleErrorMessage',
              value: `The sign up popup was blocked! This should not happen, so try it again. Your sign up info you've already entered should still be there. Contact us if you keep having this issue.`
            })
            setShowLogin(true)
          } else if (error.code === 'auth/popup-closed-by-user') {
            dispatchPortalAction({
              type: 'toggleErrorMessage',
              value: `Why did you close the window and not complete signing up??? Probably a mistake... no worries. Your sign up information should be saved so just click through and complete it this time. Or you can choose a different sign up method.`
            })
            setShowLogin(true)
          } else if (error.code === 'auth/unauthorized-domain') {
            dispatchPortalAction({
              type: 'toggleEmergencyErrorMessage',
              value: {
                redirectSlug: '/contact',
                buttonText: 'Go to Contact Page',
                message: `This error message should not be showing. If you're seeing it, contact us and let us know you're getting an UNAUTHORIZED DOMAIN error. This will help us out a lot... thanks!`
              }
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

  const handleMoveToStep4 = () => {
    setReverse(false)
    setActiveQuestion(prevValue => prevValue + 1)
  }

  return (
    <CardContainer
      type="button"
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
      {buttonText}
      <Arrow />
    </CardContainer>
  )
}

export default ChooseSignUpMethodCard

const CardContainer = styled.button`
  padding: 6px 20px 6px 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  color: ${props => props.theme.bodyText};
  background: ${props => props.theme.mainBackgroundBorderColor};
  border: none;
  border-radius: 50px 8px 8px 50px;
  width: 100%;
  outline: none;
  cursor: pointer;
  transition: box-shadow 300ms ease-in-out;
  &:focus {
    box-shadow: 0 0 0 2px #000, 0 0 0 5px ${props =>
      props.theme.tertiaryAccent};
  }
  ${above.mobile`
    width: 80%;
  `}
  ${above.tablet`
    width: 60%;
  `}
  ${above.ipadPro`
    &:hover {
      box-shadow: 0 0 0 2px #000, 0 0 0 5px ${props =>
        props.theme.tertiaryAccent};
    }
  `}
`

const GoogleIcon = styled(Google)`
  margin: 0;
  padding: 0;
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
