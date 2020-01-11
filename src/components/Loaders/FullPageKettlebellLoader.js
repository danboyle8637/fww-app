import React from 'react'
import styled from 'styled-components'

import LoadingKettlebell from '../../svgs/LoadingKettlebell'

const FullPageKettlebellLoader = ({ loadingMessage }) => {
  return (
    <LoaderContainer>
      <ContentWrapper>
        <Kettlebell />
        <LoadingMessage>{loadingMessage}</LoadingMessage>
      </ContentWrapper>
    </LoaderContainer>
  )
}

export default FullPageKettlebellLoader

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.mainBackgroundBorderColor};
  z-index: 9999;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`

const Kettlebell = styled(LoadingKettlebell)`
  width: 140px;
`

const LoadingMessage = styled.h4`
  margin: 20px 0 0 0;
  padding: 0;
  font-size: 22px;
  color: ${props => props.theme.headlinePrimary};
  text-transform: uppercase;
  text-align: center;
  line-height: 1.4;
  letter-spacing: 0.1rem;
`
