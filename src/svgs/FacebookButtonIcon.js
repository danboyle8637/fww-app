import React from 'react'

const FacebookButtonIcon = ({ width, height, className }) => {
  return (
    <svg
      id="facebook-button-icon"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 188 188"
    >
      <circle id="dark-background" cx="94" cy="94" r="94" fill="#19191c" />
      <circle id="blue-background" cx="94" cy="94" r="74.78" fill="#38539b" />
      <path
        id="facebook-icon"
        d="M106.59 161.52V97.76h14.94l3.18-19.13h-17.85v-9.56c0-1.71 0-2.55 1.28-3.83a5 5 0 0 1 3.18-1.24h13.39V48.66s-22.95-4.46-29.33-1.27c-7 3.48-10.2 9.56-10.2 15.94v15.3h-8.93v19.13h8.86v63.76z"
        transform="translate(-6.48 -5.88)"
        fill="#f8f8f8"
      />
    </svg>
  )
}

export default FacebookButtonIcon
