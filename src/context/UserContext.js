import React, { createContext, useContext, useReducer } from 'react'

const UserContext = createContext()

const UserStore = ({ children, initialState, reducer }) => {
  return (
    <UserContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </UserContext.Provider>
  )
}

const useUseContext = () => useContext(UserContext)

export { UserStore, useUseContext }
