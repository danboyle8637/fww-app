import React from 'react'

import IgniteResetHeader from './IgniteResetHeader'
import BodyBurnResetHeader from './BodyBurnResetHeader'
import StrongResetHeader from './StrongResetHeader'

const ChooseProgramHeader = ({ programId, coverImage }) => {
  const programHeaders = [
    {
      programId: '7DayIgniteReset',
      component: <IgniteResetHeader coverImage={coverImage} />
    },
    {
      programId: '7DayBodyBurnReset',
      component: <BodyBurnResetHeader coverImage={coverImage} />
    },
    {
      programId: '7DayStrongReset',
      component: <StrongResetHeader coverImage={coverImage} />
    }
  ]

  const header = programHeaders.reduce((accumulator, currentValue) => {
    if (currentValue.programId === programId) {
      accumulator = currentValue.component
    }

    return accumulator
  }, null)

  return <>{header}</>
}

export default ChooseProgramHeader
