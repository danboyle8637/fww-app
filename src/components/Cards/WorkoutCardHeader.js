import React from 'react'
import styled from 'styled-components'

import useBlurUp from '../../hooks/useBlurUp'

const WorkoutCardHeader = ({ background, tinyImage, altText, title }) => {
  const [setSmallImage, setLargeImage, setParentContainer] = useBlurUp()

  return (
    <ImageContainer ref={setParentContainer}>
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
`

const PlaceholderImage = styled.img`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  border-radius: 10px 10px 0 0;
  width: 100%;
  object-fit: cover;
  filter: blur(6px);
  transform: scale(1);
  z-index: 2;
`
