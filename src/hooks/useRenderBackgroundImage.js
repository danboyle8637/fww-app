import React from 'react'
import styled from 'styled-components'

const useRenderBackgroundImage = (
  mobileBackground,
  tabletBackground,
  ipadProBackground,
  laptopBackground,
  title,
  alt
) => {
  return (
    <BackgroundImage>
      <SourceBackgroundImage
        media="(min-width: 1100px)"
        srcSet={laptopBackground}
      />
      <SourceBackgroundImage
        media="(min-width: 960px)"
        srcSet={ipadProBackground}
      />
      <SourceBackgroundImage
        media="(min-width: 600px)"
        srcSet={tabletBackground}
      />
      <BaseBackgroundImage src={mobileBackground} alt={alt} title={title} />
    </BackgroundImage>
  )
}

export default useRenderBackgroundImage

const BackgroundImage = styled.picture`
  margin: 0;
  padding: 0;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  width: 100%;
`

const SourceBackgroundImage = styled.source`
  margin: 0;
  padding: 0;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  align-self: end;
  width: 100%;
`

const BaseBackgroundImage = styled.img`
  margin: 0;
  padding: 0;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  align-self: end;
  width: 100%;
`
