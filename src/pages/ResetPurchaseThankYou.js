import React, { useState } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

import successMobileBg from '../images/successful-purchase-600x1300.jpg'
import successTabletBg from '../images/successful-purchase-834x1112.jpg'
import successIpadProBg from '../images/successful-purchase-1024x1366.jpg'
import successLaptopBg from '../images/successful-purchase-1440x900.jpg'
import useRenderBackgroundImage from '../hooks/useRenderBackgroundImage'
import ThankYouHeader from '../components/PageHeaders/ThankYouHeader'
import KindalSig from '../svgs/KindalSig'
import BaseButton from '../components/Buttons/BaseButton'
import { above } from '../styles/Theme'

const ResetPurchaseThankYou = () => {
  const [toDashboard, setToDashboard] = useState(false)

  const title = 'Kindal giving you a high five for joining FWW'
  const alt = 'Kindal giving you a high five for joining FWW'
  const background = useRenderBackgroundImage(
    successMobileBg,
    successTabletBg,
    successIpadProBg,
    successLaptopBg,
    title,
    alt
  )

  const handleButtonClick = () => setToDashboard(true)

  return (
    <>
      <ThankYouContainer>
        {background}
        <ContentWrapper>
          <ThankYouHeader firstName="Jen" program="Fierce: Body Burn" />
          <BaseButton handleClick={handleButtonClick}>
            Back To My Dashboard
          </BaseButton>
          <Kindal />
        </ContentWrapper>
      </ThankYouContainer>
      {toDashboard ? <Redirect to={'/dashboard'} /> : null}
    </>
  )
}

export default ResetPurchaseThankYou

const ThankYouContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`

const ContentWrapper = styled.div`
  margin: 20px 0 0 0;
  padding: 0 16px;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 1;
  ${above.mobile`
    margin: 40px 40px 0 0;
    justify-self: end;
    width: 70%;
  `}
  ${above.tablet`
    margin: 120px 40px 0 0;
    width: 60%;
  `}
  ${above.ipadPro`
    margin: 120px 120px 0 0;
    width: 50%;
  `}
`

const Kindal = styled(KindalSig)`
  margin: 40px 20px 0 0;
  align-self: flex-end;
  width: 120px;
  ${above.tablet`
    width: 160px;
  `}
`
