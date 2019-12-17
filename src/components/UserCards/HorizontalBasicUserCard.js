import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { above } from '../../styles/Theme'

const HorizontalBasicUserCard = ({ photoUrl, firstName }) => {
  return (
    <CardLink to={`/account/${firstName}`}>
      <CardContainer>
        <UserPhoto src={photoUrl} />
        <UserName>{firstName}</UserName>
      </CardContainer>
    </CardLink>
  )
}

export default HorizontalBasicUserCard

const CardContainer = styled.div`
  padding: 8px 14px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
  align-items: center;
  background: ${props => props.theme.mainBackgroundBorderColor};
  border-radius: 8px;
`

const UserName = styled.p`
  font-family: QuicksandSemiBold;
  font-size: 18px;
  color: ${props => props.theme.bodyText};
`

const UserPhoto = styled.img`
  width: 40px;
  border-radius: 50%;
`

const CardLink = styled(Link)`
  margin: 20px 0 0 0;
  text-decoration: none;
  border-radius: 8px;
  transition: box-shadow 300ms ease-in-out;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #000, 0 0 0 5px ${props => props.theme.primaryAccent};
  }
  ${above.ipadPro`
    &:hover {
      box-shadow: 0 0 0 2px #000, 0 0 0 5px ${props =>
        props.theme.primaryAccent};
    }
  `}
`
