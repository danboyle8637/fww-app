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
import { useFireBase } from '../components/Firebase/FirebaseContext'
import { above } from '../styles/Theme'
import siteConfig from '../utils/siteConfig'

const ResetProgramDashboard = ({ match, location }) => {
  const auth = useFireBase()
  const [isLoadingWorkouts, setIsLoadingWorkouts] = useState(false)
  // eslint-disable-next-line
  const [userState, dispatchUserAction] = useUserContext()
  // eslint-disable-next-line
  const [workoutsState, dispatchWorkoutsAction] = useWorkoutState()
  // eslint-disable-next-line
  const [workoutStatsState, dispatchStatsAction] = useWorkoutStatsContext()

  useEffect(() => {
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
                // TODO Hand this error of not getting the tracking setup.
                console.log(error)
              })
          })
          .catch(error => {
            // Token was not retrieved and needs to be reset
            console.log(error)
          })
      })
    }

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
      if (localStorage.getItem('fwwWorkouts')) {
        console.log(`Workouts are in storage`)
        const data = localStorage.getItem('fwwWorkouts')
        const workoutsData = JSON.parse(data)

        dispatchWorkoutsAction({
          type: 'setWorkoutsState',
          value: workoutsData.workouts
        })

        setupWorkoutStats(workoutsData.workouts)
      } else {
        console.log(`fwwWorkouts workouts are not in storage`)
        console.log('Fetching Data - Setting Up Workout State')

        auth.getCurrentUser().then(user => {
          user
            .getIdToken(true)
            .then(token => {
              fetch(`${baseUrl}${getWorkoutsPath}`, {
                method: 'POST',
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

                  // TODO Set fwwWorkouts in local storage
                  const fwwWorkouts = {
                    workouts: workoutsArray.workouts
                  }

                  localStorage.setItem(
                    'fwwWorkouts',
                    JSON.stringify(fwwWorkouts)
                  )

                  setupWorkoutStats(workoutsArray.workouts)
                })
                .catch(error => {
                  // error in getting data.
                  // Should get message from server
                  // let user know to refresh screen
                  // TODO Handle this error
                  console.log(error)
                })
            })
            .catch(error => {
              // The token was not reterieved and needs to be reset
              console.log(error)
            })
        })
      }
    }
  }, [
    auth,
    dispatchStatsAction,
    dispatchWorkoutsAction,
    match.params.programId,
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
  ${above.tablet`
    width: auto;
  `}
`

const CardLink = styled(Link)`
  text-decoration: none;
  border-radius: 10px 10px 30px 10px;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #000, 0 0 0 5px ${props => props.theme.primaryAccent};
  }
`
