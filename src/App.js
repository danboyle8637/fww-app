import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Global from './styles/Global'
import { darkTheme } from './styles/Theme'
import AppLayout from './layouts/AppLayout'
import MainNav from './components/Nav/MainNav'
import ResetDashboard from './pages/ResetDashboard'
import FourOhFour from './pages/FourOhFour'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
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
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/dashboard" component={ResetDashboard} />
                <Route path="/signup" component={SignUp} />
                <Route component={FourOhFour} />
              </Switch>
            </BrowserRouter>
          </AppLayout>
        </FormStore>
      </ScreenWidthStore>
    </ThemeProvider>
  )
}

export default App
