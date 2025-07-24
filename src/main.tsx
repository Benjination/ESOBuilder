import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

function App() {
  return (
    <div style={{ 
      background: '#1a1a2e', 
      color: 'white', 
      minHeight: '100vh', 
      padding: '50px',
      textAlign: 'center' 
    }}>
      <h1>ESO Build Helper</h1>
      <p>React is working! This is a test version.</p>
      <p>URL: {window.location.href}</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
