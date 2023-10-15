import { useEffect } from "react";
import "../styles/Home.css";
import Greeting from "../components/Greeting";
import MenuBar from "../components/MenuBar";
import { auth } from "../scripts/firebase";
import { useNavigate } from "react-router-dom";
import HorizontalStack from "../components/HorizontalStack";
import { signOut } from "firebase/auth";
import { Button } from "@mui/material";

function Home() {
  const navigate = useNavigate();

  // Check if user is logged in and redirect to Auth route if not
  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("login");
      }
    });
  }, [navigate]);

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <MenuBar />
      <Greeting />
      <HorizontalStack />

      <br/>
      <Button onClick={logout} variant="contained">Logout</Button>
    </>
  );
}

export default Home;
