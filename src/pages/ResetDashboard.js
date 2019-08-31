import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

import FWWLogo from '../svgs/FWWLogo'
import BaseButton from '../components/Buttons/BaseButton'
import { FirebaseContext } from '../components/Firebase/FirebaseContext'

const ResetDashboard = () => {
  const auth = useContext(FirebaseContext)
  const [toLogin, setToLogin] = useState(false)

  useEffect(() => {
    const user = auth.getCurrentUser()
    console.log(user)
  }, [auth])

  const handleSignOut = () => {
    auth.logUserOut()
    setToLogin(true)
  }

  return (
    <>
      {toLogin ? (
        <Redirect to="/login" />
      ) : (
        <DashboardContainer>
          <Logo />
          <UserInfo>Kindal</UserInfo>
          <BaseButton handleClick={handleSignOut}>Sign Out</BaseButton>
        </DashboardContainer>
      )}
    </>
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
