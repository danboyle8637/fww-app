import React from 'react'
import styled from 'styled-components'

import FooterCircleIcon from './FooterCircleIcon'

const ProgramActiveSection = () => {
  return (
    <ActiveContainer>
      <FooterCircleIcon active={false} />
      <ActiveLabel>Active</ActiveLabel>
    </ActiveContainer>
  )
}

export default ProgramActiveSection

const ActiveContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px;
  align-items: center;
`

const ActiveLabel = styled.p`
  font-family: QuicksandMedium;
  font-size: 14px;
  color: ${props => props.theme.bodyText};
  text-transform: uppercase;
`
