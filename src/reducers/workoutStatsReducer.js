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
        ...state,
        stats: newWorkoutStatsState
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
