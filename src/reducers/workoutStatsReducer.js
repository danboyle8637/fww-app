const workoutStatsState = {
  stats: {}
}

const workoutStatsReducer = (state, action) => {
  switch (action.type) {
    // Called in ResetProgramDashboard
    // Called to setup the stats that show on card
    // Called to setup the stats that show on workout page
    case 'setWorkoutStatsState': {
      const stats = action.value

      return {
        stats: stats
      }
    }
    case 'setTrackingNumber': {
      const workoutId = action.value.workoutId
      const number = Number(action.value.number)
      const date = action.value.date

      const copyOfState = { ...state }

      const workoutStats = copyOfState.stats[workoutId]

      const statsArray = Object.keys(copyOfState.stats[workoutId].trackingStats)

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
        console.log('MAJOR ERROR UPDATING TRACKING NUMBERS')
      }

      return {
        ...copyOfState
      }
    }
    case 'setComplete1': {
      const workoutId = action.value

      const copyOfState = { ...state }

      const workoutStats = copyOfState.stats[workoutId]
      workoutStats.completed.complete1.isComplete = true

      return {
        ...copyOfState
      }
    }
    case 'setComplete2': {
      const workoutId = action.value

      const copyOfState = { ...state }

      const workoutStats = copyOfState.stats[workoutId]

      if (workoutStats.completed.complete1.isComplete) {
        workoutStats.completed.complete2.isComplete = true

        return {
          ...copyOfState
        }
      } else {
        console.log('Must complete the workout for a first time... first.')
        return state
      }
    }
    case 'setComplete3': {
      const workoutId = action.value

      const copyOfState = { ...state }

      const workoutStats = copyOfState.stats[workoutId]

      const isFirstCompleted = workoutStats.completed.complete1.isComplete
      const isSecondCompleted = workoutStats.completed.complete2.isComplete

      if (isFirstCompleted && isSecondCompleted) {
        workoutStats.completed.complete3.isComplete = true

        return {
          ...copyOfState
        }
      } else {
        console.log('Must complete the workout for a second time... first.')
        return state
      }
    }
    case 'toggleIsFavoriteWorkout': {
      const workoutId = action.value

      const copyOfState = { ...state }

      const workoutStats = copyOfState.stats[workoutId]

      workoutStats.isFavorite = !workoutStats.isFavorite

      return {
        ...copyOfState
      }
    }
    case 'cleanWorkoutStatsState': {
      return {
        stats: {},
        percentComplete: {}
      }
    }
    default: {
      return state
    }
  }
}

export { workoutStatsState, workoutStatsReducer }
