import { useEffect } from "react";
import "../styles/Home.css";
import Greeting from "../components/Greeting";
import MenuBar from "../components/MenuBar";
import { auth } from "../scripts/firebase";
import { useNavigate } from "react-router-dom";
import HorizontalStack from "../components/HorizontalStack";

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

  return (
    <>
      <MenuBar />
      <br />
      <Greeting />
      <br />
      <HorizontalStack />
    </>
  );
}

export default Home;
