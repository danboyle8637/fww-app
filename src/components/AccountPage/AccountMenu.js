import React from 'react'
import styled from 'styled-components'

import UpdateAccountFormTransition from '../../Animations/Transitions/UpdateAccountFormTransition'
import AdminButton from '../Buttons/AdminButton'

const AccountMenu = ({ activeSlide, setActiveSlide }) => {
  return (
    <UpdateAccountFormTransition
      showNode={activeSlide === 0}
      isAccountMenu={true}
    >
      <ButtonWrapper>
        <AdminButton handleClick={() => setActiveSlide(1)}>
          Update Profile Picture
        </AdminButton>
        <AdminButton handleClick={() => setActiveSlide(2)}>
          Update Username
        </AdminButton>
        <AdminButton handleClick={() => setActiveSlide(3)}>
          Update Email Address
        </AdminButton>
        <AdminButton handleClick={() => setActiveSlide(4)}>
          Update Password
        </AdminButton>
      </ButtonWrapper>
    </UpdateAccountFormTransition>
  )
}

export default AccountMenu

const ButtonWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 24px;
  width: 80%;
`
