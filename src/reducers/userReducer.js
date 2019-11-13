const userState = {}

const userReducer = (state, action) => {
  switch (action.type) {
    case 'setLoggedInUser': {
      return {
        firstName: action.value.firstName,
        photoUrl: action.value.photoUrl,
        programs: action.value.programs
      }
    }
    default: {
      return state
    }
  }
}

export { userState, userReducer }
