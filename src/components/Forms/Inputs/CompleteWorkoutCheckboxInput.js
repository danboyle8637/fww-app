import React from 'react'
import styled from 'styled-components'

import CompleteWorkoutIcon from '../../../svgs/CompleteWorkoutIcon'

const CompleteWorkoutCheckboxInput = ({
  type,
  options,
  workoutId,
  updateCheckboxValues
}) => {
  const sortedCheckboxes = options.sort((first, second) => {
    return first.id - second.id
  })

  const checkboxes = sortedCheckboxes.map(option => {
    return (
      <InputLabel key={option.value} htmlFor={option.value}>
        <HiddenCheckboxInput
          type={type}
          id={option.value}
          name={option.value}
          title={workoutId}
          checked={option.isComplete}
          onChange={updateCheckboxValues}
        />
        <CompleteWorkout isComplete={option.isComplete} />
      </InputLabel>
    )
  })

  return <>{checkboxes}</>
}

export default CompleteWorkoutCheckboxInput

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

const HiddenCheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  visibility: hidden;
  margin: 0;
  width: 0;
`

const CompleteWorkout = styled(CompleteWorkoutIcon)`
  width: 40px;
`
