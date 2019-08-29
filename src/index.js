import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from './styles/Theme'
import { FormStore } from './context/FormContext'
import { formState, formReducer } from './reducers/formReducer'
import { FirebaseConnect } from './components/Firebase/FirebaseContext'
import Firebase from './components/Firebase/firebaseConfig'
import { ScreenWidthStore } from './context/ScreenWidthContext'
import App from './App'

ReactDOM.render(
  <ThemeProvider theme={darkTheme}>
    <FirebaseConnect initializeFirebase={new Firebase()}>
      <ScreenWidthStore>
        <FormStore initialState={formState} reducer={formReducer}>
          <App />
        </FormStore>
      </ScreenWidthStore>
    </FirebaseConnect>
  </ThemeProvider>,
  document.getElementById('root')
)
