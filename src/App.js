import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import Global from './styles/Global'
import { darkTheme } from './styles/Theme'
import AppLayout from './layouts/AppLayout'
import MainNav from './components/Nav/MainNav'
import IgniteResetHeader from './components/Cards/ProgramHeaders/IgniteResetHeader'
import BodyBurnResetHeader from './components/Cards/ProgramHeaders/BodyBurnResetHeader'
import StrongResetHeader from './components/Cards/ProgramHeaders/StrongResetHeader'
import { ScreenWidthStore } from './context/ScreenWidthContext'

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <ScreenWidthStore>
        <Global />
        <MainNav />
        <AppLayout>
          <HoldingDiv>
            <IgniteResetHeader />
          </HoldingDiv>
          <HoldingDiv>
            <BodyBurnResetHeader />
          </HoldingDiv>
          <HoldingDiv>
            <StrongResetHeader />
          </HoldingDiv>
        </AppLayout>
      </ScreenWidthStore>
    </ThemeProvider>
  )
}

export default App

const HoldingDiv = styled.div`
  padding: 50px 16px;
`
