const menuState = {
  isOpen: false
}

const menuReducer = (state, action) => {
  switch (action.type) {
    case 'toggleMenu': {
      return {
        isOpen: !state.isOpen
      }
    }
    case 'closeMenu': {
      return {
        isOpen: false
      }
    }
    default: {
      return state
    }
  }
}

export { menuState, menuReducer }
