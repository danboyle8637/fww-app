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

const confirmPasswordValidationRules = {
  minLength: 6,
  isRequired: true,
  matchPassword: true
}

const emailValidationRules = {
  minLength: 4,
  isEmail: true,
  isRequired: true
}

const workoutGoalValidationRules = {
  maxLength: 6,
  isRequired: true,
  isNumber: true
}

const signupFirstNameValidationRules = {
  minLength: 2,
  isRequired: true
}

const biggestObstacleValidationRules = {
  isRequired: true
}

const setResetWorkoutValidationRules = {
  isSelected: true
}

const setSignUpMethodValidation = {
  isSelected: true
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
  confirmPasswordValue: {
    value: '',
    valid: false
  },
  confirmPasswordOptions: {
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
  signupFirstNameValue: {
    value: '',
    valid: false
  },
  signupFirstNameOptions: {
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
  },
  resetWorkoutValue: {
    value: '',
    valid: false,
    options: [
      {
        value: '7DayIgniteReset',
        description:
          'Seven days of learning correct form… easing into intense workouts… perfect for beginners ready to get started again.',
        fitnessLevel: 'beginner',
        numberOfWorkouts: 5,
        duration: '7 - 9 days',
        checked: false
      },
      {
        value: '7DayBodyBurnReset',
        description:
          'Seven days of tweaking form… pushing your comfort zone… and discovering a smarter, more intense way to workout.',
        fitnessLevel: 'intermediate',
        numberOfWorkouts: 5,
        duration: '7 - 9 days',
        checked: false
      },
      {
        value: '7DayStrongReset',
        description:
          'Seven days of intense kettlebell workouts. Each workout builds on the next with new exercises and challenges.',
        fitnessLevel: 'advanced',
        numberOfWorkouts: 5,
        duration: '7 - 9 days',
        checked: false
      }
    ]
  },
  resetWorkoutOptions: {
    initial: true
  },
  signUpMethodValue: {
    value: '',
    valid: false,
    options: [
      { value: 'Google', checked: false },
      { value: 'Facebook', checked: false },
      { value: 'EmailPassword', checked: false }
    ]
  },
  signUpMethodOptions: {
    initial: true
  },
  biggestObstacleValue: {
    value: '',
    valid: false,
    options: [
      { value: 'time', displayValue: 'Not enough time', checked: false },
      {
        value: 'intensity',
        displayValue: `My workouts aren't intense enough`,
        checked: false
      },
      {
        value: 'coaching',
        displayValue: `I feel like I'm ignored`,
        checked: false
      },
      {
        value: 'mindset',
        displayValue: `I don't believe I can succeed`,
        checked: false
      }
    ]
  },
  biggestObstacleOptions: {
    initial: true
  },
  completeWorkout: {
    value: [],
    options: [
      { id: 1, value: 'complete1', checked: false },
      { id: 2, value: 'complete2', checked: false },
      { id: 3, value: 'complete3', checked: false }
    ]
  },
  isFavoriteWorkout: {
    value: '',
    options: [{ value: 'isFavoriteWorkout', checked: false }]
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
        passwordValue: {
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
    case 'setConfirmPasswordValue': {
      const valid = validate(
        action.value,
        confirmPasswordValidationRules,
        state.passwordValue.value
      )
      return {
        ...state,
        confirmPasswordValue: {
          value: action.value,
          valid: valid
        }
      }
    }
    case 'setConfirmPasswordOptions': {
      return {
        ...state,
        confirmPasswordOptions: {
          initial: false,
          touched: !state.confirmPasswordOptions.touched,
          showInstructions: !state.confirmPasswordOptions.showInstructions
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
    case 'setSignUpFirstNameValue': {
      const valid = validate(action.value, signupFirstNameValidationRules)
      return {
        ...state,
        signupFirstNameValue: {
          value: action.value,
          valid: valid
        }
      }
    }
    case 'setSignUpFirstNameOptions': {
      return {
        ...state,
        signupFirstNameOptions: {
          initial: false,
          touched: !state.signupFirstNameOptions.touched,
          showInstructions: !state.signupFirstNameOptions.showInstructions
        }
      }
    }
    case 'setWorkoutGoalValue': {
      const valid = validate(action.value, workoutGoalValidationRules)
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
    case 'setLoggedInUser': {
      return {
        ...state,
        usernameValue: {
          value: action.value,
          valid: true
        }
      }
    }
    case 'resetUsernamePasswordForm': {
      return {
        ...state,
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
        }
      }
    }
    case 'resetForgotPasswordForm': {
      console.log('Reset Forgot Password Reducer is Running!')
      return {
        ...state,
        emailValue: {
          value: '',
          valid: false
        },
        emailOptions: {
          initial: true,
          touched: false,
          showInstructions: false
        }
      }
    }
    case 'setBiggestObstacleValue': {
      const valid = validate(action.value, biggestObstacleValidationRules)

      const options = state.biggestObstacleValue.options.map(option => {
        if (action.value === option.value) {
          return {
            value: option.value,
            displayValue: option.displayValue,
            checked: !option.checked
          }
        } else if (option.checked) {
          return {
            value: option.value,
            displayValue: option.displayValue,
            checked: !option.checked
          }
        } else {
          return {
            value: option.value,
            displayValue: option.displayValue,
            checked: option.checked
          }
        }
      })

      return {
        ...state,
        biggestObstacleValue: {
          value: action.value,
          valid: valid,
          options: options
        }
      }
    }
    case 'setBiggestObstacleOptions': {
      return {
        ...state,
        biggestObstacleOptions: {
          initial: false
        }
      }
    }
    case 'setResetWorkoutValue': {
      const options = state.resetWorkoutValue.options.map(option => {
        if (action.value === option.value) {
          return {
            ...option,
            checked: true
          }
        } else if (option.checked) {
          return {
            ...option,
            checked: !option.checked
          }
        } else {
          return {
            ...option,
            checked: option.checked
          }
        }
      })

      const valid = validate(options, setResetWorkoutValidationRules)

      return {
        ...state,
        resetWorkoutValue: {
          value: action.value,
          valid: valid,
          options: options
        }
      }
    }
    case 'setResetWorkoutOptions': {
      return {
        ...state,
        resetWorkoutOptions: {
          initial: false
        }
      }
    }
    case 'setSignUpMethodValue': {
      const options = state.signUpMethodValue.options.map(option => {
        if (action.value === option.value) {
          return {
            ...option,
            checked: true
          }
        } else if (option.checked) {
          return {
            ...option,
            checked: !option.checked
          }
        } else {
          return {
            ...option,
            checked: option.checked
          }
        }
      })

      const valid = validate(options, setSignUpMethodValidation)

      return {
        ...state,
        signUpMethodValue: {
          value: action.value,
          valid: valid,
          options: options
        }
      }
    }
    case 'setSignUpMethodOptions': {
      return {
        ...state,
        signUpMethodOptions: {
          initial: false
        }
      }
    }
    case 'setCompleteWorkoutValue': {
      // You can't spread a string because it will spread out the letters
      let completedArray = [...state.completeWorkout.value]
      const options = state.completeWorkout.options

      const completedFirst = completedArray.includes(1)
      const completedSecond = completedArray.includes(2)

      const newOptions = options.map(option => {
        if (action.value === option.value && action.value === 'complete1') {
          return {
            ...option,
            checked: true
          }
        } else if (
          action.value === option.value &&
          action.value === 'complete2' &&
          completedFirst
        ) {
          return {
            ...option,
            checked: true
          }
        } else if (
          action.value === option.value &&
          action.value === 'complete3' &&
          completedSecond
        ) {
          return {
            ...option,
            checked: true
          }
        } else {
          return {
            ...option,
            checked: option.checked
          }
        }
      })

      newOptions.forEach(option => {
        if (action.value === option.value && option.checked) {
          completedArray.push(option.id)
        } else if (action.value === option.value && !option.checked) {
          completedArray = completedArray.filter(el => {
            return option.id !== el
          })
        } else {
          return completedArray
        }
      })

      return {
        ...state,
        completeWorkout: {
          value: completedArray,
          options: newOptions
        }
      }
    }
    case 'setIsFavoriteWorkout': {
      const options = state.isFavoriteWorkout.options.map(option => {
        if (action.value === option.value) {
          return {
            ...option,
            checked: !option.checked
          }
        } else {
          return {
            ...option,
            checked: option.checked
          }
        }
      })

      return {
        ...state,
        isFavoriteWorkout: {
          value: action.value,
          options: options
        }
      }
    }
    default:
      return state
  }
}

export { formState, formReducer }
