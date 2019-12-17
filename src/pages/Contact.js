import React, { useState } from 'react'
import styled from 'styled-components'

import FWWLogo from '../components/Logos/FWWLogo'
import ContactForm from '../components/Forms/ContactForm'
import MessageDialog from '../components/Dialogs/MessageDialog'
import SyncingIndicator from '../components/Indicators/SyncingIndicator'
import ScrollToTop from '../components/Shared/ScrollToTop'
import Portal from '../components/Shared/Portal'
import { above } from '../styles/Theme'

const Contact = () => {
  const [isSyncing, setIsSyncing] = useState(false)
  const [syncingMessage, setSyncingMessage] = useState('')

  const toggleSyncing = () => setIsSyncing(prevValue => !prevValue)

  return (
    <>
      <ScrollToTop />
      <ContactContainer>
        <FWWLogo />
        <ContactForm
          isSyncing={isSyncing}
          toggleSyncing={toggleSyncing}
          setSyncingMessage={setSyncingMessage}
        />
      </ContactContainer>
      <SyncingIndicator isSyncing={isSyncing} syncMessage={syncingMessage} />
      <Portal>
        <MessageDialog />
      </Portal>
    </>
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
