import React, { createContext, useContext, useReducer } from 'react'

const ProgramsContext = createContext()

const ProgramsStore = ({ children, initialState, reducer }) => {
  return (
    <ProgramsContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </ProgramsContext.Provider>
  )
}

const useProgramsContext = () => useContext(ProgramsContext)

export { ProgramsStore, useProgramsContext }
