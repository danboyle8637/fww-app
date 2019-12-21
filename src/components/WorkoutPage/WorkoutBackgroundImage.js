import React, { Fragment, useEffect, useRef, forwardRef } from 'react'
import styled from 'styled-components'
import { TweenMax } from 'gsap/TweenMax'
import TimelineMax from 'gsap/TimelineMax'

const WorkoutBackgroundImage = forwardRef(
  (
    {
      workoutBackgrounds,
      title,
      activeVideo,
      workoutBackgroundAction,
      workoutTinyBackground,
      blurUp
    },
    ref
  ) => {
    const imageArrayRef = useRef([])
    const nextTlRef = useRef(new TimelineMax({ paused: true }))
    const prevTlRef = useRef(new TimelineMax({ paused: true }))

    useEffect(() => {
      if (blurUp) {
        imageArrayRef.current[0].src = imageArrayRef.current[0].dataset.src
        imageArrayRef.current[0].style.filter = 'blur(0px)'
      }
    }, [blurUp, workoutTinyBackground])

    useEffect(() => {
      // This Effect just sets the additional backgrounds off to the left
      const workoutBackgroundsToSet = []

      // Building a new array because you want to skip the first image
      if (imageArrayRef.current.length > 0) {
        for (let i = 0; i < imageArrayRef.current.length; i++) {
          // Make sure you skip the first image
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
        <Fragment key={index}>
          {index === 0 ? (
            <BackgroundImage
              ref={ref => (imageArrayRef.current[index] = ref)}
              src={workoutTinyBackground}
              data-src={image}
              title={`${title} workout background`}
              alt={`Let's do the ${title} together and get the ultimate burn, press the play button.`}
              firstImage={index}
            />
          ) : (
            <BackgroundImage
              ref={ref => (imageArrayRef.current[index] = ref)}
              src={image}
              title={`${title} workout background`}
              alt={`Let's do the ${title} together and get the ultimate burn, press the play button.`}
            />
          )}
        </Fragment>
      )
    })

    return <BackgroundContainer ref={ref}>{backgrounds}</BackgroundContainer>
  }
)

export default WorkoutBackgroundImage

const BackgroundContainer = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  border-radius: 10px;
  width: 100%;
  z-index: 3;
`

const BackgroundImage = styled.img`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 100%;
  filter: ${props => (props.firstImage === 0 ? 'blur(6px)' : ' blur(0px)')};
  transition: filter 1000ms ease-in-out;
`
