const workoutsState = {
  workouts: [
    {
      workoutId: 'bbcresetworkout1',
      workoutFocus: 'arms',
      trackingGoal:
        'How many rounds of the last circuit were you able to complete?',
      order: 0,
      name: 'Pushup Workout',
      description:
        'Learn correct pushup form and practice it using different intensity levels. But I’ll also make sure we get the heart rate up to test our fitness.',
      coachingVideo: 179195049,
      workoutVideos: [179195048],
      coachingBackground:
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fbody-burn-reset%2Fbody-burn-reset-workout1-coaching-cover.jpg?alt=media&token=91a53453-9625-4413-8041-2bef2187f9bb',
      workoutBackgrounds: [
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fbody-burn-reset%2Fbody-burn-reset-workout1-cover.jpg?alt=media&token=d8895b3b-837e-4a44-8c6d-02eb4d6dd239'
      ]
    },
    {
      workoutId: 'bbcresetworkout2',
      workoutFocus: 'legs',
      trackingGoal: 'How many rounds were you able to complete in 8 minutes?',
      order: 1,
      name: 'Squat Workout',
      description:
        'Tweak your squat form for stronger, more powerful squats. Plus we’ll add in new pushup variations in this AMRAP workout with a great finisher.',
      coachingVideo: 179784593,
      workoutVideos: [179784594],
      coachingBackground:
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fbody-burn-reset%2Fbody-burn-reset-workout2-coaching-cover.jpg?alt=media&token=e618874c-1840-4144-80c6-e56bfe94724d',
      workoutBackgrounds: [
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fbody-burn-reset%2Fbody-burn-reset-workout2-cover.jpg?alt=media&token=1aeca8ac-7e73-4a39-a7a6-d0e72d5c6c8a'
      ]
    },
    {
      workoutId: 'bbcresetworkout3',
      workoutFocus: 'legs',
      trackingGoal:
        'How many rounds of the final circuit did you get in the time limit?',
      order: 2,
      name: 'Lunge Workout',
      description:
        'Three mini AMRAP circuits and a variety of lunges and new pushup and squat variations. Are you ready to burn your legs out?',
      coachingVideo: 179797251,
      workoutVideos: [179797252, 179832395, 179832396],
      coachingBackground:
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fbody-burn-reset%2Fbody-burn-reset-workout3-coaching-cover.jpg?alt=media&token=d822c8b3-aaaa-4580-a046-b1f76e19d852',
      workoutBackgrounds: [
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fbody-burn-reset%2Fbody-burn-reset-workout3-cover.jpg?alt=media&token=7761c561-1d30-4c80-aed4-2170f04426cc',
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fbody-burn-reset%2Fbody-burn-reset-workout1-cover.jpg?alt=media&token=d8895b3b-837e-4a44-8c6d-02eb4d6dd239',
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fbody-burn-reset%2Fbody-burn-reset-workout2-cover.jpg?alt=media&token=1aeca8ac-7e73-4a39-a7a6-d0e72d5c6c8a'
      ]
    },
    {
      workoutId: 'bbcresetworkout4',
      workoutFocus: 'core',
      trackingGoal:
        'Were you able to get through the core circuit without having to stop or rest?',
      order: 3,
      name: 'Core Workout',
      description:
        'Two four minute AMRAP circuits with a tough core circuit to break things up. Let’s work hard on learning to hold our abs tight!',
      coachingVideo: 179898069,
      workoutVideos: [179898070, 179898071, 179912086],
      coachingBackground:
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fbody-burn-reset%2Fbody-burn-reset-workout4-coaching-cover.jpg?alt=media&token=2b070f7b-6b35-4bec-85de-27d078338ccb',
      workoutBackgrounds: [
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fbody-burn-reset%2Fbody-burn-reset-workout4-cover.jpg?alt=media&token=1ca75ead-51ea-4fe9-908c-05e9a62b5a0c',
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fbody-burn-reset%2Fbody-burn-reset-workout4-cover.jpg?alt=media&token=1ca75ead-51ea-4fe9-908c-05e9a62b5a0c',
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fbody-burn-reset%2Fbody-burn-reset-workout4-cover.jpg?alt=media&token=1ca75ead-51ea-4fe9-908c-05e9a62b5a0c'
      ]
    },
    {
      workoutId: 'bbcresetworkout5',
      workoutFocus: 'total body',
      trackingGoal: 'How many rounds did you complete of the first circuit?',
      order: 4,
      name: 'Movement Workout',
      description:
        'A workout to introduce you to new exercises, new movements, and get your body into something complete different. You ready for this?',
      coachingVideo: 179928803,
      workoutVideos: [179928805, 225613129, 225619221],
      coachingBackground:
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fbody-burn-reset%2Fbody-burn-reset-workout5-coaching-cover.jpg?alt=media&token=2c42411b-2584-4283-861d-71d922867ed5',
      workoutBackgrounds: [
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fbody-burn-reset%2Fbody-burn-reset-workout5-cover.jpg?alt=media&token=3002faae-2e50-44fd-830f-d12e2a34eb75',
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fbody-burn-reset%2Fbody-burn-reset-workout5-cover.jpg?alt=media&token=3002faae-2e50-44fd-830f-d12e2a34eb75',
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fbody-burn-reset%2Fbody-burn-reset-workout5-cover.jpg?alt=media&token=3002faae-2e50-44fd-830f-d12e2a34eb75'
      ]
    }
  ]
}

const workoutsReducer = (state, action) => {
  switch (action.type) {
    case 'setWorkoutsState': {
      const workoutsArray = action.value

      // This reducer generates workout state
      // It get's called when the database is hit to generate the workout cards.
      // It saves all the workout data so you don't have to hit the database again
      // on each workout page.

      // It must get cleaned up when user goes back to main Dashboard
      // In real app it will clean up when use goes back to Program Dashbaord
      const newWorkoutsState = workoutsArray.reduce(
        (accumulator, currentValue) => {
          // accumulator[currentValue.workoutId] = { ...currentValue }
          accumulator.push({ ...currentValue })

          return accumulator
        },
        []
      )
      return {
        ...state,
        workouts: newWorkoutsState
      }
    }
    case 'cleanWorkoutsState': {
      return {}
    }
    default: {
      return state
    }
  }
}

export { workoutsState, workoutsReducer }
