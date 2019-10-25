const workoutsState = {}

const workoutsReducer = (state, action) => {
  switch (action.type) {
    case 'setWorkoutsState': {
      const workoutsArray = action.value

      // This reducer generates workout state
      // It get's called when the database is hit to generate the workout cards.
      // It saves all the workout data so you don't have to hit the database again
      // on each workout page.

      // It must get cleaned up when user goes back to main Dashboard
      // In real app it will clean up when use goes back to Program Dashbaord
      const newWorkoutsState = workoutsArray.reduce(
        (accumulator, currentValue) => {
          // accumulator[currentValue.workoutId] = { ...currentValue }
          accumulator.push({ ...currentValue })

          return accumulator
        },
        []
      )
      return {
        ...state,
        workouts: newWorkoutsState
      }
    }
    case 'cleanWorkoutsState': {
      return {}
    }
    default: {
      return state
    }
  }
}

export { workoutsState, workoutsReducer }
