import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import NextWorkoutArrow from '../../svgs/NextWorkoutArrow'

const WorkoutSliderButtons = ({
  handleNextVideo,
  handlePrevVideo,
  activeVideo,
  numberOfWorkouts
}) => {
  const [disableNext, setDisableNext] = useState(false)
  const [disablePrev, setDisablePrev] = useState(true)

  useEffect(() => {
    if (activeVideo > 0) {
      setDisablePrev(false)
    }

    if (activeVideo < numberOfWorkouts - 1) {
      setDisableNext(false)
    }

    if (activeVideo === numberOfWorkouts - 1) {
      setDisableNext(true)
    }

    if (activeVideo === 0) {
      setDisablePrev(true)
    }
  }, [activeVideo, numberOfWorkouts])

  return (
    <>
      {numberOfWorkouts === 1 ? null : (
        <WorkoutButtonsContainer>
          <PrevButtonContainer onClick={handlePrevVideo} disable={disablePrev}>
            <NextArrow disablePrev={disablePrev} />
          </PrevButtonContainer>
          <NextButtonContainer onClick={handleNextVideo} disable={disableNext}>
            <NextArrow next disableNext={disableNext} />
          </NextButtonContainer>
        </WorkoutButtonsContainer>
      )}
    </>
  )
}

export default WorkoutSliderButtons

const WorkoutButtonsContainer = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  margin: 0 6px;
  align-self: center;
  display: flex;
  justify-content: space-between;
  z-index: 2;
`

const NextButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props =>
    props.disable ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.4)'};
  border-radius: 50%;
  width: 48px;
  height: 48px;
`

const PrevButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props =>
    props.disable ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.4)'};
  border-radius: 50%;
  width: 48px;
  height: 48px;
`

const NextArrow = styled(NextWorkoutArrow)`
  width: 12px;
  transform: ${props => (props.next ? 'rotate(0)' : 'rotate(180deg)')};
`
