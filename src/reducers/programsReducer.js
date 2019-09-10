const programsState = {
  programs: [],
  percentComplete: []
}

const programsReducer = (state, action) => {
  switch (action.type) {
    case 'setProgramsState': {
      const programsArray = action.value

      const newProgramsState = programsArray.reduce(
        (accumulator, currentValue) => {
          accumulator.push({ ...currentValue })

          return accumulator
        },
        []
      )

      return {
        ...state,
        programs: newProgramsState
      }
    }
    case 'setPercentComplete': {
      return {
        ...state,
        percentComplete: action.value
      }
    }
    default: {
      return state
    }
  }
}

export { programsState, programsReducer }
