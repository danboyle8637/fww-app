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

export { WorkoutPageHeadline, WorkoutPageDescription }
