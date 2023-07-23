import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './tnt/about'



function App() {
  const [count, setCount] = useState(0)
  const [state,setState]=useState<string>("You here");
  const data: string[]=["a","b","c"]

  return (
    <>
    <div className='main'>
        <h1> HeLLo rEaCt </h1>
        <h1>{state}</h1>
        <input onChange={(e)=> setState(state + e.target.value)}/>
        <About data={data} Fuc={setState}/>
        {data.map((item,idx)=> (
            <h4 key={idx}>{item}</h4>
          ))}
          {data.map((item,idx)=> {
            return <h4 key={idx}>{item}</h4>
          }
          )}
          {data.map((item,idx)=> {
            if (item === "a") return <h1 key={idx}>AAA</h1>
            else return <h1 key={idx}>AAA</h1>
          })}
          
    </div>
    </>
    
  )
}

export default App
