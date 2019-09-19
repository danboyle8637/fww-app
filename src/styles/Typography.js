import styled from 'styled-components'
import { above } from '../styles/Theme'

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
  ${above.tablet`
    font-size: 12px;
  `}
`

const Header1 = styled.h1`
  font-size: 38px;
`

const Header2 = styled.h2`
  font-size: 32px;
`

const Header3 = styled.h3`
  font-size: 22px;
`

const Header4 = styled.h4`
  font-size: 20px;
`

const Header5 = styled.h5`
  font-size: 18px;
`

const BodyText = styled.p`
  font-size: 16px;
`

export {
  WorkoutPageHeadline,
  WorkoutPageDescription,
  MenuLabel,
  Header1,
  Header2,
  Header3,
  Header4,
  Header5,
  BodyText
}
