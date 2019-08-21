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
          type: 'updateUsernameValue',
          value: inputValue
        })
        break
      }
      case 'loginPassword': {
        dispatch({
          type: 'updatePasswordValue',
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
        dispatch({ type: 'updateUsernameOptions' })
        break
      }
      case 'loginPassword': {
        dispatch({ type: 'updatePasswordOptions' })
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
