import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FrontPage from '../components/Layout.jsx'
import Layout from '../components/Layout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <FrontPage /> */}
    {/* <Layout /> */}
  </StrictMode>,
)
