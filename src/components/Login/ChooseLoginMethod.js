import React, { useContext } from 'react'
import styled from 'styled-components'

import BaseButton from '../Buttons/BaseButton'
import GoogleFacebookButton from '../Buttons/GoogleFacebookButton'
import SignUp from './SignUp'
import LoginFormTransition from '../../Animations/Transitions/LoginFormTransition'
import { useFireBase } from '../Firebase/FirebaseContext'
import { useUserContext } from '../../context/UserContext'
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
  const [useState, dispatchUserAction] = useUserContext()

  const handleLoginWithGoogle = () => {
    setIsLoggingIn(true)
    const url = `${siteConfig.api.baseUrl}/get-user`
    let photoUrl

    if (device === 'mobile') {
      // TODO Try this to get it working. If not... just login with popup.
      /*
      1. Just run signInWithRedirect
      2. Setup a useEffect Hook to run on mount
      3. In the hook call getRedirectResult
      4. Call function to set the user and redirect to dashboard
      */
      auth
        .signInWithGoogleProviderRedirect()
        .then(user => {
          console.log(user)
        })
        .catch(error => {
          console.log(error)
        })
      // .then(result => {
      //   auth.isAuthenticated = true
      //   const user = result.user
      //   console.log(user)
      //   photoUrl = user.photoURL

      //   if (localStorage.getItem('fwwUser')) {
      //     console.log('fwwUser exists in local storage')
      //     const data = localStorage.getItem('fwwUser')
      //     const user = JSON.parse(data)

      //     dispatchUserAction({
      //       type: 'setLoggedInUser',
      //       value: {
      //         firstName: user.firstName,
      //         photoUrl: user.photoUrl,
      //         programs: user.programs
      //       }
      //     })

      //     setShowDashboard(true)
      //   } else {
      //     console.log('fwwUser does not exist in local storage')

      //     user.getIdToken(true).then(token => {
      //       fetch(url, {
      //         method: 'GET',
      //         headers: {
      //           Authorization: `Bearer ${token}`
      //         }
      //       })
      //         .then(response => response.json())
      //         .then(userData => {
      //           dispatchUserAction({
      //             type: 'setLoggedInUser',
      //             value: {
      //               firstName: userData.firstName,
      //               photoUrl: photoUrl,
      //               programs: userData.programs
      //             }
      //           })

      //           const fwwUser = {
      //             firstName: userData.firstName,
      //             photoUrl: photoUrl,
      //             programs: userData.programs
      //           }

      //           localStorage.setItem('fwwUser', JSON.stringify(fwwUser))

      //           setShowDashboard(true)
      //         })
      //         .catch(error => {
      //           // TODO Set the error message that user could not be found. Try again.
      //         })
      //     })
      //   }
      // })
      // .catch(error => {
      //   // const errorCode = error.code
      //   // const errorMessage = error.message
      //   // const email = error.email
      //   // const credential = error.credential
      //   console.log(error)
      //   // TODO Set the error message that could not log into account. Try again.
      // })
    } else {
      auth
        .signInWithGoogleProviderPopUp()
        .then(result => {
          auth.isAuthenticated = true
          const user = result.user
          photoUrl = user.photoURL

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
                  // TODO Set the error message that user could not be found. Try again.
                })
            })
          }
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

  const handleLoginWithFacebook = () => {
    setIsLoggingIn(true)
    const url = `${siteConfig.api.baseUrl}/get-user`
    let photoUrl

    if (device === 'mobile') {
      auth
        .signInWithFacebookProviderRedirect()
        .then(result => {
          auth.isAuthenticated = true
          const user = result.user
          photoUrl = user.photoURL

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
                  // TODO Set the error message that user could not be found. Try again.
                })
            })
          }
        })
        .catch(error => {
          // const errorCode = error.code
          // const errorMessage = error.message
          // const email = error.email
          // const credential = error.credential
          console.log(error)
          // TODO Set the error message that could not log into account. Try again.
        })
    } else {
      auth
        .signInWithFacebookProviderPopUp()
        .then(result => {
          auth.isAuthenticated = true
          const user = result.user
          photoUrl = user.photoURL

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
                  // TODO Set the error message that user could not be found. Try again.
                })
            })
          }
        })
        .catch(error => {
          // const errorCode = error.code
          // const errorMessage = error.message
          // const email = error.email
          // const credential = error.credential
          console.log(error)
          // TODO set the error message could not login with Facebook. Try again.
        })
    }
  }

  const handleUsernamePasswordButton = () => {
    setReverse(false)
    setActiveForm(prevValue => prevValue + 1)
  }

  return (
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
