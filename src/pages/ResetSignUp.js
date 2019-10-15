import React, { useState } from 'react'
import styled from 'styled-components'
import { TransitionGroup } from 'react-transition-group'

import MobileBackground from '../images/signup-back-kb-rack-600x700.jpg'
import TabletBackground from '../images/signup-back-kb-rack-834x1112.jpg'
import IpadProBackground from '../images/signup-back-kb-rack-1024x1366.jpg'
import LaptopBackground from '../images/signup-back-kb-rack-1400x900.jpg'
import useRenderBackgroundImage from '../hooks/useRenderBackgroundImage'
import ResetSignUpHeader from '../components/PageHeaders/ResetSignUpHeader'
import ResetStep1Form from '../components/Forms/ResetStep1Form'
import ResetStep2Form from '../components/Forms/ResetStep2Form'
import ResetStep3Form from '../components/Forms/ResetStep3Form'
import ResetStep4Form from '../components/Forms/ResetStep4Form'
import { above } from '../styles/Theme'

const ResetSignUp = () => {
  const [reverse, setReverse] = useState(false)
  const [activeQuestion, setActiveQuestion] = useState(1)

  const title = 'Create your Reset program account'
  const alt =
    'Kindal holding a kettlebell in rack position facing away from you'

  const background = useRenderBackgroundImage(
    MobileBackground,
    TabletBackground,
    IpadProBackground,
    LaptopBackground,
    title,
    alt
  )

  return (
    <ResetSignUpContainer>
      <ContentWrapper>
        <ResetSignUpHeader />
        <TransitionGroup component={null}>
          <ResetStep1Form
            activeQuestion={activeQuestion}
            setActiveQuestion={setActiveQuestion}
            setReverse={setReverse}
          />
          <ResetStep2Form
            activeQuestion={activeQuestion}
            setActiveQuestion={setActiveQuestion}
            reverse={reverse}
            setReverse={setReverse}
          />
          <ResetStep3Form
            reverse={reverse}
            setReverse={setReverse}
            activeQuestion={activeQuestion}
            setActiveQuestion={setActiveQuestion}
          />
          <ResetStep4Form
            activeQuestion={activeQuestion}
            setActiveQuestion={setActiveQuestion}
            reverse={reverse}
            setReverse={setReverse}
          />
        </TransitionGroup>
      </ContentWrapper>
      {background}
    </ResetSignUpContainer>
  )
}

export default ResetSignUp

const ResetSignUpContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  background: #000000;
  width: 100%;
`

const ContentWrapper = styled.div`
  margin-bottom: 340px;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 100%;
  z-index: 1;
  ${above.mobile`
    margin: 0 0 460px 60px;
    width: 60%;
  `}
  ${above.ipadPro`
    margin: 0 0 80px 120px;
    width: 50%;
  `}
`
