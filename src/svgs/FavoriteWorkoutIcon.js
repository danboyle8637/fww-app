import React, { useEffect, useRef } from 'react'
import { TweenMax, Power2 } from 'gsap/TweenMax'
import TimelineMax from 'gsap/TimelineMax'

const FavoriteWorkoutIcon = ({ width, height, className, isFavorite }) => {
  const circleFillRef = useRef(null)
  const heartRef = useRef(null)
  const heartPulseRef = useRef(null)
  const timeline = useRef(new TimelineMax({ paused: true }))

  useEffect(() => {
    const circleFill = circleFillRef.current
    const heart = heartRef.current
    const heartPulse = heartPulseRef.current
    const tl = timeline.current

    TweenMax.set(circleFill, { transformOrigin: '50% 50%', scale: 0 })
    TweenMax.set([heart, heartPulse], { transformOrigin: '50% 50%', scale: 0 })

    tl.to(circleFill, 0.3, {
      scale: 1,
      ease: Power2.easeOut
    })
      .to(heart, 0.5, {
        scale: 1.2,
        ease: Power2.easeOut
      })
      .to(
        heartPulse,
        0.5,
        {
          scale: 2,
          autoAlpha: 0,
          ease: Power2.easeOut
        },
        '-=0.25'
      )
      .to(
        heart,
        0.3,
        {
          scale: 1,
          ease: Power2.easeOut
        },
        '-=0.1'
      )

    return () => {
      tl.kill(null, circleFill)
      tl.kill(null, heart)
      tl.kill(null, heartPulse)
    }
  }, [])

  useEffect(() => {
    const tl = timeline.current

    if (isFavorite) {
      tl.play()
    } else {
      tl.reverse()
    }
  }, [isFavorite])

  return (
    <svg
      id="favorite-checkmark"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 241 241"
    >
      <path
        d="M125.25 24.16a100.5 100.5 0 1 1-100.5 100.5 100.51 100.51 0 0 1 100.5-100.5m0-20A120.51 120.51 0 0 0 40 209.87 120.5 120.5 0 1 0 210.45 39.46a119.71 119.71 0 0 0-85.2-35.3z"
        transform="translate(-4.75 -4.16)"
        fill="#010101"
        id="check-circle-border"
      />
      <circle
        ref={circleFillRef}
        id="check-circle-fill"
        cx="120.5"
        cy="120.5"
        r="100.5"
        fill="#141414"
      />
      <path
        ref={heartPulseRef}
        id="heart-pulse"
        d="M180.27 89.33l-.93-.93a33 33 0 0 0-46.63 0l-7.46 7.46-7.46-7.46a33 33 0 0 0-46.64 0l-.93.93a33 33 0 0 0 0 46.63l55 55 55-55a33 33 0 0 0 .05-46.63z"
        transform="translate(-4.75 -4.16)"
        fill="#e14075"
      />
      <path
        ref={heartRef}
        id="heart"
        d="M180.27 89.33l-.93-.93a33 33 0 0 0-46.63 0l-7.46 7.46-7.46-7.46a33 33 0 0 0-46.64 0l-.93.93a33 33 0 0 0 0 46.63l55 55 55-55a33 33 0 0 0 .05-46.63z"
        transform="translate(-4.75 -4.16)"
        fill="#e14075"
      />
    </svg>
  )
}

export default FavoriteWorkoutIcon
