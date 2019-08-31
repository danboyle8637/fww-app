import React from 'react'

const ContactIcon = ({ width, height, className }) => {
  return (
    <svg
      id="contact-icon"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 223.21 140.18"
    >
      <rect width="223.21" height="140.18" rx="9.47" fill="#f8f8f8" />
      <path
        d="M214 16.47l-99 80.11a5.46 5.46 0 0 1-6.85 0l-99-80.11M9.22 123.71l66.24-53.62M147.75 70.09l66.23 53.62"
        fill="none"
        stroke="#30b6c2"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="14"
      />
    </svg>
  )
}

export default ContactIcon
