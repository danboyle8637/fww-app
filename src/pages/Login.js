import React from 'react'
import styled from 'styled-components'

import loginMobileBg from '../images/signup-kindal-sitting-600x1300.jpg'
import loginTabletBg from '../images/signup-kindal-sitting-834x1112.jpg'
import loginIpadProBg from '../images/signup-kindal-sitting-1024x1112.jpg'
import loginLaptopBg from '../images/signup-kindal-sitting-1440x900.jpg'
import { formState, formReducer } from '../reducers/formReducer'
import { FormStore } from '../context/FormContext'
import { above } from '../styles/Theme'

const Login = () => {
  return (
    <FormStore initialState={formState} reducer={formReducer}>
      <LoginContainer>
        <TestDiv />
      </LoginContainer>
    </FormStore>
  )
}

export default Login

const LoginContainer = styled.section`
  background-color: #000000;
  background-image: url(${loginMobileBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom right;
  ${above.mobile`
    background-image: url(${loginTabletBg});
  `}
  ${above.tablet`
    background-image: url(${loginIpadProBg});
  `}
  ${above.ipadPro`
    background-image: url(${loginLaptopBg});
  `}
`

const TestDiv = styled.div`
  width: 100%;
  height: 90vh;
`
