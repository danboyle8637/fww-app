import React from 'react'
import styled from 'styled-components'

import MoreDots from '../../svgs/BottomMoreIcon'
import { usePortalContext } from '../../context/portalContext'
import { above } from '../../styles/Theme'

const PricingCard = ({ price }) => {
  // eslint-disable-next-line
  const [portalState, dispatchPortalAction] = usePortalContext()

  const handleDotsClick = () => {
    dispatchPortalAction({
      type: 'setMessageDialogMessage',
      value: `60 Day Happy Guarantee 😁: If you're not happy with this program within your first 60 days, just submit a support ticket and I'll refund 100% of your money. No questions asked. I hope you join and thank you for supporting us!`
    })
    dispatchPortalAction({ type: 'toggleMessageDialog' })
  }

  return (
    <CardContainer>
      <Price>{price}</Price>
      <BenefitList>
        <BenefitItem>Pay Once... Own Forever</BenefitItem>
        <BenefitItem>
          60 Day Happy Guarantee{' '}
          <span role="img" aria-label="happy face">
            😁
          </span>
        </BenefitItem>
        <BenefitItem>Support Independant Trainers</BenefitItem>
      </BenefitList>
      <Dots handleClick={handleDotsClick} />
    </CardContainer>
  )
}

export default PricingCard

const CardContainer = styled.div`
  position: relative;
  margin: 40px 0 0 0;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.baseBackgroundColor};
  border-radius: 10px;
  width: 100%;
  ${above.mobile`
    width: 60%;
  `}
  ${above.tablet`
    width: 90%;
  `}
`

const Price = styled.h4`
  position: relative;
  margin: 0;
  padding: 0;
  font-size: 110px;
  font-weight: 800;
  color: ${props => props.theme.bodyText};
  &::before {
    position: absolute;
    content: '$';
    top: 0;
    left: 0;
    font-size: 24px;
    font-weight: 500;
    transform: translate(-140%, 70%);
  }
`

const BenefitList = styled.ul`
  margin: 0 0 0 12px;
  list-style: none;
`

const BenefitItem = styled.li`
  position: relative;
  margin: 0 0 20px 20px;
  padding: 0;
  font-size: 12px;
  line-height: 1.2;
  &:last-child {
    margin-bottom: 0;
  }
  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    background: ${props => props.theme.headlinePrimary};
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transform: translate(-150%, 24%);
  }
`

const Dots = styled(MoreDots)`
  position: absolute;
  top: 0;
  right: 0;
  width: 8px;
  transform: translate(-10px, 10px);
  cursor: pointer;
`
