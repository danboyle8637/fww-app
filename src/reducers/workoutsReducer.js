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
      coachingTinyBackground:
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fbody-burn-reset%2Fbody-burn-reset-workout1-coaching-cover-tiny.jpg?alt=media&token=18a569f8-a7d2-454e-b9ab-25c387e6ee48',
      coachingBackground:
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fbody-burn-reset%2Fbody-burn-reset-workout1-coaching-cover.jpg?alt=media&token=91a53453-9625-4413-8041-2bef2187f9bb',
      workoutBackgrounds: [
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fbody-burn-reset%2Fbody-burn-reset-workout1-cover.jpg?alt=media&token=d8895b3b-837e-4a44-8c6d-02eb4d6dd239'
      ],
      workoutTinyBackground:
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fbody-burn-reset%2Fbody-burn-reset-workout1-cover-tiny.jpg?alt=media&token=6d1c11fc-bac6-4c54-a220-348b656813f8',
      workout: {
        title: 'Body Burn Jump Start Pushups',
        description:
          "3 rounds of the circuit. Focus on your pushup form and the core elements we're working on in each pushups variation.",
        circuits: [
          {
            id: 'c1',
            directions: 'One time through. Focus on pushup form.',
            exercises: [
              '15 pushups from knees',
              '60 second pushup plank',
              '10 elevated pushups',
              '60 second plank from forearms',
              '5 pushups from ground'
            ]
          },
          {
            id: 'c2',
            directions: 'One time through. Focus on pushup form.',
            exercises: [
              '15 pushups from knees',
              '60 twistie mt. climbers',
              '10 elevated pushups',
              '60 twistie mt. climbers',
              '5 pushups from ground'
            ]
          },
          {
            id: 'c3',
            directions: 'One time through. Focus on pushup form.',
            exercises: [
              '15 pushups from knees',
              '15 thrusters',
              '10 elevated pushups',
              '15 thrusters',
              '5 pushups from ground'
            ]
          }
        ]
      }
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
      coachingTinyBackground:
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fbody-burn-reset%2Fbody-burn-reset-workout2-coaching-cover-tiny.jpg?alt=media&token=f1477ebc-a7a5-46bc-9c21-dcc0340b4c74',
      coachingBackground:
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fbody-burn-reset%2Fbody-burn-reset-workout2-coaching-cover.jpg?alt=media&token=e618874c-1840-4144-80c6-e56bfe94724d',
      workoutBackgrounds: [
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fbody-burn-reset%2Fbody-burn-reset-workout2-cover.jpg?alt=media&token=1aeca8ac-7e73-4a39-a7a6-d0e72d5c6c8a'
      ],
      workoutTinyBackground:
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fbody-burn-reset%2Fbody-burn-reset-workout2-cover-tiny.jpg?alt=media&token=675e544e-50f7-46bf-a08b-635db6882696',
      workout: {
        title: 'Body Burn Reset Squat Workout',
        description:
          'Start and end with a 60 second wall squat. In the middle complete the 8 minute as many rounds as possible circuit.',
        circuits: [
          {
            id: 'c1',
            directions: 'Hold for 60 seconds',
            exercises: ['Wall squat']
          },
          {
            id: 'c2',
            directions: 'Complete as many rounds as possible in 8 minutes.',
            exercises: [
              '8 monkey squats',
              '8 lizard pushups',
              '8 squats',
              '8 plank up downs',
              '8 prisoner squats (arms up)',
              '8 star crunches'
            ]
          },
          {
            id: 'c3',
            directions: 'Hold for 60 seconds',
            exercises: ['Wall squat']
          }
        ]
      }
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
      coachingTinyBackground:
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fbody-burn-reset%2Fbody-burn-reset-workout3-coaching-cover-tiny.jpg?alt=media&token=357fe88c-cee3-4546-8189-db8b3af0b0fc',
      coachingBackground:
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fbody-burn-reset%2Fbody-burn-reset-workout3-coaching-cover.jpg?alt=media&token=d822c8b3-aaaa-4580-a046-b1f76e19d852',
      workoutBackgrounds: [
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fbody-burn-reset%2Fbody-burn-reset-workout3-cover.jpg?alt=media&token=7761c561-1d30-4c80-aed4-2170f04426cc',
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fbody-burn-reset%2Fbody-burn-reset-workout1-cover.jpg?alt=media&token=d8895b3b-837e-4a44-8c6d-02eb4d6dd239',
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fbody-burn-reset%2Fbody-burn-reset-workout2-cover.jpg?alt=media&token=1aeca8ac-7e73-4a39-a7a6-d0e72d5c6c8a'
      ],
      workoutTinyBackground:
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fbody-burn-reset%2Fbody-burn-reset-workout3-cover-tiny.jpg?alt=media&token=e24fe763-e121-462b-85a1-3088dade26bf',
      workout: {
        title: 'Body Burn Reset Lunge Workout',
        description:
          '3 circuits, each 4 minutes long, each as many rounds as possible. Focus on form and practicing technique.',
        circuits: [
          {
            id: 'c1',
            directions: '4 minute AMRAP.',
            exercises: ['6 reverse lunges', '5 pushups', '6 narrow squats']
          },
          {
            id: 'c2',
            directions: '4 minute AMRAP.',
            exercises: [
              '6 curtsey lunges',
              '5 rainbow pushups',
              '6 prisoner squats'
            ]
          },
          {
            id: 'c3',
            directions: '4 minute AMRAP.',
            exercises: [
              '20 lunge jumps (or fast lunges)',
              '20 shoulder taps',
              '20 squat jacks'
            ]
          }
        ]
      }
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
      coachingTinyBackground:
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fbody-burn-reset%2Fbody-burn-reset-workout4-coaching-cover-tiny.jpg?alt=media&token=0285089b-5b6c-4458-ab1c-c2eb6b7c0938',
      coachingBackground:
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fbody-burn-reset%2Fbody-burn-reset-workout4-coaching-cover.jpg?alt=media&token=2b070f7b-6b35-4bec-85de-27d078338ccb',
      workoutBackgrounds: [
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fbody-burn-reset%2Fbody-burn-reset-workout4-cover.jpg?alt=media&token=1ca75ead-51ea-4fe9-908c-05e9a62b5a0c',
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fbody-burn-reset%2Fbody-burn-reset-workout4-cover.jpg?alt=media&token=1ca75ead-51ea-4fe9-908c-05e9a62b5a0c',
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fbody-burn-reset%2Fbody-burn-reset-workout4-cover.jpg?alt=media&token=1ca75ead-51ea-4fe9-908c-05e9a62b5a0c'
      ],
      workoutTinyBackground:
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fbody-burn-reset%2Fbody-burn-reset-workout4-cover-tiny.jpg?alt=media&token=866865aa-dc08-4fa4-b88d-e95554c275ad',
      workout: {
        title: 'Body Burn Reset Core Workout',
        description:
          '4 circuits, 2 are 4 minutes long, each as many rounds as possible. After each AMRAP, complete the 2 minute core circuit. Focus on crunching your abs.',
        circuits: [
          {
            id: 'c1',
            directions:
              '4 minute AMRAP start at 1 rep, each round increase reps by 1.',
            exercises: [
              '# pushups',
              '# squats',
              '# right lunge hops',
              '# left lunge hops'
            ]
          },
          {
            id: 'c2',
            directions: 'Complete each exercise for 30 seconds.',
            exercises: [
              'Hollow hold',
              'Plank hold',
              'Hollow flutter kicks',
              'Plank rockers'
            ]
          },
          {
            id: 'c3',
            directions:
              '4 minute AMRAP start where you left off from circuit 1 and decrease reps by 1 each round to see if you can return to 1 rep.',
            exercises: [
              '# left lunge hops',
              '# right lunge hops',
              '# squat ',
              '# pushups'
            ]
          },
          {
            id: 'c4',
            directions: 'Complete each exercise for 30 seconds.',
            exercises: [
              'Hollow hold',
              'Plank hold',
              'Hollow flutter kicks',
              'Plank rockers'
            ]
          }
        ]
      }
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
      coachingTinyBackground:
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fbody-burn-reset%2Fbody-burn-reset-workout5-coaching-cover-tiny.jpg?alt=media&token=9f7a6769-176b-4730-8235-0560c2d18382',
      coachingBackground:
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fbody-burn-reset%2Fbody-burn-reset-workout5-coaching-cover.jpg?alt=media&token=2c42411b-2584-4283-861d-71d922867ed5',
      workoutBackgrounds: [
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fbody-burn-reset%2Fbody-burn-reset-workout5-cover.jpg?alt=media&token=3002faae-2e50-44fd-830f-d12e2a34eb75',
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fbody-burn-reset%2Fbody-burn-reset-workout5-cover.jpg?alt=media&token=3002faae-2e50-44fd-830f-d12e2a34eb75',
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fbody-burn-reset%2Fbody-burn-reset-workout5-cover.jpg?alt=media&token=3002faae-2e50-44fd-830f-d12e2a34eb75'
      ],
      workoutTinyBackground:
        'https://firebasestorage.googleapis.com/v0/b/fit-womens-weekly.appspot.com/o/admin%2Fprograms%2Fbody-burn-reset%2Fbody-burn-reset-workout5-cover-tiny.jpg?alt=media&token=6dd83ed5-afb1-430c-a9f8-51b906f2865a',
      workout: {
        title: 'Body Burn Reset Movement Workout',
        description:
          "One last workout with three circuits. The first and last are 4 minute AMRAPs. The middle circuit is 4 exercises you'll do for 30 seconds each",
        circuits: [
          {
            id: 'c1',
            directions: '4 minute AMRAP.',
            exercises: [
              '12 bear squats',
              '12 crab tripods',
              '6 gorilla rainbows'
            ]
          },
          {
            id: 'c2',
            directions: 'Do each exercise for 30 seconds each.',
            exercises: [
              'Right bear kickbacks',
              'Left bear kickbacks',
              'Right crab toe touches',
              'Left crab toe touches'
            ]
          },
          {
            id: 'c3',
            directions: '4 minute AMRAP',
            exercises: [
              '3 bear crawl steps forward and backward',
              '3 crab walk steps forward and backward',
              'Donkey kick to 3 gorilla shuffles to Donkey (repeat)'
            ]
          }
        ]
      }
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
