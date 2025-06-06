import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from "@mantine/core";
import './index.css'
import App from './App.jsx'
import Form from './components/Form.jsx'
import NavBar from './components/NavBar.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider>
      <App />
      <NavBar />
      <Form />
    </MantineProvider>
  </StrictMode>,
)
