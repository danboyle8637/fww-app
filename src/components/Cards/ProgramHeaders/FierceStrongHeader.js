import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

import {
  ProgramHeaderGrid,
  ProgramBackgroundWrapper
} from '../../../styles/Containers'
import FierceStrongLogo from '../../../svgs/FierceStrongLogo'
import useIntersectionObserver from '../../../hooks/useIntersectionObserver'

const FierceStrongHeader = ({
  coverImage,
  tinyCoverImage,
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
          data-src={coverImage}
          src={tinyCoverImage}
          alt="Fierce Strong Program Cover"
          title="Fierce Strong Program"
          salesPage={salesPage}
        />
      </ProgramBackgroundWrapper>
      <Logo />
    </ProgramHeaderGrid>
  )
}

export default FierceStrongHeader

const ProgramBackgroundImage = styled.img`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  border-radius: ${props => (props.salesPage ? '10px' : '10px 10px 0 0')};
  width: 100%;
  filter: blur(6px);
  transition: filter 1000ms ease-in-out;
`

const Logo = styled(FierceStrongLogo)`
  margin: 0 0 0 12px;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  justify-self: start;
  align-self: center;
  width: 56%;
  z-index: 2;
`
