import React from 'react'
import styled from 'styled-components'

import ShowUploadedImage from '../Shared/ShowUploadedImage'
import { useFormStore } from '../../context/FormContext'

const VerticalUserCard = ({
  firstName,
  profileImage,
  isSyncing,
  isProfilePic
}) => {
  // eslint-disable-next-line
  const [formState, dispatchFormAction] = useFormStore()

  return (
    <CardContainer>
      <ImageContainer>
        {isSyncing ||
        isProfilePic ||
        typeof formState.updateProfileImage.file === 'object' ? (
          <ShowUploadedImage file={formState.updateProfileImage.file} />
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
