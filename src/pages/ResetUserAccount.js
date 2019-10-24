import React from 'react'
import styled from 'styled-components'

import FWWLogo from '../components/Logos/FWWLogo'
import VerticalUserCard from '../components/UserCards/VerticalUserCard'
import AccountOptions from '../components/AccountPage/AccountOptions'
import ConnectSocialAccount from '../components/AccountPage/ConnectSocialAccount'
import AccountUpdateProfilePicForm from '../components/Forms/AccountUpdateProfilePicForm'
import { above } from '../styles/Theme'

const ResetUserAccount = () => {
  return (
    <UserAccountContainer>
      <FWWLogo />
      <VerticalUserCard />
      <SectionWrapper>
        <AccountUpdateProfilePicForm />
        <AccountOptions />
        <ConnectSocialAccount />
      </SectionWrapper>
    </UserAccountContainer>
  )
}

export default ResetUserAccount

const UserAccountContainer = styled.div`
  margin: 80px 0 80px 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 30px;
  justify-items: center;
  width: 100%;
  ${above.ipadPro`
    margin: 80px 0 120px 0;
  `}
`

const SectionWrapper = styled.div`
  margin: 20px 0 0 0;
  padding: 0 16px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 100px;
  justify-items: center;
  width: 100%;
  ${above.mobile`
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    align-items: center;
  `}
  ${above.tablet`
    width: 80%;
  `}
`
