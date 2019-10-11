import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { TweenMax, Linear } from 'gsap/TweenMax'
import TimelineMax from 'gsap/TimelineMax'

import useBlurUp from '../../hooks/useBlurUp'

const WorkoutCardHeader = ({ background, tinyImage, altText, title }) => {
  //const [largeImageLoaded, setLargeImageLoaded] = useState(false)

  // const largeImageRef = useRef(null)
  // const smallImageRef = useRef(null)
  const [setSmallImage, setLargeImage] = useBlurUp()
  // const timelineRef = useRef(new TimelineMax({ paused: true }))

  // useEffect(() => {
  //   const smallImage = smallImageRef.current
  //   const largeImage = largeImageRef.current
  //   const tl = timelineRef.current

  //   TweenMax.set(largeImage, { autoAlpha: 0 })

  //   tl.to(smallImage, 0.2, {
  //     autoAlpha: 0,
  //     ease: Linear.easeNone
  //   }).to(
  //     largeImage,
  //     0.2,
  //     {
  //       autoAlpha: 1,
  //       ease: Linear.easeNone
  //     },
  //     '-=0.2'
  //   )

  //   const largeImageIsLoaded = () => {
  //     return new Promise((resolve, reject) => {
  //       largeImage.onload = () => {
  //         resolve()
  //       }
  //     })
  //   }

  //   largeImageIsLoaded().then(() => setLargeImageLoaded(true))

  //   return () => {
  //     tl.kill()
  //   }
  // }, [])

  // useEffect(() => {
  //   const tl = timelineRef.current

  //   if (largeImageLoaded) {
  //     tl.play()
  //   }
  // }, [largeImageLoaded])

  return (
    <ImageContainer>
      <WorkoutImage
        ref={setLargeImage}
        src={background}
        alt={altText}
        title={title}
      />
      <PlaceholderImage
        ref={setSmallImage}
        src={tinyImage}
        alt={altText}
        title={title}
      />
    </ImageContainer>
  )
}

export default WorkoutCardHeader

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  width: 100%;
`

const WorkoutImage = styled.img`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  border-radius: 10px 10px 0 0;
  width: 100%;
  z-index: 1;
`

const PlaceholderImage = styled.img`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  border-radius: 10px 10px 0 0;
  width: 100%;
  filter: blur(6px);
  transform: scale(1);
  z-index: 2;
`
