import React from 'react'
import styled from 'styled-components'

import MoreMenuItem from './MoreMenuItem'
import MoreMenuDrawerTransition from '../../Animations/Transitions/MoreMenuDrawerTransition'
import NavigationArrow from '../../svgs/NavigationArrow'
import { useUserContext } from '../../context/UserContext'
import { usePortalContext } from '../../context/portalContext'
import { above } from '../../styles/Theme'

const MoreMenuDrawer = ({ handleNavigation }) => {
  // eslint-disable-next-line
  const [userState, dispatchUserAction] = useUserContext()
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

    return (
      <MoreMenuItem
        key={id}
        label={label}
        slug={slug}
        handleNavigation={handleNavigation}
      />
    )
  })

  const handleCloseMoreMenu = () => {
    dispatchPortalAction({ type: 'toggleMoreMenu' })
  }

  return (
    <MoreMenuDrawerTransition moreMenuOpen={portalState.moreMenu.isOpen}>
      <DrawerContainer>
        {moreMenu}
        <CloseMoreMenu
          gradientId="closeMoreMenu"
          isOpen={portalState.moreMenu.isOpen}
          label={'moreMenu'}
          handleCloseMoreMenu={handleCloseMoreMenu}
        />
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
  gap: 40px;
  justify-items: center;
  align-items: center;
  background: rgba(25, 25, 28, 0.8);
  backdrop-filter: blur(4px);
  border-radius: 0 0 10px 10px;
  border-bottom: 3px solid ${props => props.theme.headlinePrimary};
  border-left: 3px solid ${props => props.theme.headlinePrimary};
  border-right: 3px solid ${props => props.theme.headlinePrimary};
  width: 100%;
  overflow: hidden;
  z-index: 9999;
  ${above.mobile`
    left: 50%;
    width: 60%;
    transform: translate(-50%, 0);
  `}
  ${above.tablet`
    width: 50%;
    bottom: 50%;
  `}
  ${above.ipadPro`
    padding: 20px;
    left: 50%;
    bottom: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: end;
    transform: translate(-50%, 0);
  `}
`

const CloseMoreMenu = styled(NavigationArrow)`
  width: 20px;
  align-self: end;
  transform: rotate(-90deg);
  ${above.ipadPro`
    grid-column: 2 / 3;
    grid-row: 2 / -1;
  `}
`
