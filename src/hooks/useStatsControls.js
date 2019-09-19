import { useWorkoutStatsContext } from '../context/WorkoutStatsContext'

const useUpdateWorkoutStatsControls = () => {
  // eslint-disable-next-line
  const [statsState, dispatchStatAction] = useWorkoutStatsContext()

  const updateCheckboxValues = event => {
    event.persist()
    const inputName = event.target.name
    const workoutId = event.target.title

    switch (inputName) {
      case 'complete1': {
        dispatchStatAction({
          type: 'setComplete1',
          value: {
            checkbox: inputName,
            workoutId: workoutId
          }
        })
        break
      }
      case 'complete2': {
        dispatchStatAction({
          type: 'setComplete2',
          value: {
            checkbox: inputName,
            workoutId: workoutId
          }
        })
        break
      }
      case 'complete3': {
        dispatchStatAction({
          type: 'setComplete3',
          value: {
            checkbox: inputName,
            workoutId: workoutId
          }
        })
        break
      }
      case 'isFavoriteWorkout': {
        dispatchStatAction({
          type: 'toggleIsFavoriteWorkout',
          value: workoutId
        })
        break
      }
      default: {
        throw new Error(
          'You have not exhausted all possible checkbox options. Look at it again.'
        )
      }
    }
  }

  return [updateCheckboxValues]
}

export default useUpdateWorkoutStatsControls
