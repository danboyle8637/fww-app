import React from 'react'
import styled from 'styled-components'

import FWWLogo from '../svgs/FWWLogo'
import BaseButton from '../components/Buttons/BaseButton'

const ResetDashboard = () => {
  const handleSignOut = () => {
    console.log('Sign out')
  }

  return (
    <DashboardContainer>
      <Logo />
      <UserInfo>Kindal</UserInfo>
      <BaseButton onClick={handleSignOut}>Sign Out</BaseButton>
    </DashboardContainer>
  )
}

export default ResetDashboard

const DashboardContainer = styled.div`
  margin: 40px 0 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Logo = styled(FWWLogo)`
  width: 220px;
`

const UserInfo = styled.p`
  margin: 20px 0 0 0;
  font-family: QuicksandSemiBold;
  font-size: 18px;
  color: ${props => props.theme.bodyText};
`
