import React from 'react'
import styled from 'styled-components'

import PasswordEyeOpenIcon from '../../svgs/PasswordEyeOpenIcon'
import PasswordEyeClosedIcon from '../../svgs/PasswordEyeClosedIcon'

const PasswordShowHideIndicator = ({ showPassword, toggleShowPassword }) => {
  return (
    <ShowHideContainer onClick={toggleShowPassword}>
      {showPassword ? (
        <>
          <EyeOpenIcon />
          <Label>Hide Password</Label>
        </>
      ) : (
        <>
          <EyeClosedIcon />
          <Label>Show Password</Label>
        </>
      )}
    </ShowHideContainer>
  )
}

export default PasswordShowHideIndicator

const ShowHideContainer = styled.div`
  margin: 12px 0 0 0;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px;
  align-items: center;
`

const EyeOpenIcon = styled(PasswordEyeOpenIcon)`
  width: 26px;
`

const EyeClosedIcon = styled(PasswordEyeClosedIcon)`
  width: 26px;
`

const Label = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: #b44cff;
`
