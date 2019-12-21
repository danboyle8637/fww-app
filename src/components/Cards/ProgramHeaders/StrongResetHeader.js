import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

import {
  ProgramHeaderGrid,
  ProgramBackgroundWrapper
} from '../../../styles/Containers'
import StrongResetProgramCoverTiny from '../../../images/strong-reset-program-cover-tiny.jpg'
import StrongResetProgramCover from '../../../images/strong-reset-program-cover.jpg'
import StrongResetLogo from '../../../svgs/StrongResetLogo'
import useIntersectionObserver from '../../../hooks/useIntersectionObserver'

const StrongResetHeader = ({ coverImage, tinyCoverImage, signUpCard }) => {
  const imageRef = useRef(null)

  const [setNode, runAction] = useIntersectionObserver({
    rootMargin: '0px 0px 10px 0px',
    shouldUnobserve: true
  })

  useEffect(() => {
    const image = imageRef.current

    if (runAction) {
      image.src = image.dataset.src
      image.style.filter = 'blur(0px)'
    }
  }, [runAction])

  return (
    <ProgramHeaderGrid ref={setNode}>
      <ProgramBackgroundWrapper>
        <ProgramBackgroundImage
          ref={imageRef}
          src={signUpCard ? StrongResetProgramCoverTiny : tinyCoverImage}
          data-src={signUpCard ? StrongResetProgramCover : coverImage}
          alt="7 Day Strong Reset Program Cover"
          title="7 Day Strong Reset Program"
        />
      </ProgramBackgroundWrapper>
      <Logo />
    </ProgramHeaderGrid>
  )
}

export default StrongResetHeader

const ProgramBackgroundImage = styled.img`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  border-radius: 10px 10px 0 0;
  width: 100%;
  filter: blur(6px);
  transition: filter 1000ms ease-in-out;
`

const Logo = styled(StrongResetLogo)`
  margin: 0 0 0 12px;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  justify-self: start;
  align-self: center;
  width: 56%;
  z-index: 2;
`
