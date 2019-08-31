import React, { createContext, useContext, useReducer } from 'react'

const MenuContext = createContext()

const MenuStore = ({ initialState, reducer, children }) => {
  return (
    <MenuContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </MenuContext.Provider>
  )
}

const useMenuContext = () => useContext(MenuContext)

export { useMenuContext, MenuStore }
