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
    default: {
      return state
    }
  }
}

export { userState, userReducer }
