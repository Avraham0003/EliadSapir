import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import './assets/custom-font.css';
import './assets/main.css';
import AdminContext from "./Pages/Admin/AdminContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <AdminContext.AuthProvider>
    <App/>
    </AdminContext.AuthProvider>
    </ChakraProvider>
  </React.StrictMode>
)
