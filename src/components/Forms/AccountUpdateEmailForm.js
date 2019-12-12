import React, { useEffect } from 'react'
import styled from 'styled-components'

import UpdateAccountFormTransition from '../../Animations/Transitions/UpdateAccountFormTransition'
import BaseButton from '../Buttons/BaseButton'
import BackChip from '../Chips/BackChip'
import TextInput from './Inputs/TextInput'
import useFormControls from '../../hooks/useFormControls'
import { useFormStore } from '../../context/FormContext'
import { usePortalContext } from '../../context/portalContext'
import { useUserContext } from '../../context/UserContext'
import { useFireBase } from '../Firebase/FirebaseContext'
import siteConfig from '../../utils/siteConfig'

const AccountUpdateEmailForm = ({
  activeSlide,
  setActiveSlide,
  isSyncing,
  handleToggleSync,
  handleSetSyncMessage,
  setToLogin,
  emailCorrect,
  setEmailCorrect
}) => {
  const auth = useFireBase()
  const [formState, dispatchFormAction] = useFormStore()
  const [updateInputValues, updateInputOptions] = useFormControls()
  // eslint-disable-next-line
  const [portalState, dispatchPortalAction] = usePortalContext()
  // eslint-disable-next-line
  const [userState, dispatchUserAction] = useUserContext()

  const handleSaveEmailClick = event => {
    event.preventDefault()

    dispatchPortalAction({ type: 'toggleMessageDialog' })
    dispatchPortalAction({
      type: 'setMessageDialogMessage',
      value: `Are you sure ${formState.emailValue.value} is the correct email address?`
    })
  }

  useEffect(() => {
    if (emailCorrect) {
      setEmailCorrect(false)
      handleToggleSync()

      const updateEmailReq = {
        newEmail: formState.emailValue.value
      }

      const url = `${siteConfig.api.baseUrl}/update-email`

      auth.getCurrentUser().then(user => {
        user.getIdToken(true).then(token => {
          fetch(url, {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(updateEmailReq)
          })
            .then(response => response.json())
            .then(data => {
              dispatchFormAction({ type: 'resetChangeEmailForm' })
              handleSetSyncMessage(data.message)
              handleToggleSync()
              auth.logUserOut()
              dispatchUserAction({ type: 'setLoggedOutUser' })
              dispatchPortalAction({
                type: 'toggleErrorMessage',
                value:
                  '💪 Your email address has been updated! Please Log Back In!'
              })
              setToLogin(true)
            })
            .catch(error => {
              dispatchFormAction({ type: 'resetChangeEmailForm' })
              handleSetSyncMessage(error.message)
              handleToggleSync()
            })
        })
      })
    }
  }, [
    auth,
    dispatchFormAction,
    dispatchPortalAction,
    dispatchUserAction,
    emailCorrect,
    formState.emailValue.value,
    handleSetSyncMessage,
    handleToggleSync,
    setEmailCorrect,
    setToLogin
  ])

  const handleBack = () => setActiveSlide(0)

  return (
    <UpdateAccountFormTransition showNode={activeSlide === 2}>
      <EmailAddressForm onSubmit={handleSaveEmailClick}>
        <BackChip handleClick={handleBack}>Back</BackChip>
        <Header3>Update Email Address:</Header3>
        <InputWrapper>
          <TextInput
            type="email"
            name="emailAddress"
            labelName="New Email:"
            labelFor="emailAddress"
            labelInstructions="Enter new email address..."
            labelError="Use a valid email"
            value={formState.emailValue.value}
            valid={formState.emailValue.valid}
            initial={formState.emailOptions.initial}
            touched={formState.emailOptions.touched}
            showInstructions={formState.emailOptions.showInstructions}
            onChange={updateInputValues}
            onFocus={updateInputOptions}
            onBlur={updateInputOptions}
          />
        </InputWrapper>
        <BaseButton type="submit">
          {isSyncing ? 'Updaing Email Address' : 'Save New Email'}
        </BaseButton>
      </EmailAddressForm>
    </UpdateAccountFormTransition>
  )
}

export default AccountUpdateEmailForm

const EmailAddressForm = styled.form`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const InputWrapper = styled.div`
  margin: 20px 0 40px 0;
  width: 100%;
`

const Header3 = styled.h3`
  margin: 12px 0 0 0;
  padding: 0;
  font-size: 22px;
`
