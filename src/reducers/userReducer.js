const userState = {}

const userReducer = (state, action) => {
  switch (action.type) {
    case 'setLoggedInUser': {
      const programsArray = action.value.programs

      return {
        firstName: action.value.firstName,
        username: action.value.username,
        photoUrl: action.value.photoUrl,
        programs: programsArray
      }
    }
    default: {
      return state
    }
  }
}

export { userState, userReducer }
