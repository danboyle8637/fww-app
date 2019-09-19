const portalState = {
  menu: {
    isOpen: false
  },
  workoutVideo: {
    isOpen: false
  },
  warmUpVideo: {
    isOpen: false
  },
  coolDownVideo: {
    isOpen: false
  },
  dialogBox: {
    openBox: '',
    boxes: [
      { id: 'workoutGoal1', isOpen: false },
      { id: 'workoutGoal2', isOpen: false },
      { id: 'workoutGoal3', isOpen: false }
    ]
  }
}

const portalReducer = (state, action) => {
  switch (action.type) {
    case 'toggleMenu': {
      return {
        ...state,
        menu: {
          isOpen: !state.menu.isOpen
        }
      }
    }
    case 'closeMenu': {
      return {
        ...state,
        menu: {
          isOpen: false
        }
      }
    }
    case 'toggleWorkoutVideo': {
      return {
        ...state,
        workoutVideo: {
          isOpen: !state.workoutVideo.isOpen
        }
      }
    }
    case 'toggleWarmUpVideo': {
      return {
        ...state,
        warmUpVideo: {
          isOpen: !state.warmUpVideo.isOpen
        }
      }
    }
    case 'toggleCoolDownVideo': {
      return {
        ...state,
        coolDownVideo: {
          isOpen: !state.coolDownVideo.isOpen
        }
      }
    }
    case 'closeVideo': {
      return {
        ...state,
        workoutVideo: {
          isOpen: false
        },
        warmUpVideo: {
          isOpen: false
        },
        coolDownVideo: {
          isOpen: false
        }
      }
    }
    case 'toggleDialogBox': {
      const boxes = state.dialogBox.boxes.map(box => {
        if (action.value === box.id) {
          return {
            ...box,
            isOpen: !box.isOpen
          }
        } else {
          return {
            ...box,
            isOpen: box.isOpen
          }
        }
      })

      return {
        ...state,
        dialogBox: {
          openBox: action.value,
          boxes: boxes
        }
      }
    }
    case 'closeDialogBox': {
      const boxes = state.dialogBox.boxes.map(box => {
        return {
          ...box,
          isOpen: false
        }
      })

      return {
        ...state,
        dialogBox: {
          openBox: '',
          boxes: boxes
        }
      }
    }
    default: {
      return state
    }
  }
}

export { portalState, portalReducer }
