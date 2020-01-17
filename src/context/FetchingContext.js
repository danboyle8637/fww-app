import React, { createContext, useContext, useReducer } from 'react'

const FetchingContext = createContext()

const FetchingStore = ({ children, initialState, reducer }) => {
  return (
    <FetchingContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </FetchingContext.Provider>
  )
}

const useFetchingContext = () => useContext(FetchingContext)

export { useFetchingContext, FetchingContext, FetchingStore }
