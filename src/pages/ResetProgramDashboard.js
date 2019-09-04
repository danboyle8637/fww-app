import React, { useEffect } from 'react'

import { useWorkoutState } from '../context/WorkoutsContext'

const ResetProgramDashboard = () => {
  // eslint-disable-next-line
  const [workoutState, dispatch] = useWorkoutState()

  useEffect(() => {
    
    // dispatch({
    //   type: 'createWorkoutStatsState',
    //   value: workoutStats
    // })
  }, [dispatch])

  return <div>Reset Program Dashboard and Workout List</div>
}

export default ResetProgramDashboard
