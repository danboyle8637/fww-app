import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import FooterCircleIcon from './FooterCircleIcon'
import { useUserContext } from '../../../context/UserContext'

const ProgramActiveSection = ({ programId }) => {
  // eslint-disable-next-line
  const [userState, dispatch] = useUserContext()
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (Object.values(userState).length !== 0) {
      if (userState.programs.includes(programId)) {
        setIsActive(true)
      }
    }
  }, [programId, userState])

  return (
    <ActiveContainer>
      <FooterCircleIcon active={isActive} />
      <ActiveLabel>Active</ActiveLabel>
    </ActiveContainer>
  )
}

export default ProgramActiveSection

const ActiveContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px;
  align-items: center;
`

const ActiveLabel = styled.p`
  font-family: QuicksandMedium;
  font-size: 14px;
  color: ${props => props.theme.bodyText};
  text-transform: uppercase;
  text-decoration: none;
`
