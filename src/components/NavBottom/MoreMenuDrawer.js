import React from 'react'
import styled from 'styled-components'

import MoreMenuItem from './MoreMenuItem'
import MoreMenuDrawerTransition from '../../Animations/Transitions/MoreMenuDrawerTransition'
import NavigationArrow from '../../svgs/NavigationArrow'
import { useUserContext } from '../../context/UserContext'
import { usePortalContext } from '../../context/portalContext'

const MoreMenuDrawer = () => {
  // eslint-disable-next-line
  const [userState, dispatchUserAction] = useUserContext()
  // eslint-disable-next-line
  const [portalState, dispatchPortalAction] = usePortalContext()

  const moreMenuItems = [
    { id: 1, label: 'My Account', slug: `/account/${userState.firstName}` },
    { id: 2, label: 'Leave Review', slug: '/review' },
    { id: 3, label: 'Contact', slug: '/contact' }
  ]

  const moreMenu = moreMenuItems.map(menuItem => {
    const id = menuItem.id
    const label = menuItem.label
    const slug = menuItem.slug

    return <MoreMenuItem key={id} label={label} slug={slug} />
  })

  return (
    <MoreMenuDrawerTransition moreMenuOpen={portalState.moreMenu.isOpen}>
      <DrawerContainer>
        {moreMenu}
        <CloseMoreMenu />
      </DrawerContainer>
    </MoreMenuDrawerTransition>
  )
}

export default MoreMenuDrawer

const DrawerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 30%;
  padding: 80px 20px 8px 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, auto);
  gap: 20px;
  justify-items: center;
  align-items: center;
  background: rgba(25, 25, 28, 0.8);
  backdrop-filter: blur(4px);
  border-radius: 0 0 10px 10px;
  border-bottom: 3px solid ${props => props.theme.headlinePrimary};
  border-left: 3px solid ${props => props.theme.headlinePrimary};
  border-right: 3px solid ${props => props.theme.headlinePrimary};
  overflow: hidden;
  z-index: 9999;
`

const CloseMoreMenu = styled(NavigationArrow)`
  width: 20px;
  align-self: end;
  transform: rotate(-90deg);
`
