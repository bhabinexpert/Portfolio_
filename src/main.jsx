// Remove hash from URL and reset scroll on refresh
if (window.location.hash) {
  window.location.replace(window.location.pathname);
}
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Always reset scroll to top on page refresh
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
