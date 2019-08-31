import React from 'react'
import styled from 'styled-components'

import { MenuItemGrid } from '../../styles/Containers'
import { MenuLabel } from '../../styles/Typography'
import DashboardIcon from '../../svgs/DashboardIcon'
import AccountIcon from '../../svgs/AccountIcon'
import ContactIcon from '../../svgs/ContactIcon'
import ReviewIcon from '../../svgs/ReviewIcon'
import LogoutIcon from '../../svgs/LogoutIcon'

const MemberNav = () => {
  const resetNavigation = [
    { id: 1, label: 'dashboard', component: <DashboardIcon /> },
    { id: 2, label: 'account', component: <AccountIcon /> },
    { id: 3, label: 'contact', component: <ContactIcon /> },
    { id: 4, label: 'review', component: <ReviewIcon /> },
    { id: 5, label: 'logout', component: <LogoutIcon /> }
  ]

  const navItems = resetNavigation.map(navItem => {
    const id = navItem.id
    const label = navItem.label
    const component = navItem.component

    return (
      <MenuItemGrid key={id}>
        <NavIcon>{component}</NavIcon>
        <MenuLabel>{label}</MenuLabel>
      </MenuItemGrid>
    )
  })

  return <>{navItems}</>
}

export default MemberNav

const NavIcon = styled.div`
  width: 40px;
`
