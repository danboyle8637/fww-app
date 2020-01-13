import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { TransitionGroup } from 'react-transition-group'
import { Redirect, useLocation } from 'react-router-dom'

import FWWLogo from '../components/Logos/FWWLogo'
import VerticalUserCard from '../components/UserCards/VerticalUserCard'
import AccountMenu from '../components/AccountPage/AccountMenu'
import ConnectSocialAccount from '../components/AccountPage/ConnectSocialAccount'
import AccountUpdateProfilePicForm from '../components/Forms/AccountUpdateProfilePicForm'
import AccountUpdateEmailForm from '../components/Forms/AccountUpdateEmailForm'
import AccountUpdatePasswordForm from '../components/Forms/AccountUpdatePasswordForm'
import DeleteAccountCard from '../components/AccountPage/DeleteAccountCard'
import ResetLocalStorageCard from '../components/AccountPage/ResetLocalStorageCard'
import Portal from '../components/Shared/Portal'
import SyncingIndicator from '../components/Indicators/SyncingIndicator'
import MessageDialog from '../components/Dialogs/MessageDialog'
import ScrollToTop from '../components/Shared/ScrollToTop'
import { useUserContext } from '../context/UserContext'
import { usePortalContext } from '../context/portalContext'
import { useFireBase } from '../components/Firebase/FirebaseContext'
import siteConfig from '../utils/siteConfig'
import { above } from '../styles/Theme'

const ResetUserAccount = () => {
  const auth = useFireBase()
  const [activeSlide, setActiveSlide] = useState(0)
  const [isSyncing, setIsSyncing] = useState(false)
  const [syncMessage, setSyncMessage] = useState('Syncing...')
  const [isProfilePic, setIsProfilePic] = useState(false)
  const [toLogin, setToLogin] = useState(false)
  const [emailCorrect, setEmailCorrect] = useState(false)
  // eslint-disable-next-line
  const [userState, dispatchUserAction] = useUserContext()
  // eslint-disable-next-line
  const [portalState, dispatchPortalAction] = usePortalContext()

  const routerData = useLocation()

  useEffect(() => {
    if (routerData.state) {
      setSyncMessage(routerData.state.success)
      setIsSyncing(true)

      setTimeout(() => {
        setIsSyncing(false)
      }, 800)

      return () => {
        clearTimeout()
      }
    }
  }, [routerData])

  const handleToggleSync = () => {
    setIsSyncing(prevValue => !prevValue)
  }

  const handleSetSyncMessage = message => {
    setSyncMessage(message)
  }

  const handleDeleteAccount = () => {
    const url = `${siteConfig.api.baseUrl}/delete-account`

    setIsSyncing(true)

    auth
      .getCurrentUser()
      .then(user => {
        user.getIdToken(true).then(token => {
          fetch(url, {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
            .then(response => response.json())
            .then(data => {
              setSyncMessage(data.message)
              dispatchPortalAction({
                type: 'toggleErrorMessage',
                value: `You're account is set to be deleted. You will receive an email now to confirm. We are terribly sorry to see you go.`
              })
              dispatchUserAction({ type: 'setLoggedOutUser' })
              auth.logUserOut()
              setIsSyncing(false)
              setToLogin(true)
            })
            .catch(error => {
              setSyncMessage(error.message)
              dispatchPortalAction({
                type: 'toggleErrorMessage',
                value: `A network issue caused this request to fail. Try it again so we can be notified and get your account deleted.`
              })
              setIsSyncing(false)
            })
        })
      })
      .catch(() => {
        dispatchPortalAction({
          type: 'toggleErrorMessage',
          value: `Could not get your user account to delete it. Please close this window and try it again.`
        })
        setIsSyncing(false)
      })
  }

  const handleConfirmEmailClick = notice => {
    if (notice === 'correct') {
      setEmailCorrect(true)
      dispatchPortalAction({ type: 'toggleMessageDialog' })
    } else {
      setEmailCorrect(false)
      dispatchPortalAction({ type: 'toggleMessageDialog' })
    }
  }

  return (
    <>
      <ScrollToTop />
      <UserAccountContainer>
        <FWWLogo />
        <VerticalUserCard
          firstName={userState.firstName}
          profileImage={userState.photoUrl}
          isSyncing={isSyncing}
          isProfilePic={isProfilePic}
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
                handleToggleSync={handleToggleSync}
                handleSetSyncMessage={handleSetSyncMessage}
                setIsProfilePic={setIsProfilePic}
              />
              <AccountUpdateEmailForm
                activeSlide={activeSlide}
                setActiveSlide={setActiveSlide}
                isSyncing={isSyncing}
                handleToggleSync={handleToggleSync}
                handleSetSyncMessage={handleSetSyncMessage}
                setToLogin={setToLogin}
                emailCorrect={emailCorrect}
                setEmailCorrect={setEmailCorrect}
              />
              <AccountUpdatePasswordForm
                activeSlide={activeSlide}
                setActiveSlide={setActiveSlide}
                isSyncing={isSyncing}
                handleToggleSync={handleToggleSync}
                handleSetSyncMessage={handleSetSyncMessage}
                setToLogin={setToLogin}
              />
            </TransitionGroup>
          </FormWrapper>
          <ConnectSocialAccount
            firstName={userState.firstName}
            handleToggleSync={handleToggleSync}
            handleSetSyncMessage={handleSetSyncMessage}
          />
          <DeleteAccountCard handleDeleteAccount={handleDeleteAccount} />
          <ResetLocalStorageCard />
        </SectionWrapper>
      </UserAccountContainer>
      <Portal>
        <SyncingIndicator isSyncing={isSyncing} syncMessage={syncMessage} />
        <MessageDialog
          isEmailConfirm={true}
          handleConfirmEmailClick={handleConfirmEmailClick}
        />
      </Portal>
      {toLogin ? <Redirect to="/login" /> : null}
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
