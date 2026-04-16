import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import AdicionarUsuario from './components/AdicionarUsuario'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='HXH'>
      <Header />
      <main>
        <AdicionarUsuario />
      </main>
      <Footer />
    </div>
      
    </>
  )
}

export default App
