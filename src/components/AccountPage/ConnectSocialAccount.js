import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

import { Header3 } from '../../styles/Typography'
import { BodyText } from '../../styles/Typography'
import GoogleFacebookButton from '../Buttons/GoogleFacebookButton'
import ScreenWidthContext from '../../context/ScreenWidthContext'
import { useFireBase } from '../Firebase/FirebaseContext'

const ConnectSocialAccount = ({
  firstName,
  handleToggleSync,
  handleSetSyncMessage
}) => {
  const auth = useFireBase()
  const device = useContext(ScreenWidthContext)
  const [showSocialLink, setShowSocialLink] = useState(false)
  const [socialProvider, setSocialProvider] = useState('')
  const [isGoogleThere, setIsGoogleThere] = useState(false)
  const [isFacebookThere, setIsFacebookThere] = useState(false)

  useEffect(() => {
    auth.getCurrentUser().then(user => {
      const isGoogleThere = user.providerData.filter(
        item => item.providerId === 'google.com'
      )

      const isFacebookThere = user.providerData.filter(
        item => item.providerId === 'facebook.com'
      )

      if (isGoogleThere.length > 0) {
        setIsGoogleThere(true)
      }

      if (isFacebookThere.length > 0) {
        setIsFacebookThere(true)
      }
    })
  }, [auth])

  const handleConnectGoogle = () => {
    if (device === 'mobile') {
      setSocialProvider('google')
      setShowSocialLink(true)
    } else {
      handleToggleSync()
      handleSetSyncMessage('Linking Accounts...')
      auth
        .linkGoogleProviderPopup()
        .then(() => {
          handleSetSyncMessage('💪 Accounts linked!')
          handleToggleSync()
        })
        .catch(() => {
          handleSetSyncMessage('😢 Nooo... try again.')
          handleToggleSync()
        })
    }
  }

  const handleConnectFacebook = () => {
    if (device === 'mobile') {
      setSocialProvider('facebook')
      setShowSocialLink(true)
    } else {
      handleToggleSync()
      handleSetSyncMessage('Linking Accounts...')
      auth
        .linkGoogleProviderPopup()
        .then(() => {
          handleSetSyncMessage('💪 Accounts linked!')
          handleToggleSync()
        })
        .catch(() => {
          handleSetSyncMessage('😢 Nooo... try again.')
          handleToggleSync()
        })
    }
  }

  return (
    <>
      <SocialContainer>
        <CopyWrapper>
          <Header3>Connect your Facebook or Google account:</Header3>
          <BodyText>
            If you want to make logging in easier, connect your Facebook or
            Google account to your FWW account.
          </BodyText>
        </CopyWrapper>
        <ButtonWrapper>
          <GoogleFacebookButton
            isLinkedUp={isFacebookThere}
            handleClick={handleConnectFacebook}
          >
            {isFacebookThere ? 'Account Is Linked Up' : 'Connect Facebook'}
          </GoogleFacebookButton>
          <GoogleFacebookButton
            provider="google"
            isLinkedUp={isGoogleThere}
            handleClick={handleConnectGoogle}
          >
            {isGoogleThere ? 'Account Is Linked Up' : 'Connect Google'}
          </GoogleFacebookButton>
        </ButtonWrapper>
      </SocialContainer>
      {showSocialLink ? (
        <Redirect
          to={{
            pathname: '/social-link',
            state: {
              provider: socialProvider,
              firstName: firstName
            }
          }}
        />
      ) : null}
    </>
  )
}

export default ConnectSocialAccount

const SocialContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  width: 100%;
`

const CopyWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 12px;
  width: 100%;
`

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  gap: 20px;
`
