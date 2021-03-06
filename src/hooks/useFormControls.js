import { useFormStore } from '../context/FormContext'

const useUpdateFormControls = () => {
  // eslint-disable-next-line
  const [formState, dispatch] = useFormStore()

  const updateInputValues = event => {
    event.persist()
    const inputName = event.target.name
    const inputValue = event.target.value
    let inputFile

    if (event.target.files) {
      inputFile = event.target.files[0]
    }

    switch (inputName) {
      case 'loginPassword': {
        dispatch({
          type: 'setPasswordValue',
          value: inputValue
        })
        break
      }
      case 'loginConfirmPassword': {
        dispatch({
          type: 'setConfirmPasswordValue',
          value: inputValue
        })
        break
      }
      case 'emailAddress': {
        dispatch({
          type: 'setEmailValue',
          value: inputValue
        })
        break
      }
      case 'workoutGoal': {
        dispatch({
          type: 'setWorkoutGoalValue',
          value: inputValue
        })
        break
      }
      case 'firstName': {
        dispatch({
          type: 'setFirstNameValue',
          value: inputValue
        })
        break
      }
      case 'biggestObstacle': {
        dispatch({
          type: 'setBiggestObstacleValue',
          value: inputValue
        })
        break
      }
      case 'chooseResetWorkout': {
        dispatch({
          type: 'setResetWorkoutValue',
          value: inputValue
        })
        break
      }
      case 'leaveReview': {
        dispatch({
          type: 'setReviewValue',
          value: inputValue
        })
        break
      }
      case 'reviewSelfie': {
        dispatch({
          type: 'setReviewSelfieImage',
          value: {
            file: inputFile,
            fileName: inputFile.name
          }
        })
        break
      }
      case 'updateProfileImage': {
        dispatch({
          type: 'setUpdateProfileImage',
          value: {
            file: inputFile,
            fileName: inputFile.name
          }
        })
        break
      }
      case 'contactReason': {
        dispatch({
          type: 'setContactReason',
          value: inputValue
        })
        break
      }
      case 'tellMeMore': {
        dispatch({
          type: 'setContactTellMeMoreValue',
          value: inputValue
        })
        break
      }
      // case 'complete1': {
      //   dispatch({ type: 'setCompleteWorkoutValue', value: inputName })
      //   break
      // }
      // case 'complete2': {
      //   dispatch({ type: 'setCompleteWorkoutValue', value: inputName })
      //   break
      // }
      // case 'complete3': {
      //   dispatch({ type: 'setCompleteWorkoutValue', value: inputName })
      //   break
      // }
      // case 'isFavoriteWorkout': {
      //   dispatch({
      //     type: 'setIsFavoriteWorkout',
      //     value: inputName
      //   })
      //   break
      // }
      default: {
        throw new Error('You have not exhausted all possible inputs.')
      }
    }
  }

  const updateInputOptions = event => {
    const inputName = event.target.name

    switch (inputName) {
      case 'loginUsername': {
        dispatch({ type: 'setUsernameOptions' })
        break
      }
      case 'loginPassword': {
        dispatch({ type: 'setPasswordOptions' })
        break
      }
      case 'loginConfirmPassword': {
        dispatch({ type: 'setConfirmPasswordOptions' })
        break
      }
      case 'emailAddress': {
        dispatch({ type: 'setEmailOptions' })
        break
      }
      case 'workoutGoal': {
        dispatch({ type: 'setWorkoutGoalOptions' })
        break
      }
      case 'firstName': {
        dispatch({ type: 'setFirstNameOptions' })
        break
      }
      case 'biggestObstacle': {
        dispatch({ type: 'setBiggestObstacleOptions' })
        break
      }
      case 'chooseResetWorkout': {
        dispatch({ type: 'setResetWorkoutOptions' })
        break
      }
      case 'leaveReview': {
        dispatch({ type: 'setReviewOptions' })
        break
      }
      case 'tellMeMore': {
        dispatch({ type: 'setContactTellMeMoreOptions' })
        break
      }
      default: {
        throw new Error('You have not exhausted all possible inputs.')
      }
    }
  }

  return [updateInputValues, updateInputOptions]
}

export default useUpdateFormControls
