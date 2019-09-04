import React, { createContext, useContext, useReducer } from 'react'

const WorkoutStatsContext = createContext()

const WorkoutStatsStore = ({ children, initialState, reducer }) => {
  return (
    <WorkoutStatsContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </WorkoutStatsContext.Provider>
  )
}

const useWorkoutStatsContext = () => useContext(WorkoutStatsContext)

export { WorkoutStatsStore, useWorkoutStatsContext }
