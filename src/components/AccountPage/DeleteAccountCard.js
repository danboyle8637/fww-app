import React from 'react'
import styled from 'styled-components'

import { above } from '../../styles/Theme'

const DeleteAccountCard = ({ handleDeleteAccount }) => {
  return (
    <DeleteContainer>
      <DeleteHeadline>Delete Account:</DeleteHeadline>
      <DeleteText>
        You can delete your account. This is permanent and can't be undone.
        You'll lose your data. If you have any questions, contact me.
      </DeleteText>
      <DeleteButton onClick={handleDeleteAccount}>Delete Account</DeleteButton>
    </DeleteContainer>
  )
}

export default DeleteAccountCard

const DeleteContainer = styled.div`
  padding: 12px;
  align-self: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  background: ${props => props.theme.mainBackgroundBorderColor};
  border-radius: 10px;
  width: 100%;
  max-width: 600px;
  ${above.mobile`
    margin: 80px 0 0 0;
  `}
  ${above.tablet`
    margin: 120px 0 0 0;
  `}
`

const DeleteHeadline = styled.h3`
  font-size: 22px;
  text-transform: uppercase;
  font-weight: 800;
  color: ${props => props.theme.formErrorBackground};
  letter-spacing: 0.2rem;
`

const DeleteText = styled.p`
  margin: 12px 0 20px 0;
  font-size: 15px;
  color: ${props => props.theme.bodyText};
`

const DeleteButton = styled.button`
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.formErrorBackground};
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
