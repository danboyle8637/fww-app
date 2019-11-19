import React from 'react'
import styled from 'styled-components'

import HeartIcon from '../../../svgs/HeartIcon'
import { useWorkoutStatsContext } from '../../../context/WorkoutStatsContext'

const WorkoutFavoriteSection = ({ programId, workoutId }) => {
  // eslint-disable-next-line
  const [workoutStatsState, dispatchStatsAction] = useWorkoutStatsContext()

  const programStats = workoutStatsState[`${programId}`]
  const isFavoriteStat = programStats[`${workoutId}`]

  return (
    <FavoriteContainer>
      <FooterLabel>Favorite</FooterLabel>
      <FavoriteIcon
        isFavorite={isFavoriteStat ? isFavoriteStat.isFavorite : false}
      />
    </FavoriteContainer>
  )
}

export default WorkoutFavoriteSection

const FavoriteContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  gap: 4px;
  justify-items: center;
`

const FavoriteIcon = styled(HeartIcon)`
  width: 22px;
`

const FooterLabel = styled.p`
  font-family: QuicksandMedium;
  font-size: 12px;
  color: ${props => props.theme.footerAddressText};
  text-transform: uppercase;
`
