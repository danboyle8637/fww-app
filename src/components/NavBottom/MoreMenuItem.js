import React from 'react'
import styled from 'styled-components'

import AccountProfileIcon from '../../svgs/AccountProfileIcon'
import ReviewIcon from '../../svgs/ReviewIcon'
import ContactIcon from '../../svgs/BottomContactIcon'
import { above } from '../../styles/Theme'

const MoreMenuItem = ({ label, slug, handleNavigation }) => {
  return (
    <NavLink onClick={() => handleNavigation(slug)}>
      {label === 'My Account' ? <ProfileIcon /> : null}
      {label === 'Leave Review' ? <LeaveReviewIcon /> : null}
      {label === 'Contact' ? <ContactMeIcon /> : null}
      <MenuLabel>{label}</MenuLabel>
    </NavLink>
  )
}

export default MoreMenuItem

const MenuLabel = styled.p`
  margin: 8px 0 0 0;
  padding: 0;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1.6;
  color: ${props => props.theme.bodyText};
  ${above.ipadPro`
    &:hover {
      color: ${props => props.theme.primaryAccent};
    }
  `}
`

const NavLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`

const ProfileIcon = styled(AccountProfileIcon)`
  width: 40px;
`

const LeaveReviewIcon = styled(ReviewIcon)`
  width: 80px;
`

const ContactMeIcon = styled(ContactIcon)`
  width: 40px;
`
