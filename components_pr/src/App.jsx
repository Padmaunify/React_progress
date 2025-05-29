import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Fragment } from 'react'

function App() {
  const items=["Apple","Banana","Cherry"]

  return (
    <>
    {
      items.map((item,index)=>(
        <Fragment key={index}>
          <h2>{item}</h2>
          <hr/>
        </Fragment>
      ))
    }
    </>
  )
}

export default App
