import React from 'react'

const DialogCloseIcon = ({
  width,
  height,
  className,
  handleCloseDialogBox,
  lightMode
}) => {
  return (
    <svg
      onClick={handleCloseDialogBox}
      id="dialog-close-icon"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 46 46"
    >
      <circle
        cx="23"
        cy="23"
        r="23"
        fill="#101010"
        id="background"
        opacity=".8"
      />
      <path
        d="M25 5A20 20 0 1 1 5 25 20 20 0 0 1 25 5m0-3a23 23 0 1 0 23 23A23 23 0 0 0 25 2z"
        transform="translate(-2 -2)"
        fill={lightMode ? '#f8f8f8' : '#b44cff'}
        id="circle-border"
      />
      <path
        fill="none"
        stroke={lightMode ? '#f8f8f8' : '#b44cff'}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M32.75 13.25l-19.5 19.5"
        id="right-cross"
      />
      <path
        fill="none"
        stroke={lightMode ? '#f8f8f8' : '#b44cff'}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="4"
        d="M13.25 13.25l19.5 19.5"
        id="left-cross"
      />
    </svg>
  )
}

export default DialogCloseIcon
