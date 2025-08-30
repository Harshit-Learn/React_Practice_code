// ********** useEffect() hook ****************
// 1. To Fetch the data from internet
// 2. Add the side effects in componenets

// useEffect is a React Hook that lets you perform side effects in functional components.
//  Side effects = Anything that happens outside the React rendering process (like fetching data, updating DOM directly, setting timers, subscriptions, etc.).

// In simple words:

// React renders your component.

// If you want to “do something” after render → you use useEffect.

//************ syntax of useEffect Hook ******************  

//  useEffect(
//   ()=>{
//     console.log("Use effect running")
//   }, []          NOTE: [] square bracket empty he to useEffect 1 time chlega to jb(browser load hoga ) 
// )

import React from 'react'
import {useEffect , useState} from 'react'


const UseEffectHook = () => {
    //useState
    const[counter , setCounter]= useState(0);
   

    // useEffect() Hook
    useEffect(
    ()=>{
    console.log("UseEffect is working")

    document.title = `counter is ${counter}`
    },[counter]
)
  return (
    <>
     <h1>{counter}</h1> 
     <button onClick={()=>setCounter(counter+1)}>Increase Counter</button>




    </>
  )
}

export default UseEffectHook
