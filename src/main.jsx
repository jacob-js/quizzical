import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Button from './components/ui/Button'
import theme from './config/chakraTheme'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Button>Get Started</Button>
    </ChakraProvider>
  </React.StrictMode>,
)
