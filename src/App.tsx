import { useState } from 'react'
import viteLogo from '/gm.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        
      </div>
      <h1>Grupo Maestra</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          SITIO EN CONSTRUCCI{count}N 
        </button>
        <p style={{"fontSize" : "20px"}}>
          Contactanos al teléfono o Whatsapp  <code><a href="tel:569952312015">+569 952312015</a></code> 
        </p>
      </div>
      <p className="read-the-docs" style={{"fontSize" : "40px"}}>
        <a href="mailto:ventas@grupomaestra.cl">ventas@grupomaestra.cl </a>
      </p>
    </>
  )
}

export default App
