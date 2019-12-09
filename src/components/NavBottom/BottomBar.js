import React from 'react'
import styled from 'styled-components'

import MenuIcon from './MenuIcon'
import BottomMenuTransition from '../../Animations/Transitions/BottomMenuBarTransition'

const BottomBar = ({ menuOpen, isLoggedIn, handleNavigation }) => {
  const loggedOutIcons = [
    { id: 1, icon: 'home', label: 'home' },
    { id: 2, icon: 'blog', label: 'blog' },
    { id: 3, icon: 'contact', label: 'contact' }
  ]

  const loggedInIcons = [
    { id: 2, icon: 'dashboard', label: 'dashboard' },
    { id: 1, icon: 'more', label: 'more' },
    { id: 3, icon: 'logout', label: 'logout' }
  ]

  const loggedOutNav = loggedOutIcons.map(menuIcon => {
    const id = menuIcon.id
    const icon = menuIcon.icon
    const label = menuIcon.label

    return <MenuIcon key={id} icon={icon} label={label} />
  })

  const loggedInNav = loggedInIcons.map(menuIcon => {
    const id = menuIcon.icon
    const icon = menuIcon.icon
    const label = menuIcon.label

    return (
      <MenuIcon
        key={id}
        icon={icon}
        label={label}
        handleNavigation={handleNavigation}
      />
    )
  })

  return (
    <BottomMenuTransition menuOpen={menuOpen}>
      <BarContainer>{isLoggedIn ? loggedInNav : loggedOutNav}</BarContainer>
    </BottomMenuTransition>
  )
}

export default BottomBar

const BarContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 8px 12px 2px 12px;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  background: rgba(25, 25, 28, 0.6);
  backdrop-filter: blur(4px);
  border-radius: 10px 10px 0 0;
  border-top: 3px solid ${props => props.theme.headlinePrimary};
  border-left: 3px solid ${props => props.theme.headlinePrimary};
  border-right: 3px solid ${props => props.theme.headlinePrimary};
  overflow: hidden;
  z-index: 9999;
`
