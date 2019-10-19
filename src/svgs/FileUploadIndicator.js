import React from 'react'

const FileUploadIndicator = ({ width, height, className }) => {
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
          id="uploadImageProgressGradient"
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
        <rect
          id="camera-body"
          x="47"
          y="81.72"
          width="164"
          height="106"
          rx="16.08"
          fill="#101010"
        />
        <path
          id="camera-body2"
          d="M97.92 57.72h62.17a12.42 12.42 0 0112.41 12.42v18.58h-87V70.14a12.42 12.42 0 0112.42-12.42z"
          fill="#101010"
        />
        <circle
          id="camera-flash"
          cx="129"
          cy="135.22"
          r="28.5"
          fill="#101010"
          stroke="#2b2c3a"
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
          id="progress-loading-path"
          data-name="progress-path"
          d="M150.12 27a123 123 0 11-.29 0"
          transform="translate(-21 -21)"
          strokeLinecap="round"
          strokeWidth="6"
          stroke="url(#uploadImageProgressGradient)"
        />
      </g>
    </svg>
  )
}

export default FileUploadIndicator
