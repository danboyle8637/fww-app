import React from 'react'
import styled from 'styled-components'

import DialogBoxTransition from '../../Animations/Transitions/DialogBoxTransition'
import DialogCloseIcon from '../../svgs/DialogCloseIcon'
import { usePortalContext } from '../../context/portalContext'

const MessageDialog = () => {
  // eslint-disable-next-line
  const [portalState, dispatchPortalAction] = usePortalContext()

  const handleCloseDialogBox = () => {
    dispatchPortalAction({ type: 'toggleMessageDialog' })
  }

  return (
    <DialogBoxTransition toggleDialog={portalState.messageDialog.isOpen}>
      <DialogContainer>
        <DialogText>{portalState.messageDialog.message}</DialogText>
        <CloseIcon handleCloseDialogBox={handleCloseDialogBox} />
      </DialogContainer>
    </DialogBoxTransition>
  )
}

export default MessageDialog

const DialogContainer = styled.div`
  position: fixed;
  bottom: 50%;
  left: 14%;
  right: 14%;
  padding: 12px 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
  background: ${props => props.theme.accentBackgroundColor};
  border: 2px solid ${props => props.theme.secondaryAccent};
  box-shadow: 0 3px 16px 6px rgba(0, 0, 0, 0.4);
  z-index: 16;
`

const DialogText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
  color: ${props => props.theme.bodyText};
  line-height: 1.8;
`

const CloseIcon = styled(DialogCloseIcon)`
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  transform: translate(50%, -50%);
`
