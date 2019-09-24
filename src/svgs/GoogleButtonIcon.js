import React from 'react'

const GoogleButtonIcon = ({ width, height, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 188 188"
    >
      <circle cx="94" cy="94" r="94" fill="#19191c" id="background" />
      <g id="google-logo">
        <g id="logo_googleg_48dp" data-name="logo googleg 48dp">
          <path
            id="Shape"
            d="M168.17 101.47A81 81 0 0 0 166.88 87h-66.67v27.38h38.1a32.56 32.56 0 0 1-14.13 21.37v17.75h22.88c13.39-12.32 21.11-30.47 21.11-52z"
            transform="translate(-6 -6)"
            fill="#4285f4"
            fillRule="evenodd"
          />
          <path
            d="M100.21 170.65c19.11 0 35.14-6.34 46.85-17.15l-22.88-17.76c-6.34 4.25-14.45 6.76-24 6.76-18.44 0-34-12.46-39.61-29.19H36.94v18.34a70.76 70.76 0 0 0 63.27 39z"
            transform="translate(-6 -6)"
            fill="#34a853"
            fillRule="evenodd"
          />
          <path
            d="M60.6 113.31a41.85 41.85 0 0 1 0-26.9V68.07H36.94a70.87 70.87 0 0 0 0 63.58l23.66-18.34z"
            transform="translate(-6 -6)"
            fill="#fbbc05"
            fillRule="evenodd"
          />
          <path
            d="M100.21 57.22a38.23 38.23 0 0 1 27.06 10.59l20.3-20.31a68 68 0 0 0-47.36-18.43 70.76 70.76 0 0 0-63.27 39L60.6 86.41c5.56-16.73 21.17-29.19 39.61-29.19z"
            transform="translate(-6 -6)"
            fill="#ea4335"
            fillRule="evenodd"
          />
          <path
            d="M29.41 29.07H171v141.58H29.41z"
            transform="translate(-6 -6)"
            fill="none"
          />
        </g>
      </g>
    </svg>
  )
}

export default GoogleButtonIcon
