import React, { useContext } from 'react'
import styled from 'styled-components'

import loginMobileBg from '../images/signup-kindal-sitting-600x1300.jpg'
import loginTabletBg from '../images/signup-kindal-sitting-834x1112.jpg'
import loginIpadProBg from '../images/signup-kindal-sitting-1024x1112.jpg'
import loginLaptopBg from '../images/signup-kindal-sitting-1440x900.jpg'
import LoginHeader from '../components/Login/LoginHeader'
import LoginStep1 from '../components/Login/LoginStep1'
import UsernamePasswordForm from '../components/Login/UsernamePasswordForm'
import ScreenWidthContext from '../context/ScreenWidthContext'
import { formState, formReducer } from '../reducers/formReducer'
import { FormStore } from '../context/FormContext'
import { above } from '../styles/Theme'

const Login = () => {
  const device = useContext(ScreenWidthContext)

  return (
    <FormStore initialState={formState} reducer={formReducer}>
      <LoginContainer>
        {device === 'mobile' ? <BackgroundImage src={loginMobileBg} /> : null}
        {device === 'tablet' ? <BackgroundImage src={loginTabletBg} /> : null}
        {device === 'ipadPro' ? <BackgroundImage src={loginIpadProBg} /> : null}
        {device === 'laptop' ? <BackgroundImage src={loginLaptopBg} /> : null}
        <ContentWrapper>
          <LoginHeader />
          <UsernamePasswordForm />
        </ContentWrapper>
      </LoginContainer>
    </FormStore>
  )
}

export default Login

const LoginContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`

const BackgroundImage = styled.img`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 100%;
`

// const LoginContainer = styled.section`
//   background-color: #000000;
//   background-image: url(${loginMobileBg});
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: bottom right;
//   ${above.mobile`
//     background-image: url(${loginTabletBg});
//     background-size: contain;
//   `}
//   ${above.tablet`
//     background-image: url(${loginIpadProBg});
//   `}
//   ${above.ipadPro`
//     background-image: url(${loginLaptopBg});
//   `}
// `

const ContentWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  padding: 100px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  z-index: 1;
`
