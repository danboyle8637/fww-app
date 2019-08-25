import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import Global from './styles/Global'
import { darkTheme } from './styles/Theme'
import AppLayout from './layouts/AppLayout'
import MainNav from './components/Nav/MainNav'
import IgniteResetHeader from './components/Cards/ProgramHeaders/IgniteResetHeader'
import StrongResetHeader from './components/Cards/ProgramHeaders/StrongResetHeader'
import WorkoutProgramCard from './components/Cards/WorkoutProgramCard'
import TrackingChart from './components/Tables/TrackingChart'
import WorkoutTrackingForm from './components/Forms/WorkoutTrackingForm'
import CompleteFavoriteWorkoutForm from './components/Forms/CompleteFavoriteWorkoutForm'
import DownloadTrackingSection from './components/WorkoutPage/DownloadTrackingSection'
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
            <HoldingDiv>
              <IgniteResetHeader />
            </HoldingDiv>
            <HoldingDiv>
              <WorkoutProgramCard
                isWorkout={true}
                title="Pushup Workout"
                description="Let’s perfect and practice our pushups with this sweaty... tough workout."
              />
            </HoldingDiv>
            <HoldingDiv>
              <WorkoutProgramCard
                isProgram={true}
                programHeader={<IgniteResetHeader />}
                description="A beginner reset program you're going to love."
              />
            </HoldingDiv>
            <HoldingDiv>
              <WorkoutProgramCard
                isProgram={true}
                programHeader={<StrongResetHeader />}
                description="A reset program for strong. It's great."
              />
            </HoldingDiv>
            <HoldingDiv>
              <TrackingChart />
            </HoldingDiv>
            <HoldingDiv>
              <WorkoutTrackingForm
                trackingGoal={
                  'How many pushups without stopping can you do on the very last round?'
                }
              />
            </HoldingDiv>
            <HoldingDiv>
              <CompleteFavoriteWorkoutForm />
            </HoldingDiv>
            <HoldingDiv>
              <DownloadTrackingSection />
            </HoldingDiv>
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
