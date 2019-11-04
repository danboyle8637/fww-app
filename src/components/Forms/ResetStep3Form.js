import React from 'react'
import styled from 'styled-components'

import LoginFormTransition from '../../Animations/Transitions/LoginFormTransition'
import BackChip from '../Chips/BackChip'
import { Header1, BodyText } from '../../styles/Typography'
import ChooseSignUpMethodCard from '../Cards/ChooseSignUpMethodCard'
import { above } from '../../styles/Theme'

const ResetStep3Form = ({
  activeQuestion,
  setActiveQuestion,
  reverse,
  setReverse,
  setToDashboard,
  setIsLoading
}) => {
  const options = [
    { id: 1, icon: 'google', text: 'Google Account', loginType: 'google' },
    {
      id: 2,
      icon: 'facebook',
      text: 'Facebook Account',
      loginType: 'facebook'
    },
    {
      id: 3,
      icon: 'emailpassword',
      text: 'Email and Password',
      loginType: 'next'
    }
  ]

  const cards = options.map(card => {
    const id = card.id
    const icon = card.icon
    const buttonText = card.text
    const loginType = card.loginType

    return (
      <ChooseSignUpMethodCard
        key={id}
        icon={icon}
        buttonText={buttonText}
        loginType={loginType}
        setActiveQuestion={setActiveQuestion}
        setReverse={setReverse}
        setToDashboard={setToDashboard}
        setIsLoading={setIsLoading}
      />
    )
  })

  const handleBackClick = () => {
    setReverse(true)
    setActiveQuestion(prevValue => prevValue - 1)
  }

  return (
    <LoginFormTransition showNode={activeQuestion === 2} reverse={reverse}>
      <Step3Container>
        <BackChip handleClick={handleBackClick}>Back</BackChip>
        <ContentWrapper>
          <Header1>Step 3:</Header1>
          <BodyText>
            How do you want to create your account? ... Google? Facebook? or use
            your own email and password?
          </BodyText>
        </ContentWrapper>
        <CardsContainer>{cards}</CardsContainer>
      </Step3Container>
    </LoginFormTransition>
  )
}

export default ResetStep3Form

const Step3Container = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  margin: 0 0 340px 0;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${above.mobile`
    margin: 0 0 460px 60px;
    width: 60%;
  `}
  ${above.tablet`
    margin: 0;
    width: 70%;
    align-self: center;
  `}
  ${above.ipadPro`
    margin: 0 0 120px 80px;
    width: 50%;
  `}
`

const CardsContainer = styled.div`
  margin: 40px 0 0 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 20px;
  justify-items: center;
  width: 100%;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  gap: 12px;
  justify-items: start;
  width: 100%;
`
