import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/pages/Home'
import theme from './config/chakraTheme'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  }
  // {
  //   path: '/quiz'
  // }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </ChakraProvider>
  </React.StrictMode>,
)
