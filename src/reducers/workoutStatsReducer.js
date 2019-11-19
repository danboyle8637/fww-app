const workoutStatsState = {}

const workoutStatsReducer = (state, action) => {
  switch (action.type) {
    // Called in ResetProgramDashboard
    // Called to setup the stats that show on card
    // Called to setup the stats that show on workout page
    case 'setWorkoutStatsState': {
      const programId = action.value.programId
      const stats = action.value.stats

      const copyOfState = { ...state }

      copyOfState[`${programId}`] = stats

      return copyOfState
    }
    case 'setTrackingNumber': {
      const programId = action.value.programId
      const workoutId = action.value.workoutId
      const number = Number(action.value.number)
      const date = action.value.date

      const copyOfState = { ...state }

      const programStats = copyOfState[programId]
      const workoutStats = programStats[workoutId]

      const statsArray = Object.keys(workoutStats.trackingStats)

      if (!statsArray.includes('first')) {
        const first = {
          number: number,
          date: date
        }

        workoutStats.trackingStats.first = first

        if (!workoutStats.completed.complete1.isComplete) {
          workoutStats.completed.complete1.isComplete = true
        }
      } else if (
        workoutStats.trackingStats.first.number &&
        !statsArray.includes('second')
      ) {
        const second = {
          number: number,
          date: date
        }

        workoutStats.trackingStats.second = second
        if (!workoutStats.completed.complete2.isComplete) {
          workoutStats.completed.complete2.isComplete = true
        }
      } else if (
        workoutStats.trackingStats.second.number &&
        !statsArray.includes('third')
      ) {
        const third = {
          number: number,
          date: date
        }

        workoutStats.trackingStats.third = third
        if (!workoutStats.completed.complete3.isComplete) {
          workoutStats.completed.complete3.isComplete = true
        }
      } else {
        return
      }

      return {
        ...copyOfState
      }
    }
    case 'setComplete1': {
      const programId = action.value.programId
      const workoutId = action.value.workoutId

      const copyOfState = { ...state }

      const programStats = copyOfState[programId]
      const workoutStats = programStats[workoutId]
      workoutStats.completed.complete1.isComplete = true

      if (!Object.keys(workoutStats.trackingStats).includes('first')) {
        const first = {
          number: '--',
          date: '--'
        }

        workoutStats.trackingStats.first = first
      }

      return {
        ...copyOfState
      }
    }
    case 'setComplete2': {
      const programId = action.value.programId
      const workoutId = action.value.workoutId

      const copyOfState = { ...state }

      const programStats = copyOfState[programId]
      const workoutStats = programStats[workoutId]

      if (workoutStats.completed.complete1.isComplete) {
        workoutStats.completed.complete2.isComplete = true

        if (!Object.keys(workoutStats.trackingStats).includes('second')) {
          const second = {
            number: '--',
            date: '--'
          }

          workoutStats.trackingStats.second = second
        }

        return {
          ...copyOfState
        }
      } else {
        return state
      }
    }
    case 'setComplete3': {
      const programId = action.value.programId
      const workoutId = action.value.workoutId

      const copyOfState = { ...state }

      const programStats = copyOfState[programId]
      const workoutStats = programStats[workoutId]

      const isFirstCompleted = workoutStats.completed.complete1.isComplete
      const isSecondCompleted = workoutStats.completed.complete2.isComplete

      if (isFirstCompleted && isSecondCompleted) {
        workoutStats.completed.complete3.isComplete = true

        if (!Object.keys(workoutStats.trackingStats).includes('third')) {
          const third = {
            number: '--',
            date: '--'
          }

          workoutStats.trackingStats.third = third
        }

        return {
          ...copyOfState
        }
      } else {
        return state
      }
    }
    case 'toggleIsFavoriteWorkout': {
      const programId = action.value.programId
      const workoutId = action.value.workoutId

      const copyOfState = { ...state }

      const programStats = copyOfState[programId]
      const workoutStats = programStats[workoutId]

      workoutStats.isFavorite = !workoutStats.isFavorite

      return {
        ...copyOfState
      }
    }
    case 'cleanWorkoutStatsState': {
      return {}
    }
    default: {
      return state
    }
  }
}

export { workoutStatsState, workoutStatsReducer }
