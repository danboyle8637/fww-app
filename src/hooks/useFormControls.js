import { useFormStore } from '../context/FormContext'

const useUpdateFormControls = () => {
  // eslint-disable-next-line
  const [formState, dispatch] = useFormStore()

  const updateInputValues = event => {
    event.persist()
    const inputName = event.target.name
    const inputValue = event.target.value

    switch (inputName) {
      case 'loginUsername': {
        dispatch({
          type: 'setUsernameValue',
          value: inputValue
        })
        break
      }
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
      case 'signupFirstName': {
        dispatch({
          type: 'setSignUpFirstNameValue',
          value: inputValue
        })
        break
      }
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
      case 'signupFirstName': {
        dispatch({ type: 'setSignUpFirstNameOptions' })
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
