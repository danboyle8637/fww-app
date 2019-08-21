import React from 'react'
import { ThemeProvider } from 'styled-components'

import Global from './styles/Global'
import { darkTheme } from './styles/Theme'
import AppLayout from './layouts/AppLayout'
import MainNav from './components/Nav/MainNav'
import Login from './pages/Login'
import { ScreenWidthStore } from './context/ScreenWidthContext'

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <ScreenWidthStore>
        <Global />
        <MainNav />
        <AppLayout>
          <Login />
        </AppLayout>
      </ScreenWidthStore>
    </ThemeProvider>
  )
}

export default App
