import React from 'react'
import styled from 'styled-components'

import NavigationArrow from '../../svgs/NavigationArrow'

const BackChip = ({
  children,
  handleReverseUsernamePasswordForm,
  handleReverseForgotPasswordForm
}) => {
  return (
    <ChipContainer
      onClick={
        handleReverseUsernamePasswordForm || handleReverseForgotPasswordForm
      }
    >
      <Arrow />
      <ChipLabel>{children}</ChipLabel>
    </ChipContainer>
  )
}

export default BackChip

const ChipContainer = styled.div`
  padding: 4px 8px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
  background: rgba(43, 44, 58, 0.5);
  border-radius: 50px;
  width: max-content;
`

const ChipLabel = styled.p`
  font-family: QuicksandSemiBold;
  font-size: 13px;
  line-height: 1.3;
  color: ${props => props.theme.bodyText};
  text-transform: uppercase;
`

const Arrow = styled(NavigationArrow)`
  width: 10px;
  transform: rotate(180deg);
`
