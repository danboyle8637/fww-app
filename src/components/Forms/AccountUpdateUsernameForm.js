import React from 'react'
import styled from 'styled-components'

import { Header3 } from '../../styles/Typography'
import BaseButton from '../Buttons/BaseButton'
import TextInput from './Inputs/TextInput'
import useFormControls from '../../hooks/useFormControls'
import { useFormStore } from '../../context/FormContext'

const AccountUpdateUsernameForm = () => {
  // eslint-disable-next-line
  const [formState, dispatchFormAction] = useFormStore()

  return (
    <UsernameForm>
      <Header3>Update Username:</Header3>
      <TextInput type="text" name="username" labelName="New Username:" labelFor="username" labelInstructions="Enter new username..." labelError="Can't leave blank!" value={} />
    </UsernameForm>
  )
}

export default AccountUpdateUsernameForm

const UsernameForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
