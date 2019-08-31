import styled from 'styled-components'

const WorkoutPageHeadline = styled.h3`
  font-size: 32px;
  color: ${props => props.theme.headlinePrimary};
  text-transform: uppercase;
  letter-spacing: 0.1rem;
`

const WorkoutPageDescription = styled.p`
  margin: 12px 0 0 0;
  font-family: QuicksandSemiBold;
  font-size: 16px;
  color: ${props => props.theme.bodyText};
`

const MenuLabel = styled.p`
  font-family: QuicksandMedium;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 1.6px;
  line-height: 1;
  color: ${props => props.theme.whiteText};
`

export { WorkoutPageHeadline, WorkoutPageDescription, MenuLabel }
