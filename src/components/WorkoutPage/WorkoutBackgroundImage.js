import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

const WorkoutBackgroundImage = ({ imageArray, name }) => {
  const refArray = useRef([])

  useEffect(() => {
    console.log(refArray.current.length)
  }, [])

  const background = imageArray.map((image, index) => {
    return (
      <BackgroundImage
        ref={ref => refArray.current.push(ref)}
        key={index}
        src={image}
        title={`${name} workout background`}
        alt={`Let's do the ${name} together and get the ultimate burn, press the play button.`}
      />
    )
  })

  return <BackgroundContainer>{background}</BackgroundContainer>
}

export default WorkoutBackgroundImage

const BackgroundContainer = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  border-radius: 10px;
  width: 100%;
`

const BackgroundImage = styled.img`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  border-radius: 10px;
  width: 100%;
`
