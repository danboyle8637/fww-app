import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { MenuItemGrid } from '../../styles/Containers'
import { MenuLabel } from '../../styles/Typography'
import DashboardIcon from '../../svgs/DashboardIcon'
import AccountIcon from '../../svgs/AccountIcon'
import ContactIcon from '../../svgs/ContactIcon'
import ReviewIcon from '../../svgs/ReviewIcon'
import LogoutIcon from '../../svgs/LogoutIcon'
import { above } from '../../styles/Theme'

const MemberNav = () => {
  const resetNavigation = [
    {
      id: 1,
      label: 'dashboard',
      component: <DashboardIcon />,
      slug: '/dashboard'
    },
    { id: 2, label: 'account', component: <AccountIcon />, slug: '/' },
    { id: 3, label: 'contact', component: <ContactIcon />, slug: '/' },
    { id: 4, label: 'review', component: <ReviewIcon />, slug: '/' },
    { id: 5, label: 'logout', component: <LogoutIcon />, slug: null }
  ]

  const navItems = resetNavigation.map(navItem => {
    const id = navItem.id
    const label = navItem.label
    const component = navItem.component
    const slug = navItem.slug

    return (
      <MenuItemGrid key={id}>
        {navItem.slug === null ? (
          <NavIcon>{component}</NavIcon>
        ) : (
          <Link to={slug}>
            <NavIcon>{component}</NavIcon>
          </Link>
        )}
        <MenuLabel>{label}</MenuLabel>
      </MenuItemGrid>
    )
  })

  return <>{navItems}</>
}

export default MemberNav

const NavIcon = styled.div`
  width: 40px;
  ${above.tablet`
    width: 60px;
  `}
`
