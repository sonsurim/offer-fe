import { theme } from '@themes'
import { ThemeProvider } from '@emotion/react'
import { GlobalStyle } from '../src/styles'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  )
]



