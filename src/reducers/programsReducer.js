const programsState = {
  purchasedPrograms: [],
  notPurchasedPrograms: [],
  percentComplete: []
}

const programsReducer = (state, action) => {
  switch (action.type) {
    case 'setProgramsState': {
      return {
        ...state,
        purchasedPrograms: action.value.purchasedPrograms,
        notPurchasedPrograms: action.value.notPurchasedPrograms
      }
    }
    case 'setPercentComplete': {
      return {
        ...state,
        percentComplete: action.value
      }
    }
    case 'updatePercentComplete': {
      let percentCompleteCopy = [...state.percentCompete]

      percentCompleteCopy = [...percentCompleteCopy, action.value]

      return {
        ...state,
        percentCompete: percentCompleteCopy
      }
    }
    case 'incrementPercentComplete': {
      const programId = action.value

      const copyOfState = { ...state }
      const percentCompete = copyOfState.percentComplete

      const updatedPercentComplete = percentCompete.map(program => {
        if (program.programId === programId) {
          program.workoutsCompleted++
        }

        return program
      })

      return {
        ...state,
        percentComplete: updatedPercentComplete
      }
    }
    default: {
      return state
    }
  }
}

export { programsState, programsReducer }
