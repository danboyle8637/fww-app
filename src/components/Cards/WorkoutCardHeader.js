import React from 'react'
import styled from 'styled-components'

const WorkoutCardHeader = ({ background, altText, title }) => {
  return <WorkoutImage src={background} alt={altText} title={title} />
}

export default WorkoutCardHeader

const WorkoutImage = styled.img`
  border-radius: 10px 10px 0 0;
  width: 100%;
`
