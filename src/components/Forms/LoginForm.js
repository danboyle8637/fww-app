import React from 'react'
import styled from 'styled-components'

import TextInput from './Inputs/TextInput'
import { useFormStore } from '../../context/FormContext'
import useUpdateFormControls from '../../hooks/useFormControls'
import { above } from '../../styles/Theme'

const LoginForm = () => {
  const [updateInputValues, updateInputOptions] = useUpdateFormControls()
  const [formState, dispatch] = useFormStore()

  return (
    <FormContainer>
      <TextInput />
      <TextInput />
    </FormContainer>
  )
}

export default LoginForm

const FormContainer = styled.form`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);
  row-gap: 30px;
  width: 100%;
`
