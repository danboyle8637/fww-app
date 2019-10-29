import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import ResetProgramDashboardHeader from '../components/PageHeaders/ResetProgramDashboardHeader'
import WorkoutCard from '../components/Cards/WorkoutProgramCard'
import DashboardStatsCard from '../components/Cards/DashboardStatsCard'
import WorkoutCardLoader from '../components/Loaders/WorkoutCardLoader'
import { useWorkoutState } from '../context/WorkoutsContext'
import { useUserContext } from '../context/UserContext'
import { useWorkoutStatsContext } from '../context/WorkoutStatsContext'
import { above } from '../styles/Theme'
import siteConfig from '../utils/siteConfig'

const ResetProgramDashboard = ({ match }) => {
  const [isLoadingWorkouts, setIsLoadingWorkouts] = useState(false)
  // eslint-disable-next-line
  const [userState, dispatchUserAction] = useUserContext()
  // eslint-disable-next-line
  const [workoutsState, dispatchWorkoutsAction] = useWorkoutState()
  // eslint-disable-next-line
  const [workoutStatsState, dispatchStatsAction] = useWorkoutStatsContext()

  useEffect(() => {
    const programData = {
      programId: match.params.programId
    }
    const baseUrl = siteConfig.api.baseUrl
    const getWorkoutsPath = '/get-workouts'
    const setupTrackingPath = '/setup-workout-tracking'

    if (
      workoutsState.workouts.length === 0 &&
      Object.keys(workoutStatsState.stats).length === 0
    ) {
      console.log('Fetching Data - Setting Up Workout State and Stats State')
      setIsLoadingWorkouts(true)
      fetch(`${baseUrl}${getWorkoutsPath}`, {
        method: 'POST',
        body: JSON.stringify(programData)
      })
        .then(response => response.json())
        .then(workoutsArray => {
          const array = workoutsArray.workouts
          dispatchWorkoutsAction({
            type: 'setWorkoutsState',
            value: array
          })

          const programId = match.params.programId
          localStorage.setItem(`${programId}`, JSON.stringify(array))

          const workoutTrackingArray = array.reduce(
            (accumulator, currentValue) => {
              const workoutName = currentValue.title
              const workoutId = currentValue.workoutId
              const workoutObject = { workoutId: workoutId, title: workoutName }

              accumulator.push(workoutObject)

              return accumulator
            },
            []
          )

          const trackingRequest = {
            programId: programData.programId,
            userId: userState.userId,
            workoutsArray: workoutTrackingArray
          }

          fetch(`${baseUrl}${setupTrackingPath}`, {
            method: 'POST',
            body: JSON.stringify(trackingRequest)
          })
            .then(response => response.json())
            .then(data => {
              dispatchStatsAction({
                type: 'setWorkoutStatsState',
                value: data.stats
              })

              setIsLoadingWorkouts(false)
            })
            .catch(error => {
              // TODO Hand this error of not getting the tracking setup.
              console.log(error)
            })
        })
        .catch(error => {
          // TODO Handle this error about getting the workouts
          console.log('Error getting workouts from the database.', error)
        })
    }
  }, [
    dispatchStatsAction,
    dispatchWorkoutsAction,
    match,
    userState.userId,
    workoutStatsState.stats,
    workoutsState.workouts
  ])

  const renderWorkouts = () => {
    const workouts = workoutsState.workouts.map(workout => {
      const key = workout.order
      const coverImage = workout.workoutBackgrounds[0]
      const tinyImage = workout.workoutTinyBackground
      const title = workout.title
      const description = workout.description
      const workoutId = workout.workoutId

      const workoutStats = workoutStatsState.stats[`${workoutId}`]

      return (
        <Link
          key={key}
          to={{
            pathname: `${match.url}/${workoutId}`,
            state: {
              workout: workout,
              stats: workoutStats
            }
          }}
          style={{ textDecoration: 'none' }}
        >
          <WorkoutCard
            isWorkout
            coverImage={coverImage}
            tinyImage={tinyImage}
            title={title}
            description={description}
            workoutId={workoutId}
          />
        </Link>
      )
    })

    return workouts
  }

  // TODO Make it so it reads number of workouts and shows the correct number.
  const workoutLoaderCards = (
    <>
      <WorkoutCardLoader />
      <WorkoutCardLoader />
      <WorkoutCardLoader />
      <WorkoutCardLoader />
      <WorkoutCardLoader />
    </>
  )

  return (
    <ProgramDashboardContainer>
      <ResetProgramDashboardHeader programId={match.params.programId} />
      <DashboardStatsCard programId={match.params.programId} />
      <WorkoutCardWrapper>
        {isLoadingWorkouts ? (
          <>{workoutLoaderCards}</>
        ) : (
          <>{renderWorkouts()}</>
        )}
      </WorkoutCardWrapper>
    </ProgramDashboardContainer>
  )
}

export default ResetProgramDashboard

const ProgramDashboardContainer = styled.div`
  margin: 80px 0 80px 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 60px;
  justify-items: center;
`

const WorkoutCardWrapper = styled.div`
  padding: 0 16px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 40px;
  justify-items: center;
  width: 100%;
  ${above.mobile`
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    row-gap: 40px;
  `}
`
