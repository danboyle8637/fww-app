import React from 'react'
import styled from 'styled-components'

import BottomHomeIcon from '../../svgs/BottomHomeIcon'
import BottomBlogIcon from '../../svgs/BottomBlogIcon'
import BottomContactIcon from '../../svgs/BottomContactIcon'
import BottomMoreIcon from '../../svgs/BottomMoreIcon'
import BottomDashboardIcon from '../../svgs/BottomDashboardIcon'
import BottomLogoutIcon from '../../svgs/BottomLogoutIcon'
import { usePortalContext } from '../../context/portalContext'

const MenuIcon = ({ icon, label, handleNavigation, handleOutNavigation }) => {
  // eslint-disable-next-line
  const [portalState, dispatchPortalAction] = usePortalContext()

  const handleMoreIconClick = () => {
    dispatchPortalAction({ type: 'toggleMoreMenu' })
  }

  return (
    <ItemContainer
      onClick={() => {
        if (label === 'home ' || label === 'blog') {
          return handleOutNavigation(`/${label}`)
        } else if (label === 'more') {
          return handleMoreIconClick()
        } else if (label === 'logout') {
          return null
        } else {
          handleNavigation(`/${label}`)
        }
      }}
    >
      {icon === 'home' ? <HomeIcon /> : null}
      {icon === 'blog' ? <BlogIcon /> : null}
      {icon === 'contact' ? <ContactIcon /> : null}
      {icon === 'more' ? (
        <MoreIcon isOpen={portalState.moreMenu.isOpen} />
      ) : null}
      {icon === 'dashboard' ? <DashboardIcon /> : null}
      {icon === 'logout' ? <LogoutIcon /> : null}
      <Label>{label}</Label>
    </ItemContainer>
  )
}

export default MenuIcon

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
`

const HomeIcon = styled(BottomHomeIcon)`
  width: 50px;
`

const BlogIcon = styled(BottomBlogIcon)`
  width: 30px;
`

const ContactIcon = styled(BottomContactIcon)`
  width: 40px;
`

const MoreIcon = styled(BottomMoreIcon)`
  width: 8px;
`

const DashboardIcon = styled(BottomDashboardIcon)`
  width: 30px;
`

const LogoutIcon = styled(BottomLogoutIcon)`
  width: 30px;
`

const Label = styled.p`
  margin: 0;
  padding: 0;
  font-family: Montserrat;
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1.6;
  color: ${props => props.theme.bodyText};
`
