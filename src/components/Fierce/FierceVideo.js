import React from 'react'
import styled from 'styled-components'

import {
  WorkoutPageHeadline,
  WorkoutPageDescription
} from '../../styles/Typography'
import VimeoPlayer from '../Shared/VimeoPlayer'

const FierceVideo = () => {
  return (
    <VideoContainer>
      <ExtendWorkoutPageHeadline>
        Help Us Build The Full App!
      </ExtendWorkoutPageHeadline>
      <VimeoPlayer videoId={380955119} />
      <ExtendWorkoutPageDescription>
        This will be a short summary of the offer and how to purchase one of the
        additional programs.
      </ExtendWorkoutPageDescription>
    </VideoContainer>
  )
}

export default FierceVideo

const VideoContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ExtendWorkoutPageHeadline = styled(WorkoutPageHeadline)`
  margin: 0 0 26px 0;
`

const ExtendWorkoutPageDescription = styled(WorkoutPageDescription)`
  margin: 18px 0 0 0;
`
