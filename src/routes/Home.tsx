import { useState, useEffect } from 'react'
import '../styles/Home.css'
import Greeting from '../components/Greeting';
import MenuBar from '../components/MenuBar'
import { Login } from './Login'
import { auth } from '../scripts/firebase'
import { NavLink, useNavigate } from 'react-router-dom'
import HorizontalStack from '../components/HorizontalStack';


function Home() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  // Check if user is logged in and redirect to Auth route if not
  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("login");
      }
    });
  }, [navigate]);

  return (
    <>

        
        <MenuBar />
        <Greeting/>
        <HorizontalStack />


      <div>
        <Login />
      </div>

    </>
  );
}

export default Home;
