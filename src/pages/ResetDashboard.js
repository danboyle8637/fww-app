import React from 'react'
import styled from 'styled-components'

import FWWLogo from '../svgs/FWWLogo'

const ResetDashboard = () => {
  return (
    <DashboardContainer>
      <Logo />
      <UserInfo>Kindal</UserInfo>
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
