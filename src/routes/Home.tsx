import { useState } from 'react'
import '../styles/Home.css'
import { NavLink } from 'react-router-dom'
import Greeting from '../components/Greeting';
import MenuBar from '../components/MenuBar'


function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
        
        <MenuBar />
        <Greeting/>

      <NavLink to={"pantry"}>
        <h1>Pantry</h1>
      </NavLink>
      <NavLink to={"expenses"}>
        <h1>Expenses</h1>
      </NavLink>
    </>
  )
}

export default Home
