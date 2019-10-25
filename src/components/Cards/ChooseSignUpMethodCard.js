import React from 'react'
import styled from 'styled-components'

import { BodyText } from '../../styles/Typography'
import Google from '../../svgs/GoogleButtonIcon'
import Facebook from '../../svgs/FacebookButtonIcon'
import EmailPassword from '../../svgs/EmailPasswordButtonIcon'
import NavigationArrow from '../../svgs/NavigationArrow'
import { above } from '../../styles/Theme'

const ChooseSignUpMethodCard = ({
  icon,
  buttonText,
  loginType,
  setActiveQuestion,
  setReverse
}) => {
  const handleGoogleSignUp = () => {
    console.log('Active Google SignUp and Redirect')
  }

  const handleFacebookSignUp = () => {
    console.log('Active Facebook SignUp and Redirect')
  }

  const handleMoveToStep4 = () => {
    setReverse(false)
    setActiveQuestion(prevValue => prevValue + 1)
  }

  return (
    <CardContainer
      onClick={
        loginType === 'google'
          ? handleGoogleSignUp
          : loginType === 'facebook'
          ? handleFacebookSignUp
          : handleMoveToStep4
      }
    >
      {icon === 'google' ? <GoogleIcon /> : null}
      {icon === 'facebook' ? <FacebookIcon /> : null}
      {icon === 'emailpassword' ? <EmailPasswordIcon /> : null}
      <BodyText>{buttonText}</BodyText>
      <Arrow />
    </CardContainer>
  )
}

export default ChooseSignUpMethodCard

const CardContainer = styled.div`
  padding: 6px 20px 6px 6px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 12px;
  align-items: center;
  background: ${props => props.theme.mainBackgroundBorderColor};
  border-radius: 50px 8px 8px 50px;
  width: 100%;
  cursor: pointer;
  ${above.mobile`
    width: 80%;
  `}
  ${above.tablet`
    width: 60%;
  `}
`

const GoogleIcon = styled(Google)`
  width: 60px;
`

const FacebookIcon = styled(Facebook)`
  width: 60px;
`

const EmailPasswordIcon = styled(EmailPassword)`
  width: 60px;
`

const Arrow = styled(NavigationArrow)`
  width: 12px;
`
