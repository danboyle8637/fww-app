import React, { useContext } from 'react'
import styled from 'styled-components'

import TableCell from './TableCell'
import DialogDotsIcon from '../../svgs/DialogDotsIcon'
import ScreenWidthContext from '../../context/ScreenWidthContext'
import { above } from '../../styles/Theme'

const TrackingRow = ({ goal, date, numbers }) => {
  const device = useContext(ScreenWidthContext)

  return (
    <RowContainer>
      {device === 'mobile' ? (
        <MobileGoalDialogIcon />
      ) : (
        <TableCell data={true}>{goal}</TableCell>
      )}
      <TableCell data={true}>{date}</TableCell>
      <TableCell data={true} center={true}>
        {numbers}
      </TableCell>
    </RowContainer>
  )
}

export default TrackingRow

const RowContainer = styled.div`
  padding: 12px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  border-radius: 8px;
  transition: background-color 200ms ease-in-out;
  &:hover {
    background-color: rgba(179, 182, 225, 0.1);
  }
  ${above.mobile`
    grid-template-columns: 3fr 1fr 1fr;
    gap: 40px;
  `}
`

const MobileGoalDialogIcon = styled(DialogDotsIcon)`
  margin: 0 0 0 16px;
  align-self: center;
  width: 26px;
`
