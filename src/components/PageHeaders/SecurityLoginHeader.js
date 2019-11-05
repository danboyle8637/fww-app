import React from 'react'
import styled from 'styled-components'

import FWWLogo from '../../svgs/FWWLogo'
import { above } from '../../styles/Theme'

const SecurityLoginHeader = ({ firstName }) => {
  return (
    <HeaderContainer>
      <Logo />
      {firstName ? (
        <LoginHeadline>Awesome {firstName}!</LoginHeadline>
      ) : (
        <LoginHeadline>Awesome!</LoginHeadline>
      )}
      <LoginDescription>
        Your account is setup. Because it's new, I had to update a few things to
        secure it. Re-login and let's go workout!
      </LoginDescription>
    </HeaderContainer>
  )
}

export default SecurityLoginHeader

const HeaderContainer = styled.div`
  margin: 0 0 30px 0;
  display: flex;
  flex-direction: column;
  width: 70%;
  ${above.mobile`
    width: 50%;
  `}
  ${above.tablet`
    width: 50%;
  `}
  ${above.ipadPro`
    width: 42%;
  `}
`

const LoginHeadline = styled.h1`
  margin: 12px 0 0 0;
  font-size: 26px;
  color: ${props => props.theme.headlinePrimary};
  letter-spacing: 0.1rem;
`

const LoginDescription = styled.p`
  margin: 8px 0 0 0;
  padding: 0;
  font-size: 15px;
  color: ${props => props.theme.bodyText};
  ${above.mobile`
    font-size: 16px;
  `}
`

const Logo = styled(FWWLogo)`
  width: 80px;
`
