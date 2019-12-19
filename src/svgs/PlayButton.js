import React from 'react'

const PlayButton = ({
  width,
  height,
  className,
  gradientId,
  handleToggleVideo
}) => {
  return (
    <svg
      onClick={handleToggleVideo}
      id="play-icon"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 370.13 421.58"
    >
      <defs>
        <linearGradient
          id={`playButtonGradient${gradientId}`}
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
          id={`playButtonGradient${gradientId}2`}
          x1="123.15"
          y1="477.49"
          x2="378.55"
          y2="173.11"
          xlinkHref={`#playButtonGradient${gradientId}`}
        />
        <linearGradient
          id={`playButtonGradient${gradientId}3`}
          x1="231.05"
          y1="127.39"
          x2="423.45"
          y2="288.83"
          xlinkHref={`#playButtonGradient${gradientId}`}
        />
      </defs>
      <path
        id="vertical-bar"
        d="M177.94 410.61L108 451.75a14.57 14.57 0 01-22-12.56v-392a14.57 14.57 0 0122-12.59l70 41.14a14.58 14.58 0 017.18 12.56v309.75a14.58 14.58 0 01-7.24 12.56z"
        transform="translate(-86.03 -32.56)"
        fill={`url(#playButtonGradient${gradientId})`}
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
        d="M378 191.78l70.46 40.3a14.58 14.58 0 010 25.3L107.84 452.2A14.58 14.58 0 0186 439.55V358a14.57 14.57 0 017.37-12.67l270.15-153.6a14.61 14.61 0 0114.48.05z"
        transform="translate(-86.03 -32.56)"
        fill={`url(#playButtonGradient${gradientId}2)`}
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
        d="M231.82 199.7l.55-68.67a14.57 14.57 0 0121.9-12.48l194.65 113.37a14.58 14.58 0 01-.1 25.25l-58.94 33.71a14.59 14.59 0 01-14.51 0l-136.25-78.44a14.58 14.58 0 01-7.3-12.74z"
        transform="translate(-86.03 -32.56)"
        fill={`url(#playButtonGradient${gradientId}3)`}
      />
    </svg>
  )
}

export default PlayButton
