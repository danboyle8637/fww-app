import React from 'react'
import styled from 'styled-components'

import FavoriteWorkoutCheckboxInput from './Inputs/FavoriteWorkoutCheckboxInput'
import useStatsControls from '../../hooks/useStatsControls'

const FavoriteWorkoutForm = ({ workoutId, isFavorite }) => {
  // eslint-disable-next-line
  const [updateCheckboxValues] = useStatsControls()

  return (
    <FormContainer>
      <Label>Mark as favorite:</Label>
      <Form>
        <FavoriteWorkoutCheckboxInput
          type="checkbox"
          options={[
            {
              workoutId: workoutId,
              value: 'isFavoriteWorkout',
              isFavorite: isFavorite
            }
          ]}
          updateCheckboxValues={updateCheckboxValues}
        />
      </Form>
    </FormContainer>
  )
}

export default FavoriteWorkoutForm

const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Form = styled.form`
  margin: 0 0 0 12px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
`

const Label = styled.p`
  font-family: RobotoBold;
  font-size: 18px;
  color: ${props => props.theme.headlineSecondary};
`
