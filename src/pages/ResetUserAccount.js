import React, { useState } from 'react'
import styled from 'styled-components'
import { TransitionGroup } from 'react-transition-group'

import FWWLogo from '../components/Logos/FWWLogo'
import VerticalUserCard from '../components/UserCards/VerticalUserCard'
import AccountMenu from '../components/AccountPage/AccountMenu'
import ConnectSocialAccount from '../components/AccountPage/ConnectSocialAccount'
import AccountUpdateProfilePicForm from '../components/Forms/AccountUpdateProfilePicForm'
import AccountUpdateEmailForm from '../components/Forms/AccountUpdateEmailForm'
import AccountUpdatePasswordForm from '../components/Forms/AccountUpdatePasswordForm'
import Portal from '../components/Shared/Portal'
import SyncingIndicator from '../components/Indicators/SyncingIndicator'
import { useUserContext } from '../context/UserContext'
import { above } from '../styles/Theme'

const ResetUserAccount = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isSyncing, setIsSyncing] = useState(false)
  const [syncMessage, setSyncMessage] = useState('Syncing...')
  // eslint-disable-next-line
  const [userState, dispatchUserAction] = useUserContext()

  const handleToggleSync = () => {
    setIsSyncing(prevValue => !prevValue)
  }

  const handleSetSyncMessage = message => {
    setSyncMessage(message)
  }

  return (
    <>
      <UserAccountContainer>
        <FWWLogo />
        <VerticalUserCard
          firstName={userState.firstName}
          profileImage={userState.photoUrl}
        />
        <SectionWrapper>
          <FormWrapper>
            <TransitionGroup component={null}>
              <AccountMenu
                activeSlide={activeSlide}
                setActiveSlide={setActiveSlide}
              />
              <AccountUpdateProfilePicForm
                activeSlide={activeSlide}
                setActiveSlide={setActiveSlide}
              />
              <AccountUpdateEmailForm
                userId={userState.userId}
                activeSlide={activeSlide}
                setActiveSlide={setActiveSlide}
                handleToggleSync={handleToggleSync}
                handleSetSyncMessage={handleSetSyncMessage}
              />
              <AccountUpdatePasswordForm
                userId={userState.userId}
                activeSlide={activeSlide}
                setActiveSlide={setActiveSlide}
                handleToggleSync={handleToggleSync}
                handleSetSyncMessage={handleSetSyncMessage}
              />
            </TransitionGroup>
          </FormWrapper>
          <ConnectSocialAccount />
        </SectionWrapper>
      </UserAccountContainer>
      <Portal
        component={
          <SyncingIndicator isSyncing={isSyncing} syncMessage={syncMessage} />
        }
      />
    </>
  )
}

export default ResetUserAccount

const UserAccountContainer = styled.div`
  margin: 80px 0 80px 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 30px;
  justify-items: center;
  width: 100%;
  ${above.ipadPro`
    margin: 80px 0 120px 0;
  `}
`

const SectionWrapper = styled.div`
  margin: 20px 0 0 0;
  padding: 0 16px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 100px;
  justify-items: center;
  width: 100%;
  ${above.mobile`
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    align-items: center;
  `}
  ${above.tablet`
    width: 80%;
  `}
`

const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 350px;
`
