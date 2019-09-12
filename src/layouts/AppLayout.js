import React from 'react'
import styled from 'styled-components'
import { above } from '../styles/Theme'

const AppLayout = ({ children }) => {
  return (
    <Layout>
      <AppWrapper>{children}</AppWrapper>
    </Layout>
  )
}

export default AppLayout

const Layout = styled.main`
  margin: 0 0 0 0;
  padding: 0;
  background: ${props => props.theme.mainBackgroundBorderColor};
  width: 100%;
  max-width: 75rem;
  ${above.ipadPro`
    padding: 22px;
    margin-top: 80px;
    margin-bottom: 120px;
    border-radius: 12px;
  `}
  ${above.ultraWide`
    margin-bottom: 200px;
  `}
`

const AppWrapper = styled.section`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.mainBackgroundColor};
  width: 100%;
  overflow: hidden;
  ${above.ipadPro`
    border-radius: 10px;
  `}
`
