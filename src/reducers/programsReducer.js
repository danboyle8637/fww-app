const programsState = {
  programs: [
    {
      coverImage:
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fignite-reset%2Fignite-reset-program-cover.jpg?alt=media&token=e3b14e30-5a33-4ff3-9d77-b4a615b8e5d9',
      tinyCoverImage:
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fignite-reset%2Fignite-reset-program-cover-tiny.jpg?alt=media&token=1b405b00-d14e-4894-9f3a-16b8d0ddb814',
      description:
        'Seven days of re-learning form… ramping up intensity… and getting the right start to your fat burning, strength building journey.',
      fitnessLevel: 'beginner',
      name: '7 Day Ignite Reset',
      order: 0,
      programId: '7DayIgniteReset',
      totalWorkouts: 5,
      warmUpTinyBackgroundImage: '',
      warmUpBackgroundImage: '',
      warmUpVideo: 12345678,
      coolDownTinyBackgroundImage: '',
      coolDownBackgroundImage: '',
      coolDownVideo: 12345678
    },
    {
      coverImage:
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fbody-burn-reset%2Fbbc-reset-program-cover.jpg?alt=media&token=8dc6fd86-8a67-4185-9c02-dcc4fa835ba4',
      tinyCoverImage:
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fbody-burn-reset%2Fbbc-reset-program-cover-tiny.jpg?alt=media&token=56c06c0e-0c3e-4035-a170-e354562f248e',
      description:
        'Seven days of re-learning form… pushing your comfort zone… and discovering a smarter, more intense way to workout.',
      fitnessLevel: 'intermediate',
      name: '7 Day Body Burn Reset',
      order: 1,
      programId: '7DayBodyBurnReset',
      totalWorkouts: 5
    },
    {
      coverImage:
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fstrong-reset%2Fstrong-reset-program-cover.jpg?alt=media&token=1f12d363-5ec7-48da-a1fc-a775185e2a40',
      tinyCoverImage:
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fstrong-reset%2Fstrong-reset-program-cover-tiny.jpg?alt=media&token=27b19cd2-5b90-4901-bf47-aa41384add24',
      description:
        'Seven days of learning to add kettlebells to your workouts through tough squat variations… swing technique… inversions… and hardcore intensity.',
      fitnessLevel: 'advanced',
      name: '7 Day Strong Reset',
      order: 2,
      programId: '7DayStrongReset',
      totalWorkouts: 5
    }
  ],
  percentComplete: [{ programId: '7DayBodyBurnReset', percentage: 0 }]
}

const programsReducer = (state, action) => {
  switch (action.type) {
    case 'setProgramsState': {
      const programsArray = action.value

      const newProgramsState = programsArray.reduce(
        (accumulator, currentValue) => {
          accumulator.push({ ...currentValue })

          return accumulator
        },
        []
      )

      return {
        ...state,
        programs: newProgramsState
      }
    }
    case 'setPercentComplete': {
      return {
        ...state,
        percentComplete: action.value
      }
    }
    default: {
      return state
    }
  }
}

export { programsState, programsReducer }
