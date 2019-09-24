import React from 'react'

import VimeoPlayer from '../components/Shared/VimeoPlayer'
import ResetWorkoutPageHeader from '../components/PageHeaders/ResetWorkoutPageHeader'

const ResetWorkoutCoaching = () => {
  return (
    <>
      <ResetWorkoutPageHeader name="Coaching" />
      <VimeoPlayer videoId={'355818758'} />
    </>
  )
}

export default ResetWorkoutCoaching
