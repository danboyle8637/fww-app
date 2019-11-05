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
  trainingPlanVideo: {
    isOpen: false
  },
  dialogBox: {
    openBox: '',
    boxes: [
      { id: 'workoutGoal1', isOpen: false },
      { id: 'workoutGoal2', isOpen: false },
      { id: 'workoutGoal3', isOpen: false }
    ]
  },
  errorMessage: {
    isOpen: true,
    message: ''
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
    case 'toggleTrainingPlanVideo': {
      return {
        ...state,
        trainingPlanVideo: {
          isOpen: !state.trainingPlanVideo.isOpen
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
        },
        trainingPlanVideo: {
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
    case 'toggleErrorMessage': {
      return {
        ...state,
        errorMessage: {
          isOpen: !state.errorMessage.isOpen,
          message: action.value
        }
      }
    }
    default: {
      return state
    }
  }
}

export { portalState, portalReducer }
