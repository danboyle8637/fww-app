import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import { TweenMax, Power2 } from 'gsap/TweenMax'

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

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 1100px)')
    const test = event => {
      if (event.matches) {
        setIsLaptopMenu(true)
      } else {
        setIsLaptopMenu(false)
      }
    }
    mql.addListener(test)

    return () => {
      mql.removeListener(test)
    }
  }, [])

  useEffect(() => {
    const menuChicklet = menuChickletRef.current

    if (isLaptopMenu) {
      laptopMenuTween(menuChicklet, portalState.menu.isOpen)
    } else {
      mobileMenuTween(menuChicklet, portalState.menu.isOpen)
    }

    // if (portalState.menu.isOpen) {
    //   TweenMax.to(menuChicklet, 0.4, {
    //     y: -60,
    //     rotation: 360,
    //     ease: Power2.easeOut
    //   })
    // } else {
    //   TweenMax.to(menuChicklet, 0.4, {
    //     y: 0,
    //     rotation: -360,
    //     ease: Power2.easeOut
    //   })
    // }
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
        <LaptopContainer ref={menuChickletRef} onClick={handleMenuClick}>
          <MenuIcon menuOpen={portalState.menu.isOpen} />
        </LaptopContainer>
      ) : (
        <NavBarContainer ref={menuChickletRef} onClick={handleMenuClick}>
          <MenuIcon menuOpen={portalState.menu.isOpen} />
        </NavBarContainer>
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
      {toLocation ? <Redirect to={`${slug}`} /> : null}
    </>
  )
}

export default MenuChicklet

const NavBarContainer = styled.div`
  position: fixed;
  bottom: 16px;
  left: 16px;
  padding: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  border: 3px solid ${props => props.theme.headlinePrimary};
  border-radius: 50px;
  width: 60px;
  height: 60px;
  z-index: 9999;
  ${above.tablet`
    left: 50%;
    transform: translateX(-50%);
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
  border: 3px solid ${props => props.theme.headlinePrimary};
  border-radius: 50px;
  width: 60px;
  height: 60px;
  z-index: 9999;
`

const MenuIcon = styled(MainMenuIcon)`
  width: 30px;
`
