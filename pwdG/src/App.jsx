import { useState,useCallback } from 'react'
import './App.css'

function App() {
  const [length,setLength]=useState(8) // 8 is the default value
  const [numallow,setNumallow]=useState(false)
   const [charallow,setCharallow]=useState(false)
   const [password,setPassword]=useState("")

   const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numallow){
      str+="0123456789"
    }
    else{
      str+="!@#$%^&*-_+=[]{}~`"
    }

   } ,[length,numallow,charallow,setPassword])

  return (
    <>
    <h1 className='text-4xl text-center'>Password Generator</h1>
    </>
  )
}

export default App
