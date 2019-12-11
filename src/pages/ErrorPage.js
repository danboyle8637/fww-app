import React from 'react'
import styled from 'styled-components'

import errorMobileBg from '../images/error-kindal-background-600x1300.jpg'
import errorTabletBg from '../images/error-kindal-background-834x1112.jpg'
import errorIpadProBg from '../images/error-kindal-background-1024x1366.jpg'
import errorLaptopBg from '../images/error-kindal-background-1440x900.jpg'
import useRenderBackgroundImage from '../hooks/useRenderBackgroundImage'
import ErrorHeader from '../components/PageHeaders/ErrorHeader'
import { above } from '../styles/Theme'

const ErrorPage = () => {
  const title = 'Kindal looking shocked because there was an error'
  const alt = 'Kindal shocked there was an error'

  const background = useRenderBackgroundImage(
    errorMobileBg,
    errorTabletBg,
    errorIpadProBg,
    errorLaptopBg,
    title,
    alt
  )

  return (
    <LoginContainer>
      {background}
      <ContentWrapper>
        <ErrorHeader />
      </ContentWrapper>
    </LoginContainer>
  )
}

export default ErrorPage

const LoginContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  background: #000;
  height: 100%;
`

const ContentWrapper = styled.div`
  margin: 60px 0 0 0;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  z-index: 1;
  ${above.mobile`
    margin: 160px 0 0 80px;
    width: 60%;
  `}
  ${above.tablet`
    margin: 240px 0 0 160px
    width: 50%;
  `}
  ${above.ipadPro`
    margin: 80px 0 0 160px;
    width: 42%;
  `}
`
