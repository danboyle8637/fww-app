import React from 'react'
import styled from 'styled-components'

import ChooseResetProgramCard from '../../Cards/ChooseResetProgramCard'

const CardRadioInput = ({ name, options, updateInputValues, signUpCard }) => {
  const radios = options.map(option => {
    return (
      <InputLabel htmlFor={option.value} key={option.value}>
        <HiddenRadioInput
          type="radio"
          id={option.value}
          name={name}
          value={option.value}
          checked={option.checked}
          onChange={updateInputValues}
        />
        <ChooseResetProgramCard
          programId={option.value}
          description={option.description}
          fitnessLevel={option.fitnessLevel}
          numberOfWorkouts={option.numberOfWorkouts}
          duration={option.duration}
          checked={option.checked}
          signUpCard={signUpCard}
        />
      </InputLabel>
    )
  })

  return <>{radios}</>
}

export default CardRadioInput

const InputLabel = styled.label`
  position: relative;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  width: 100%;
  &:last-child {
    margin-bottom: 0;
  }
`

const HiddenRadioInput = styled.input.attrs({ type: 'radio' })`
  visibility: hidden;
  margin: 0;
  width: 0;
`
