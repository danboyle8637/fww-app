import React from 'react'
import styled from 'styled-components'

import DialogTransition from '../../Animations/Transitions/DialogBoxTransition'
import DialogCloseIcon from '../../svgs/DialogCloseIcon'
import { usePortalContext } from '../../context/portalContext'

const ErrorIndicator = ({ errorMessage }) => {
  const [portalState, dispatchPortalAction] = usePortalContext()

  const handleCloseDialogBox = () => {
    dispatchPortalAction({ type: 'toggleErrorMessage' })
  }

  return (
    <DialogTransition toggleDialog={portalState.errorMessage.isOpen}>
      <ErrorContainer>
        <ErrorText>{errorMessage}</ErrorText>
        <CloseIcon
          lightMode={true}
          handleCloseDialogBox={handleCloseDialogBox}
        />
      </ErrorContainer>
    </DialogTransition>
  )
}

export default ErrorIndicator

const ErrorContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 12px;
  right: 12px;
  padding: 12px;
  background: ${props => props.theme.formErrorBackground};
  border-radius: 10px;
  box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.3);
  z-index: 2;
`

const ErrorText = styled.p`
  font-size: 15px;
  color: ${props => props.theme.whiteText};
`

const CloseIcon = styled(DialogCloseIcon)`
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  transform: translate(20%, -50%);
`
