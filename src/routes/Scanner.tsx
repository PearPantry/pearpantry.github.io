import { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";
import MenuBar from "../components/MenuBar";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

function Scanner() {
  const navigate = useNavigate();
  const [isToggleOn, setIsToggleOn] = useState(false);
  const items = [
    { name: "SALSA VERDE", price: 2.29 },
    { name: "EGGS LARGE CAGE FREE WHI", price: 2.59 },
    { name: "SEMI SWEET CHOC CHIPS", price: 2.99 },
    // Add more items here...
  ];

  return (
    <>
      <MenuBar />

      <br />
      
      <Typography variant="h2">Scanner</Typography>

      <br />

      <input
        type="file"
        accept="image/*"
        capture="environment"
        onChange={() => setIsToggleOn(true)}
      />

      <br />
      <br />

      {isToggleOn && (
        <>
          <List>
            {items.map((item, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={item.name}
                  secondary={`Price: $${item.price}`}
                />
                <FormControlLabel control={<Checkbox />} label="Daniel Pak" />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Virginia Wang"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Jasmine Schoch"
                />
                <FormControlLabel control={<Checkbox />} label="Kenneth Yang" />
              </ListItem>
            ))}
          </List>

          <Button variant="contained" onClick={() => navigate("/pantry")}>
            Submit to Pantry
          </Button>
        </>
      )}
    </>
  );
}

export default Scanner;
