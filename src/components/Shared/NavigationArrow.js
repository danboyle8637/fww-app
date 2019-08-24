import React from 'react'
import styled from 'styled-components'

import NavArrow from '../../svgs/NavigationArrow'

const NavigationArrow = () => {
  return (
    <ArrowContainer>
      <Arrow />
    </ArrowContainer>
  )
}

export default NavigationArrow

const ArrowContainer = styled.div`
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.accentBackgroundColor};
  border-radius: 50%;
  width: 52px;
  height: 52px;
`

const Arrow = styled(NavArrow)`
  width: 20px;
`
