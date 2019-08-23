import React, { useState, useEffect } from 'react'

const omit = (obj, omitKey) =>
  Object.keys(obj).reduce((result, key) => {
    if (key !== omitKey) {
      result[key] = obj[key]
    }
    return result
  }, {})

const ProgressiveImage = props => {
  const [highResImageLoaded, setHighResImageLoaded] = useState(false)

  let filteredProps = omit(props, 'overlaySrc')

  return (
    <span>
      <img {...filteredProps} onLoad={() => setHighResImageLoaded(true)} />
      <img />
    </span>
  )
}

export default ProgressiveImage
