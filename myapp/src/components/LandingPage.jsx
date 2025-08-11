// LandingPage.jsx
import React, { useState, useEffect } from "react";
import "./LandingPage.css";

const images = [
  "https://img.freepik.com/free-vector/flat-hand-drawn-coworking-space_52683-54823.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740&q=80",
  "https://img.freepik.com/free-vector/hand-drawn-busy-office-illustration_23-2151051240.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740&q=80",
  "https://img.freepik.com/premium-vector/flat-illsutration-modern-openplan-office-with-professionals-working-desks-stylish-workplace_120150-408.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740&q=80",
  "https://img.freepik.com/premium-vector/flat-illsutration-modern-openplan-office-with-professionals-working-desks-stylish-workplace_120150-379.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740&q=80",
  "https://img.freepik.com/premium-vector/flat-illsutration-modern-openplan-office-with-professionals-working-desks-stylish-workplace_120150-276.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740&q=80"
];

export default function LandingPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="landing-section">
      <div className="heading-container">
        <h4 className="offer-text">SPECIAL OFFER FIRST CUSTOMER</h4>
        <h1 className="main-heading">
          Technology & education <br /> consulting service
        </h1>
        <p className="sub-text">
          We’re a nonprofit with the mission to provide a free, world-class consultancy.
        </p>
      </div>

      <div className="image-mask">
        <img
          src={images[currentIndex]}
          alt="Consulting"
        />
      </div>
    </section>
  );
}
