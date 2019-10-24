const userState = {
  firstName: 'Kindal',
  username: 'kindal-lee',
  photoUrl: 'gs://fit-womens-weekly.appspot.com/admin/fww-user-avatar.png',
  programs: ['7DayBodyBurnReset']
}

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
