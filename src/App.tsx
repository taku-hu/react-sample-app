import { ChakraProvider } from '@chakra-ui/react'
import { LoginUserProvider } from 'providers/LoginUserProvider'
import { BrowserRouter } from 'react-router-dom'
import { Router } from 'router/Router'

import { theme } from 'theme/theme'

function App () {
  return (
    <ChakraProvider theme={theme}>
      <LoginUserProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </LoginUserProvider>
    </ChakraProvider>
  )
}

export default App
