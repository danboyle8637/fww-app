import React, { useRef, useEffect } from 'react'
import { Power2 } from 'gsap/TweenMax'
import TimelineMax from 'gsap/TimelineMax'

import MorphSVG from '../greensock/MorphSVGPlugin'

const MainMenuIcon = ({ width, height, className, menuOpen }) => {
  const topBarRef = useRef(null)
  const middleBarRef = useRef(null)
  const bottomBarRef = useRef(null)
  const rightCrossRef = useRef(null)
  const leftCrossRef = useRef(null)
  const timeline = useRef(new TimelineMax({ paused: true }))
  // eslint-disable-next-line
  const morph = useRef(MorphSVG)

  useEffect(() => {
    const topBar = topBarRef.current
    const middleBar = middleBarRef.current
    const bottomBar = bottomBarRef.current
    const rightCross = rightCrossRef.current
    const leftCross = leftCrossRef.current
    const tl = timeline.current

    tl.to(middleBar, 0.3, {
      x: -120,
      autoAlpha: 0,
      ease: Power2.easeIn
    })
      .to(
        topBar,
        0.3,
        {
          morphSVG: rightCross,
          ease: Power2.easeOut,
          stroke: '#B44CFF'
        },
        '-=0.2'
      )
      .to(
        bottomBar,
        0.3,
        {
          morphSVG: leftCross,
          ease: Power2.easeOut,
          stroke: '#B44CFF'
        },
        '-=0.2'
      )

    return () => {
      tl.kill()
    }
  }, [])

  useEffect(() => {
    const tl = timeline.current

    if (menuOpen) {
      tl.play()
    } else {
      tl.reverse()
    }
  }, [menuOpen])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 282.5 209.36"
    >
      <title>Main Menu Icon</title>
      <g
        id="close-menu-icon"
        fill="#fff"
        stroke="#b44cff"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="34"
      >
        <path
          ref={rightCrossRef}
          id="right-cross"
          d="M53.82 192.36l75.66-75.66 99.7-99.7"
        />
        <path
          ref={leftCrossRef}
          id="left-cross"
          d="M229.18 192.36l-75.66-75.66L53.82 17"
        />
      </g>
      <g
        id="menu-icon"
        fill="#fff"
        stroke="#d7daff"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="34"
      >
        <path ref={topBarRef} id="top-menu-bar" d="M17 17.18h248" />
        <path ref={middleBarRef} id="middle-menu-bar" d="M104.5 104.74h161" />
        <path ref={bottomBarRef} id="bottom-menu-bar" d="M55.5 192.3h210" />
      </g>
    </svg>
  )
}

export default MainMenuIcon
