const workoutStatsState = {}

const workoutStatsReducer = (state, action) => {
  switch (action.type) {
    case 'createWorkoutStatsState': {
      const statsArray = action.value

      const newStatsState = statsArray.reduce((accumulator, currentValue) => {
        accumulator[currentValue.workoutId] = { ...currentValue }

        return accumulator
      }, {})

      return newStatsState
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
