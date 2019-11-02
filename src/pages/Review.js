import React from 'react'
import styled from 'styled-components'

import FWWLogo from '../components/Logos/FWWLogo'
import HorizontalUserCard from '../components/UserCards/HorizontalBasicUserCard'
import VimeoPlayer from '../components/Shared/VimeoPlayer'
import ReviewForm from '../components/Forms/ReviewForm'
import { useUserContext } from '../context/UserContext'
import { above } from '../styles/Theme'

const Review = () => {
  // eslint-disable-next-line
  const [userState, dispatchUserAction] = useUserContext()

  return (
    <ReviewContainer>
      <FWWLogo />
      <HorizontalUserCard
        photoUrl={userState.photoUrl}
        firstName={userState.firstName}
      />
      <VideoWrapper>
        <VimeoPlayer videoId={370208968} />
      </VideoWrapper>
      <ReviewForm />
    </ReviewContainer>
  )
}

export default Review

const ReviewContainer = styled.div`
  margin: 80px 0 80px 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 16px;
  justify-items: center;
  width: 100%;
  ${above.tablet`
    margin: 80px 0 120px 0;
  `}
`

const VideoWrapper = styled.div`
  width: 100%;
  ${above.tablet`
    width: 60%;
  `}
`
