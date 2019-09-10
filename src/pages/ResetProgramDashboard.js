import React, { useEffect } from 'react'

import ResetProgramDashboardHeader from '../components/PageHeaders/ResetProgramDashboardHeader'
import { useWorkoutState } from '../context/WorkoutsContext'

const ResetProgramDashboard = ({ match }) => {
  // eslint-disable-next-line
  const [workoutState, dispatch] = useWorkoutState()
  console.log(match.params.name)

  useEffect(() => {
    // dispatch({
    //   type: 'setWorkoutStatsState',
    //   value: workoutStats
    // })
  }, [dispatch])

  return <ResetProgramDashboardHeader programId={match.params.name} />
}

export default ResetProgramDashboard
