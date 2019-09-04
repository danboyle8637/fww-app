import React from 'react'

import SevenDayResetStep1Header from '../components/PageHeaders/SevenDayResetStep1Header'
import SevenDayResetStep1Form from '../components/Forms/SevenDayResetStep1Form'
import ChooseResetProgramCard from '../components/Cards/ChooseResetProgramCard'

const SevenDayResetSignUpStep1 = () => {
  return (
    <>
      <SevenDayResetStep1Header />
      <SevenDayResetStep1Form />
      <ChooseResetProgramCard
        workoutId="7DayIgniteReset"
        description="Seven days of re-learning form… pushing your comfort zone… and discovering a smarter, more intense way to workout."
        fitnessLevel="beginner"
        numberOfWorkouts={5}
        duration="7 - 9 days"
      />
      <ChooseResetProgramCard
        workoutId="7DayBodyBurnReset"
        description="Seven days of re-learning form… pushing your comfort zone… and discovering a smarter, more intense way to workout."
        fitnessLevel="intermediate"
        numberOfWorkouts={5}
        duration="7 - 9 days"
      />
      <ChooseResetProgramCard
        workoutId="7DayStrongReset"
        description="Seven days of re-learning form… pushing your comfort zone… and discovering a smarter, more intense way to workout."
        fitnessLevel="advanced"
        numberOfWorkouts={5}
        duration="7 - 9 days"
      />
    </>
  )
}

export default SevenDayResetSignUpStep1
