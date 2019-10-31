import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Global from './styles/Global'
import AppLayout from './layouts/AppLayout'
import MainNav from './components/Nav/MainNav'
import ResetDashboard from './pages/ResetDashboard'
import FourOhFour from './pages/FourOhFour'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ResetSignUp from './pages/ResetSignUp'
import Review from './pages/Review'
import Contact from './pages/Contact'
import ResetProgramDashboard from './pages/ResetProgramDashboard'
import ResetWorkout from './pages/ResetWorkout'
import ResetWorkoutCoaching from './pages/ResetWorkoutCoaching'
import ResetUserAccount from './pages/ResetUserAccount'
import PrivateRoute from './components/Shared/PrivateRoute'

const App = () => {
  return (
    <>
      <Global />
      <AppLayout>
        <BrowserRouter>
          <MainNav />
          <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute exact path="/dashboard" component={ResetDashboard} />
            <Route path="/login" component={Login} />
            <Route path="/playground" component={SignUp} />
            <Route path="/7-day-reset-step1" component={ResetSignUp} />
            <PrivateRoute path="/review" component={Review} />
            <Route path="/contact" component={Contact} />
            <PrivateRoute
              path="/account/:username"
              component={ResetUserAccount}
            />
            <PrivateRoute
              exact
              path="/dashboard/:programId"
              component={ResetProgramDashboard}
            />
            <PrivateRoute
              exact
              path="/dashboard/:programId/:workoutId"
              component={ResetWorkout}
            />
            <PrivateRoute
              path="/dashboard/:programId/:workoutId/coaching"
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
