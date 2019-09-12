import React from 'react'

import ResetWorkoutPageHeader from '../components/PageHeaders/ResetWorkoutPageHeader'
import VideoSection from '../components/WorkoutPage/VideoSection'
import WorkoutTrackingForm from '../components/Forms/WorkoutTrackingForm'
import TrackingChart from '../components/Tables/TrackingChart'
import CompleteFavoriteWorkoutForm from '../components/Forms/CompleteFavoriteWorkoutForm'
import DownloadTrackingSheet from '../components/WorkoutPage/DownloadTrackingSection'

const ResetWorkout = () => {
  return (
    <>
      <ResetWorkoutPageHeader name="Workout 1" />
      <VideoSection />
      <WorkoutTrackingForm trackingGoal={'This is your goal...'} />
      <TrackingChart />
      <CompleteFavoriteWorkoutForm />
      <DownloadTrackingSheet />
    </>
  )
}

export default ResetWorkout
