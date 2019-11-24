import React from 'react'
import styled from 'styled-components'

import UpdateAccountFormTransition from '../../Animations/Transitions/UpdateAccountFormTransition'
import BaseButton from '../Buttons/BaseButton'
import BackChip from '../Chips/BackChip'
import TextInput from './Inputs/TextInput'
import useFormControls from '../../hooks/useFormControls'
import { useFormStore } from '../../context/FormContext'
import { usePortalContext } from '../../context/portalContext'
import { useFireBase } from '../Firebase/FirebaseContext'
import siteConfig from '../../utils/siteConfig'

const AccountUpdateEmailForm = ({
  activeSlide,
  setActiveSlide,
  isSyncing,
  handleToggleSync,
  handleSetSyncMessage,
  setToLogin
}) => {
  const auth = useFireBase()
  const [formState, dispatchFormAction] = useFormStore()
  const [updateInputValues, updateInputOptions] = useFormControls()
  // eslint-disable-next-line
  const [portalState, dispatchPortalAction] = usePortalContext()

  const handleSaveNewEmail = event => {
    event.preventDefault()
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
            dispatchPortalAction({
              type: 'toggleErrorMessage',
              value: 'Credentials Changed. Please Log Back In!'
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

  const handleBack = () => setActiveSlide(0)

  // TODO Possibly make a popup to make sure they typed in their email correctly.
  return (
    <UpdateAccountFormTransition showNode={activeSlide === 2}>
      <EmailAddressForm onSubmit={handleSaveNewEmail}>
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
