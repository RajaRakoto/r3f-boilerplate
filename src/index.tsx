import React from 'react'
import ReactDOM from 'react-dom/client'

/* components */
import App from './app'

/* utils */
import './utils/r3f-elements'

/* styles */
import './styles/index.min.css'

// ===========================================

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
