import React from 'react'

import VimeoPlayer from '../components/Shared/VimeoPlayer'
import ResetWorkoutPageHeader from '../components/PageHeaders/ResetWorkoutPageHeader'
import WorkoutParser from '../components/CoachingPage/WorkoutParser'

const ResetWorkoutCoaching = ({ match }) => {
  return (
    <>
      <ResetWorkoutPageHeader name="Coaching" />
      <VimeoPlayer videoId={'355818758'} />
      <WorkoutParser workoutId={match.params.workoutId} />
    </>
  )
}

export default ResetWorkoutCoaching
