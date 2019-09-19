import React from 'react'
import styled from 'styled-components'

import FavoriteWorkoutIcon from '../../../svgs/FavoriteWorkoutIcon'

const FavoriteWorkoutCheckboxInput = ({
  type,
  options,
  updateCheckboxValues
}) => {
  const radios = options.map(option => {
    return (
      <InputLabel key={option.value} htmlFor={option.value}>
        <HiddenRadioInput
          type={type}
          id={option.value}
          name={option.value}
          title={option.workoutId}
          checked={option.isFavorite}
          onChange={updateCheckboxValues}
        />
        <FavoriteWorkout isFavorite={option.isFavorite} />
      </InputLabel>
    )
  })

  return <>{radios}</>
}

export default FavoriteWorkoutCheckboxInput

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

const FavoriteWorkout = styled(FavoriteWorkoutIcon)`
  width: 40px;
`
