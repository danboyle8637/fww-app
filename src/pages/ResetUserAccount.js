import React, { useState } from 'react'
import styled from 'styled-components'
import { TransitionGroup } from 'react-transition-group'

import FWWLogo from '../components/Logos/FWWLogo'
import VerticalUserCard from '../components/UserCards/VerticalUserCard'
import AccountMenu from '../components/AccountPage/AccountMenu'
import ConnectSocialAccount from '../components/AccountPage/ConnectSocialAccount'
import AccountUpdateProfilePicForm from '../components/Forms/AccountUpdateProfilePicForm'
import AccountUpdateEmailForm from '../components/Forms/AccountUpdateEmailForm'
import AccountUpdatePasswordForm from '../components/Forms/AccountUpdatePasswordForm'
import { above } from '../styles/Theme'

const ResetUserAccount = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <UserAccountContainer>
      <FWWLogo />
      <VerticalUserCard />
      <SectionWrapper>
        <FormWrapper>
          <TransitionGroup component={null}>
            <AccountMenu
              activeSlide={activeSlide}
              setActiveSlide={setActiveSlide}
            />
            <AccountUpdateProfilePicForm
              activeSlide={activeSlide}
              setActiveSlide={setActiveSlide}
            />
            <AccountUpdateEmailForm
              activeSlide={activeSlide}
              setActiveSlide={setActiveSlide}
            />
            <AccountUpdatePasswordForm
              activeSlide={activeSlide}
              setActiveSlide={setActiveSlide}
            />
          </TransitionGroup>
        </FormWrapper>
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

const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 350px;
`
