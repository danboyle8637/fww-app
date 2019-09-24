import React from 'react'

const BlogNavIcon = ({ width, height, className }) => {
  return (
    <svg
      id="blog-nav-icon"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 233.5 149.76"
    >
      <path
        id="word-bubble"
        d="M202.67 170.13a55 55 0 0 0 38.83-52.59v-10.29a55 55 0 0 0-55-55H63a55 55 0 0 0-55 55v10.29a55 55 0 0 0 55 55h93.3L192 202z"
        transform="translate(-8 -52.24)"
        fill="#f8f8f8"
      />
      <circle id="dot1" cx="51.34" cy="61.64" r="22" fill="#30b6c2" />
      <circle id="dot2" cx="116.53" cy="61.64" r="22" fill="#30b6c2" />
      <circle id="dot3" cx="181.73" cy="61.64" r="22" fill="#30b6c2" />
    </svg>
  )
}

export default BlogNavIcon
