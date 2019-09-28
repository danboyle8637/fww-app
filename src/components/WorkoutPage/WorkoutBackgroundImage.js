import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { TweenMax } from 'gsap/TweenMax'
import TimelineMax from 'gsap/TimelineMax'

const WorkoutBackgroundImage = ({
  workoutBackgrounds,
  name,
  activeVideo,
  workoutBackgroundAction
}) => {
  const imageArrayRef = useRef([])
  const nextTlRef = useRef(new TimelineMax({ paused: true }))
  const prevTlRef = useRef(new TimelineMax({ paused: true }))

  useEffect(() => {
    const workoutBackgroundsToSet = []

    if (imageArrayRef.current.length > 0) {
      for (let i = 0; i < imageArrayRef.current.length; i++) {
        if (i > 0) {
          workoutBackgroundsToSet.push(imageArrayRef.current[i])
        }
      }
    }

    TweenMax.set(workoutBackgroundsToSet, { x: '100%' })
  }, [workoutBackgrounds])

  useEffect(() => {
    const nextTl = nextTlRef.current
    const prevTl = prevTlRef.current
    const max = imageArrayRef.current.length

    if (activeVideo < max && workoutBackgroundAction === 'next') {
      console.log('Show next workout background')
      nextTl
        .to(imageArrayRef.current[activeVideo - 1], 0.5, {
          x: '-100%'
        })
        .to(
          imageArrayRef.current[activeVideo],
          0.5,
          {
            x: '0%'
          },
          '-=0.5'
        )
        .play()
    }

    if (activeVideo >= 0 && workoutBackgroundAction === 'prev') {
      console.log('Show previous workout background')
      prevTl
        .to(imageArrayRef.current[activeVideo + 1], 0.5, {
          x: '100%'
        })
        .to(
          imageArrayRef.current[activeVideo],
          0.5,
          {
            x: '0%'
          },
          '-=0.5'
        )
        .play()
    }
  }, [activeVideo, workoutBackgroundAction])

  const backgrounds = workoutBackgrounds.map((image, index) => {
    return (
      <BackgroundImage
        ref={ref => (imageArrayRef.current[index] = ref)}
        key={index}
        src={image}
        title={`${name} workout background`}
        alt={`Let's do the ${name} together and get the ultimate burn, press the play button.`}
      />
    )
  })

  return <BackgroundContainer>{backgrounds}</BackgroundContainer>
}

export default WorkoutBackgroundImage

const BackgroundContainer = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  border-radius: 10px;
  width: 100%;
`

const BackgroundImage = styled.img`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 100%;
`
