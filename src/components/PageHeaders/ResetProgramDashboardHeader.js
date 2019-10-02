import React from 'react'
import styled from 'styled-components'

import IgniteResetLogo from '../../svgs/IgniteResetLogo'
import BodyBurnResetLogo from '../../svgs/BodyBurnResetLogo'
import StrongResetLogo from '../../svgs/StrongResetLogo'
import { above } from '../../styles/Theme'

const ResetProgramDashboardHeader = ({ programId }) => {
  const logos = [
    { id: '7DayIgniteReset', component: <IgniteReset /> },
    { id: '7DayBodyBurnReset', component: <BodyBurnReset /> },
    { id: '7DayStrongReset', component: <StrongReset /> }
  ]

  const header = logos.reduce((accumulator, currentValue) => {
    if (currentValue.id === programId) {
      accumulator = currentValue.component
    }

    return accumulator
  }, null)

  return <>{header}</>
}

export default ResetProgramDashboardHeader

const IgniteReset = styled(IgniteResetLogo)`
  width: 200px;
  ${above.mobile`
    width: 260px;
  `}
  ${above.tablet`
    width: 300px;
  `}
`

const BodyBurnReset = styled(BodyBurnResetLogo)`
  width: 200px;
  ${above.mobile`
    width: 260px;
  `}
  ${above.tablet`
    width: 300px;
  `}
`

const StrongReset = styled(StrongResetLogo)`
  width: 200px;
  ${above.mobile`
    width: 260px;
  `}
  ${above.tablet`
    width: 300px;
  `}
`
