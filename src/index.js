import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from './styles/Theme'
import { FormStore } from './context/FormContext'
import { formState, formReducer } from './reducers/formReducer'
import { ScreenWidthStore } from './context/ScreenWidthContext'
import { FirebaseInstance } from './components/Firebase/FirebaseContext'
import App from './App'

ReactDOM.render(
  <ThemeProvider theme={darkTheme}>
    <FirebaseInstance>
      <ScreenWidthStore>
        <FormStore initialState={formState} reducer={formReducer}>
          <App />
        </FormStore>
      </ScreenWidthStore>
    </FirebaseInstance>
  </ThemeProvider>,
  document.getElementById('root')
)
