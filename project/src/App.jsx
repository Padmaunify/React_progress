import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Congratulations from './components/first_comp'
import Profile from './components/prop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Profile
      name="xyz"
     profession="scientist"
      awards="5"
      discovery="abc"/>
      <Profile
      name="nmh"
     profession="scientist"
      awards="9"
      discovery="svsbbwb"/>

    </div>
  )
}

export default App
