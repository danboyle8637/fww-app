const userState = {
  firstName: '',
  username: '',
  photoUrl: '',
  programs: []
}

const userReducer = (state, action) => {
  switch (action.type) {
    case 'setLoggedInUser': {
      return {
        firstName: action.value.firstName,
        username: action.value.username,
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
