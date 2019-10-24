import React, { useEffect, useRef } from 'react'
import TimelineMax from 'gsap/TimelineMax'
import { TweenMax, Linear } from 'gsap/TweenMax'
import DrawSVG from '../greensock/DrawSVGPlugin'

const FileUploadIndicator = ({ width, height, className, startAnimation }) => {
  const cameraLensRef = useRef(null)
  const uploadCheckRef = useRef(null)
  const progressPathRef = useRef(null)
  const timeline = useRef(new TimelineMax({ paused: true }))
  // eslint-disable-next-line
  const drawSVG = DrawSVG

  useEffect(() => {
    const cameraLens = cameraLensRef.current
    const uploadCheck = uploadCheckRef.current
    const progressPath = progressPathRef.current
    const tl = timeline.current

    TweenMax.set(progressPath, { drawSVG: '0%' })
    TweenMax.set(uploadCheck, { drawSVG: '100% 100%' })

    tl.to(progressPath, 1, { drawSVG: '100%', ease: Linear.easeNone })
      .to(
        cameraLens,
        1,
        { transformOrigin: '50% 50%', scale: 2, autoAlpha: 0 },
        '-=0.7'
      )
      .to(uploadCheck, 1, { drawSVG: '100% 0%' }, '-=0.4')

    if (startAnimation) {
      tl.play()
    }
  }, [startAnimation])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 258 258"
    >
      <defs>
        <linearGradient
          id="fileUploadProgressGradient"
          x1="69.01"
          y1="53.48"
          x2="230.99"
          y2="246.52"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#b3b6e1" />
          <stop offset=".08" stopColor="#afade3" />
          <stop offset=".71" stopColor="#956cf1" />
          <stop offset="1" stopColor="#8b53f6" />
        </linearGradient>
      </defs>
      <g id="camera-icon">
        <path
          id="camera-body"
          d="M215.92 102.72H193.5V91.14a12.42 12.42 0 00-12.42-12.42h-62.16a12.42 12.42 0 00-12.42 12.42v11.58H84.08A16.09 16.09 0 0068 118.81v73.83a16.08 16.08 0 0016.08 16.08h131.84A16.08 16.08 0 00232 192.64v-73.83a16.09 16.09 0 00-16.08-16.09z"
          transform="translate(-21 -21)"
          fill="#101010"
        />
        <path
          ref={uploadCheckRef}
          id="file-upload-valid-check"
          fill="none"
          stroke="#8b53f6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="13.65"
          d="M154.53 120.12l-38.62 38.63-15.41-15.42"
        />
        <path
          ref={cameraLensRef}
          id="camera-flash"
          d="M129.25 106.73a28.46 28.46 0 11-.59 0"
          fill="none"
          stroke="#2b2c3a"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="18"
        />
        <circle id="camera-lens" cx="192.9" cy="99.73" r="9" fill="#2b2c3a" />
      </g>
      <g id="progress-path" fill="none" strokeMiterlimit="10">
        <circle
          id="progress-background"
          cx="129"
          cy="129"
          r="123"
          stroke="#101010"
          strokeWidth="12"
        />
        <path
          ref={progressPathRef}
          id="upload-progress-path"
          data-name="progress-path"
          d="M150.12 27a123 123 0 11-.29 0"
          transform="translate(-21 -21)"
          strokeLinecap="round"
          strokeWidth="6"
          stroke="url(#fileUploadProgressGradient)"
        />
      </g>
    </svg>
  )
}

export default FileUploadIndicator
