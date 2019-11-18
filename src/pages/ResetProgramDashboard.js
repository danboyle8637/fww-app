import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import ResetProgramDashboardHeader from '../components/PageHeaders/ResetProgramDashboardHeader'
import WorkoutCard from '../components/Cards/WorkoutProgramCard'
import DashboardStatsCard from '../components/Cards/DashboardStatsCard'
import WorkoutCardLoader from '../components/Loaders/WorkoutCardLoader'
import { useWorkoutState } from '../context/WorkoutsContext'
import { usePortalContext } from '../context/portalContext'
import { useWorkoutStatsContext } from '../context/WorkoutStatsContext'
import { useFireBase } from '../components/Firebase/FirebaseContext'
import { above } from '../styles/Theme'
import siteConfig from '../utils/siteConfig'

const ResetProgramDashboard = ({ match, location }) => {
  // * This sets the ability to cancel fetch requests
  const controller = new AbortController()
  const signal = controller.signal

  const auth = useFireBase()
  const [isLoadingWorkouts, setIsLoadingWorkouts] = useState(false)
  // eslint-disable-next-line
  const [workoutsState, dispatchWorkoutsAction] = useWorkoutState()
  // eslint-disable-next-line
  const [workoutStatsState, dispatchStatsAction] = useWorkoutStatsContext()
  // eslint-disable-next-line
  const [portalState, dispatchPortalAction] = usePortalContext()

  useEffect(() => {
    // * This is my function that sets up the workout stats for selected program
    const setupWorkoutStats = workoutsArray => {
      const programId = match.params.programId
      const programData = {
        programId: programId
      }
      const baseUrl = siteConfig.api.baseUrl
      const setupTrackingPath = '/setup-workout-tracking'

      const workoutTrackingArray = workoutsArray.reduce(
        (accumulator, currentValue) => {
          const workoutName = currentValue.title
          const workoutId = currentValue.workoutId
          const workoutObject = {
            workoutId: workoutId,
            title: workoutName
          }

          accumulator.push(workoutObject)

          return accumulator
        },
        []
      )

      const trackingRequest = {
        programId: programData.programId,
        workoutsArray: workoutTrackingArray
      }

      auth.getCurrentUser().then(user => {
        user
          .getIdToken(true)
          .then(token => {
            fetch(`${baseUrl}${setupTrackingPath}`, {
              method: 'POST',
              signal: signal,
              headers: {
                Authorization: `Bearer ${token}`
              },
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
                dispatchPortalAction({
                  type: 'toggleErrorMessage',
                  value: error.message
                })
              })
          })
          .catch(error => {
            dispatchPortalAction({
              type: 'toggleErrorMessage',
              value:
                '😢 A connection issue has stopped up from authenticating your account. Refresh and try again. Contact us if this keeps happening.'
            })
          })
      })
    }

    /*
    TODO You most likely need to restructure workout stats under programID
    Once you have multiple workouts... workouts State will never be zero.
    You need to restructure how you store workouts State... by the programID...
    */

    if (
      workoutsState.workouts.length === 0 &&
      Object.keys(workoutStatsState.stats).length === 0
    ) {
      setIsLoadingWorkouts(true)

      const programId = match.params.programId
      const programData = {
        programId: programId
      }
      const baseUrl = siteConfig.api.baseUrl
      const getWorkoutsPath = '/get-workouts'

      // ! checking local storage for workout and tracking
      if (localStorage.getItem(`${programId}`)) {
        // Workouts are in storage
        const data = localStorage.getItem(`${programId}`)
        const workoutsData = JSON.parse(data)

        dispatchWorkoutsAction({
          type: 'setWorkoutsState',
          value: workoutsData.workouts
        })

        setupWorkoutStats(workoutsData.workouts)
      } else {
        // fwwWorkouts workouts are not in storage
        // Fetching Data - Setting Up Workout State
        auth.getCurrentUser().then(user => {
          user
            .getIdToken(true)
            .then(token => {
              fetch(`${baseUrl}${getWorkoutsPath}`, {
                method: 'POST',
                signal: signal,
                headers: {
                  Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(programData)
              })
                .then(response => response.json())
                .then(workoutsArray => {
                  dispatchWorkoutsAction({
                    type: 'setWorkoutsState',
                    value: workoutsArray.workouts
                  })

                  const fwwWorkouts = {
                    workouts: workoutsArray.workouts
                  }

                  localStorage.setItem(
                    `${programId}`,
                    JSON.stringify(fwwWorkouts)
                  )

                  setupWorkoutStats(workoutsArray.workouts)
                })
                .catch(error => {
                  dispatchPortalAction({
                    type: 'toggleErrorMessage',
                    value: error.message
                  })
                })
            })
            .catch(() => {
              dispatchPortalAction({
                type: 'toggleErrorMessage',
                value:
                  '😢 A connection issue has stopped up from authenticating your account. Refresh and try again. Contact us if this keeps happening.'
              })
            })
        })
      }
    }
  }, [
    auth,
    dispatchPortalAction,
    dispatchStatsAction,
    dispatchWorkoutsAction,
    match.params.programId,
    signal,
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
        <CardLink
          key={key}
          to={{
            pathname: `${location.pathname}/${workoutId}`,
            state: {
              workout: workout,
              stats: workoutStats
            }
          }}
        >
          <WorkoutCard
            isWorkout
            coverImage={coverImage}
            tinyImage={tinyImage}
            title={title}
            description={description}
            workoutId={workoutId}
          />
        </CardLink>
      )
    })

    return workouts
  }

  // TODO Make it so it reads number of workouts and shows the correct number.
  // This can only happen if you have workouts in local storage.
  // Doesn't really matter for this app.
  const workoutLoaderCards = (
    <>
      <WorkoutCardLoader loadingMessage={'Loading workouts...'} />
      <WorkoutCardLoader loadingMessage={'Loading workouts...'} />
      <WorkoutCardLoader loadingMessage={'Loading workouts...'} />
      <WorkoutCardLoader loadingMessage={'Loading workouts...'} />
      <WorkoutCardLoader loadingMessage={'Loading workouts...'} />
    </>
  )

  return (
    <>
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
    </>
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
  ${above.tablet`
    width: auto;
  `}
`

const CardLink = styled(Link)`
  text-decoration: none;
  border-radius: 10px 10px 30px 10px;
  transition: box-shadow 300ms ease-in-out;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #000, 0 0 0 5px ${props => props.theme.primaryAccent};
  }
`
