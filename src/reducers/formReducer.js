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

const firstNameValidationRules = {
  minLength: 2,
  isRequired: true
}

const biggestObstacleValidationRules = {
  isRequired: true
}

const setResetWorkoutValidationRules = {
  isSelected: true
}

// const setSignUpMethodValidation = {
//   isSelected: true
// }

const setReviewValidation = {
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
  firstNameValue: {
    value: '',
    valid: false
  },
  firstNameOptions: {
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
  starRatingValue: {
    value: 0,
    valid: false
  },
  reviewValue: {
    value: '',
    valid: false
  },
  reviewOptions: {
    initial: true,
    touched: false,
    showInstructions: false
  },
  reviewSelfieImage: {
    file: '',
    fileName: '',
    imageSet: false
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
    case 'setFirstNameValue': {
      const valid = validate(action.value, firstNameValidationRules)
      return {
        ...state,
        firstNameValue: {
          value: action.value,
          valid: valid
        }
      }
    }
    case 'setFirstNameOptions': {
      return {
        ...state,
        firstNameOptions: {
          initial: false,
          touched: !state.firstNameOptions.touched,
          showInstructions: !state.firstNameOptions.showInstructions
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
    case 'setStarRatingValue': {
      return {
        ...state,
        starRatingValue: {
          value: action.value,
          valid: true
        }
      }
    }
    case 'setReviewValue': {
      const valid = validate(action.value, setReviewValidation)

      return {
        ...state,
        reviewValue: {
          value: action.value,
          valid: valid
        }
      }
    }
    case 'setReviewOptions': {
      return {
        ...state,
        reviewOptions: {
          initial: false,
          touched: !state.reviewOptions.touched,
          showInstructions: !state.reviewOptions.showInstructions
        }
      }
    }
    case 'setReviewSelfieImage': {
      return {
        ...state,
        reviewSelfieImage: {
          file: action.value.file,
          fileName: action.value.fileName,
          imageSet: true
        }
      }
    }
    default:
      return state
  }
}

export { formState, formReducer }
