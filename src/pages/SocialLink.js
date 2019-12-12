import React, { useState, useEffect } from 'react'
import { Redirect, useLocation } from 'react-router-dom'

import FullPageKettlebellLoader from '../components/Loaders/FullPageKettlebellLoader'
import { useFireBase } from '../components/Firebase/FirebaseContext'
import { usePortalContext } from '../context/portalContext'

const SocialLink = () => {
  const auth = useFireBase()
  const [showAccountPage, setShowAccountPage] = useState(false)
  const [choosenProvider, setChoosenProvider] = useState('')
  // eslint-disable-next-line
  const [portalState, dispatchPortalAction] = usePortalContext()

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
      .catch(() => {
        if (data.state.provider === 'google') {
          setChoosenProvider('Google')
        } else if (data.state.provider === 'facebook') {
          setChoosenProvider('Facebook')
        } else {
          setChoosenProvider('social')
        }

        dispatchPortalAction({
          type: 'toggleErrorMessage',
          value: `😢 There was a problem linking your ${choosenProvider}. Please try again.`
        })
      })
  }, [auth, choosenProvider, data.state, dispatchPortalAction])

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
