import React from 'react'
import styled from 'styled-components'

import FWWLogo from '../../svgs/FWWLogo'

const LoginSignUpHeader = ({ children }) => {
  return (
    <HeaderContainer>
      <Logo />
      <LoginHeadline>{children}</LoginHeadline>
    </HeaderContainer>
  )
}

export default LoginSignUpHeader

const HeaderContainer = styled.div`
  margin: 0 0 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LoginHeadline = styled.h1`
  margin: 12px 0 0 0;
  font-family: RobotoBold, sans-serif;
  font-size: 26px;
  color: ${props => props.theme.headlinePrimary};
  letter-spacing: 0.1rem;
`

const Logo = styled(FWWLogo)`
  width: 86px;
`
