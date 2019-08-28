import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import FormCheck from '../../../svgs/FormCheck'
import FormInstructionsTransition from '../../../Animations/Transitions/FormInstructionsTransition'
import FormLabelTransition from '../../../Animations/Transitions/FormLabelTransition'

const TextInput = props => {
  const { labelName, labelFor, labelInstructions, labelError } = props
  const [isNormal, setIsNormal] = useState(true)
  const [isError, setIsError] = useState(false)
  const [isValid, setIsValid] = useState(false)
  const [isTouched, setIsTouched] = useState(false)

  useEffect(() => {
    setIsNormal(props.initial && !props.touched && !props.error)
    setIsError(!props.initial && !props.valid)
    setIsValid(!props.touched && props.valid)
    setIsTouched(props.touched)
  }, [props.initial, props.touched, props.error, props.valid])

  // const isNormal = props.initial && !props.touched && !props.error
  // const isError = !props.initial && !props.valid
  // const isValid = !props.touched && props.valid
  // const isTouched = props.touched

  return (
    <InputContainer touched={props.touched} error={isError} valid={isValid}>
      <FormInstructionsTransition isTouched={isTouched}>
        <HelpLabel htmlFor={labelFor}>{labelInstructions}</HelpLabel>
      </FormInstructionsTransition>
      <FormInstructionsTransition isTouched={isError && !isTouched}>
        <HelpLabel htmlFor={labelFor}>{labelError}</HelpLabel>
      </FormInstructionsTransition>
      <FormLabelTransition isTouched={isNormal}>
        <InputLabel htmlFor={labelFor}>{labelName}</InputLabel>
      </FormLabelTransition>
      {isValid && <CheckMark />}
      <Input isValid={isValid} {...props} />
    </InputContainer>
  )
}

export default TextInput

const InputContainer = styled.div`
  position: relative;
  padding: 2px;
  display: flex;
  flex-direction: column;
  background-color: ${props =>
    props.touched
      ? props.theme.headlinePrimary
      : props.error
      ? props.theme.formErrorBackground
      : props.valid
      ? props.theme.mainBackgroundColor
      : props.theme.strongBodyText};
  border-radius: 6px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.3);
  width: 100%;
  transition: background-color 100ms ease-in-out;
`

const InputLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 0;
  margin: 0;
  padding: 1px 8px;
  display: inline;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1.4px;
  color: ${props => props.theme.whiteText};
  background: ${props => props.theme.mainBackgroundColor};
  text-transform: uppercase;
  pointer-events: none;
  transform: translate(10%, -50%);
`

const HelpLabel = styled(InputLabel)`
  position: absolute;
  font-size: 13px;
  color: ${props => props.theme.bodyText};
  border-radius: 8px;
`

const Input = styled.input`
  margin: 0;
  padding: 8px;
  background: ${props => props.theme.mainBackgroundColor};
  border: none;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 400;
  color: ${props =>
    props.isValid ? props.theme.accentBackgroundColor : props.theme.bodyText};
  width: 100%;
  outline: none;
`

const CheckMark = styled(FormCheck)`
  position: absolute;
  top: 50%;
  right: 5%;
  width: 22px;
  transform: translate(0, -50%);
`
