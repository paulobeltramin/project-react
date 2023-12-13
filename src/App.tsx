import { useState } from 'react'
import { ThemeLight } from './components/themes/Theme'
import { Themedark } from './components/themes/Themedark'
import { Projects } from './container/projetos/Project'
import { Sidebar } from './container/sidebar/Sidebar'
import { Sobre } from './container/sobre/Sobre'
import { Container, GlobalStyles } from './globals-css/Globals'
import { ThemeProvider } from 'styled-components'

function App() {
  const [useThemeDark, setUseThemeDark] = useState(false)

  const replaceTheme = () => {
    setUseThemeDark(!useThemeDark)
  }

  return (
    <ThemeProvider theme={useThemeDark ? Themedark : ThemeLight}>
      <GlobalStyles />
      <Container>
        <div>
          <Sidebar themeReplace={replaceTheme} />
        </div>

        <div>
          <Sobre />
          <Projects />
        </div>
      </Container>
    </ThemeProvider>
  )
}

export default App
