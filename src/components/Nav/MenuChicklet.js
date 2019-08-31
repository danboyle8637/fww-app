import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Power2 } from 'gsap/TweenMax'
import TimelineMax from 'gsap/TimelineMax'
import './Nav.css'

import MainMenuIcon from '../../svgs/MainMenuIcon'
import Portal from '../Shared/Portal'
import MenuBar from './MenuBar'
import { useMenuContext } from '../../context/menuContext'

const MenuChicklet = () => {
  const menuIconRef = useRef(null)
  const timeline = useRef(new TimelineMax({ paused: true }))
  const [menuState, dispatch] = useMenuContext()

  useEffect(() => {
    const menuIcon = menuIconRef.current
    const tl = timeline.current

    tl.to(menuIcon, 0.3, {
      transformOrigin: '50% 50%',
      x: -90,
      rotation: 360,
      ease: Power2.easeInOut
    })

    return () => {
      tl.kill()
    }
  }, [])

  useEffect(() => {
    const tl = timeline.current

    if (menuState.isOpen) {
      tl.play()
    } else {
      tl.reverse()
    }
  }, [menuState.isOpen])

  const handleMenuOpen = () => {
    dispatch({ type: 'toggleMenu' })
  }

  return (
    <Chicklet ref={menuIconRef} onClick={handleMenuOpen}>
      <Menu menuOpen={menuState.isOpen} />
      <Portal>
        <MenuBar />
      </Portal>
    </Chicklet>
  )
}

export default MenuChicklet

const Chicklet = styled.div`
  background: transparent;
`

const Menu = styled(MainMenuIcon)`
  width: 40px;
`
