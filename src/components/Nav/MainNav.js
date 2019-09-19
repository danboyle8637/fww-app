import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

import FWWLogo from '../../svgs/FWWLogo'
import MenuChicklet from './MenuChicklet'
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
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  z-index: 16;
  ${above.mobile`
    justify-content: space-between;
  `}
  ${above.tablet`
    max-width: 900px;
  `}
  ${above.ipadPro`
    max-width: 1300px;
  `}
`

const Logo = styled(FWWLogo)`
  width: 40px;
  ${above.mobile`
    width: 80px;
  `}
`
