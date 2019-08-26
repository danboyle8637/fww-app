import validate from '../utils/validate'

// Validation rules for intputs

const usernameValidationRules = {
  minLength: 4,
  isRequired: true
}

const passwordValidationRules = {
  minLength: 6,
  isRequired: true
}

const emailValidationRules = {
  minLength: 4,
  isEmail: true,
  isRequired: true
}

const workoutGoalValidation = {
  maxLength: 4,
  isRequired: true
}

const formState = {
  usernameValue: {
    value: '',
    valid: false
  },
  usernameOptions: {
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
  },
  emailValue: {
    value: '',
    valid: false
  },
  emailOptions: {
    initial: true,
    touched: false,
    showInstructions: false
  },
  workoutGoalValue: {
    value: '',
    valid: false
  },
  workoutGoalOptions: {
    initial: true,
    touched: false,
    showInstructions: false
  }
}

const formReducer = (state, action) => {
  switch (action.type) {
    case 'setUsernameValue': {
      const valid = validate(action.value, usernameValidationRules)
      return {
        ...state,
        usernameValue: {
          value: action.value,
          valid: valid
        }
      }
    }
    case 'setUsernameOptions': {
      return {
        ...state,
        usernameOptions: {
          initial: false,
          touched: !state.usernameOptions.touched,
          showInstructions: !state.usernameOptions.showInstructions
        }
      }
    }
    case 'setPasswordValue': {
      const valid = validate(action.value, passwordValidationRules)
      return {
        ...state,
        passwordVale: {
          value: action.value,
          valid: valid
        }
      }
    }
    case 'setPasswordOptions': {
      return {
        ...state,
        passwordOptions: {
          initial: false,
          touched: !state.passwordOptions.touched,
          showInstructions: !state.passwordOptions.showInstructions
        }
      }
    }
    case 'setEmailValue': {
      const valid = validate(action.value, emailValidationRules)
      return {
        ...state,
        emailValue: {
          value: action.value,
          valid: valid
        }
      }
    }
    case 'setEmailOptions': {
      return {
        ...state,
        emailOptions: {
          initial: false,
          touched: !state.emailOptions.touched,
          showInstructions: !state.emailOptions.showInstructions
        }
      }
    }
    case 'setWorkoutGoalValue': {
      const valid = validate(action.value, workoutGoalValidation)
      return {
        ...state,
        workoutGoalValue: {
          value: action.value,
          valid: valid
        }
      }
    }
    case 'setWorkoutGoalOptions': {
      return {
        ...state,
        workoutGoalOptions: {
          initial: false,
          touched: !state.workoutGoalOptions.touched,
          showInstructions: !state.workoutGoalOptions.showInstructions
        }
      }
    }
    default:
      return state
  }
}

export { formState, formReducer }
