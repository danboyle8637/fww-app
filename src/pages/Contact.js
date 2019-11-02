import React from 'react'
import styled from 'styled-components'

import FWWLogo from '../components/Logos/FWWLogo'
import ContactForm from '../components/Forms/ContactForm'
import { above } from '../styles/Theme'

const Contact = () => {
  return (
    <ContactContainer>
      <FWWLogo />
      <ContactForm />
    </ContactContainer>
  )
}

export default Contact

const ContactContainer = styled.div`
  margin: 80px 0 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${above.tablet`
    margin: 120px 0 120px 0;
  `}
`
