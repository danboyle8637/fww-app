import React, { createContext, useContext, useReducer } from 'react'

const PortalContext = createContext()

const PortalStore = ({ initialState, reducer, children }) => {
  return (
    <PortalContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </PortalContext.Provider>
  )
}

const usePortalContext = () => useContext(PortalContext)

export { usePortalContext, PortalStore }
