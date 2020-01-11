import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

import MainMenuIcon from '../../svgs/MainMenuIcon'
import BottomBar from './BottomBar'
import MoreMenuDrawer from './MoreMenuDrawer'
import mobileMenuTween from '../../Animations/Tweens/mobileMenuTween'
import laptopMenuTween from '../../Animations/Tweens/laptopMenuTween'
import Portal from '../Shared/Portal'
import { usePortalContext } from '../../context/portalContext'
import { useUserContext } from '../../context/UserContext'
import { above } from '../../styles/Theme'
import '../Nav/Nav.css'

const MenuChicklet = () => {
  // eslint-disable-next-line
  const [portalState, dispatchPortalAction] = usePortalContext()
  // eslint-disable-next-line
  const [userState, dispatchUserAction] = useUserContext()
  const [toLocation, setToLocation] = useState(false)
  const [slug, setSlug] = useState('')
  const [isLaptopMenu, setIsLaptopMenu] = useState(false)
  const menuChickletRef = useRef(null)
  const mediaQueryRef = useRef(null)

  useEffect(() => {
    mediaQueryRef.current = window.matchMedia('(min-width: 1100px)')

    if (mediaQueryRef.current.matches) {
      setIsLaptopMenu(true)
    } else {
      setIsLaptopMenu(false)
    }

    const test = event => {
      if (event.matches) {
        setIsLaptopMenu(true)
      } else {
        setIsLaptopMenu(false)
      }
    }

    mediaQueryRef.current.addListener(test)

    return () => {
      mediaQueryRef.current.removeListener(test)
    }
  }, [])

  useEffect(() => {
    const menuChicklet = menuChickletRef.current

    if (isLaptopMenu) {
      laptopMenuTween(menuChicklet, portalState.menu.isOpen)
    } else {
      mobileMenuTween(menuChicklet, portalState.menu.isOpen)
    }
  }, [isLaptopMenu, portalState.menu.isOpen])

  const handleMenuClick = () => {
    setToLocation(false)
    setSlug('')
    dispatchPortalAction({ type: 'closeMoreMenu' })
    dispatchPortalAction({ type: 'toggleMenu' })
  }

  const handleNavigation = destination => {
    dispatchPortalAction({ type: 'closeMoreMenu' })
    dispatchPortalAction({ type: 'closeMenu' })
    setSlug(destination)

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(setToLocation(true))
      }, 400)
    })
  }

  return (
    <>
      {isLaptopMenu ? (
        <LaptopContainer
          ref={menuChickletRef}
          onClick={handleMenuClick}
          menuOpen={portalState.menu.isOpen}
        >
          <MenuIcon menuOpen={portalState.menu.isOpen} />
        </LaptopContainer>
      ) : (
        <MobileContainer
          ref={menuChickletRef}
          onClick={handleMenuClick}
          menuOpen={portalState.menu.isOpen}
        >
          <MenuIcon menuOpen={portalState.menu.isOpen} />
        </MobileContainer>
      )}
      <Portal>
        <BottomBar
          menuOpen={portalState.menu.isOpen}
          isLoggedIn={userState.isLoggedIn}
          handleNavigation={handleNavigation}
        />
      </Portal>
      <Portal>
        <MoreMenuDrawer handleNavigation={handleNavigation} />
      </Portal>
      {toLocation ? <Redirect push to={`${slug}`} /> : null}
    </>
  )
}

export default MenuChicklet

const MobileContainer = styled.div`
  position: fixed;
  bottom: 16px;
  left: 16px;
  padding: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  border: 3px solid
    ${props =>
      props.menuOpen ? props.theme.primaryAccent : props.theme.headlinePrimary};
  border-radius: 50px;
  width: 60px;
  height: 60px;
  z-index: 9000;
  ${above.tablet`
    left: 50%;
    transform: translate(-50%, 0);
  `}
`

const LaptopContainer = styled.div`
  position: fixed;
  top: 16px;
  right: 16px;
  padding: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  border: 3px solid
    ${props =>
      props.menuOpen ? props.theme.primaryAccent : props.theme.headlinePrimary};
  border-radius: 50px;
  width: 60px;
  height: 60px;
  z-index: 9000;
`

const MenuIcon = styled(MainMenuIcon)`
  width: 30px;
`
