import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/Home.tsx";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Pantry from "./routes/Pantry.tsx";
import Expenses from "./routes/Expenses.tsx";
import { Login } from "./routes/Login.tsx";
import Scanner from "./routes/Scanner.tsx";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "pantry",
    element: <Pantry />,
  },
  {
    path: "scanner",
    element: <Scanner />,
  },
  {
    path: "expenses",
    element: <Expenses />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#939462",
    },
    secondary: {
      main: "#cf7c3f",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
