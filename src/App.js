import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import Global from './styles/Global'
import { darkTheme } from './styles/Theme'
import AppLayout from './layouts/AppLayout'
import MainNav from './components/Nav/MainNav'
import Login from './pages/Login'
import { FormStore } from './context/FormContext'
import { formState, formReducer } from './reducers/formReducer'
import { ScreenWidthStore } from './context/ScreenWidthContext'

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <ScreenWidthStore>
        <FormStore initialState={formState} reducer={formReducer}>
          <Global />
          <MainNav />
          <AppLayout>
            <Login />
          </AppLayout>
        </FormStore>
      </ScreenWidthStore>
    </ThemeProvider>
  )
}

export default App

const HoldingDiv = styled.div`
  padding: 50px 16px;
`
