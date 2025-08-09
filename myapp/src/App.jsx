import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      {/* Your page content can go here */}
      <div>Home Page Content</div>
    </Router>
  );
}

export default App;
