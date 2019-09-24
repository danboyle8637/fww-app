import React from 'react'
import styled from 'styled-components'

const HorizontalBasicUserCard = ({ photoUrl, firstName }) => {
  return (
    <CardContainer>
      <UserPhoto src={photoUrl} />
      <UserName>{firstName}</UserName>
    </CardContainer>
  )
}

export default HorizontalBasicUserCard

const CardContainer = styled.div`
  margin: 20px 0 0 0;
  padding: 8px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
  align-items: center;
  background: ${props => props.theme.mainBackgroundBorderColor};
  border-radius: 8px;
  width: 120px;
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
