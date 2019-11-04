const userState = {}

const userReducer = (state, action) => {
  switch (action.type) {
    case 'setLoggedInUser': {
      return {
        userId: action.value.userId,
        firstName: action.value.firstName,
        photoUrl: action.value.photoUrl,
        photoUrlTiny: action.value.photoUrlTiny,
        programs: action.value.programs
      }
    }
    default: {
      return state
    }
  }
}

export { userState, userReducer }
