import React from 'react'
import styled from 'styled-components'

import NavigationArrow from '../Shared/NavigationArrow'

const AddProgramCardFooter = () => {
  const handleAddProgram = () => {
    console.log('Add program to user program array')
  }

  return (
    <FooterContainer>
      <AddProgramButton onClick={handleAddProgram}>
        Add to My Fit Profile
      </AddProgramButton>
      <NavigationArrow />
    </FooterContainer>
  )
}

export default AddProgramCardFooter

const FooterContainer = styled.div`
  padding: 8px;
  justify-self: end;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 20px;
  align-items: center;
  justify-items: end;
  width: 100%;
`

const AddProgramButton = styled.button`
  margin: 0;
  padding: 8px 12px;
  background: ${props => props.theme.tertiaryAccent};
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: ${props => props.theme.mainBackgroundBorderColor};
  border: none;
  border-radius: 10px;
  width: 100%;
`
