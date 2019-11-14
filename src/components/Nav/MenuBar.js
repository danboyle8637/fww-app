import React from 'react'
import styled from 'styled-components'

import MenuTransition from '../../Animations/Transitions/MenuTransition'
import MemberNav from './MemberNav'
import NonMemberNav from './NonMemberNav'
import { useUserContext } from '../../context/UserContext'
import { usePortalContext } from '../../context/portalContext'
import { above } from '../../styles/Theme'

const MenuBar = () => {
  // eslint-disable-next-line
  const [portalState, dispatchPortalAction] = usePortalContext()
  // eslint-disable-next-line
  const [userState, dispatchUserAction] = useUserContext()

  return (
    <MenuTransition menuOpen={portalState.menu.isOpen}>
      <MenuContainer>
        {userState.isLoggedIn ? <MemberNav /> : <NonMemberNav />}
      </MenuContainer>
    </MenuTransition>
  )
}

export default MenuBar

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 90px;
  background: #30b6c2;
  border-radius: 8px 0 0 8px;
  box-shadow: -3px 0 3px 3px rgba(0, 0, 0, 0.3);
  z-index: 12;
  ${above.tablet`
    width: 110px;
  `}
`
