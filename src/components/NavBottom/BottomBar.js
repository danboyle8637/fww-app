import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

import MenuIcon from './MenuIcon'
import BottomMobileMenuTransition from '../../Animations/Transitions/BottomMobileMenuBarTransition'
import BottomLaptopMenuTransition from '../../Animations/Transitions/BottomLaptopMenuBarTransition'
import BottomHomeIcon from '../../svgs/BottomHomeIcon'
import BottomBlogIcon from '../../svgs/BottomBlogIcon'
import BottomContactIcon from '../../svgs/BottomContactIcon'
import BottomMoreIcon from '../../svgs/BottomMoreIcon'
import BottomDashboardIcon from '../../svgs/BottomDashboardIcon'
import BottomLogoutIcon from '../../svgs/BottomLogoutIcon'
import { above } from '../../styles/Theme'

const BottomBar = ({ menuOpen, isLoggedIn, handleNavigation }) => {
  const [isLaptopMenu, setIsLaptopMenu] = useState(false)
  const mediaQueryRef = useRef(null)

  useEffect(() => {
    if (typeof window !== undefined) {
      mediaQueryRef.current = window.matchMedia('(min-width: 1100px)')

      if (mediaQueryRef.current.matches) {
        setIsLaptopMenu(true)
      } else {
        setIsLaptopMenu(false)
      }
    }

    const test = event => {
      if (event.matches) {
        setIsLaptopMenu(true)
      } else {
        setIsLaptopMenu(false)
      }
    }

    mediaQueryRef.current.addListener(test)

    return () => {
      console.log(test)
      if (test) {
        mediaQueryRef.current.removeListener(test)
      }
    }
  }, [])

  const loggedOutIcons = [
    {
      id: 1,
      icon: 'home',
      label: 'home',
      component: <HomeIcon />,
      isOut: true,
      slug: 'https://fitwomensweekly.com'
    },
    {
      id: 2,
      icon: 'blog',
      label: 'blog',
      component: <BlogIcon />,
      isOut: true,
      slug: 'https://fitwomensweekly.com/blog'
    },
    {
      id: 3,
      icon: 'contact',
      label: 'contact',
      component: <ContactIcon />,
      isOut: false,
      slug: '/contact'
    }
  ]

  const loggedInIcons = [
    {
      id: 2,
      icon: 'dashboard',
      label: 'dashboard',
      component: <DashboardIcon />,
      isOut: false,
      slug: '/dashboard'
    },
    {
      id: 1,
      icon: 'more',
      label: 'more',
      component: <MoreIcon />,
      isOut: false,
      slug: null
    },
    {
      id: 3,
      icon: 'logout',
      label: 'logout',
      component: <LogoutIcon />,
      isOut: false,
      slug: null
    }
  ]

  const loggedOutNav = loggedOutIcons.map(menuIcon => {
    const id = menuIcon.id
    const icon = menuIcon.icon
    const label = menuIcon.label
    const component = menuIcon.component
    const isOut = menuIcon.isOut
    const slug = menuIcon.slug

    return (
      <MenuIcon
        key={id}
        icon={icon}
        label={label}
        component={component}
        isOut={isOut}
        slug={slug}
        handleNavigation={handleNavigation}
      />
    )
  })

  const loggedInNav = loggedInIcons.map(menuIcon => {
    const id = menuIcon.icon
    const icon = menuIcon.icon
    const label = menuIcon.label
    const component = menuIcon.component
    const slug = menuIcon.slug

    return (
      <MenuIcon
        key={id}
        icon={icon}
        label={label}
        component={component}
        slug={slug}
        handleNavigation={handleNavigation}
      />
    )
  })

  return (
    <>
      {isLaptopMenu ? (
        <BottomLaptopMenuTransition menuOpen={menuOpen}>
          <LaptopBarContainer>
            {isLoggedIn ? loggedInNav : loggedOutNav}
          </LaptopBarContainer>
        </BottomLaptopMenuTransition>
      ) : (
        <BottomMobileMenuTransition menuOpen={menuOpen}>
          <BarContainer>{isLoggedIn ? loggedInNav : loggedOutNav}</BarContainer>
        </BottomMobileMenuTransition>
      )}
    </>
  )
}

export default BottomBar

const BarContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 8px 12px 2px 12px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: flex-end;
  background: rgba(25, 25, 28, 0.6);
  backdrop-filter: blur(4px);
  border-radius: 10px 10px 0 0;
  border-top: 3px solid ${props => props.theme.headlinePrimary};
  border-left: 3px solid ${props => props.theme.headlinePrimary};
  border-right: 3px solid ${props => props.theme.headlinePrimary};
  overflow: hidden;
  z-index: 9999;
  ${above.tablet`
    left: 50%;
    width: 800px;
    transform: translate(-50%, 0);
  `}
`

const LaptopBarContainer = styled.div`
  position: fixed;
  top: 120px;
  right: 0;
  padding: 12px 2px 12px 8px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  background: rgba(25, 25, 28, 0.6);
  backdrop-filter: blur(4px);
  border-radius: 10px 0 0 10px;
  border-top: 3px solid ${props => props.theme.headlinePrimary};
  border-left: 3px solid ${props => props.theme.headlinePrimary};
  border-bottom: 3px solid ${props => props.theme.headlinePrimary};
  height: 600px;
  overflow: hidden;
  z-index: 9999;
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
