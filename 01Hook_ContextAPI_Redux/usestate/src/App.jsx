import './App.css'
import UseStateHook from './components/UseStateHook'
import UseEffectHook from './components/useEffectHook'
import  UseEffectSecond from './components/UseEffectSecond'



function App() {
 

  return (
    <>
    <h1> Welcome to Hooks + Props + Context API + Redux Tool kit </h1> {" "}

    <h2>******** 1.UseState Hook Concept **********</h2>
    <UseStateHook/> {" "}

   <h2>***************************useEffect Hook Concept(Basic) *********************</h2>
   <UseEffectHook/>

    <h2>**************useEffect Hook Part-II(Fetch Data from Api) *******************</h2>
    <UseEffectSecond/>


    </>
  )
}

export default App
