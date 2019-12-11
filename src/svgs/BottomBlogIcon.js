import React from 'react'

const BottomBlogIcon = ({ width, height, className, handleNavigation }) => {
  return (
    <svg
      onClick={() => handleNavigation('/error')}
      id="bottom-blog-icon"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 229.85 222.96"
    >
      <path
        id="front-cap"
        fill="none"
        stroke="#d7daff"
        strokeMiterlimit="10"
        strokeWidth="16.25"
        d="M88.42 175.61l-37.65-39.83"
      />
      <path
        id="pen-clamp"
        d="M174.75 18.31c-3.13-3.72-6.63-7.25-11-9.47s-9.62-3-14.08-1c-3.53 1.53-6.18 4.54-8.46 7.63-4.74 6.43-8.39 13.56-12.52 20.39s-8.84 13.47-15.17 18.34-14.54 7.78-22.41 6.34"
        fill="none"
        stroke="#d7daff"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="10.83"
      />
      <path
        id="back-clamp"
        fill="none"
        stroke="#d7daff"
        strokeMiterlimit="10"
        strokeWidth="10.83"
        d="M211.09 54.76l-36.34-36.45"
      />
      <path
        id="pen-tip"
        d="M15.88 231.92l-1.36-1.39a5.19 5.19 0 01.12-7.35l11.76-11.36a5.23 5.23 0 017.38.11l1.35 1.39a5.19 5.19 0 01-.12 7.35L23.25 232a5.22 5.22 0 01-7.37-.08z"
        transform="translate(-13.05 -10.54)"
        fill="#d7daff"
      />
      <path
        id="pen-body"
        d="M69.77 191.89c-19.92 15.62-50.14 16.91-50.14 16.91l-4.84-5s1.8-27.88 18.68-49.26c20.07-25.4 147.21-142.19 147.21-142.19a22.8 22.8 0 0132.16.5l4.65 4.78a22.61 22.61 0 01-.54 32.05S99.34 168.7 69.77 191.89z"
        fill="none"
        stroke="#d7daff"
        strokeMiterlimit="10"
        strokeWidth="11.92"
      />
      <ellipse
        id="camp-tip"
        cx="91.15"
        cy="56.24"
        rx="9.76"
        ry="9.73"
        fill="#d7daff"
      />
    </svg>
  )
}

export default BottomBlogIcon
