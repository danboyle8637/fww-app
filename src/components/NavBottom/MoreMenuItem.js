import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const MoreMenuItem = ({ label, slug }) => {
  return (
    <NavLink to={slug}>
      <MenuLabel>{label}</MenuLabel>
    </NavLink>
  )
}

export default MoreMenuItem

const MenuLabel = styled.p`
  margin: 0;
  padding: 0;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1.6;
  color: ${props => props.theme.bodyText};
`

const NavLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
`
