import React from 'react'
import styled from 'styled-components'

import { Header3 } from '../../styles/Typography'
import { BodyText } from '../../styles/Typography'
import GoogleFacebookButton from '../Buttons/GoogleFacebookButton'

const ConnectSocialAccount = () => {
  return (
    <SocialContainer>
      <CopyWrapper>
        <Header3>Connect your Facebook or Google account:</Header3>
        <BodyText>
          If you want to make logging in easier, connect your Facebook or Google
          account to your FWW account.
        </BodyText>
      </CopyWrapper>
      <ButtonWrapper>
        <GoogleFacebookButton>Connect Facebook Account</GoogleFacebookButton>
        <GoogleFacebookButton provider="google">
          Connect Google Account
        </GoogleFacebookButton>
      </ButtonWrapper>
    </SocialContainer>
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
