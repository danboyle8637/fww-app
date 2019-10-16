import React from 'react'
import styled from 'styled-components'

import Logo from '../../svgs/FWWLogo'

const FWWLogo = ({ width }) => {
  return <FWWMainLogo setWidth={width} />
}

export default FWWLogo

const FWWMainLogo = styled(Logo)`
  width: ${props => props.setWidth || '220px'};
`
