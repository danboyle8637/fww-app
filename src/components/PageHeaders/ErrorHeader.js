import React from 'react'
import styled from 'styled-components'

import FWWLogo from '../../svgs/FWWLogo'
import { above } from '../../styles/Theme'

const ErrorHeader = () => {
  return (
    <HeaderContainer>
      <Logo />
      <LoginHeadline>Something Went Wrong!</LoginHeadline>
    </HeaderContainer>
  )
}

export default ErrorHeader

const HeaderContainer = styled.div`
  margin: 0 0 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LoginHeadline = styled.h1`
  margin: 12px 0 0 0;
  font-size: 26px;
  color: ${props => props.theme.headlinePrimary};
  letter-spacing: 0.1rem;
  ${above.mobile`
    font-size: 34px;
  `}
  ${above.tablet`
    font-size: 40px;
  `}
`

const Logo = styled(FWWLogo)`
  width: 86px;
  ${above.mobile`
    width: 100px;
  `}
  ${above.tablet`
    width: 120px;
  `}
`
