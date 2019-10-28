import React, { useState } from 'react'
import styled from 'styled-components'

import ProgressLoader from '../../svgs/ProgressLoader'
import { useProgramsContext } from '../../context/ProgramsContext'

const DashboardProgressCard = ({ programId }) => {
  const [percentComplete, setPercentComplete] = useState(0)
  // eslint-disable-next-line
  const [programState, dispatchProgramAction] = useProgramsContext()

  const program = programState.percentComplete.find(
    program => program.programId === programId
  )

  const percentage = program.percentage

  return (
    <CardContainer>
      <ProgressHeadline>Progress:</ProgressHeadline>
      <GraphWrapper>
        <ProgressGraph
          percentage={percentage}
          setPercentComplete={setPercentComplete}
        />
        <PercentComplete>{percentComplete}%</PercentComplete>
      </GraphWrapper>
    </CardContainer>
  )
}

export default DashboardProgressCard

const CardContainer = styled.div`
  padding: 12px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  gap: 12px;
  justify-items: center;
  background: ${props => props.theme.baseBackgroundColor};
  border-radius: 8px;
`

const ProgressHeadline = styled.h3`
  margin: 0;
  padding: 0;
  font-family: RobotoBold;
  font-size: 22px;
  color: ${props => props.theme.headlinePrimary};
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.1rem;
`

const GraphWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: center;
`

const ProgressGraph = styled(ProgressLoader)`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 120px;
  z-index: 1;
`

const PercentComplete = styled.h3`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  margin: 0;
  padding: 0;
  font-family: RobotoBold;
  font-size: 22px;
  color: ${props => props.theme.primaryAccent};
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.1rem;
`
