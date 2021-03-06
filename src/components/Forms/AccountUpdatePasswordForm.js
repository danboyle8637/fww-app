import React, { useState } from 'react'
import styled from 'styled-components'

import UpdateAccountFormTransition from '../../Animations/Transitions/UpdateAccountFormTransition'
import BaseButton from '../Buttons/BaseButton'
import BackChip from '../Chips/BackChip'
import TextInput from './Inputs/TextInput'
import PasswordShowHideIndicator from '../Indicators/PasswordShowHideIndicator'
import useFormControls from '../../hooks/useFormControls'
import { useFormStore } from '../../context/FormContext'
import { usePortalContext } from '../../context/portalContext'
import { useFetchingContext } from '../../context/FetchingContext'
import { useFireBase } from '../Firebase/FirebaseContext'
import siteConfig from '../../utils/siteConfig'

const AccountUpdatePasswordForm = ({
  activeSlide,
  setActiveSlide,
  isSyncing,
  handleToggleSync,
  handleSetSyncMessage,
  setToLogin
}) => {
  const auth = useFireBase()
  // eslint-disable-next-line
  const [formState, dispatchFormAction] = useFormStore()
  // eslint-disable-next-line
  const [portalState, dispatchPortalAction] = usePortalContext()
  const [updateInputValues, updateInputOptions] = useFormControls()
  // eslint-disable-next-line
  const [fetchingState, dispatchFetchingAction] = useFetchingContext()
  const [showPassword, setShowPassword] = useState(false)

  const handleSaveNewPassword = event => {
    event.preventDefault()

    handleToggleSync()
    dispatchFetchingAction({ type: 'toggleFetching' })
    setShowPassword(false)

    const newPassword = formState.passwordValue.value
    const confirmPassword = formState.confirmPasswordValue.value
    const url = `${siteConfig.api.baseUrl}/update-password`

    const updatePasswordReq = {
      newPassword: newPassword,
      confirmPassword: confirmPassword
    }

    auth
      .getCurrentUser()
      .then(user => {
        user.getIdToken(true).then(token => {
          fetch(url, {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(updatePasswordReq)
          })
            .then(response => response.json())
            .then(data => {
              dispatchFormAction({ type: 'resetChangePasswordForm' })
              handleSetSyncMessage(data.message)
              handleToggleSync()
              dispatchFetchingAction({ type: 'toggleFetching' })
              auth.logUserOut()
              dispatchPortalAction({
                type: 'toggleErrorMessage',
                value: 'User Credentials Change. Please Log Back In!'
              })
              setToLogin(true)
            })
            .catch(error => {
              dispatchFormAction({ type: 'resetChangePasswordForm' })
              handleSetSyncMessage(error.message)
              handleToggleSync()
              dispatchFetchingAction({ type: 'toggleFetching' })
            })
        })
      })
      .catch(() => {
        dispatchPortalAction({
          type: 'toggleErrorMessage',
          value: `😢 Could not get your user account. Just try again. If it keeps happening, let us know.`
        })
      })
  }

  const toggleShowPassword = () => {
    setShowPassword(preValue => !preValue)
  }

  const handleBack = () => setActiveSlide(0)

  return (
    <UpdateAccountFormTransition showNode={activeSlide === 3}>
      <UsernameForm onSubmit={handleSaveNewPassword}>
        <BackChip handleClick={handleBack}>Back</BackChip>
        <Header3>Update Password:</Header3>
        <PasswordShowHideIndicator
          showPassword={showPassword}
          toggleShowPassword={toggleShowPassword}
        />
        <InputWrapper>
          <TextInput
            type={showPassword ? 'text' : 'password'}
            name="loginPassword"
            labelName="New Password:"
            labelFor="loginPassword"
            labelInstructions="Enter new password..."
            labelError="Can't leave blank!"
            value={formState.passwordValue.value}
            valid={formState.passwordValue.valid}
            initial={formState.passwordOptions.initial}
            touched={formState.passwordOptions.touched}
            showInstructions={formState.passwordOptions.showInstructions}
            onChange={updateInputValues}
            onFocus={updateInputOptions}
            onBlur={updateInputOptions}
          />
          <TextInput
            type={showPassword ? 'text' : 'password'}
            name="loginConfirmPassword"
            labelName="Confirm Password:"
            labelFor="loginConfirmPassword"
            labelInstructions="Confirm password..."
            labelError="Can't leave blank!"
            value={formState.confirmPasswordValue.value}
            valid={formState.confirmPasswordValue.valid}
            initial={formState.confirmPasswordOptions.initial}
            touched={formState.confirmPasswordOptions.touched}
            showInstructions={formState.confirmPasswordOptions.showInstructions}
            onChange={updateInputValues}
            onFocus={updateInputOptions}
            onBlur={updateInputOptions}
          />
        </InputWrapper>
        <BaseButton type="submit">
          {isSyncing ? 'Updaing Your Password' : 'Save New Password'}
        </BaseButton>
      </UsernameForm>
    </UpdateAccountFormTransition>
  )
}

export default AccountUpdatePasswordForm

const UsernameForm = styled.form`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const InputWrapper = styled.div`
  margin: 20px 0 40px 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  width: 100%;
`

const Header3 = styled.h3`
  margin: 12px 0 0 0;
  padding: 0;
  font-size: 22px;
`
