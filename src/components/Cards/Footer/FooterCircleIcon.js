import React from 'react'
import styled from 'styled-components'

const FooterCircleIcon = ({ active, fitnessLevel = false }) => {
  return <CompleteDot active={active} fitnessLevel={fitnessLevel} />
}

export default FooterCircleIcon

const CompleteDot = styled.div`
  background: ${props =>
    props.active && !props.fitnessLevel
      ? props.theme.strongBodyText
      : props.active && props.fitnessLevel
      ? '#ff22a5'
      : 'transparent'};
  border: 2px solid
    ${props => (props.fitnessLevel ? '#ff22a5' : props.theme.strongBodyText)};
  border-radius: 50%;
  width: 20px;
  height: 20px;
`
