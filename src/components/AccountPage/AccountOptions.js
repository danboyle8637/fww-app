import React from 'react'
import styled from 'styled-components'

import AdminButton from '../Buttons/AdminButton'

const AccountOptions = () => {
  return (
    <ButtonWrapper>
      <AdminButton>Update Profile Picture</AdminButton>
      <AdminButton>Update Username</AdminButton>
      <AdminButton>Update Email Address</AdminButton>
      <AdminButton>Update Password</AdminButton>
    </ButtonWrapper>
  )
}

export default AccountOptions

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 24px;
  width: 80%;
`
