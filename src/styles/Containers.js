import styled from 'styled-components'
import { above } from '../styles/Theme'

// Program Header Base Components
const ProgramHeaderGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  border-radius: 10px 10px 0 0;
  width: 100%;
`

const ProgramBackgroundWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
`

const ProgramBackgroundImage = styled.img`
  border-radius: 10px 10px 0 0;
  width: 100%;
`

const WorkoutSectionGrid = styled.div`
  position: relative;
  padding: 4px;
  align-self: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  border-radius: 14px;
  background: ${props => props.theme.mainBackgroundBorderColor};
  width: 100%;
  ${above.mobile`
    padding: 6px;
  `}
  ${above.ipadPro`
    padding: 12px 0 0 0;
  `}
`

const MenuItemGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  gap: 6px;
  justify-items: center;
`

export {
  ProgramHeaderGrid,
  ProgramBackgroundWrapper,
  ProgramBackgroundImage,
  MenuItemGrid,
  WorkoutSectionGrid
}
