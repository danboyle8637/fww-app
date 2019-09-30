import React from 'react'
import styled from 'styled-components'

import { Header5 } from '../../styles/Typography'
import LoadingKettlebell from '../../svgs/LoadingKettlebell'
import SyncingTransition from '../../Animations/Transitions/SyncingTransition'

const SyncingIndicator = ({ isSyncing, syncMessage }) => {
  return (
    <SyncingTransition component={null} isSyncing={isSyncing}>
      <SyncContainer>
        <LoadingAni />
        <SyncLabel secondary>{syncMessage}</SyncLabel>
      </SyncContainer>
    </SyncingTransition>
  )
}

export default SyncingIndicator

const SyncContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  margin-bottom: 20px;
  margin-left: 20px;
  padding: 8px 12px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
  align-items: center;
  background: rgba(16, 16, 16, 0.6);
  border: 2px solid ${props => props.theme.tertiaryAccent};
  border-radius: 50px;
`

const SyncLabel = styled(Header5)`
  color: #f8f8f8;
`

const LoadingAni = styled(LoadingKettlebell)`
  width: 20px;
`
