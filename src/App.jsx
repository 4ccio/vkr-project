import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MainPage from "./pages/MainPage";
import StockMarketPage from "./pages/StockMarketPage";
import CryptoPage from "./pages/CryptoPage";
import SwipeCards from "./pages/SwipeCardsPage";
import coursesData from "./Data/CoursesData";
import RealEstatePage from "./pages/RealEstatePage";

let theme = createTheme({
  palette: {
    primary: {
      main: "#3C3C3C",
    },
    secondary: {
      main: "#FFFFFF",
    },
    background: {
      default: `#e9edf0`,
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
    h1: {
      fontSize: "3.5rem",
      fontWeight: "400",
    },
    h2: {
      fontSize: "3rem",
      fontWeight: "400",
    },
    h3: {
      fontSize: "2rem",
      fontWeight: "400",
    },
    body1: {
      fontSize: "1.2rem",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 850,
      lg: 1200,
      xl: 1536,
    },
  },
});

theme = responsiveFontSizes(theme);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route
            path="/stock-market"
            element={<StockMarketPage courseId={"stock-market"} />}
          />
          <Route path="/crypto" element={<CryptoPage courseId={"crypto"} />} />
          <Route
            path="/real-estate"
            element={<RealEstatePage courseId={"real-estate"} />}
          />
          <Route
            path="/:courseId/:assetId/:lessonId"
            element={<SwipeCards data={coursesData} />}
          />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
