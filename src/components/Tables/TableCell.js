import React from 'react'
import styled from 'styled-components'

const TableCell = ({ children, center, data, header }) => {
  return (
    <Cell center={center}>
      {header ? <HeaderLabel>{children}</HeaderLabel> : null}
      {data ? <DataLabel>{children}</DataLabel> : null}
    </Cell>
  )
}

export default TableCell

const Cell = styled.div`
  display: flex;
  justify-content: ${props => (props.center ? 'center' : 'flex-start')};
`

const DataLabel = styled.p`
  font-family: QuicksandSemiBold;
  font-size: 16px;
  color: ${props => props.theme.bodyText};
`

const HeaderLabel = styled.h5`
  margin: 0;
  padding: 0;
  font-family: RobotoBold;
  font-size: 22px;
  text-transform: uppercase;
  color: ${props => props.theme.headlinePrimary};
`
