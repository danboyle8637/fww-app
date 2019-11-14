import React, { useState } from 'react'
import styled from 'styled-components'
import { useLocation, useRouteMatch } from 'react-router-dom'

import ResetWorkoutPageHeader from '../components/PageHeaders/ResetWorkoutPageHeader'
import VideoSection from '../components/WorkoutPage/VideoSection'
import WorkoutTrackingForm from '../components/Forms/WorkoutTrackingForm'
import TrackingChart from '../components/Tables/TrackingChart'
import CompleteFavoriteWorkoutForm from '../components/Forms/CompleteFavoriteWorkoutForm'
import DownloadTrackingSheet from '../components/WorkoutPage/DownloadTrackingSection'
import Portal from '../components/Shared/Portal'
import SyncingIndicator from '../components/Indicators/SyncingIndicator'
import { above } from '../styles/Theme'

const ResetWorkout = () => {
  const [isSyncing, setIsSyncing] = useState(false)
  const [syncMessage, setSyncMessage] = useState('Updating...')

  const location = useLocation()
  const urlData = useRouteMatch()

  const {
    title,
    coachingTinyBackground,
    coachingBackground,
    workoutTinyBackground,
    workoutBackgrounds,
    coachingVideo,
    workoutVideos,
    trackingGoal,
    trackingSheetUrl
  } = location.state.workout

  const { programId, workoutId } = location.state.stats

  const handleToggleSync = () => {
    setIsSyncing(prevValue => !prevValue)
  }

  const handleSetSyncMessage = message => {
    setSyncMessage(message)
  }

  return (
    <>
      <ResetWorkoutPageHeader title={title} />
      <VideoSection
        title={title}
        coachingTinyBackground={coachingTinyBackground}
        coachingBackground={coachingBackground}
        workoutTinyBackground={workoutTinyBackground}
        workoutBackgrounds={workoutBackgrounds}
        coachingVideo={coachingVideo}
        workoutVideos={workoutVideos}
        coachingUrl={urlData.url}
      />
      <Row1Wrapper>
        <WorkoutTrackingForm
          programId={programId}
          workoutId={workoutId}
          trackingGoal={trackingGoal}
          isSyncing={isSyncing}
          handleToggleSync={handleToggleSync}
          handleSetSyncMessage={handleSetSyncMessage}
        />
        <TrackingChart trackingGoal={trackingGoal} workoutId={workoutId} />
      </Row1Wrapper>
      <Row2Wrapper>
        <CompleteFavoriteWorkoutForm
          programId={programId}
          workoutId={workoutId}
          handleToggleSync={handleToggleSync}
          handleSetSyncMessage={handleSetSyncMessage}
        />
        <DownloadTrackingSheet trackingSheet={trackingSheetUrl} />
      </Row2Wrapper>
      <Portal>
        <SyncingIndicator isSyncing={isSyncing} syncMessage={syncMessage} />
      </Portal>
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
