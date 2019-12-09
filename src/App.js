import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Global from './styles/Global'
import AppLayout from './layouts/AppLayout'
import MainNav from './components/Nav/MainNav'
import BottomNav from './components/NavBottom/MenuChicklet'
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
import ResetSecurityLogin from './pages/ResetSecurityLogin'
import SocialLogin from './pages/SocialLogin'
import SocialSignUp from './pages/SocialSignUp'
import SocialLink from './pages/SocialLink'
import PrivateRoute from './components/Shared/PrivateRoute'
import Portal from './components/Shared/Portal'
import ErrorIndicator from './components/Indicators/ErrorIndicator'

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
            <Route path="/security-login" component={ResetSecurityLogin} />
            <Route path="/social-login" component={SocialLogin} />
            <Route path="/social-sign-up" component={SocialSignUp} />
            <Route path="/social-link" component={SocialLink} />
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
              exact
              path="/dashboard/:programId/:workoutId/coaching"
              component={ResetWorkoutCoaching}
            />
            <Route component={FourOhFour} />
          </Switch>
          <BottomNav />
        </BrowserRouter>
        <Portal>
          <ErrorIndicator />
        </Portal>
      </AppLayout>
    </>
  )
}

export default App
