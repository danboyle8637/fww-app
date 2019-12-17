import React from 'react'

import VimeoPlayer from '../components/Shared/VimeoPlayer'
import ResetWorkoutPageHeader from '../components/PageHeaders/ResetWorkoutPageHeader'
import WorkoutParser from '../components/CoachingPage/WorkoutParser'
import ScrollToTop from '../components/Shared/ScrollToTop'

const ResetWorkoutCoaching = ({ match, location }) => {
  const workoutId = match.params.workoutId
  const programId = match.params.programId

  return (
    <>
      <ScrollToTop />
      <ResetWorkoutPageHeader title="Coaching" />
      <VimeoPlayer videoId={location.state.coachingVideo} />
      <WorkoutParser programId={programId} workoutId={workoutId} />
    </>
  )
}

export default ResetWorkoutCoaching
