import React, { createContext, useContext, useReducer } from 'react'

const UserContext = createContext()

const UserStore = ({ children, initialState, reducer }) => {
  return (
    <UserContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </UserContext.Provider>
  )
}

const useUserContext = () => useContext(UserContext)

export { UserStore, useUserContext }
