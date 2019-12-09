import React from 'react'

const AccountProfileIcon = ({ width, height, className }) => {
  return (
    <svg
      id="profile-icon"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 137.29 154.74"
    >
      <path
        id="head"
        d="M118.2 68.84c0 24.58-16.12 44.5-36 44.5s-36-19.92-36-44.5 16.12-55.5 36-55.5 36 30.92 36 55.5z"
        fill="#d7daff"
        stroke="#101010"
        strokeMiterlimit="10"
        strokeWidth="3"
      />
      <path
        id="hair"
        d="M129.3 89.09c-.18-4.89.78-9.73 1.44-14.57 1.31-9.78 1.36-19.84-1.11-29.39s-7.62-18.59-15.38-24.68a35 35 0 00-14.23-6.67 53 53 0 00-13.3-1.1c-.57 0-1.11.06-1.66.09a60.67 60.67 0 00-9.66-7.2c-4.54-2.45-9.77-3.42-14.9-3.88a44.52 44.52 0 00-17.17 1.75A46.06 46.06 0 0012.7 36.27c-3.28 14 .25 28.6 4 42.48s7.75 28.26 5.39 42.45c-.72 4.32-2.11 8.68-5.05 11.93s-7.67 5.11-11.8 3.71c8 8.54 15.06 11.13 24.86 14.27 9.14 2.93 19.48 3.2 28.06-1.1S73.03 136.28 72 126.73a38.93 38.93 0 00-6.8-18.35c-9.72-13.88-12.42-23.26-15-40v-.42a15.2 15.2 0 003.43-.24c13.19-2.19 26.53-10 31.05-25 3.33 8.24 8.36 18.67 16.24 22.15 3.91 1.73 8.32 2.58 11.58 5.34 3.66 3.1 5.15 8 6.08 12.72s1.5 9.62 3.94 13.74 7.44 7.24 12 5.75c-3.57-3.39-5.04-8.45-5.22-13.33z"
        fill="#afb5ff"
        stroke="#101010"
        strokeMiterlimit="10"
        strokeWidth="5"
      />
      <path
        id="hair-line"
        d="M48.63 58.25c.44-17.17 11.12-36.11 26.09-41.94"
        fill="none"
        stroke="#8891ff"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="5"
      />
    </svg>
  )
}

export default AccountProfileIcon
