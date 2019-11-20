import React from 'react'
import styled from 'styled-components'

import LoadingKettlebell from '../../svgs/LoadingKettlebell'

const VerticalUserCard = ({ firstName, profileImage, isSyncing }) => {
  return (
    <CardContainer>
      <ImageContainer>
        {isSyncing ? (
          <KettlebellLoader />
        ) : (
          <UserPhoto
            src={profileImage}
            alt="Profile picture of the current user"
            title="Profile picture"
          />
        )}
      </ImageContainer>
      <UserName>{firstName}</UserName>
    </CardContainer>
  )
}

export default VerticalUserCard

const CardContainer = styled.div`
  margin: 20px 0 0 0;
  padding: 8px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 12px;
  justify-items: center;
  align-items: center;
  width: 150px;
  overflow: hidden;
`

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  width: 100%;
`

const KettlebellLoader = styled(LoadingKettlebell)`
  grid-column: 1 / -1;
  grid-row: 1 /-1;
  width: 100px;
  justify-self: center;
  align-self: center;
`

const UserName = styled.p`
  font-family: QuicksandSemiBold;
  font-size: 18px;
  color: ${props => props.theme.bodyText};
`

const UserPhoto = styled.img`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 100%;
  border: 8px solid ${props => props.theme.mainBackgroundBorderColor};
  border-radius: 50%;
  z-index: 1;
`
