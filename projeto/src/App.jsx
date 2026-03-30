import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Mensagem from './componets/Mensagem'
import InfoAluno from './componets/infoAluno'
import InfoCurso from './componets/InfoCurso'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Bem-vindo ao meu projeto</h1>
      <Mensagem />
      <InfoAluno />
      <hr />
      <InfoCurso />
      
    </>
  )
}

export default App
