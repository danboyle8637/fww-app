import React from 'react'

import IgniteResetHeader from './IgniteResetHeader'
import BodyBurnResetHeader from './BodyBurnResetHeader'
import StrongResetHeader from './StrongResetHeader'

const ChooseProgramHeader = ({ workoutId }) => {
  const programHeaders = [
    { workoutId: '7DayIgniteReset', component: <IgniteResetHeader /> },
    { workoutId: '7DayBodyBurnReset', component: <BodyBurnResetHeader /> },
    { workoutId: '7DayStrongReset', component: <StrongResetHeader /> }
  ]

  const header = programHeaders.reduce((accumulator, currentValue) => {
    if (currentValue.workoutId === workoutId) {
      accumulator = currentValue.component
    }

    return accumulator
  }, null)

  return <>{header}</>
}

export default ChooseProgramHeader
