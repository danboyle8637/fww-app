const fetchState = {
  isFetching: false
}

const fetchReducer = (state, action) => {
  switch (action.type) {
    case 'toggleFetching': {
      const fetching = state.isFetching
      return {
        isFetching: !fetching
      }
    }
    default: {
      return state
    }
  }
}

export { fetchState, fetchReducer }
