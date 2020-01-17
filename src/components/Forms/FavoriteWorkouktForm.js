import React from 'react'
import styled from 'styled-components'

import FavoriteWorkoutIcon from '../../svgs/FavoriteWorkoutIcon'
import { useWorkoutStatsContext } from '../../context/WorkoutStatsContext'
import { useFetchingContext } from '../../context/FetchingContext'
import { useFireBase } from '../Firebase/FirebaseContext'
import siteConfig from '../../utils/siteConfig'

const FavoriteWorkoutForm = ({
  programId,
  workoutId,
  handleToggleSync,
  handleSetSyncMessage
}) => {
  const auth = useFireBase()
  const [workoutStatsState, dispatchStatsAction] = useWorkoutStatsContext()
  // eslint-disable-next-line
  const [fetchingState, dispatchFetchingAction] = useFetchingContext()

  const programStats = workoutStatsState[programId]
  const isFavorite = programStats[workoutId].isFavorite

  const handleFavoriteWorkoutClick = () => {
    dispatchStatsAction({
      type: 'toggleIsFavoriteWorkout',
      value: {
        programId: programId,
        workoutId: workoutId
      }
    })

    handleToggleSync()
    dispatchFetchingAction({ type: 'toggleFetching' })
    handleToggleFavoriteInDatebase()
  }

  const handleToggleFavoriteInDatebase = () => {
    const favoriteBody = {
      programId: programId,
      workoutId: workoutId
    }

    const baseUrl = siteConfig.api.baseUrl
    const toggleFavorite = '/toggle-favorite'
    const url = `${baseUrl}${toggleFavorite}`

    auth.getCurrentUser().then(user => {
      user.getIdToken(true).then(token => {
        fetch(url, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(favoriteBody)
        })
          .then(response => response.json())
          .then(data => {
            handleSetSyncMessage(data.message)
            handleToggleSync()
            dispatchFetchingAction({ type: 'toggleFetching' })
          })
          .catch(errorObj => {
            handleSetSyncMessage(errorObj.message)
            handleToggleSync()
            dispatchFetchingAction({ type: 'toggleFetching' })
          })
      })
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
