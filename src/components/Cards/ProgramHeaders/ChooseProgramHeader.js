import React from 'react'

import IgniteResetHeader from './IgniteResetHeader'
import BodyBurnResetHeader from './BodyBurnResetHeader'
import StrongResetHeader from './StrongResetHeader'
import FierceBodyBurnHeader from './FierceBodyBurnHeader'
import FierceStrongHeader from './FierceStrongHeader'

const ChooseProgramHeader = ({
  programId,
  coverImage,
  tinyCoverImage,
  signUpCard
}) => {
  // * In this solution, I creacted an array then used reduce to choose the right element to render.
  // const programHeaders = [
  //   {
  //     programId: '7DayIgniteReset',
  //     component: (
  //       <IgniteResetHeader
  //         coverImage={coverImage}
  //         tinyCoverImage={tinyCoverImage}
  //         signUpCard={signUpCard}
  //       />
  //     )
  //   },
  //   {
  //     programId: '7DayBodyBurnReset',
  //     component: (
  //       <BodyBurnResetHeader
  //         coverImage={coverImage}
  //         tinyCoverImage={tinyCoverImage}
  //         signUpCard={signUpCard}
  //       />
  //     )
  //   },
  //   {
  //     programId: '7DayStrongReset',
  //     component: (
  //       <StrongResetHeader
  //         coverImage={coverImage}
  //         tinyCoverImage={tinyCoverImage}
  //         signUpCard={signUpCard}
  //       />
  //     )
  //   },
  //   {
  //     programId: 'FierceBodyBurn',
  //     component: (
  //       <FierceBodyBurnHeader
  //         coverImage={coverImage}
  //         tinyCoverImage={tinyCoverImage}
  //       />
  //     )
  //   },
  //   {
  //     programId: 'FierceStrong',
  //     component: (
  //       <FierceStrongHeader
  //         coverImage={coverImage}
  //         tinyCoverImage={tinyCoverImage}
  //       />
  //     )
  //   }
  // ]

  const renderHeader = programId => {
    switch (programId) {
      case '7DayIgniteReset': {
        return (
          <IgniteResetHeader
            coverImage={coverImage}
            tinyCoverImage={tinyCoverImage}
            signUpCard={signUpCard}
          />
        )
      }
      case '7DayBodyBurnReset': {
        return (
          <BodyBurnResetHeader
            coverImage={coverImage}
            tinyCoverImage={tinyCoverImage}
            signUpCard={signUpCard}
          />
        )
      }
      case '7DayStrongReset': {
        return (
          <StrongResetHeader
            coverImage={coverImage}
            tinyCoverImage={tinyCoverImage}
            signUpCard={signUpCard}
          />
        )
      }
      case 'FierceBodyBurn': {
        return (
          <FierceBodyBurnHeader
            coverImage={coverImage}
            tinyCoverImage={tinyCoverImage}
          />
        )
      }
      case 'FierceStrong': {
        return (
          <FierceStrongHeader
            coverImage={coverImage}
            tinyCoverImage={tinyCoverImage}
          />
        )
      }
      default: {
        return null
      }
    }
  }

  // const header = programHeaders.reduce((accumulator, currentValue) => {
  //   if (currentValue.programId === programId) {
  //     accumulator = currentValue.component
  //   }

  //   return accumulator
  // }, null)

  return <>{programId ? renderHeader(programId) : null}</>
}

export default ChooseProgramHeader
