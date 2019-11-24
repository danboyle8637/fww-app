import React from 'react'
import styled from 'styled-components'

import { MenuItemGrid } from '../../styles/Containers'
import { MenuLabel } from '../../styles/Typography'
import HomeIcon from '../../svgs/HomeIcon'
import FWWNavIcon from '../../svgs/FwwNavIcon'
import BlogNavIcon from '../../svgs/BlogNavIcon'
import ContactIcon from '../../svgs/ContactIcon'
import { above } from '../../styles/Theme'

const NonMemberNav = () => {
  const nonMemberNavigation = [
    { id: 1, label: 'home', component: <HomeIcon /> },
    { id: 2, label: 'join', component: <FWWNavIcon /> },
    { id: 3, label: 'blog', component: <BlogNavIcon /> },
    { id: 4, label: 'contact', component: <ContactIcon /> }
  ]

  const navItems = nonMemberNavigation.map(navItem => {
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

export default NonMemberNav

const NavIcon = styled.div`
  width: 60px;
  ${above.tablet`
    width: 60px;
  `}
`

// const NavLink = styled(Link)`
//   cursor: pointer;
// `
