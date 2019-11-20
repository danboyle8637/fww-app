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

      // Using reduce to construct my request object off a huge workout array
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
            console.log(token)
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
                  value: {
                    programId: programId,
                    stats: data.stats
                  }
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

    const programId = match.params.programId
    if (
      Object.keys(workoutsState).includes(programId) === false &&
      Object.keys(workoutStatsState).includes(programId) === false
    ) {
      setIsLoadingWorkouts(true)

      const programData = {
        programId: programId
      }
      const baseUrl = siteConfig.api.baseUrl
      const getWorkoutsPath = '/get-workouts'

      if (localStorage.getItem(`${programId}`)) {
        // Workouts are in storage
        const data = localStorage.getItem(`${programId}`)
        const workoutsData = JSON.parse(data)

        dispatchWorkoutsAction({
          type: 'setWorkoutsState',
          value: {
            programId: programId,
            workouts: workoutsData.workouts
          }
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
                    value: {
                      programId: programId,
                      workouts: workoutsArray.workouts
                    }
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
    workoutStatsState,
    workoutStatsState.stats,
    workoutsState,
    workoutsState.workouts
  ])

  const renderWorkouts = () => {
    const programId = match.params.programId

    if (workoutsState[programId]) {
      const workouts = workoutsState[programId].map(workout => {
        const key = workout.order
        const coverImage = workout.workoutBackgrounds[0]
        const tinyImage = workout.workoutTinyBackground
        const title = workout.title
        const description = workout.description
        const workoutId = workout.workoutId

        const workoutStats = workoutStatsState[`${programId}`][`${workoutId}`]

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
              programId={programId}
              workoutId={workoutId}
            />
          </CardLink>
        )
      })

      return workouts
    }
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
