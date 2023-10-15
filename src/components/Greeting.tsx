import { useState, useEffect } from "react";
import { Typography } from "@mui/material";

function Greeting() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour >= 6 && currentHour < 12) {
      setGreeting("Good morning :)");
    } else if (currentHour >= 12 && currentHour < 17) {
      setGreeting("Good afternoon <3");
    } else {
      setGreeting("Good evening!");
    }
  }, []);

  return <Typography variant="h2">{greeting}</Typography>;
}

export default Greeting;
