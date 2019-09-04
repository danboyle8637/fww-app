const userState = {
  firstName: '',
  username: '',
  photoUrl: '',
  program: ''
}

const userReducer = (state, action) => {
  switch (action.type) {
    case 'setLoggedInUser': {
      return {
        firstName: action.value.firstName,
        username: action.value.username,
        photoUrl: action.value.photoUrl,
        program: action.value.program
      }
    }
    default: {
      return state
    }
  }
}

export { userState, userReducer }
