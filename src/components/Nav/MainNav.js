import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Redirect, useLocation, useHistory } from 'react-router-dom'

import NavigationArrow from '../../svgs/NavigationArrow'
import BackButtonTransition from '../../Animations/Transitions/BackButtonTransition'
import { useUserContext } from '../../context/UserContext'
import { useFetchingContext } from '../../context/FetchingContext'
import { above } from '../../styles/Theme'

const MainNav = () => {
  const [showBackButton, setShowBackButton] = useState(false)
  // eslint-disable-next-line
  const [userState, dispatchUserAction] = useUserContext()
  // eslint-disable-next-line
  const [fetchingState, dispatchFetchingAction] = useFetchingContext()
  const location = useLocation()
  const history = useHistory()

  useEffect(() => {
    const baseLocation = location.pathname.split('/')
    const elementsOfPath = baseLocation.filter(element => element.length !== 0)

    if (elementsOfPath[0] === 'dashboard' && elementsOfPath.length > 1) {
      setShowBackButton(true)
    } else if (elementsOfPath[0] === 'review') {
      setShowBackButton(true)
    } else if (elementsOfPath[0] === 'account') {
      setShowBackButton(true)
    } else if (elementsOfPath[0] === 'contact') {
      setShowBackButton(true)
    } else {
      setShowBackButton(false)
    }
  }, [location])

  const handleGoBack = () => {
    if (fetchingState.isFetching) {
      return
    } else {
      history.goBack()
    }
  }

  const showAllowedPaths = () => {
    if (
      !userState.isLoggedIn &&
      location.pathname !== '/7-day-reset-step1' &&
      location.pathname !== '/contact' &&
      location.pathname !== '/security-login' &&
      location.pathname !== '/social-login' &&
      location.pathname !== '/social-sign-up' &&
      location.pathname !== '/emergency-sign-up' &&
      location.pathname !== '/emergency-social-sign-up' &&
      location.pathname !== '/error' &&
      location.pathname !== '/social-link' &&
      location.pathname !== '/playground' &&
      location.pathname !== '/thank-you' &&
      location.pathname !== '/test-login'
    ) {
      return <Redirect to="/login" />
    } else {
      return null
    }
  }

  // * Here is where I am controlling the redirect back to login on routes that don't exist...
  // * OR on routes where I don't want somebody directly going to without clicking a link.
  return (
    <>
      <MainNavBar>
        <BackButtonTransition
          showBackButton={showBackButton && !fetchingState.isFetching}
        >
          <NavArrowBackground onClick={handleGoBack}>
            <NavArrow gradientId="topNavBar" />
          </NavArrowBackground>
        </BackButtonTransition>
      </MainNavBar>
      {showAllowedPaths()}
    </>
  )
}

export default MainNav

const MainNavBar = styled.header`
  position: fixed;
  margin: 0;
  padding: 12px;
  top: 0;
  align-self: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 100%;
  z-index: 16;
  ${above.tablet`
    max-width: 900px;
  `}
  ${above.ipadPro`
    max-width: 1300px;
  `}
`

const NavArrowBackground = styled.div`
  display: flex;
  justify-self: start;
  justify-content: center;
  align-items: center;
  background: rgba(16, 16, 16, 0.8);
  border-radius: 50%;
  width: 40px;
  height: 40px;
`

const NavArrow = styled(NavigationArrow)`
  width: 16px;
  transform: translateX(-2px) rotate(180deg);
`

// {!userState.isLoggedIn && location.pathname !== '/7-day-reset-step1' ? (
//   <Redirect to="/login" />
// ) : null}
