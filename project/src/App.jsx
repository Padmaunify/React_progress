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
      awards={awardss}
      discovery="abc"
      > </Profile>
      <Profile>
        ame="nmh"
     profession="scientist"
      awards=9
      discovery="svsbbwb"
      </Profile>

    </div>
  )
}

export default App
