import React from 'react'
import styled from 'styled-components'

import DialogBoxTransition from '../../Animations/Transitions/DialogBoxTransition'
import DialogCloseIcon from '../../svgs/DialogCloseIcon'
import { usePortalContext } from '../../context/portalContext'
import { above } from '../../styles/Theme'

const MessageDialog = ({ isEmailConfirm = false, handleConfirmEmailClick }) => {
  const [portalState, dispatchPortalAction] = usePortalContext()

  const handleCloseDialogBox = () => {
    dispatchPortalAction({ type: 'toggleMessageDialog' })
  }

  return (
    <DialogBoxTransition toggleDialog={portalState.messageDialog.isOpen}>
      <DialogContainer>
        <DialogText>{portalState.messageDialog.message}</DialogText>
        {isEmailConfirm ? (
          <ButtonContainer>
            <EmailConfirmButton
              onClick={() => handleConfirmEmailClick('correct')}
              correct={true}
            >
              Correct!
            </EmailConfirmButton>
            <EmailConfirmButton
              onClick={() => handleConfirmEmailClick('incorrect')}
            >
              Not Correct!
            </EmailConfirmButton>
          </ButtonContainer>
        ) : null}
        <CloseIcon handleCloseDialogBox={handleCloseDialogBox} />
      </DialogContainer>
    </DialogBoxTransition>
  )
}

export default MessageDialog

const DialogContainer = styled.div`
  position: fixed;
  bottom: 50%;
  left: 4%;
  right: 4%;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  align-items: center;
  border-radius: 8px;
  background: ${props => props.theme.accentBackgroundColor};
  border: 2px solid ${props => props.theme.secondaryAccent};
  box-shadow: 0 3px 16px 6px rgba(0, 0, 0, 0.4);
  z-index: 5000;
  transform: translate(0, 50%);
  ${above.mobile`
    left: 14%;
    right: 14%;
  `}
  ${above.tablet`
    left: 22%;
    right: 22%;
  `}
  ${above.ipadPro`
    left: 30%;
    right: 30%;
  `}
  ${above.laptop`
    left: 40%;
    right: 40%;
  `}
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

const ButtonContainer = styled.div`
  margin: 12px 0 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  width: 100%;
`

const EmailConfirmButton = styled.button`
  margin: 12px 0 0 0;
  padding: 6px 12px;
  background-color: ${props =>
    props.correct
      ? props.theme.primaryAccent
      : props.theme.formErrorBackground};
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 800;
  text-transform: uppercase;
  text-align: center;
  color: ${props => props.theme.baseBackgroundColor};
  box-shadow: 0 2px 3px 3px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 38px;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  transition: background-color, border-color, border-width, border-style, color,
    200ms ease-in-out;
  &:focus {
    box-shadow: ${props =>
      props.correct
        ? '0 0 0 2px #000, 0 0 0 5px #aff8ff;'
        : '0 0 0 2px #000, 0 0 0 5px #ffaac6;'};
  }
  ${above.mobile`
    margin: 20px 0 0 0;
    font-size: 16px;
    height: 48px;
  `}
`
