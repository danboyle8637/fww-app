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
import Portal from '../components/Shared/Portal'
import SyncingIndicator from '../components/Indicators/SyncingIndicator'
import { useUserContext } from '../context/UserContext'
import { useFireBase } from '../components/Firebase/FirebaseContext'
import siteConfig from '../utils/siteConfig'
import { above } from '../styles/Theme'

const ResetUserAccount = () => {
  const auth = useFireBase()
  const [activeSlide, setActiveSlide] = useState(0)
  const [isSyncing, setIsSyncing] = useState(false)
  const [syncMessage, setSyncMessage] = useState('Syncing...')
  const [toLogin, setToLogin] = useState(false)
  // eslint-disable-next-line
  const [userState, dispatchUserAction] = useUserContext()

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
    } else {
      console.log('Not running sync success message')
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

    // TODO rewrite my endpoint to let us know what users want
    // their account to be deleted. We can then finish it off
    // with a custom callable function by using a custom
    // admin section of the app.
    auth
      .getCurrentUser()
      .then(user => {
        user.getIdToken(true).then(token => {
          fetch(url, {
            method: 'DELETE',
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
            .then(response => response.json())
            .then(data => {
              setSyncMessage(data.message)
              setIsSyncing(false)
              setToLogin(true)
            })
            .catch(error => {
              setSyncMessage(error.message)
              setIsSyncing(false)
            })
        })
      })
      .catch(error => {
        console.log(error)
      })

    console.log('handle delete account')
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
                activeSlide={activeSlide}
                setActiveSlide={setActiveSlide}
                handleToggleSync={handleToggleSync}
                handleSetSyncMessage={handleSetSyncMessage}
              />
              <AccountUpdatePasswordForm
                activeSlide={activeSlide}
                setActiveSlide={setActiveSlide}
                handleToggleSync={handleToggleSync}
                handleSetSyncMessage={handleSetSyncMessage}
              />
            </TransitionGroup>
          </FormWrapper>
          <ConnectSocialAccount
            firstName={userState.firstName}
            handleToggleSync={handleToggleSync}
            handleSetSyncMessage={handleSetSyncMessage}
          />
          <DeleteAccountCard handleDeleteAccount={handleDeleteAccount} />
        </SectionWrapper>
      </UserAccountContainer>
      <Portal>
        <SyncingIndicator isSyncing={isSyncing} syncMessage={syncMessage} />
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
