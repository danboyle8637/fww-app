import validate from '../utils/validate'

// Validation rules for intputs

const userNameValidationRules = {
  minLength: 4,
  isRequired: true
}

const passwordValidationRules = {
  minLength: 6,
  isRequired: true
}

const formState = {
  userNameValue: {
    value: '',
    valid: false
  },
  userNameOptions: {
    initial: true,
    touched: false,
    showInstructions: false
  },
  passwordValue: {
    value: '',
    valid: false
  },
  passwordOptions: {
    initial: true,
    touched: false,
    showInstructions: false
  }
}

const formReducer = (state, action) => {
  switch (action.type) {
    case 'updateUsernameValue': {
      const valid = validate(action.value, userNameValidationRules)
      return {
        ...state,
        userNameValue: {
          value: action.value,
          valid: valid
        }
      }
    }
    case 'updateUsernameOptions': {
      return {
        ...state,
        userNameOptions: {
          initial: false,
          touched: !state.userNameOptions.touched,
          showInstructions: !state.userNameOptions.showInstructions
        }
      }
    }
    case 'updatePasswordValue': {
      const valid = validate(action.value, passwordValidationRules)
      return {
        ...state,
        passwordVale: {
          value: action.value,
          valid: valid
        }
      }
    }
    case 'updatePasswordOptions': {
      return {
        ...state,
        passwordOptions: {
          initial: false,
          touched: !state.passwordOptions.touched,
          showInstructions: !state.passwordOptions.showInstructions
        }
      }
    }
    default:
      return state
  }
}

export { formState, formReducer }
