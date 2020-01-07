import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

import {
  ProgramHeaderGrid,
  ProgramBackgroundWrapper
} from '../../../styles/Containers'
import IgniteResetProgramCoverTiny from '../../../images/ignite-reset-program-cover-tiny.jpg'
import IgniteResetProgramCover from '../../../images/ignite-reset-program-cover.jpg'
import IgniteResetLogo from '../../../svgs/IgniteResetLogo'
import useIntersectionObserver from '../../../hooks/useIntersectionObserver'

const IgniteResetHeader = ({
  coverImage,
  tinyCoverImage,
  signUpCard,
  salesPage = false
}) => {
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
          src={signUpCard ? IgniteResetProgramCoverTiny : tinyCoverImage}
          data-src={signUpCard ? IgniteResetProgramCover : coverImage}
          alt="7 Day Ignite Reset Program Cover"
          title="7 Day Ignite Reset Program"
          salesPage={salesPage}
        />
      </ProgramBackgroundWrapper>
      <Logo />
    </ProgramHeaderGrid>
  )
}

export default IgniteResetHeader

const ProgramBackgroundImage = styled.img`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  border-radius: ${props => (props.salesPage ? '10px' : '10px 10px 0 0')};
  width: 100%;
  filter: blur(6px);
  transition: filter 1000ms ease-in-out;
`

const Logo = styled(IgniteResetLogo)`
  margin: 0 0 0 12px;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  justify-self: start;
  align-self: center;
  width: 56%;
  z-index: 2;
`
