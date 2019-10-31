import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useLocation, useHistory } from 'react-router-dom'

import MenuChicklet from './MenuChicklet'
import NavigationArrow from '../../svgs/NavigationArrow'
import BackButtonTransition from '../../Animations/Transitions/BackButtonTransition'
import { above } from '../../styles/Theme'

const MainNav = () => {
  const [showBackButton, setShowBackButton] = useState(false)
  const location = useLocation()
  const history = useHistory()

  useEffect(() => {
    const baseLocation = location.pathname.split('/')
    const elementsOfPath = baseLocation.filter(element => element.length !== 0)

    if (elementsOfPath[0] === 'dashboard' && elementsOfPath.length > 1) {
      setShowBackButton(true)
    } else if (elementsOfPath[0] === 'review') {
      setShowBackButton(true)
    } else if (elementsOfPath[0] === 'account') {
      setShowBackButton(true)
    } else {
      setShowBackButton(false)
    }
  }, [location])

  const handleGoBack = () => {
    history.goBack()
  }

  return (
    <MainNavBar>
      <BackButtonTransition showBackButton={showBackButton}>
        <NavArrowBackground onClick={handleGoBack}>
          <NavArrow />
        </NavArrowBackground>
      </BackButtonTransition>
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

const NavArrowBackground = styled.div`
  display: flex;
  justify-self: start;
  justify-content: center;
  align-items: center;
  background: rgba(16, 16, 16, 0.8);
  border-radius: 50%;
  width: 40px;
  height: 40px;
`

const NavArrow = styled(NavigationArrow)`
  width: 16px;
  transform: translateX(-2px) rotate(180deg);
`
