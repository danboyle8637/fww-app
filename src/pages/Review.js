import React, { useState } from 'react'
import styled from 'styled-components'

import FWWLogo from '../components/Logos/FWWLogo'
import HorizontalUserCard from '../components/UserCards/HorizontalBasicUserCard'
import VimeoPlayer from '../components/Shared/VimeoPlayer'
import ReviewForm from '../components/Forms/ReviewForm'
import SyncingIndicator from '../components/Indicators/SyncingIndicator'
import MessageDialog from '../components/Dialogs/MessageDialog'
import Portal from '../components/Shared/Portal'
import { useUserContext } from '../context/UserContext'
import { above } from '../styles/Theme'

const Review = () => {
  const [isSyncing, setIsSyncing] = useState(false)
  const [syncMessage, setSyncMessage] = useState('')
  // eslint-disable-next-line
  const [userState, dispatchUserAction] = useUserContext()

  const handleToggleSync = () => setIsSyncing(prevState => !prevState)

  const handleSetSyncMessage = message => setSyncMessage(message)

  return (
    <>
      <ReviewContainer>
        <FWWLogo />
        <HorizontalUserCard
          photoUrl={userState.photoUrl}
          firstName={userState.firstName}
        />
        <VideoWrapper>
          <VimeoPlayer videoId={370208968} />
        </VideoWrapper>
        <ReviewForm
          handleToggleSync={handleToggleSync}
          handleSetSyncMessage={handleSetSyncMessage}
        />
      </ReviewContainer>
      <Portal>
        <SyncingIndicator isSyncing={isSyncing} syncMessage={syncMessage} />
        <MessageDialog />
      </Portal>
    </>
  )
}

export default Review

const ReviewContainer = styled.div`
  margin: 80px 0 80px 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 16px;
  justify-items: center;
  width: 100%;
  ${above.tablet`
    margin: 80px 0 120px 0;
  `}
`

const VideoWrapper = styled.div`
  width: 100%;
  ${above.tablet`
    width: 60%;
  `}
`
