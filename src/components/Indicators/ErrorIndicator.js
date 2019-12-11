import React from 'react'
import styled from 'styled-components'

import DialogTransition from '../../Animations/Transitions/DialogBoxTransition'
import DialogCloseIcon from '../../svgs/DialogCloseIcon'
import { usePortalContext } from '../../context/portalContext'
import { above } from '../../styles/Theme'

const ErrorIndicator = ({ setToEmergencySignUp, setEmergencySlug }) => {
  const [portalState, dispatchPortalAction] = usePortalContext()

  const handleCloseDialogBox = () => {
    dispatchPortalAction({ type: 'toggleErrorMessage', value: '' })
  }

  const handleEmergencyButtonClick = () => {
    dispatchPortalAction({ type: 'toggleErrorMessage', value: '' })
    setEmergencySlug(portalState.errorMessage.redirectSlug)
    setToEmergencySignUp(true)
  }

  return (
    <DialogTransition toggleDialog={portalState.errorMessage.isOpen}>
      <ErrorContainer>
        <ErrorText>{portalState.errorMessage.message}</ErrorText>
        {portalState.errorMessage.showButton ? (
          <EmergencyButton onClick={handleEmergencyButtonClick}>
            {portalState.errorMessage.buttonText}
          </EmergencyButton>
        ) : null}
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
  bottom: 100px;
  left: 12px;
  right: 12px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: ${props =>
    `linear-gradient(45deg, ${props.theme.formErrorBackground}, #d21050)`};
  border-radius: 10px;
  box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.3);
  z-index: 5000;
  ${above.mobile`
    left: 50%;
    width: 600px;
    transform: translateX(-50%);
  `}
  ${above.ipadPro`
    left: 50%;
    width: 800px;
    transform: translateX(-50%);
  `}
`

const ErrorText = styled.p`
  font-size: 15px;
  color: ${props => props.theme.whiteText};
  ${above.mobile`
    font-size: 20px;
    font-weight: 800;
    line-height: 1.4;
  `}
  ${above.tablet`
    font-size: 22px;
  `}
`

const EmergencyButton = styled.button`
  margin: 12px 0 0 0;
  padding: 6px 12px;
  background-color: ${props => props.theme.whiteText};
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
    box-shadow: 0 0 0 2px #000, 0 0 0 5px #ffaac6;
  }
  ${above.mobile`
    margin: 20px 0 0 0;
    font-size: 18px;
    height: 48px;
  `}
`

const CloseIcon = styled(DialogCloseIcon)`
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  transform: translate(20%, -50%);
`
