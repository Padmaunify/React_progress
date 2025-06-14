import { useState,useCallback,useEffect, useRef } from 'react'

function App() {
  const [length,setLength]=useState(8) // 8 is the default value
  const [numallow,setNumallow]=useState(false)
   const [charallow,setCharallow]=useState(false)
   const [password,setPassword]=useState("")

   // ref hook
   const passref=useRef(null)
    const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numallow){
      str+="0123456789"
    }
    else{
      str+="!@#$%^&*-_+=[]{}~`"
    }
    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass+=str.charAt(char)
    }
    setPassword(pass)

   } ,[length,numallow,charallow,setPassword])

   const copyPwdtoClipboard= useCallback(()=>{
    passref.current?.select()
    // to specify range=> passref.current?.setSelectionRange(0,val)
    window.navigator.clipboard.writeText(password)
   },[password])

   useEffect(()=>
    passwordGenerator(),[length,numallow,charallow,passwordGenerator])
  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-center my-3'>Password Generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
        type='text'
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder='Password'
        readOnly
        ref={passref}
        ></input>
        <button onClick={copyPwdtoClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input
        type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>setLength(e.target.value)}
        ></input>
        <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numallow}
          id="numberInput"
          onChange={() => {
              setNumallow((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charallow}
              id="characterInput"
              onChange={() => {
                  setCharallow((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
