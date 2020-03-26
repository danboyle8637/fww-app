import React from 'react'
import styled from 'styled-components'

import OptionsButton from '../Buttons/OptionsButton'

const DidForgotPassword = ({ handleClick }) => {
  return (
    <ForgotPasswordContainer>
      <OptionsButton handleClick={handleClick}>
        Send a Password Reminder?
      </OptionsButton>
    </ForgotPasswordContainer>
  )
}

export default DidForgotPassword

const ForgotPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

// const ForgotPasswordHeadline = styled.h4`
//   margin: 0 0 16px 0;
//   font-size: 18px;
//   color: ${props => props.theme.headlineSecondary};
//   letter-spacing: 0.1rem;
// `
