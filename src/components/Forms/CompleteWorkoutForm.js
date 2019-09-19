import React from 'react'
import styled from 'styled-components'

import CompleteWorkoutCheckboxInput from './Inputs/CompleteWorkoutCheckboxInput'
import useStatsControls from '../../hooks/useStatsControls'

const CompleteWorkoutForm = ({ workoutId, completed }) => {
  // eslint-disable-next-line
  const [updateCheckboxValues] = useStatsControls()

  const options = Object.values(completed)

  return (
    <FormContainer>
      <Label>Complete workout:</Label>
      <Form>
        <CompleteWorkoutCheckboxInput
          type="checkbox"
          options={options}
          workoutId={workoutId}
          updateCheckboxValues={updateCheckboxValues}
        />
      </Form>
    </FormContainer>
  )
}

export default CompleteWorkoutForm

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
