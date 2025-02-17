import { useState } from 'react'

import './App.css'

function App() { 
  let [counter, setCounter] = useState(15)
// let counter = 15    This is the wrong way UI mey changes nhi hoga variable ki we have to use hook

const addvalue = ()=>{
  // counter = counter + 1
  if(counter < 20){
  setCounter(counter + 1)
  }
}

const removeValue = ()=>{
  if(counter != 0){
  setCounter(counter - 1) }
}

  return (
    <>
    <h1>chai aur react</h1>
    <h2>counter value: {counter}</h2>

    <button
    onClick={addvalue}>add value{counter}</button>

    <br />
    <button onClick={removeValue}>remove valuea{counter}</button>
    </>
  )
}


export default App
