const userState = {
  isLoggedIn: false
}

const userReducer = (state, action) => {
  switch (action.type) {
    case 'setLoggedInUser': {
      return {
        ...state,
        firstName: action.value.firstName,
        photoUrl: action.value.photoUrl,
        programs: action.value.programs,
        isLoggedIn: !state.isLoggedIn
      }
    }
    case 'setLoggedOutUser': {
      return {
        ...state,
        isLoggedIn: !state.isLoggedIn
      }
    }
    case 'setUpdatedProfileImage': {
      return {
        ...state,
        photoUrl: action.value
      }
    }
    case 'setUpdatedPrograms': {
      return {
        ...state,
        programs: [...state.programs, action.value]
      }
    }
    default: {
      return state
    }
  }
}

export { userState, userReducer }
