import React from 'react'
import styled from 'styled-components'

import { Header1, BodyText } from '../../styles/Typography'
import SevenDayResetFWWLogo from '../../svgs/SevenDayResetFWWLogo'

const SevenDayResetStep1Header = () => {
  return (
    <HeadlineContainer>
      <ResetLogo />
      <ContentWrapper>
        <Header1>Step 1:</Header1>
        <BodyText>Solve your biggest obstacle...</BodyText>
      </ContentWrapper>
    </HeadlineContainer>
  )
}

export default SevenDayResetStep1Header

const HeadlineContainer = styled.div`
  margin: 80px 0 0 0%;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
