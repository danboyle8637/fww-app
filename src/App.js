import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Global from './styles/Global'
import AppLayout from './layouts/AppLayout'
import MainNav from './components/Nav/MainNav'
import ResetDashboard from './pages/ResetDashboard'
import FourOhFour from './pages/FourOhFour'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ResetProgramDashboard from './pages/ResetProgramDashboard'
import ResetWorkout from './pages/ResetWorkout'
import ResetWorkoutCoaching from './pages/ResetWorkoutCoaching'
import ResetUserAccount from './pages/ResetUserAccount'

function App() {
  return (
    <>
      <Global />
      <MainNav />
      <AppLayout>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/dashboard" component={ResetDashboard} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/account/:username" component={ResetUserAccount} />
            <Route
              exact
              path="/program/:name"
              component={ResetProgramDashboard}
            />
            <Route
              exact
              path="/program/:name/:workoutName"
              component={ResetWorkout}
            />
            <Route
              path="/program/:name/:workoutName/coaching"
              component={ResetWorkoutCoaching}
            />
            <Route component={FourOhFour} />
          </Switch>
        </BrowserRouter>
      </AppLayout>
    </>
  )
}

export default App
