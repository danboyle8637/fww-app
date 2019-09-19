const workoutStatsState = {}

const workoutStatsReducer = (state, action) => {
  switch (action.type) {
    case 'setWorkoutStatsState': {
      const stats = action.value

      return {
        stats
      }
    }
    case 'setComplete1': {
      const workoutId = action.value

      const workoutStats = state.stats[workoutId]

      const copyOfWorkoutStats = { ...workoutStats }

      copyOfWorkoutStats.completed.complete1.isComplete = true

      state.stats[workoutId] = copyOfWorkoutStats

      return {
        ...state
      }
    }
    case 'setComplete2': {
      console.log(state)
      const workoutId = action.value

      const workoutStats = state.stats[workoutId]

      const copyOfWorkoutStats = { ...workoutStats }

      if (copyOfWorkoutStats.completed.complete1.isComplete) {
        copyOfWorkoutStats.completed.complete2.isComplete = true

        state.stats[workoutId] = copyOfWorkoutStats
      } else {
        console.log('Must complete the workout for a first time... first.')
        return state
      }

      return {
        ...state
      }
    }
    case 'setComplete3': {
      const workoutId = action.value
      const isFirstCompleted =
        state.stats[workoutId].completed.complete1.isComplete
      const isSecondCompleted =
        state.stats[workoutId].completed.complete2.isComplete

      if (isFirstCompleted && isSecondCompleted) {
        const workoutStats = state.stats[workoutId]

        const copyOfWorkoutStats = { ...workoutStats }

        copyOfWorkoutStats.completed.complete3.isComplete = true

        state.stats[workoutId] = copyOfWorkoutStats
      }

      return {
        ...state
      }
    }
    case 'toggleIsFavoriteWorkout': {
      const workoutId = action.value

      const workoutStats = state.stats[workoutId]

      const copyOfWorkoutStats = { ...workoutStats }

      copyOfWorkoutStats.isFavorite = !copyOfWorkoutStats.isFavorite

      state.stats[workoutId] = copyOfWorkoutStats

      return {
        ...state
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
