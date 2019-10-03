const workoutStatsState = {
  percentComplete: {
    title: 'Percent Complete',
    programId: '7DayBodyBurnReset',
    totalWorkouts: 5,
    workoutsCompleted: 0
  },
  stats: {
    bbcresetworkout1: {
      completed: {
        complete1: {
          id: 1,
          value: 'complete1',
          isComplete: false
        },
        complete2: {
          id: 2,
          value: 'complete2',
          isComplete: false
        },
        complete3: {
          id: 3,
          value: 'complete3',
          isComplete: false
        }
      },
      trackingStats: {
        first: {
          number: null
        },
        second: {
          number: null
        },
        third: {
          number: null
        }
      },
      programId: '7DayBodyBurnReset',
      workoutId: 'bbcresetworkout1',
      name: 'Pushup Workout',
      isFavorite: false
    },
    bbcresetworkout2: {
      completed: {
        complete1: {
          id: 1,
          value: 'complete1',
          isComplete: false
        },
        complete2: {
          id: 2,
          value: 'complete2',
          isComplete: false
        },
        complete3: {
          id: 3,
          value: 'complete3',
          isComplete: false
        }
      },
      trackingStats: {
        first: {
          number: null
        },
        second: {
          number: null
        },
        third: {
          number: null
        }
      },
      programId: '7DayBodyBurnReset',
      workoutId: 'bbcresetworkout2',
      name: 'Squat Workout',
      isFavorite: false
    },
    bbcresetworkout3: {
      completed: {
        complete1: {
          id: 1,
          value: 'complete1',
          isComplete: false
        },
        complete2: {
          id: 2,
          value: 'complete2',
          isComplete: false
        },
        complete3: {
          id: 3,
          value: 'complete3',
          isComplete: false
        }
      },
      trackingStats: {
        first: {
          number: null,
          date: null
        },
        second: {
          number: null,
          date: null
        },
        third: {
          number: null,
          date: null
        }
      },
      programId: '7DayBodyBurnReset',
      workoutId: 'bbcresetworkout3',
      name: 'Lunge Workout',
      isFavorite: false
    },
    bbcresetworkout4: {
      completed: {
        complete1: {
          id: 1,
          value: 'complete1',
          isComplete: false
        },
        complete2: {
          id: 2,
          value: 'complete2',
          isComplete: false
        },
        complete3: {
          id: 3,
          value: 'complete3',
          isComplete: false
        }
      },
      trackingStats: {
        first: {
          number: null
        },
        second: {
          number: null
        },
        third: {
          number: null
        }
      },
      programId: '7DayBodyBurnReset',
      workoutId: 'bbcresetworkout4',
      name: 'Core Workout',
      isFavorite: false
    },
    bbcresetworkout5: {
      completed: {
        complete1: {
          id: 1,
          value: 'complete1',
          isComplete: false
        },
        complete2: {
          id: 2,
          value: 'complete2',
          isComplete: false
        },
        complete3: {
          id: 3,
          value: 'complete3',
          isComplete: false
        }
      },
      trackingStats: {
        first: {
          number: null
        },
        second: {
          number: null
        },
        third: {
          number: null
        }
      },
      programId: '7DayBodyBurnReset',
      workoutId: 'bbcresetworkout5',
      name: 'Movement Workout',
      isFavorite: false
    }
  }
}

const workoutStatsReducer = (state, action) => {
  switch (action.type) {
    // Called in ResetProgramDashboard
    // Called to setup the stats that show on card
    // Called to setup the stats that show on workout page
    case 'setWorkoutStatsState': {
      const stats = action.value.stats
      const percentComplete = action.value.percentComplete

      return {
        PercentComplete: percentComplete,
        stats
      }
    }
    case 'setTrackingNumber': {
      const workoutId = action.value.workoutId
      const number = Number(action.value.number)
      const date = action.value.date

      const copyOfState = { ...state }

      const workoutStats = copyOfState.stats[workoutId]
      const percentComplete = copyOfState.percentComplete

      if (workoutStats.trackingStats.first.number === null) {
        workoutStats.trackingStats.first.number = number
        workoutStats.trackingStats.first.date = date
        if (!workoutStats.completed.complete1.isComplete) {
          workoutStats.completed.complete1.isComplete = true
          percentComplete.workoutsCompleted += 1
        }
      } else if (
        workoutStats.trackingStats.first.number &&
        workoutStats.trackingStats.second.number === null
      ) {
        workoutStats.trackingStats.second.number = number
        workoutStats.trackingStats.second.date = date
        if (!workoutStats.completed.complete2.isComplete) {
          workoutStats.completed.complete2.isComplete = true
        }
      } else {
        workoutStats.trackingStats.third.number = number
        workoutStats.trackingStats.third.date = date
        if (!workoutStats.completed.complete3.isComplete) {
          workoutStats.completed.complete3.isComplete = true
        }
      }

      return {
        ...copyOfState
      }
    }
    case 'setComplete1': {
      const workoutId = action.value

      const copyOfState = { ...state }

      const workoutStats = copyOfState.stats[workoutId]
      workoutStats.completed.complete1.isComplete = true

      const percentComplete = copyOfState.percentComplete
      percentComplete.workoutsCompleted += 1

      return {
        ...copyOfState
      }
    }
    case 'setComplete2': {
      const workoutId = action.value

      const copyOfState = { ...state }

      const workoutStats = copyOfState.stats[workoutId]

      if (workoutStats.completed.complete1.isComplete) {
        workoutStats.completed.complete2.isComplete = true

        return {
          ...copyOfState
        }
      } else {
        console.log('Must complete the workout for a first time... first.')
        return state
      }
    }
    case 'setComplete3': {
      const workoutId = action.value

      const copyOfState = { ...state }

      const workoutStats = copyOfState.stats[workoutId]

      const isFirstCompleted =
        workoutStats.stats[workoutId].completed.complete1.isComplete
      const isSecondCompleted =
        copyOfState.stats[workoutId].completed.complete2.isComplete

      if (isFirstCompleted && isSecondCompleted) {
        workoutStats.completed.complete3.isComplete = true

        return {
          ...copyOfState
        }
      } else {
        console.log('Must complete the workout for a second time... first.')
        return state
      }
    }
    case 'toggleIsFavoriteWorkout': {
      const workoutId = action.value

      const copyOfState = { ...state }

      const workoutStats = copyOfState.stats[workoutId]

      workoutStats.isFavorite = !workoutStats.isFavorite

      return {
        ...copyOfState
      }
    }
    case 'cleanWorkoutStatsState': {
      return {}
    }
    default: {
      return state
    }
  }
}

export { workoutStatsState, workoutStatsReducer }
