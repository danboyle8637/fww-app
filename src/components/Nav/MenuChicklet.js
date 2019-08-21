import React from 'react'
import styled from 'styled-components'
import './Nav.css'

import MainMenuIcon from '../../svgs/MainMenuIcon'

const MenuChicklet = () => {
  return (
    <Chicklet>
      <Menu />
    </Chicklet>
  )
}

export default MenuChicklet

const Chicklet = styled.div`
  background: transparent;
`

const Menu = styled(MainMenuIcon)`
  width: 40px;
`
