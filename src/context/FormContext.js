import React, { createContext, useContext, useReducer } from 'react'

const FormContext = createContext()

const FormStore = ({ children, initialState, reducer }) => {
  return (
    <FormContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </FormContext.Provider>
  )
}

const useFormStore = () => useContext(FormContext)

export { FormStore, FormContext, useFormStore }
