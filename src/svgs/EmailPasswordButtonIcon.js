import React from 'react'

const EmailPasswordButtonIcon = ({ width, height, className }) => {
  return (
    <svg
      id="email-username-icon"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 188 188"
    >
      <circle id="dark-background" cx="94" cy="94" r="94" fill="#19191c" />
      <circle id="blue-background" cx="94" cy="94" r="74.78" fill="#5afdf2" />
      <g id="envelop-icon">
        <g id="envelop">
          <rect
            x="38.83"
            y="57.96"
            width="110.35"
            height="66.42"
            rx="6"
            fill="#19191c"
          />
          <path
            d="M142.51 65.76l-46.88 38a2.6 2.6 0 01-3.25 0l-46.88-38M45.49 116.57l31.38-25.4M111.13 91.17l31.38 25.4"
            fill="none"
            stroke="#5afdf2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="6.63"
          />
        </g>
        <path
          id="key"
          d="M104.79 108.77a13.64 13.64 0 00-13 9.63H73.52l-6.42 6.73 5.45 5.78 3.21-3.21 3.53 3.53 3.53-3.53 3.53 3.53 5.61-4.21h0a13.63 13.63 0 1012.83-18.24z"
          fill="#19191c"
          stroke="#5afdf2"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <circle id="key-dot" cx="109.65" cy="122.41" r="3.22" fill="#5afdf2" />
      </g>
    </svg>
  )
}

export default EmailPasswordButtonIcon
