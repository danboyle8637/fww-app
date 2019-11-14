import React, { useState, useEffect, useRef, useContext } from 'react'
import styled from 'styled-components'
import { Power2 } from 'gsap/TweenMax'
import TimelineMax from 'gsap/TimelineMax'
import './Nav.css'

import MainMenuIcon from '../../svgs/MainMenuIcon'
import Portal from '../Shared/Portal'
import MenuBar from './MenuBar'
import ScreenWidthContext from '../../context/ScreenWidthContext'
import { usePortalContext } from '../../context/portalContext'

const MenuChicklet = () => {
  const device = useContext(ScreenWidthContext)
  const menuIconRef = useRef(null)
  const timeline = useRef(new TimelineMax({ paused: true }))
  const [portalState, dispatch] = usePortalContext()
  const [xPosition, setXPosition] = useState(-90)

  useEffect(() => {
    if (device === 'ipadPro' || device === 'laptop' || device === 'ultraWide') {
      setXPosition(-50)
    }
  }, [device])

  useEffect(() => {
    const menuIcon = menuIconRef.current
    const tl = timeline.current

    tl.to(menuIcon, 0.3, {
      transformOrigin: '50% 50%',
      x: xPosition,
      rotation: 360,
      ease: Power2.easeInOut
    })

    return () => {
      tl.kill()
    }
  }, [xPosition])

  useEffect(() => {
    const tl = timeline.current

    if (portalState.menu.isOpen) {
      tl.play()
    } else {
      tl.reverse()
    }
  }, [portalState.menu.isOpen])

  const handleMenuOpen = () => {
    dispatch({ type: 'toggleMenu' })
  }

  return (
    <Chicklet ref={menuIconRef} onClick={handleMenuOpen}>
      <Menu menuOpen={portalState.menu.isOpen} />
      <Portal>
        <MenuBar />
      </Portal>
    </Chicklet>
  )
}

export default MenuChicklet

const Chicklet = styled.div`
  grid-column: 2 / -1;
  background: transparent;
  justify-self: end;
`

const Menu = styled(MainMenuIcon)`
  width: 40px;
`
