import React from 'react'

const PlayButton = ({ width, height, className, handleToggleVideo }) => {
  return (
    <svg
      onClick={handleToggleVideo}
      id="play-icon"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 370.13 421.58"
    >
      <title>Play Button Icon</title>
      <defs>
        <linearGradient
          id="verticalPlayBarGradient"
          x1="135.57"
          y1="32.56"
          x2="135.57"
          y2="453.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#5afdf2" />
          <stop offset=".45" stopColor="#86a7f8" />
          <stop offset=".83" stopColor="#a765fd" />
          <stop offset="1" stopColor="#b44cff" />
        </linearGradient>
        <linearGradient
          id="bottomPlayBarGradient"
          x1="123.15"
          y1="477.49"
          x2="378.55"
          y2="173.11"
          xlinkHref="#verticalPlayBarGradient"
        />
        <linearGradient
          id="topPlayBarGradient"
          x1="231.05"
          y1="127.39"
          x2="423.45"
          y2="288.83"
          xlinkHref="#verticalPlayBarGradient"
        />
      </defs>
      <path
        id="vertical-bar"
        d="M177.94 410.61L108 451.75a14.57 14.57 0 0 1-22-12.56v-392a14.57 14.57 0 0 1 22-12.59l70 41.14a14.58 14.58 0 0 1 7.18 12.56v309.75a14.58 14.58 0 0 1-7.24 12.56z"
        transform="translate(-86.03 -32.56)"
        fill="url(#verticalPlayBarGradient)"
      />
      <path
        id="shadow1"
        d="M185.12 293.21c-36.37 9.08-85.71-7.76-99.09-38.8V374z"
        transform="translate(-86.03 -32.56)"
        fill="#171621"
        opacity=".24"
      />
      <path
        id="bottom-play-bar"
        d="M378 191.78l70.46 40.3a14.58 14.58 0 0 1 0 25.3L107.84 452.2A14.58 14.58 0 0 1 86 439.55V358a14.57 14.57 0 0 1 7.37-12.67l270.15-153.6a14.61 14.61 0 0 1 14.48.05z"
        transform="translate(-86.03 -32.56)"
        fill="url(#bottomPlayBarGradient)"
      />
      <path
        id="shadow2"
        d="M282.88 237.63c22.76 22 38.16 71.72 7.33 110.26l121.57-69.54z"
        transform="translate(-86.03 -32.56)"
        fill="#171621"
        opacity=".24"
      />
      <path
        id="top-play-bar"
        d="M231.82 199.7l.55-68.67a14.57 14.57 0 0 1 21.9-12.48l194.65 113.37a14.58 14.58 0 0 1-.1 25.25l-58.94 33.71a14.59 14.59 0 0 1-14.51 0l-136.25-78.44a14.58 14.58 0 0 1-7.3-12.74z"
        transform="translate(-86.03 -32.56)"
        fill="url(#topPlayBarGradient)"
      />
    </svg>
  )
}

export default PlayButton
