import React from 'react'

import VimeoPlayer from '../components/Shared/VimeoPlayer'
import ResetWorkoutPageHeader from '../components/PageHeaders/ResetWorkoutPageHeader'
import WorkoutParser from '../components/CoachingPage/WorkoutParser'

const ResetWorkoutCoaching = ({ match, location }) => {
  return (
    <>
      <ResetWorkoutPageHeader title="Coaching" />
      <VimeoPlayer videoId={location.state.coachingVideo} />
      <WorkoutParser workoutId={match.params.workoutId} />
    </>
  )
}

export default ResetWorkoutCoaching
