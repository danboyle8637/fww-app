import React from 'react'
import styled from 'styled-components'

import MainMenuIcon from '../../svgs/MainMenuIcon'
import './Nav.css'

const BottomNavBar = () => {
  return (
    <NavBarContainer>
      <MenuIcon />
    </NavBarContainer>
  )
}

export default BottomNavBar

const NavBarContainer = styled.div`
  position: fixed;
  bottom: 16px;
  left: 16px;
  padding: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(25, 25, 28, 0.6);
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
