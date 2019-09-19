const workoutStatsState = {
  stats: []
}

const workoutStatsReducer = (state, action) => {
  switch (action.type) {
    case 'setWorkoutStatsState': {
      const workoutStatsArray = action.value

      const newWorkoutStatsState = workoutStatsArray.reduce(
        (accumulator, currentValue) => {
          accumulator.push({ ...currentValue })

          return accumulator
        },
        []
      )

      return {
        stats: newWorkoutStatsState
      }
    }
    case 'setComplete1': {
      const workoutId = action.value.workoutId
      let selectedIndex

      const activeWorkout = state.stats.find((workout, index) => {
        selectedIndex = index
        return workout.workoutId === workoutId
      })

      const copyOfWorkout = { ...activeWorkout }

      copyOfWorkout.completed.complete1.isComplete = true

      return {
        stats: [...state.stats, (state.stats[selectedIndex] = copyOfWorkout)]
      }
    }
    case 'setComplete2': {
      const workoutId = action.value.workoutId

      const activeWorkout = state.stats.find(workout => {
        return workout.workoutId === workoutId
      })

      const copyOfWorkout = { ...activeWorkout }

      copyOfWorkout.completed.complete2.isComplete = true

      return {
        stats: [...state.stats, copyOfWorkout]
      }
    }
    case 'setComplete3': {
      const workoutId = action.value.workoutId

      const activeWorkout = state.stats.find(workout => {
        return workout.workoutId === workoutId
      })

      const copyOfWorkout = { ...activeWorkout }

      copyOfWorkout.completed.complete3.isComplete = true

      return {
        stats: [...state.stats, copyOfWorkout]
      }
    }
    case 'toggleIsFavoriteWorkout': {
      const workoutId = action.value

      const activeWorkout = state.stats.find(workout => {
        return workout.workoutId === workoutId
      })

      const copyOfWorkout = { ...activeWorkout }

      copyOfWorkout.isFavorite = !copyOfWorkout.isFavorite

      return {
        stats: [...state.stats, copyOfWorkout]
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
