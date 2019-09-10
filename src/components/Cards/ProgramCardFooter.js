import React from 'react'
import styled from 'styled-components'

import ProgramActiveSection from './Footer/ProgramActiveSection'
import ProgramProgressSection from './Footer/ProgramProgressSection'
import NavigationArrow from '../Shared/NavigationArrow'
import { useProgramsContext } from '../../context/ProgramsContext'

const ProgramCardFooter = ({ programId }) => {
  // eslint-disable-next-line
  const [programsState, dispatch] = useProgramsContext()

  const percent = programsState.percentComplete.find(program => {
    return program.programId === programId
  })

  return (
    <FooterContainer>
      <ProgramActiveSection programId={programId} />
      <ProgramProgressSection
        percentComplete={!percent ? 0 : percent.percentage}
      />
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
