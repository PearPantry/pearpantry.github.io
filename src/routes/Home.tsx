import { useEffect, useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../styles/Home.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { Login } from './Login'
import { auth } from '../scripts/firebase'

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
      <div>
        <Login />
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
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
