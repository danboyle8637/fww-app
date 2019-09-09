import React from 'react'
import styled from 'styled-components'
import { TransitionGroup } from 'react-transition-group'

import { Header1, BodyText } from '../../styles/Typography'
import SevenDayResetFWWLogo from '../../svgs/SevenDayResetFWWLogo'
import FadeTransition from '../../Animations/Transitions/FadeTransition'

const SevenDayResetStep1Header = ({ showStep1, showStep2, showStep3 }) => {
  const steps = [
    {
      id: 1,
      showStep: showStep1,
      headline: 'Step 1:',
      text: `Let's focus on your biggest obstacle. If we solve this... you'll make a huge jump towards the body you truly desire.`
    },
    {
      id: 2,
      showStep: showStep2,
      headline: 'Step 2:',
      text: `Choose the Reset program that matches your fitness level. Just click on the program to select it.`
    },
    {
      id: 3,
      showStep: showStep3,
      headline: 'Step 3:',
      text: `Create your usename and password or create your account with Facebook or Google. The choice is yours.`
    }
  ]

  const headers = steps.map(step => {
    return (
      <FadeTransition key={step.id} showNode={step.showStep}>
        <ContentWrapper>
          <Header1>{step.headline}</Header1>
          <BodyText>{step.text}</BodyText>
        </ContentWrapper>
      </FadeTransition>
    )
  })

  return (
    <HeaderContainer>
      <ResetLogo />
      <TransitionGroup component={null}>{headers}</TransitionGroup>
    </HeaderContainer>
  )
}

export default SevenDayResetStep1Header

const HeaderContainer = styled.div`
  margin: 0;
  padding: 80px 16px 16px 16px;
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  align-items: center;
  background: ${props => props.theme.mainBackgroundBorderColor};
`

const ResetLogo = styled(SevenDayResetFWWLogo)`
  width: 200px;
`

const ContentWrapper = styled.div`
  margin: 20px 0 0 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  gap: 12px;
  justify-items: start;
  width: 100%;
`
