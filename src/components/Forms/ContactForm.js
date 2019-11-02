import React from 'react'
import styled from 'styled-components'

import BaseButton from '../Buttons/BaseButton'
import RadioInput from '../Forms/Inputs/RadioInput'
import TextInput from '../Forms/Inputs/TextInput'
import TextArea from '../Forms/Inputs/TextArea'
import { useFormStore } from '../../context/FormContext'
import { useUserContext } from '../../context/UserContext'
import useFormControls from '../../hooks/useFormControls'
import { above } from '../../styles/Theme'

const ContactForm = () => {
  // eslint-disable-next-line
  const [userState, dispatchUserAction] = useUserContext()
  // eslint-disable-next-line
  const [formState, dispatchFormAction] = useFormStore()
  const [updateInputValues, updateInputOptions] = useFormControls()

  const handleContactFormSubmit = event => {
    event.preventDefault()
  }

  return (
    <ContactFormContainer onSubmit={handleContactFormSubmit}>
      <FormLabel>Contact:</FormLabel>
      <InputWrapper>
        <RadioInput
          type="radio"
          name="contactReason"
          labelName={
            userState.firstName
              ? `How can I help ${userState.firstName}`
              : 'How can we help you?'
          }
          value={formState.contactReasonValue.value}
          options={formState.contactReasonValue.options}
          updateInputValue={updateInputValues}
        />
        <TextInput
          type="text"
          name="firstName"
          labelName="name:"
          labelFor="firstName"
          labelInstructions="Only your first name..."
          labelError="Don't leave blank!"
          value={formState.firstNameValue.value}
          valid={formState.firstNameValue.valid}
          initial={formState.firstNameOptions.initial}
          touched={formState.firstNameOptions.touched}
          showInstructions={formState.firstNameOptions.showInstructions}
          onChange={updateInputValues}
          onFocus={updateInputOptions}
          onBlur={updateInputOptions}
        />
        <TextInput
          type="text"
          name="emailAddress"
          labelName="email:"
          labelFor="emailAddress"
          labelInstructions="Enter email for fit profile"
          labelError="Please use a valid email address..."
          value={formState.emailValue.value}
          valid={formState.emailValue.valid}
          initial={formState.emailOptions.initial}
          touched={formState.emailOptions.touched}
          showInstructions={formState.emailOptions.showInstructions}
          onChange={updateInputValues}
          onFocus={updateInputOptions}
          onBlur={updateInputOptions}
        />
        <TextArea
          name="tellMeMore"
          labelName="Tell me more..."
          labelFor="tellMeMore"
          labelInstructions="Be specific!"
          labelError="Don't leave blank!"
          value={formState.contactTellMeMoreValue.value}
          valid={formState.contactTellMeMoreValue.valid}
          initial={formState.contactTellMeMoreOptions.initial}
          touched={formState.contactTellMeMoreOptions.touched}
          showInstructions={formState.contactTellMeMoreOptions.showInstructions}
          onChange={updateInputValues}
          onFocus={updateInputOptions}
          onBlur={updateInputOptions}
        />
      </InputWrapper>
      <BaseButton type="submit">Send Contact Info</BaseButton>
    </ContactFormContainer>
  )
}

export default ContactForm

const ContactFormContainer = styled.form`
  margin: 40px 0 0 0;
  padding: 0 16px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 20px;
  width: 100%;
  ${above.mobile`
    width: 70%;
  `}
  ${above.tablet`
    width: 60%;
  `}
  ${above.ipadPro`
    width: 50%;
  `}
`

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 40px;
`

const FormLabel = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 28px;
  color: ${props => props.theme.mainBackgroundBorderColor};
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 0.1rem;
`
