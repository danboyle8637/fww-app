import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { MenuItemGrid } from '../../styles/Containers'
import { MenuLabel } from '../../styles/Typography'
import HomeIcon from '../../svgs/HomeIcon'
import FWWNavIcon from '../../svgs/FwwNavIcon'
import BlogNavIcon from '../../svgs/BlogNavIcon'
import ContactIcon from '../../svgs/ContactIcon'
import { above } from '../../styles/Theme'

const NonMemberNav = () => {
  const nonMemberNavigation = [
    { id: 1, label: 'home', component: <HomeIcon />, slug: '/' },
    { id: 2, label: 'join', component: <FWWNavIcon />, slug: '/' },
    { id: 3, label: 'blog', component: <BlogNavIcon />, slug: '/' },
    { id: 4, label: 'contact', component: <ContactIcon />, slug: '/contact' }
  ]

  const navItems = nonMemberNavigation.map(navItem => {
    const id = navItem.id
    const label = navItem.label
    const component = navItem.component
    const slug = navItem.slug

    return (
      <MenuItemGrid key={id}>
        <NavLink to={slug}>
          <NavIcon>{component}</NavIcon>
          <MenuLabel>{label}</MenuLabel>
        </NavLink>
      </MenuItemGrid>
    )
  })

  return <>{navItems}</>
}

export default NonMemberNav

const NavIcon = styled.div`
  width: 60px;
  ${above.tablet`
    width: 60px;
  `}
`

const NavLink = styled(Link)`
  padding: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  text-decoration: none;
  background-color: none;
  border-radius: 10px;
  box-shadow: none;
  cursor: pointer;
  transition: background-color 300ms ease-in-out;
  &:focus {
    outline: none;
    background-color: #46dbe8;
  }
`
