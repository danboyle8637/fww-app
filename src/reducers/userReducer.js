const userState = {
  firstName: '',
  username: '',
  photoUrl: '',
  programs: []
}

const userReducer = (state, action) => {
  switch (action.type) {
    case 'setLoggedInUser': {
      const program = action.value.program
      let programArray = [...state.programs]

      programArray.push(program)

      return {
        firstName: action.value.firstName,
        username: action.value.username,
        photoUrl: action.value.photoUrl,
        programs: programArray
      }
    }
    default: {
      return state
    }
  }
}

export { userState, userReducer }
