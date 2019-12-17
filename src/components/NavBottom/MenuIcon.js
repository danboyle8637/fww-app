import React from 'react'
import styled from 'styled-components'

import { usePortalContext } from '../../context/portalContext'

const MenuIcon = ({ label, component, isOut, slug, handleNavigation }) => {
  // eslint-disable-next-line
  const [portalState, dispatchPortalAction] = usePortalContext()

  const handleMoreIconClick = () => {
    dispatchPortalAction({ type: 'toggleMoreMenu' })
  }

  const handleIconClick = () => {
    if (label === 'more') {
      handleMoreIconClick()
    } else if (label === 'logout') {
      return null
    } else {
      handleNavigation(`/${label}`)
    }
  }

  return (
    <>
      {isOut ? (
        <OutItemContainer href={slug} target="_blank" rel="noopener noreferrer">
          {component}
          <Label>{label}</Label>
        </OutItemContainer>
      ) : (
        <ItemContainer onClick={handleIconClick}>
          {component}
          <Label>{label}</Label>
        </ItemContainer>
      )}
    </>
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

const OutItemContainer = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
`

const Label = styled.p`
  margin: 0;
  padding: 0;
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1.6;
  color: ${props => props.theme.bodyText};
`
