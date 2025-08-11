import React from "react";
import { motion as Motion } from "framer-motion";
import "./AnimatedCards.css";

const cards = [
  {
    title: "Design Report — May 2018",
    type: "REPORT",
    bg: "linear-gradient(135deg, #ff7e5f, #feb47b)",
  },
  {
    title: "Optimized for conversions",
    type: "CASE STUDY",
    bg: "linear-gradient(135deg, #00c6ff, #0072ff)",
  },
  {
    title: "Design Report — March 2018",
    type: "REPORT",
    bg: "linear-gradient(135deg, #0f0f0f, #3f2b96)",
  },
  {
    title: "Reading Experience Filters Concept",
    type: "CASE STUDY",
    bg: "linear-gradient(135deg, #ff416c, #ff4b2b)",
  },
  {
    title: "Design Report — April 2018",
    type: "REPORT",
    bg: "linear-gradient(135deg, #8e2de2, #4a00e0)",
  },
  {
    title: "iPhone X Web Navigation Concept",
    type: "CASE STUDY",
    bg: "#fff",
    textColor: "#000",
  },
  {
    title: "Design Report — February 2018",
    type: "REPORT",
    bg: "linear-gradient(135deg, #0f0f0f, #434343)",
  },
];

export default function AnimatedCards() {
  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <Motion.div
          key={index}
          className="card"
          style={{
            background: card.bg,
            color: card.textColor || "#fff",
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 12px 25px rgba(0,0,0,0.2)",
            transition: { duration: 0.3 },
          }}
        >
          <p className="type">{card.type}</p>
          <h3 className="title">{card.title}</h3>
          <button className="read-btn">Read article</button>
        </Motion.div>
      ))}
    </div>
  );
}
