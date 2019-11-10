import { createGlobalStyle, css } from 'styled-components'

import {
  MAIN_COLOR,
  SELECTION_BACKGROUND,
  SELECTION_COLOR,
  BACKGROUND_COLOR,
  GRID_UNIT,
} from '../../constants/design'

const selectionStyles = css`
  background: ${SELECTION_BACKGROUND};
  color: ${SELECTION_COLOR};
  text-shadow: none;
`

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Helvetica Neue, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.2;
    color: ${MAIN_COLOR};
    background-color: ${BACKGROUND_COLOR};
  }

  a {
    color: inherit;
    text-decoration: none;
    margin: 0;
    padding: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
    text-rendering: optimizeSpeed;
    margin: 0 0 ${2 * GRID_UNIT}px;
  }

  p {
    margin: 0 0 ${2 * GRID_UNIT}px;
  }

  strong {
    font-weight: 700;
  }

  /* has to be state for each one, otherwise it doesn't work */
  ::-moz-selection {
    ${selectionStyles}
  }
  ::selection {
    ${selectionStyles}
  }
`

export default GlobalStyles
