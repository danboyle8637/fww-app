import React from 'react'
import styled from 'styled-components'

import UpdateAccountFormTransition from '../../Animations/Transitions/UpdateAccountFormTransition'
import BaseButton from '../Buttons/BaseButton'
import BackChip from '../Chips/BackChip'
import TextInput from './Inputs/TextInput'
import useFormControls from '../../hooks/useFormControls'
import { useFormStore } from '../../context/FormContext'

const AccountUpdateUsernameForm = ({ activeSlide, setActiveSlide }) => {
  // eslint-disable-next-line
  const [formState, dispatchFormAction] = useFormStore()
  const [updateInputValues, updateInputOptions] = useFormControls()

  const handleSaveNewUsername = event => {
    event.preventDefault()
    console.log(formState.usernameValue.value)
    // Check username and update it in database
  }

  const handleBack = () => setActiveSlide(0)

  return (
    <UpdateAccountFormTransition showNode={activeSlide === 2}>
      <UsernameForm onSubmit={handleSaveNewUsername}>
        <BackChip handleClick={handleBack}>Back</BackChip>
        <Header3>Update Username:</Header3>
        <InputWrapper>
          <TextInput
            type="text"
            name="username"
            labelName="New Username:"
            labelFor="username"
            labelInstructions="Enter new username..."
            labelError="Can't leave blank!"
            value={formState.usernameValue.value}
            valid={formState.usernameValue.valid}
            initial={formState.usernameOptions.initial}
            touched={formState.usernameOptions.touched}
            showInstructions={formState.usernameOptions.showInstructions}
            onChange={updateInputValues}
            onFocus={updateInputOptions}
            onBlur={updateInputOptions}
          />
        </InputWrapper>
        <BaseButton type="submit">Save New Username</BaseButton>
      </UsernameForm>
    </UpdateAccountFormTransition>
  )
}

export default AccountUpdateUsernameForm

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
  width: 100%;
`

const Header3 = styled.h3`
  margin: 12px 0 0 0;
  padding: 0;
  font-size: 22px;
`
