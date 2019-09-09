import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

import FWWLogo from '../svgs/FWWLogo'
import BaseButton from '../components/Buttons/BaseButton'
import { useFireBase } from '../components/Firebase/FirebaseContext'

const ResetDashboard = () => {
  const auth = useFireBase()
  const [toLogin, setToLogin] = useState(false)

  useEffect(() => {
    const user = auth.getCurrentUser()
    console.log(user)
    if (user) {
      // eslint-disable-next-line
      const username = user.displayName
    }

    // const baseUrl = 'http://localhost:5001/fit-womens-weekly/us-central1/api'
    // const programsPath = '/get-programs'
    // const percentCompletePath = '/get-percent-complete'
    // const programsPromise = fetch(`${baseUrl}${programsPath}`)
    // const percentCompletePromise = fetch(`${baseUrl}${percentCompletePath}`, {
    //   body: {
    //     username:
    //   }
    // })

    // Promise.all([programsPromise, percentCompletePromise])
    //   .then(response => {
    //     return response.map(res => res.json())
    //   })
    //   .then(data => {
    //     data.forEach(element => {
    //       console.log(element)
    //     })
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
  }, [auth])

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
