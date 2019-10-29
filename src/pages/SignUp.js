import React from 'react'
import styled from 'styled-components'

import LoginSignUpHeader from '../components/PageHeaders/LoginSignUpHeader'
import WorkoutCardLoader from '../components/Loaders/WorkoutCardLoader'
import { formState, formReducer } from '../reducers/formReducer'
import { FormStore } from '../context/FormContext'

const SignUp = () => {
  return (
    <FormStore initialState={formState} reducer={formReducer}>
      <SignUpContainer>
        <ContentWrapper>
          <LoginSignUpHeader>Sign Up</LoginSignUpHeader>
          <WorkoutCardLoader />
        </ContentWrapper>
      </SignUpContainer>
    </FormStore>
  )
}

export default SignUp

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const ContentWrapper = styled.div`
  margin: 80px 0 0 0;
  padding: 0 16px;
  width: 100%;
`
