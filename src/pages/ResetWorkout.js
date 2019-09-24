import React from 'react'
import styled from 'styled-components'

import ResetWorkoutPageHeader from '../components/PageHeaders/ResetWorkoutPageHeader'
import VideoSection from '../components/WorkoutPage/VideoSection'
import WorkoutTrackingForm from '../components/Forms/WorkoutTrackingForm'
import TrackingChart from '../components/Tables/TrackingChart'
import CompleteFavoriteWorkoutForm from '../components/Forms/CompleteFavoriteWorkoutForm'
import DownloadTrackingSheet from '../components/WorkoutPage/DownloadTrackingSection'
import { above } from '../styles/Theme'

const ResetWorkout = ({ location, match }) => {
  const {
    name,
    workoutAssets,
    workoutVideos,
    trackingGoal,
    trackingSheetUrl
  } = location.state.workout

  const { workoutId, trackingStats } = location.state.stats

  return (
    <>
      <ResetWorkoutPageHeader name={name} />
      <VideoSection
        name={name}
        workoutAssets={workoutAssets}
        workoutVideoIds={workoutVideos}
        coachingUrl={match.url}
      />
      <Row1Wrapper>
        <WorkoutTrackingForm trackingGoal={trackingGoal} />
        <TrackingChart
          trackingGoal={trackingGoal}
          trackingStats={trackingStats}
        />
      </Row1Wrapper>
      <Row2Wrapper>
        <CompleteFavoriteWorkoutForm workoutId={workoutId} />
        <DownloadTrackingSheet trackingSheet={trackingSheetUrl} />
      </Row2Wrapper>
    </>
  )
}

export default ResetWorkout

const Row1Wrapper = styled.div`
  margin: 80px 0 0 0;
  padding: 0 16px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto);
  gap: 80px;
  justify-items: center;
  width: 100%;
  ${above.mobile`
    margin: 80px 0 100px 0;
    padding: 0 20px;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    align-items: start;
  `}
  ${above.tablet`
    margin: 120px 0 0 0;
    padding: 0 40px;
    grid-template-columns: 1fr 2fr;
    gap: 40px;
    align-items: start;
  `}
  ${above.ipadPro`
    padding: 0 80px;
  `}
`

const Row2Wrapper = styled.div`
  margin: 80px 0 80px 0;
  padding: 0 16px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto);
  gap: 80px;
  justify-items: center;
  width: 100%;
  ${above.mobile`
    margin: 80px 0 100px 0;
    padding: 0 20px;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: start;
  `}
  ${above.tablet`
    margin: 120px 0 120px 0;
    padding: 0 40px;
    grid-template-columns: 1fr 1fr;
    gap: 120px;
    align-items: start;
  `}
  ${above.ipadPro`
    padding: 0 80px;
  `}
`
