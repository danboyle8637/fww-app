import React, { useContext } from 'react'
import styled from 'styled-components'

import ScreenWidthContext from '../context/ScreenWidthContext'

const useRenderBackgroundImage = (
  mobileBackground,
  tabletBackground,
  ipadProBackground,
  laptopBackground,
  title,
  alt
) => {
  const device = useContext(ScreenWidthContext)

  switch (device) {
    case 'mobile': {
      return <BackgroundImage src={mobileBackground} title={title} alt={alt} />
    }
    case 'tablet': {
      return <BackgroundImage src={tabletBackground} title={title} alt={alt} />
    }
    case 'ipadPro': {
      return <BackgroundImage src={ipadProBackground} title={title} alt={alt} />
    }
    case 'laptop': {
      return <BackgroundImage src={laptopBackground} title={title} alt={alt} />
    }
    case 'ultraWide': {
      return <BackgroundImage src={laptopBackground} title={title} alt={alt} />
    }
    default: {
      return <BackgroundImage src={laptopBackground} title={title} alt={alt} />
    }
  }
}

export default useRenderBackgroundImage

const BackgroundImage = styled.img`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  align-self: end;
  width: 100%;
`
