import React from 'react'
import styled from 'styled-components'

import KindalProfile from '../images/kindal-test-avatar-image.jpg'
import FWWLogo from '../components/Logos/FWWLogo'
import HorizontalUserCard from '../components/UserCards/HorizontalBasicUserCard'
import VimeoPlayer from '../components/Shared/VimeoPlayer'
import ReviewGuidlines from '../components/ContentBlocks/ReviewGuidlines'
import { above } from '../styles/Theme'

const Review = () => {
  return (
    <ReviewContainer>
      <FWWLogo />
      <HorizontalUserCard photoUrl={KindalProfile} firstName="Kindal" />
      <VimeoPlayer videoId={354274924} />
      <ReviewGuidlines />
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
  ${above.ipadPro`
    margin: 80px 0 120px 0;
  `}
`
