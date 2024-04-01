import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Watch from './Component/Watch'



function App() {

// const Watches = [
//   {id:1, Name:'Apple Watch', Price:1200},
//   {id:2, Name:'MI Watch', Price:1500},
//   {id:3, Name:'LG Watch', Price:1000},
// ]
const [watches, setWatches] = useState([]);

useEffect(()=>{
  fetch('watches.json')
  .then(res => res.json())
  .then(data => setWatches(data))
},[])


  return (
    <>
      
      <h1>Vite + React</h1>
     {
      watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
     }
     
     
    </>
  )
}

export default App
