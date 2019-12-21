import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

import useIntersectionObserver from '../../hooks/useIntersectionObserver'

const WorkoutCardHeader = ({ background, tinyImage, altText, title }) => {
  const imageRef = useRef(null)

  const [setNode, runAction] = useIntersectionObserver({
    rootMargin: '0px 0px 0px -100px',
    shouldUnobserve: true
  })

  useEffect(() => {
    const image = imageRef.current

    if (runAction) {
      image.src = image.dataset.src
      image.style.filter = 'blur(0px)'
    }
  }, [runAction])

  return (
    <ImageContainer ref={setNode}>
      <WorkoutImage
        ref={imageRef}
        src={tinyImage}
        data-src={background}
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
  overflow: hidden;
`

const WorkoutImage = styled.img`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  border-radius: 10px 10px 0 0;
  width: 100%;
  height: auto;
  object-fit: cover;
  z-index: 1;
  filter: blur(6px);
  transition: filter 1000ms ease-in-out;
`
