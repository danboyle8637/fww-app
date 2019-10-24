import React from 'react'
import styled from 'styled-components'

import UpdateAccountFormTransition from '../../Animations/Transitions/UpdateAccountFormTransition'
import BaseButton from '../Buttons/BaseButton'
import BackChip from '../Chips/BackChip'
import TextInput from './Inputs/TextInput'
import useFormControls from '../../hooks/useFormControls'
import { useFormStore } from '../../context/FormContext'

const AccountUpdateEmailForm = ({ activeSlide, setActiveSlide }) => {
  // eslint-disable-next-line
  const [formState, dispatchFormAction] = useFormStore()
  const [updateInputValues, updateInputOptions] = useFormControls()

  const handleSaveNewEmail = event => {
    event.preventDefault()
    console.log(formState.emailValue.value)
    // Check username and update it in database
  }

  const handleBack = () => setActiveSlide(0)

  return (
    <UpdateAccountFormTransition showNode={activeSlide === 3}>
      <EmailAddressForm onSubmit={handleSaveNewEmail}>
        <BackChip handleClick={handleBack}>Back</BackChip>
        <Header3>Update Email Address:</Header3>
        <InputWrapper>
          <TextInput
            type="text"
            name="emailAddress"
            labelName="New Email:"
            labelFor="emailAddress"
            labelInstructions="Enter new email address..."
            labelError="Can't leave blank!"
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
        <BaseButton type="submit">Save New Email</BaseButton>
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
