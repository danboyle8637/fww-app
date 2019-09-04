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
import { MenuStore } from './context/menuContext'
import { menuState, menuReducer } from './reducers/menuReducer'
import App from './App'

ReactDOM.render(
  <ThemeProvider theme={darkTheme}>
    <FirebaseConnect initializeFirebase={new Firebase()}>
      <WorkoutsStore initialState={workoutsState} reducer={workoutsReducer}>
        <WorkoutStatsStore
          initialState={workoutStatsState}
          reducer={workoutStatsReducer}
        >
          <MenuStore initialState={menuState} reducer={menuReducer}>
            <ScreenWidthStore>
              <FormStore initialState={formState} reducer={formReducer}>
                <App />
              </FormStore>
            </ScreenWidthStore>
          </MenuStore>
        </WorkoutStatsStore>
      </WorkoutsStore>
    </FirebaseConnect>
  </ThemeProvider>,
  document.getElementById('root')
)
