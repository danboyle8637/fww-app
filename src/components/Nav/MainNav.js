import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

import FWWLogo from '../../svgs/FWWLogo'
import MenuChicklet from './MenuChicklet'
import NavigationArrow from '../../svgs/NavigationArrow'
import ScreenWidthContext from '../../context/ScreenWidthContext'
import { above } from '../../styles/Theme'

const MainNav = () => {
  const [showLogo, setShowLogo] = useState(false)
  const device = useContext(ScreenWidthContext)

  useEffect(() => {
    if (device !== 'mobile') {
      setShowLogo(true)
    } else {
      setShowLogo(false)
    }
  }, [device])

  return (
    <MainNavBar>
      <NavArrowBackground>
        <NavArrow />
      </NavArrowBackground>
      {showLogo ? <Logo /> : null}
      <MenuChicklet />
    </MainNavBar>
  )
}

export default MainNav

const MainNavBar = styled.header`
  position: fixed;
  margin: 0;
  padding: 12px;
  top: 0;
  align-self: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 100%;
  z-index: 16;
  ${above.tablet`
    max-width: 900px;
  `}
  ${above.ipadPro`
    max-width: 1300px;
  `}
`

const Logo = styled(FWWLogo)`
  justify-self: start;
  width: 40px;
  ${above.mobile`
    width: 80px;
  `}
`

const NavArrowBackground = styled.div`
  display: flex;
  justify-self: start;
  justify-content: center;
  align-items: center;
  background: rgba(25, 25, 28, 0.8);
  border-radius: 50%;
  width: 40px;
  height: 40px;
`

const NavArrow = styled(NavigationArrow)`
  width: 16px;
  transform: translateX(-2px) rotate(180deg);
`
