import React from 'react'

const BottomContactIcon = ({ width, height, className, handleNavigation }) => {
  return (
    <svg
      onClick={() => handleNavigation('/contact')}
      id="bottom-contact-icon"
      data-name="bottom-contact-icon"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 223.21 140.18"
    >
      <rect width="223.21" height="140.18" rx="9.47" fill="#d7daff" />
      <path
        d="M214 10.18l-99 86.4a5.46 5.46 0 01-6.85 0L9.87 10.18M9.87 130.41l65.59-60.32M147.75 70.09l66.23 60.32"
        fill="none"
        stroke="#7e86e6"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="14"
      />
    </svg>
  )
}

export default BottomContactIcon
