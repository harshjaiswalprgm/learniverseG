import React from "react";
import "./Navbar.css";
import { FaRocket } from "react-icons/fa"; // Example icon

export default function Navbar() {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        {/* Logo */}
        <div className="navbar-logo">
          <FaRocket size={18} />
        </div>

        {/* Links */}
        <ul className="navbar-links">
          <li><a href="#about">About</a></li>
          <li><a href="#programs">Programs</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#resources">Resources</a></li>
        </ul>

        {/* Button */}
        <a
          href="https://glowlogics.in"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-btn"
        >
          glowlogics.in
        </a>
      </nav>
    </div>
  );
}
