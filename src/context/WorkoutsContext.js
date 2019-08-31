import React, { createContext, useContext, useReducer } from 'react'

const WorkoutsContext = createContext()

const WorkoutsStore = ({ initialState, reducer, children }) => {
  return (
    <WorkoutsContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </WorkoutsContext.Provider>
  )
}

const useWorkoutState = () => useContext(WorkoutsContext)

export { WorkoutsContext, WorkoutsStore, useWorkoutState }
