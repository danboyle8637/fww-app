const userState = {}

const userReducer = (state, action) => {
  switch (action.type) {
    case 'setLoggedInUser': {
      const programsArray = action.value.userData.programs

      return {
        firstName: action.value.userData.firstName,
        username: action.value.userData.username,
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
