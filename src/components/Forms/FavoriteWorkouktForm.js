import React from 'react'
import styled from 'styled-components'

import FavoriteWorkoutIcon from '../../svgs/FavoriteWorkoutIcon'
import { useWorkoutStatsContext } from '../../context/WorkoutStatsContext'
import siteConfig from '../../utils/siteConfig'

const FavoriteWorkoutForm = ({
  programId,
  workoutId,
  handleToggleSync,
  handleSetSyncMessage
}) => {
  const [workoutStatsState, dispatchStatsAction] = useWorkoutStatsContext()

  const isFavorite = workoutStatsState.stats[workoutId].isFavorite

  const handleFavoriteWorkoutClick = () => {
    dispatchStatsAction({
      type: 'toggleIsFavoriteWorkout',
      value: workoutId
    })

    handleToggleSync()
    handleToggleFavoriteInDatebase()
  }

  const handleToggleFavoriteInDatebase = () => {
    // TODO replace username with username from state
    const username = 'pampam'

    const favoriteBody = {
      programId: programId,
      workoutId: workoutId,
      username: username
    }

    const baseUrl = siteConfig.api.baseUrl
    const toggleFavorite = '/toggle-favorite'
    const url = `${baseUrl}${toggleFavorite}`

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(favoriteBody)
    })
      .then(response => response.json())
      .then(data => {
        handleSetSyncMessage(data.message)
        handleToggleSync()
      })
      .catch(errorObj => {
        handleSetSyncMessage(errorObj.message)
        handleToggleSync()
      })
  }

  return (
    <FormContainer>
      <Label>Mark as favorite:</Label>
      <ButtonWrapper>
        <FavoriteWorkout
          isFavorite={isFavorite}
          handleFavoriteWorkoutClick={handleFavoriteWorkoutClick}
        />
      </ButtonWrapper>
    </FormContainer>
  )
}

export default FavoriteWorkoutForm

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  align-items: center;
`

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 12px;
  align-items: center;
  justify-items: start;
`

const Label = styled.p`
  font-family: RobotoBold;
  font-size: 18px;
  color: ${props => props.theme.headlineSecondary};
`

const FavoriteWorkout = styled(FavoriteWorkoutIcon)`
  width: 40px;
`
