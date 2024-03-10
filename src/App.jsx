import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
// import AlertDialogSlide from "./AlertDialogSlide";
// import Intro from "./Intro";
import MainPage from "./MainPage";

let theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
    h1: {
      fontSize: "4rem",
      fontWeight: "400",
    },
    h2: {
      fontSize: "3rem",
    },
    h3: {
      fontSize: "2rem",
    },
  },
});

theme = responsiveFontSizes(theme);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/invetsments" element={<Investments />} /> */}
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
