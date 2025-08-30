import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from  "./Components/Card"

function App() {
  const [count, setCount] = useState(0)

  const obj={               //Object but you can't use object pass as Array
    name:"Harshit",
    age:21
  }

  const arr=[1,2,3] // Array

  // Note: Ypu can add Object , Array  directly as properties in <Card/> only pass Strings 

  return (
    <>
     <h1 className = "bg-amber-500 rounded-3xl mb-20">TaliwindwithProps</h1> 
     <Card  useerName="Harshit Barnwal " Profession="I am Mern Stact Developer." Array={arr}/><br/>
      <Card useerName="Vicky Barnwal " Profession="I am the  DevOps consultant." Array={arr} />
    </>
  )
}

export default App
