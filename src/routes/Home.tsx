import { useState, useEffect } from 'react'
import '../styles/Home.css'
import Greeting from '../components/Greeting';
import MenuBar from '../components/MenuBar'
import { Login } from './Login'
import { auth } from '../scripts/firebase'
import { NavLink, useNavigate } from 'react-router-dom'




function Home() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();
  
  // Check if user is logged in and redirect to Auth route if not
  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate('login')
      }
    });
  }, [navigate])

  return (
    <>
        
        <MenuBar />
        <Greeting/>

      <div>
        <Login />
      </div>
      
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
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
