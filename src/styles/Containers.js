import styled from 'styled-components'

// Program Header Base Components
const ProgramHeaderGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  background: ${props => props.theme.mainBackgroundBorderColor};
  border-radius: 10px 10px 0 0;
  width: 100%;
  max-width: 360px;
`

const ProgramBackgroundWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
`

const ProgramBackgroundImage = styled.img`
  border-radius: 10px 10px 0 0;
  width: 100%;
`

export { ProgramHeaderGrid, ProgramBackgroundWrapper, ProgramBackgroundImage }
