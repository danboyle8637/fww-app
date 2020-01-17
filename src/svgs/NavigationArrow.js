import React, { useState, useEffect, useRef } from 'react'
import { TweenMax, Power2 } from 'gsap/TweenMax'

import { useFetchingContext } from '../context/FetchingContext'

const NavigationArrow = ({
  width,
  height,
  className,
  gradientId,
  isOpen,
  label,
  handleCloseMoreMenu
}) => {
  const navArrowRef = useRef(null)
  const [fetching, setFetching] = useState(false)

  // eslint-disable-next-line
  const [fetchingState, dispatchFetchingAction] = useFetchingContext()

  useEffect(() => {
    const navArrow = navArrowRef.current

    if (isOpen && label === 'moreMenu') {
      TweenMax.fromTo(
        navArrow,
        1,
        {
          y: -5,
          ease: Power2.easeInOut
        },
        {
          y: 5,
          ease: Power2.easeInOut,
          yoyo: true,
          repeat: -1
        }
      )
    }

    return () => {
      TweenMax.killTweensOf(navArrow)
    }
  }, [isOpen, label])

  useEffect(() => {
    if (fetchingState.isFetching) {
      setFetching(true)
    } else {
      setFetching(false)
    }
  }, [fetchingState.isFetching])

  return (
    <svg
      onClick={label === 'moreMenu' ? handleCloseMoreMenu : null}
      ref={navArrowRef}
      id="navigation-arrow"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 132.74 221.35"
    >
      <title>Navigation Arrow Icon</title>
      <defs>
        <linearGradient
          id={`navigationGradient${gradientId}`}
          x1="134.37"
          y1="182.74"
          x2="134.37"
          y2="50"
          gradientTransform="rotate(90 125.37 116.37)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={fetching ? '#E14075' : '#8b53f6'} />
          <stop offset=".72" stopColor={fetching ? '#ff7fa9' : '#5afdf2'} />
        </linearGradient>
      </defs>
      <path
        id="arrow"
        d="M96.73 229.57L185.27 141a22.17 22.17 0 0 0 0-31.32L96.72 21.16a22.1 22.1 0 0 0-31.25 31.25l73 73-72.99 72.91a22.1 22.1 0 0 0 0 31.25 22.1 22.1 0 0 0 31.25 0z"
        transform="translate(-59 -14.69)"
        fill={`url(#navigationGradient${gradientId})`}
      />
    </svg>
  )
}

export default NavigationArrow
