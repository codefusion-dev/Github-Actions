import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <main className="main-content">
        <div className="logo-container">
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            Count is {count}
          </button>
          <p>
            Running in <span className="env-badge">{process.env.NODE_ENV}</span> environment
          </p>
        </div>
      </main>
      <footer className="footer">
        <p>
          Powered by <a href="https://shaheershahzad.com" target="_blank" rel="noopener noreferrer">Shaheer Shahzad</a>
        </p>
      </footer>
    </div>
  )
}

export default App
