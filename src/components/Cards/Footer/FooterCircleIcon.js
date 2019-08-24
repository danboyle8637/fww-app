import React from 'react'
import styled from 'styled-components'

const FooterCircleIcon = ({ active }) => {
  return <CompleteDot active={active} />
}

export default FooterCircleIcon

const CompleteDot = styled.div`
  background: ${props =>
    props.active ? props.theme.strongBodyText : 'transparent'};
  border: 2px solid ${props => props.theme.strongBodyText};
  border-radius: 50%;
  width: 20px;
  height: 20px;
`
