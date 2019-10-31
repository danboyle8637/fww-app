import React, { useEffect, useState, useCallback } from 'react'
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

  const setupWorkoutStats = useCallback(() => {
    const programId = match.params.programId
    const programData = {
      programId: programId
    }
    const baseUrl = siteConfig.api.baseUrl
    const setupTrackingPath = '/setup-workout-tracking'

    const workoutTrackingArray = workoutsState.workouts.reduce(
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
      user.getIdToken(true).then(token => {
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
    })
  }, [auth, dispatchStatsAction, match.params.programId, workoutsState])

  useEffect(() => {
    const programId = match.params.programId
    const programData = {
      programId: programId
    }
    const baseUrl = siteConfig.api.baseUrl
    const getWorkoutsPath = '/get-workouts'

    if (
      workoutsState.workouts.length === 0 &&
      Object.keys(workoutStatsState.stats).length === 0
    ) {
      setIsLoadingWorkouts(true)

      // ! checking local storage for workout and tracking
      if (localStorage.getItem('fwwWorkouts')) {
        console.log(`Workouts are in storage`)
        const data = localStorage.getItem('fwwWorkouts')
        const workoutsData = JSON.parse(data)

        dispatchWorkoutsAction({
          type: 'setWorkoutsState',
          value: workoutsData.workouts
        })

        setupWorkoutStats()
      } else {
        console.log(`fwwWorkouts workouts are not in storage`)
        console.log('Fetching Data - Setting Up Workout State')

        auth.getCurrentUser().then(user => {
          user.getIdToken(true).then(token => {
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

                localStorage.setItem('fwwWorkouts', JSON.stringify(fwwWorkouts))

                setupWorkoutStats()
              })
              .catch(error => {
                // error in getting data.
                // Should get message from server
                // let user know to refresh screen
                // TODO Handle this error
                console.log(error)
              })
          })
        })
      }
    }
  }, [
    auth,
    dispatchStatsAction,
    dispatchWorkoutsAction,
    match.params.programId,
    setupWorkoutStats,
    userState.userId,
    workoutStatsState,
    workoutStatsState.stats,
    workoutsState,
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
            pathname: `${location.pathname}/${workoutId}`,
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

// auth.getCurrentUser().then(user => {
//   user.getIdToken(true).then(token => {
//     fetch(`${baseUrl}${getWorkoutsPath}`, {
//       method: 'POST',
//       headers: {
//         Authorization: `Bearer ${token}`
//       },
//       body: JSON.stringify(programData)
//     })
//       .then(response => response.json())
//       .then(workoutsArray => {
//         const array = workoutsArray.workouts
//         dispatchWorkoutsAction({
//           type: 'setWorkoutsState',
//           value: array
//         })

//         // TODO Set fwwWorkouts in local storage
//         const fwwWorkouts = {
//           workouts: array
//         }

//         localStorage.setItem('fwwWorkouts', JSON.stringify(fwwWorkouts))

//         const workoutTrackingArray = array.reduce(
//           (accumulator, currentValue) => {
//             const workoutName = currentValue.title
//             const workoutId = currentValue.workoutId
//             const workoutObject = {
//               workoutId: workoutId,
//               title: workoutName
//             }

//             accumulator.push(workoutObject)

//             return accumulator
//           },
//           []
//         )

//         const trackingRequest = {
//           programId: programData.programId,
//           workoutsArray: workoutTrackingArray
//         }

//         fetch(`${baseUrl}${setupTrackingPath}`, {
//           method: 'POST',
//           headers: {
//             Authorization: `Bearer ${token}`
//           },
//           body: JSON.stringify(trackingRequest)
//         })
//           .then(response => response.json())
//           .then(data => {
//             dispatchStatsAction({
//               type: 'setWorkoutStatsState',
//               value: data.stats
//             })

//             setIsLoadingWorkouts(false)
//           })
//           .catch(error => {
//             // TODO Hand this error of not getting the tracking setup.
//             console.log(error)
//           })
//       })
//       .catch(error => {
//         // TODO Handle this error about getting the workouts
//         console.log('Error getting workouts from the database.', error)
//       })
//   })
// })
