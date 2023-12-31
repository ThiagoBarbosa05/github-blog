import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${(props) => props.theme['base-background']};
    color: ${(props) => props.theme['gray-300']};
    -webkit-font-smoothing: antialiased;
    padding-bottom: 5rem;
  }

  body, input, textarea, button {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  @media (max-width: 780px) {
    html {
      font-size: 85.7%;
    }
  }
`
