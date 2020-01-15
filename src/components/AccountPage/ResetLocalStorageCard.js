import React from 'react'
import styled from 'styled-components'

import { useFireBase } from '../Firebase/FirebaseContext'
import { above } from '../../styles/Theme'

const ResetLocalStorageCard = () => {
  const auth = useFireBase()

  const handleResetButtonClick = () => {
    localStorage.clear()
    auth.logUserOut()
  }

  return (
    <ResetContainer>
      <ResetHeadline>Reset Local App Data:</ResetHeadline>
      <ResetText>
        If you notice data in your app is inaccurate, you should reset your
        local app data. This will clean your local data... log you out... and
        you just need to re-login.
      </ResetText>
      <ResetButton onClick={handleResetButtonClick}>
        Reset Local Data
      </ResetButton>
    </ResetContainer>
  )
}

export default ResetLocalStorageCard

const ResetContainer = styled.div`
  margin: 120px 0 0 0;
  padding: 12px;
  align-self: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  background: ${props => props.theme.mainBackgroundBorderColor};
  border-radius: 10px;
  width: 100%;
  max-width: 600px;
`

const ResetHeadline = styled.h3`
  font-size: 22px;
  text-transform: uppercase;
  font-weight: 800;
  color: ${props => props.theme.strongBodyText};
  letter-spacing: 0.2rem;
`

const ResetText = styled.p`
  margin: 12px 0 20px 0;
  font-size: 15px;
  color: ${props => props.theme.bodyText};
`

const ResetButton = styled.button`
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.strongBodyText};
  border: none;
  font-size: 18px;
  font-weight: 800;
  text-transform: uppercase;
  color: ${props => props.theme.mainBackgroundBorderColor};
  border-radius: 8px;
  transition: box-shadow 300ms ease-in-out;
  &:focus {
    box-shadow: 0 0 0 2px #000, 0 0 0 5px ${props => props.theme.tertiaryAccent};
  }
  ${above.ipadPro`
    &:hover {
      box-shadow: 0 0 0 2px #000, 0 0 0 5px ${props =>
        props.theme.tertiaryAccent};
    }
  `}
`
