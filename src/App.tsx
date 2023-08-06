import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/themes/default'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { PostsContextProvider } from './contexts/PostsContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <PostsContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PostsContextProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
