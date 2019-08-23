import React from 'react'
import styled from 'styled-components'

const WorkoutCardHeader = ({ background, altText, title }) => {
  return <WorkoutImage src={background} alt={altText} title={title} />
}

export default WorkoutCardHeader

const WorkoutImage = styled.image`
  width: 100%;
`
