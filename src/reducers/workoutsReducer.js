const workoutsState = {}

const workoutsReducer = (state, action) => {
  switch (action.type) {
    case 'setWorkoutsState': {
      const programId = action.value.programId
      const workoutsArray = action.value.workouts

      // A funny way to learn how reduce works to reconstruct the same
      // array you passed into it.

      // It must get cleaned up when user goes back to main Dashboard
      // In real app it will clean up when use goes back to Program Dashbaord
      // const newWorkoutsState = workoutsArray.reduce(
      //   (accumulator, currentValue) => {
      //     // accumulator[currentValue.workoutId] = { ...currentValue }
      //     accumulator.push({ ...currentValue })

      //     return accumulator
      //   },
      //   []
      // )

      const copyOfState = { ...state }

      copyOfState[programId] = workoutsArray

      return copyOfState
    }
    case 'cleanWorkoutsState': {
      return {
        workouts: []
      }
    }
    default: {
      return state
    }
  }
}

export { workoutsState, workoutsReducer }
