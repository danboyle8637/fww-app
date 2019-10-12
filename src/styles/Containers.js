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
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  overflow: hidden;
`

const ProgramBackgroundImage = styled.img`
  border-radius: 10px 10px 0 0;
  width: 100%;
`

const WorkoutSectionGrid = styled.div`
  position: relative;
  align-self: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  border-radius: 14px;
  background: ${props => props.theme.mainBackgroundBorderColor};
  border: solid 4px ${props => props.theme.mainBackgroundBorderColor};
  width: 100%;
  overflow: hidden;
  ${above.mobile`
    border: solid 6px ${props => props.theme.mainBackgroundBorderColor};
  `}
  ${above.ipadPro`
    border: solid 6px ${props => props.theme.mainBackgroundBorderColor};
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
