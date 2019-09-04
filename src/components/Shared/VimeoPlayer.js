import React, { forwardRef, useEffect } from 'react'
import styled from 'styled-components'
import ViemoPlayer from '@vimeo/player'

// I don't think I need the forwardRef for anything
// When you set up try getting rid of it.
const VimeoPlayer = forwardRef(({ children, videoId }, ref) => {
  useEffect(() => {
    const player = new ViemoPlayer(ref.current, {
      id: videoId,
      responsive: true,
      controls: true
    })

    player.on('play', () => {
      console.log('playing video!')
    })

    return () => {
      player
        .destroy()
        .then(() => {
          console.log('Player was successfully destroyed!')
        })
        .catch(error => console.log(error))
    }
  }, [ref, videoId])

  return <VideoContainer ref={ref}>{children}</VideoContainer>
})

export default VimeoPlayer

const VideoContainer = styled.div`
  width: 100%;
`
