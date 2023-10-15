import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import MenuBar from "../components/MenuBar";

function Scanner() {
  const [isToggleOn, setIsToggleOn] = useState(false);

  return (
    <>
      <MenuBar />
      
      <h1>Scanner</h1>
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
          <Grid container spacing={2} alignItems="start">
            <Grid xs={6}>SALSA VERDE</Grid>
            <Grid xs={6}>$2.29</Grid>
            <Grid xs={12}>Things</Grid>
            <Grid xs={6}>EGGS LARGE CAGE FREE WHI</Grid>
            <Grid xs={6}>$2.59</Grid>
            <Grid xs={6}>SEMI SWEET CHOC CHIPS</Grid>
            <Grid xs={6}>$2.99</Grid>
          </Grid>
        </>
      )}
    </>
  );
}

export default Scanner;
