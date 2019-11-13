import React, { useState, useEffect } from 'react'
import { Redirect, useLocation } from 'react-router-dom'

import FullPageKettlebellLoader from '../components/Loaders/FullPageKettlebellLoader'
import { useFireBase } from '../components/Firebase/FirebaseContext'

const SocialLink = () => {
  const auth = useFireBase()
  const [showAccountPage, setShowAccountPage] = useState(false)

  const data = useLocation()

  useEffect(() => {
    auth
      .getRedirectResult()
      .then(result => {
        const user = result.user

        if (user) {
          setShowAccountPage(true)
        } else {
          if (data.state.provider === 'google') {
            auth.linkGoogleProviderRedirect()
          } else if (data.state.provider === 'facebook') {
            auth.linkFacebookProviderRedirect()
          } else {
            return
          }
        }
      })
      .catch(error => {
        // TODO set big error and have them try again.
        // Maybe you can get an error message on the function logs
        console.log(error)
      })
  }, [auth, data.state])

  return (
    <>
      <FullPageKettlebellLoader loadingMessage={'Linking accounts...'} />
      {showAccountPage ? (
        <Redirect
          to={{
            pathname: `/account/${data.state.firstName}`,
            state: { success: '💪 Accounts linked!' }
          }}
        />
      ) : null}
    </>
  )
}

export default SocialLink
