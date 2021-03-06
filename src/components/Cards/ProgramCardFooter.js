import React from 'react'
import styled from 'styled-components'

import ProgramActiveSection from './Footer/ProgramActiveSection'
import ProgramProgressSection from './Footer/ProgramProgressSection'
import NavigationArrow from '../Shared/NavigationArrow'

const ProgramCardFooter = ({ programId }) => {
  return (
    <FooterContainer>
      <ProgramActiveSection programId={programId} />
      <ProgramProgressSection programId={programId} />
      <NavigationArrow />
    </FooterContainer>
  )
}

export default ProgramCardFooter

const FooterContainer = styled.div`
  padding: 8px;
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 20px;
  justify-items: end;
`
