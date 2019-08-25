import React from 'react'

const DialogDotsIcon = ({ width, height, className }) => {
  return (
    <svg
      id="dialog-dot-icon"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 158 40"
    >
      <defs>
        <linearGradient
          id="dialogDotsIconGradient"
          x1="48.68"
          y1="134.61"
          x2="79.32"
          y2="108.89"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#5afdf2" />
          <stop offset=".45" stopColor="#86a7f8" />
          <stop offset=".83" stopColor="#a765fd" />
          <stop offset="1" stopColor="#b44cff" />
        </linearGradient>
        <linearGradient
          id="dialogDotsIconGradient2"
          x1="107.68"
          y1="134.61"
          x2="138.32"
          y2="108.89"
          xlinkHref="#dialogDotsIconGradient"
        />
        <linearGradient
          id="dialogDotsIconGradient3"
          x1="166.68"
          y1="134.61"
          x2="197.32"
          y2="108.89"
          xlinkHref="#dialogDotsIconGradient"
        />
      </defs>
      <path
        d="M64 109.75a12 12 0 1 1-12 12 12 12 0 0 1 12-12m0-8a20 20 0 1 0 20 20 20 20 0 0 0-20-20z"
        transform="translate(-44 -101.75)"
        fill="url(#dialogDotsIconGradient)"
        id="left-dot"
      />
      <path
        d="M123 109.75a12 12 0 1 1-12 12 12 12 0 0 1 12-12m0-8a20 20 0 1 0 20 20 20 20 0 0 0-20-20z"
        transform="translate(-44 -101.75)"
        fill="url(#dialogDotsIconGradient2)"
        id="middle-dot"
      />
      <path
        d="M182 109.75a12 12 0 1 1-12 12 12 12 0 0 1 12-12m0-8a20 20 0 1 0 20 20 20 20 0 0 0-20-20z"
        transform="translate(-44 -101.75)"
        fill="url(#dialogDotsIconGradient3)"
        id="right-dot"
      />
    </svg>
  )
}

export default DialogDotsIcon
