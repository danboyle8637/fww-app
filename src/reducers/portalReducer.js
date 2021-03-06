const portalState = {
  menu: {
    isOpen: false
  },
  moreMenu: {
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
  messageDialog: {
    isOpen: false,
    message: ''
  },
  errorMessage: {
    isOpen: false,
    redirectSlug: '',
    showButton: false,
    buttonText: '',
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
    case 'toggleMoreMenu': {
      return {
        ...state,
        moreMenu: {
          isOpen: !state.moreMenu.isOpen
        }
      }
    }
    case 'closeMoreMenu': {
      return {
        ...state,
        moreMenu: {
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
    case 'toggleMessageDialog': {
      return {
        ...state,
        messageDialog: {
          ...state.messageDialog,
          isOpen: !state.messageDialog.isOpen
        }
      }
    }
    case 'setMessageDialogMessage': {
      return {
        ...state,
        messageDialog: {
          ...state.messageDialog,
          message: action.value
        }
      }
    }
    case 'toggleErrorMessage': {
      return {
        ...state,
        errorMessage: {
          isOpen: !state.errorMessage.isOpen,
          redirectSlug: '',
          showButton: false,
          buttonText: '',
          message: action.value
        }
      }
    }
    case 'toggleEmergencyErrorMessage': {
      return {
        ...state,
        errorMessage: {
          isOpen: !state.errorMessage.isOpen,
          redirectSlug: action.value.redirectSlug,
          showButton: true,
          buttonText: action.value.buttonText,
          message: action.value.message
        }
      }
    }
    default: {
      return state
    }
  }
}

export { portalState, portalReducer }
