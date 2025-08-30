//Problem :Why useState?
// If we only use normal variables inside a function component, React does not remember them across re-renders.
// Example without useState:

// import React from 'react'

// const UseStateHook = () => {

//     let count = 0;
//     //Count++ (increase)
//     const increase = ()=>{
//         count++;
//         console.log("Counte:", count)
//     }
    
//     // count-- (decrease)
//      const decrease = ()=>{
//         count--;
//         console.log("Counte:", count)
//     }
//   return (
//     <>
//     <h1>{count}</h1>
//       <button onClick = {increase} >Increase+1</button>{"  "}
//        <button onClick = {decrease}>Decrease-1</button>
//     </>
//   )
// }

// export default UseStateHook

// Problem: count will increase in console log,
// but UI will not update, because React doesn’t know that something has changed.



//*********************** Solution: UseState()  **********************************

//  *********  What is useState. *************************
// useState is a React Hook that lets you add state to functional components.
// Before React Hooks, state was only possible in class components using this.state and setState().
// With useState, functional components can now manage state.

// ****************** HOW *****************
// useState(initialValue) → takes an initial value (number, string, object, array, etc.).

// ************ Returns two things **********************

// State Variable → stores the current value.
// Updater Function → updates the state.

// Example:
// const [count, setCount] = useState(0);
// count → holds the current state (initially 0).
// setCount → function to update the state.

import React from 'react'
import {useState} from 'react'

const UseStateHook = () => {

// Using useState Hook
const [count , setCount] =useState(0); // useState return an two things value & function
    
//Count++ (increase)
const increase = ()=>{
setCount(count+1)           // setCount function call
console.log("Counte:", count)
}    
 // count-- (decrease)
const decrease = ()=>{
setCount(count-1);
console.log("Counte:", count)
}

  return (
    <>
    <h1>{count}</h1>
      <button onClick = {increase} >Increase+1</button>{"  "}
       <button onClick = {decrease}>Decrease-1</button>
    </>
  )
}

export default UseStateHook
