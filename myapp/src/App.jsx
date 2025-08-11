import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
// import AnimatedBackground from "./components/AnimatedBackground";
import LandingPage from "./components/LandingPage";
import ShowcaseGrid from "./components/ShowcaseGrid";
import AnimatedCards from "./components/AnimatedCards";


function App() {
  return (
    <Router>
      {/* <AnimatedBackground /> */}
      <Navbar />
      <LandingPage />
      <ShowcaseGrid />
      <AnimatedCards />
    </Router>
  );
}

export default App;
