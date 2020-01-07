import React from 'react'

import IgniteResetHeader from '../Cards/ProgramHeaders/IgniteResetHeader'
import BodyBurnResetHeader from '../Cards/ProgramHeaders/BodyBurnResetHeader'
import StrongResetHeader from '../Cards/ProgramHeaders/StrongResetHeader'
import FierceBodyBurnHeader from '../Cards/ProgramHeaders/FierceBodyBurnHeader'
import FierceStrongHeader from '../Cards/ProgramHeaders/FierceStrongHeader'

const ProgramSalesPageHeader = ({ programId, tinyCoverImage, coverImage }) => {
  switch (programId) {
    case '7DayIgniteReset': {
      return (
        <IgniteResetHeader
          tinyCoverImage={tinyCoverImage}
          coverImage={coverImage}
          signUpCard={false}
          salesPage={true}
        />
      )
    }
    case '7DayBodyBurnReset': {
      return (
        <BodyBurnResetHeader
          tinyCoverImage={tinyCoverImage}
          coverImage={coverImage}
          signUpCard={false}
          salesPage={true}
        />
      )
    }
    case '7DayStrongReset': {
      return (
        <StrongResetHeader
          tinyCoverImage={tinyCoverImage}
          coverImage={coverImage}
          signUpCard={false}
          salesPage={true}
        />
      )
    }
    case 'FierceBodyBurn': {
      return (
        <FierceBodyBurnHeader
          tinyCoverImage={tinyCoverImage}
          coverImage={coverImage}
          signUpCard={false}
          salesPage={true}
        />
      )
    }
    case 'FierceStrong': {
      return (
        <FierceStrongHeader
          tinyCoverImage={tinyCoverImage}
          coverImage={coverImage}
          signUpCard={false}
          salesPage={true}
        />
      )
    }
    default: {
      return null
    }
  }
}

export default ProgramSalesPageHeader
