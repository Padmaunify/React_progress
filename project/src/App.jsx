import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Congratulations from './components/first_comp'
import Profile from './components/prop'
import Clock from './components/broken_lock'
import Generator from './components/InspirationGenerator'
import FancyText from './components/fancyText'

function App() {
  

  return (
    <div>

      <FancyText title text="Inspire Me"/>
      <Generator/>
    </div>
  )
}

export default App
