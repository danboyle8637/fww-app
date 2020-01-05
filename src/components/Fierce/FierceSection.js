import React from 'react'
import styled from 'styled-components'

import FierceVideo from './FierceVideo'

const FierceSection = () => {

  // 1. Hit your endpoint to get the card data

  // 2. Render the cards

  return (
    <FierceContainer>
      <FierceVideo />
    </FierceContainer>
  )
}

export default FierceSection

const FierceContainer = styled.div`
  margin: 0;
  padding: 0 16px;
`
