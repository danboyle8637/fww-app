const programsState = {
  programs: [],
  percentComplete: []
}

const programsReducer = (state, action) => {
  switch (action.type) {
    case 'setProgramsState': {
      return {
        ...state,
        programs: action.value
      }
    }
    case 'setPercentComplete': {
      return {
        ...state,
        percentComplete: action.value
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
