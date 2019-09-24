import React, { useContext } from 'react'
import styled from 'styled-components'

import loginMobileBg from '../images/signup-kindal-sitting-600x1300.jpg'
import loginTabletBg from '../images/signup-kindal-sitting-834x1112.jpg'
import loginIpadProBg from '../images/signup-kindal-sitting-1024x1112.jpg'
import loginLaptopBg from '../images/signup-kindal-sitting-1440x900.jpg'
import LoginSignUpHeader from '../components/PageHeaders/LoginSignUpHeader'
import LoginForms from '../components/Login/LoginForms'
import ScreenWidthContext from '../context/ScreenWidthContext'
import { above } from '../styles/Theme'

const Login = () => {
  const device = useContext(ScreenWidthContext)

  return (
    <LoginContainer>
      {device === 'mobile' ? <BackgroundImage src={loginMobileBg} /> : null}
      {device === 'tablet' ? <BackgroundImage src={loginTabletBg} /> : null}
      {device === 'ipadPro' ? <BackgroundImage src={loginIpadProBg} /> : null}
      {device === 'laptop' ? <BackgroundImage src={loginLaptopBg} /> : null}
      {device === 'ultraWide' ? <BackgroundImage src={loginLaptopBg} /> : null}
      <ContentWrapper>
        <LoginSignUpHeader />
        <LoginForms />
      </ContentWrapper>
    </LoginContainer>
  )
}

export default Login

const LoginContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  background: #000;
  height: 100%;
`

const BackgroundImage = styled.img`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  align-self: end;
  width: 100%;
`

const ContentWrapper = styled.div`
  margin: 100px 0 0 0;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  z-index: 1;
  ${above.mobile`
    margin: 160px 0 0 80px;
    width: 60%;
  `}
  ${above.tablet`
    margin: 240px 0 0 160px
    width: 50%;
  `}
  ${above.ipadPro`
    margin: 80px 0 0 160px;
  `}
`
