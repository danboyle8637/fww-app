import React from 'react'
import styled from 'styled-components'

import SevenDayResetFWWLogo from '../../svgs/SevenDayResetFWWLogo'

const ResetSignUpHeader = () => {
  return (
    <HeaderContainer>
      <ResetLogo />
    </HeaderContainer>
  )
}

export default ResetSignUpHeader

const HeaderContainer = styled.div`
  margin: 0;
  padding: 80px 0 40px 0;
  display: flex;
  justify-content: center;
`

const ResetLogo = styled(SevenDayResetFWWLogo)`
  width: 200px;
`
