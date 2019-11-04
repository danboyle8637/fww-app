import React from 'react'
import styled from 'styled-components'

import KindalProfileTiny from '../../images/kindal-test-avatar-image-tiny.jpg'
import KindalProfileLarge from '../../images/kindal-test-avatar-image.jpg'
import useBlurUp from '../../hooks/useBlurUp'
import { useUserContext } from '../../context/UserContext'

const VerticalUserCard = ({ firstName }) => {
  // eslint-disable-next-line
  const [userState, dispatchUserAction] = useUserContext()
  const [setSmallImage, setLargeImage, setParentContainer] = useBlurUp()

  return (
    <CardContainer>
      <ImageContainer ref={setParentContainer}>
        <UserPhoto
          ref={setLargeImage}
          src={KindalProfileLarge}
          alt="Profile picture of the current user"
          title="Profile picture"
        />
        <PlaceholderImage
          ref={setSmallImage}
          src={KindalProfileTiny}
          alt="Placeholder picture of the current user"
          title="Profile placeholder"
        />
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
  overflow: hidden;
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

const PlaceholderImage = styled.img`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  border-radius: 50%;
  width: 100%;
  filter: blur(6px);
  transform: scale(1);
  z-index: 2;
`
