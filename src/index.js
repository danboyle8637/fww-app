import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from './styles/Theme'
import { FormStore } from './context/FormContext'
import { formState, formReducer } from './reducers/formReducer'
import { FirebaseConnect } from './components/Firebase/FirebaseContext'
import Firebase from './components/Firebase/firebaseConfig'
import { ScreenWidthStore } from './context/ScreenWidthContext'
import { WorkoutsStore } from './context/WorkoutsContext'
import { workoutsReducer, workoutsState } from './reducers/workoutsReducer'
import { WorkoutStatsStore } from './context/WorkoutStatsContext'
import {
  workoutStatsState,
  workoutStatsReducer
} from './reducers/workoutStatsReducer'
import { PortalStore } from './context/portalContext'
import { portalState, portalReducer } from './reducers/portalReducer'
import { UserStore } from './context/UserContext'
import { userState, userReducer } from './reducers/userReducer'
import { ProgramsStore } from './context/ProgramsContext'
import { programsState, programsReducer } from './reducers/programsReducer'
import App from './App'

ReactDOM.render(
  <ThemeProvider theme={darkTheme}>
    <FirebaseConnect initializeFirebase={new Firebase()}>
      <UserStore initialState={userState} reducer={userReducer}>
        <ProgramsStore initialState={programsState} reducer={programsReducer}>
          <WorkoutsStore initialState={workoutsState} reducer={workoutsReducer}>
            <WorkoutStatsStore
              initialState={workoutStatsState}
              reducer={workoutStatsReducer}
            >
              <PortalStore initialState={portalState} reducer={portalReducer}>
                <ScreenWidthStore>
                  <FormStore initialState={formState} reducer={formReducer}>
                    <App />
                  </FormStore>
                </ScreenWidthStore>
              </PortalStore>
            </WorkoutStatsStore>
          </WorkoutsStore>
        </ProgramsStore>
      </UserStore>
    </FirebaseConnect>
  </ThemeProvider>,
  document.getElementById('root')
)
