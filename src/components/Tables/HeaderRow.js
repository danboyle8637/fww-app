import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

import TableCell from './TableCell'
import ScreenWidthContext from '../../context/ScreenWidthContext'
import { above } from '../../styles/Theme'

const HeaderRow = () => {
  const [goalLabel, setGoalLabel] = useState('Workout Goal')
  const device = useContext(ScreenWidthContext)

  useEffect(() => {
    if (device === 'mobile') {
      setGoalLabel('Goal')
    } else {
      setGoalLabel('Workout Goal')
    }
  }, [device])

  return (
    <RowContainer>
      <TableCell header={true}>{goalLabel}</TableCell>
      <TableCell header={true}>Date</TableCell>
      <TableCell header={true} center={true}>
        Numbers
      </TableCell>
    </RowContainer>
  )
}

export default HeaderRow

const RowContainer = styled.div`
  padding: 12px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  ${above.mobile`
    grid-template-columns: 3fr 1fr 1fr;
    gap: 40px;
  `}
`
