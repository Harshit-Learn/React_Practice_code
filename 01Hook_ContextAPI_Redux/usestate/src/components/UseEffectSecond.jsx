// Using useEffect hook , we're fatching data from API(Backend)

import React from 'react'
import {useState, useEffect} from 'react'

const UseEffectSecond = () => {

  //useState
  const[same , setSame] = useState('');
   const[jsondata ,setJsondata] = useState([ ]);

  //useEffect
  useEffect(()=>{
  const fetchData = async()=>{          // Dammy Api
    const api = await fetch( `https://jsonplaceholder.typicode.com/${same}`)
    const data = await api.json();
    console.log(data);
    setJsondata(data);
  }
 fetchData();    // Call the function

  } , [same]
)

  return (
    <>
      <button onClick={()=>setSame('posts')}>Post</button> {" "}
      <button onClick={()=>setSame('albums')}>Albumes</button>{" "}
      <button onClick={()=>setSame('todos')}>Todos</button>

      {
       jsondata.map((data)=>{
          return(
            <>
            <h1>{data.id} {" "} {data.title} </h1>
            </>
          )
        })
      }
    </>
  )
}

export default UseEffectSecond
