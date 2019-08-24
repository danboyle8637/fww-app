import { createGlobalStyle } from 'styled-components'
import RobotoBold from '../fonts/Roboto-Black.woff2'
import QuicksandMedium from '../fonts/QuickSand-Medium.woff2'
import QuicksandSemiBold from '../fonts/QuickSand-SemiBold.woff2'
import { above } from './Theme'

const Global = createGlobalStyle`
  @font-face {
    font-family: 'RobotoBold';
    src: url(${RobotoBold}) format('woff2');
  }

  @font-face {
    font-family: 'QuicksandMedium';
    src: url(${QuicksandMedium}) format('woff2');
  }

  @font-face {
    font-family: 'QuicksandSemiBold';
    src: url(${QuicksandSemiBold}) format('woff2');
  }

  html {
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.mainBackgroundColor};
    ${above.ipadPro`
      background-color: ${props => props.theme.baseBackgroundColor};
    `}
    ${above.laptop`
      background-color: ${props => props.theme.baseBackgroundColor};
    `}
  }

  p {
    margin: 0;
    padding: 0;
  }

  #root {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export default Global
