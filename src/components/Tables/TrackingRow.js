import React, { useContext } from 'react'
import styled from 'styled-components'

import TableCell from './TableCell'
import DialogDotsIcon from '../../svgs/DialogDotsIcon'
import ScreenWidthContext from '../../context/ScreenWidthContext'
import InfoDialog from '../Dialogs/InfoDialog'
import Portal from '../Shared/Portal'
import { usePortalContext } from '../../context/portalContext'
import { above } from '../../styles/Theme'

const TrackingRow = ({ id, goal, date, numbers }) => {
  const device = useContext(ScreenWidthContext)
  const [portalState, dispatchPortalAction] = usePortalContext()

  const handleToggleInfoDialog = () => {
    dispatchPortalAction({ type: 'toggleDialogBox', value: id })
  }

  return (
    <RowContainer>
      {device === 'mobile' || device === 'tablet' ? (
        <MobileGoalDialogIcon handleToggleInfoDialog={handleToggleInfoDialog} />
      ) : (
        <TableCell data={true}>{goal}</TableCell>
      )}
      <TableCell data={true} center={true}>
        {date || '--'}
      </TableCell>
      <TableCell data={true} center={true}>
        {numbers || '--'}
      </TableCell>
      <Portal>
        <InfoDialog id={id} boxes={portalState.dialogBox.boxes} text={goal} />
      </Portal>
    </RowContainer>
  )
}

export default TrackingRow

const RowContainer = styled.div`
  padding: 12px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  align-items: center;
  border-radius: 8px;
  transition: background-color 200ms ease-in-out;
  &:hover {
    background-color: rgba(179, 182, 225, 0.1);
  }
  ${above.mobile`
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  `}
  ${above.tablet`
    grid-template-columns: 2fr 1fr 1fr;
    gap: 20px;
  `}
`

const MobileGoalDialogIcon = styled(DialogDotsIcon)`
  justify-self: center;
  align-self: center;
  width: 26px;
`
