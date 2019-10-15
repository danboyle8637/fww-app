import React from 'react'

import IgniteResetHeader from './IgniteResetHeader'
import BodyBurnResetHeader from './BodyBurnResetHeader'
import StrongResetHeader from './StrongResetHeader'

const ChooseProgramHeader = ({
  programId,
  coverImage,
  tinyCoverImage,
  signUpCard
}) => {
  const programHeaders = [
    {
      programId: '7DayIgniteReset',
      component: (
        <IgniteResetHeader
          coverImage={coverImage}
          tinyCoverImage={tinyCoverImage}
          signUpCard={signUpCard}
        />
      )
    },
    {
      programId: '7DayBodyBurnReset',
      component: (
        <BodyBurnResetHeader
          coverImage={coverImage}
          tinyCoverImage={tinyCoverImage}
          signUpCard={signUpCard}
        />
      )
    },
    {
      programId: '7DayStrongReset',
      component: (
        <StrongResetHeader
          coverImage={coverImage}
          tinyCoverImage={tinyCoverImage}
          signUpCard={signUpCard}
        />
      )
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
