import { useState } from 'react'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hola mundo</h1>
      <form action=""></form>
      <larbel htmlFor="usuario" id="usuario">Usuario</larbel>
      <input type="text" name="usuario" id="usuario" />
      <larbel htmlFor="password" id="password">Password</larbel>
      <input type="password" name="password" id="password"/>
      
      <input type="submit" value="Enviar"/>
     
    </>
  )
}

export default App
