import React from 'react'
import styled from 'styled-components'

import { Header5 } from '../../styles/Typography'

const ReviewGuidelines = () => {
  return (
    <BulletContainer>
      <Header5>Your Review:</Header5>
      <BulletList>
        <ListItem>1. How did you like the app? Navigation? Design?</ListItem>
        <ListItem>2. Was the app fast to use?</ListItem>
        <ListItem>3. What did you like/not like about the workouts?</ListItem>
        <ListItem>4. Any additional thoughts will help us a lot!</ListItem>
      </BulletList>
    </BulletContainer>
  )
}

export default ReviewGuidelines

const BulletContainer = styled.div`
  margin: 30px 0 0 0;
  padding: 12px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  background: ${props => props.theme.baseBackgroundColor};
  border-radius: 10px;
`

const BulletList = styled.ul`
  list-style: none;
`

const ListItem = styled.li`
  position: relative;
  font-size: 14px;
  ::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    color: ${props => props.theme.tertiaryAccent};
    transform: translate(-50%, 50%);
  }
`
