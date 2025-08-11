// ShowcaseGrid.jsx
import React from "react";
import "./ShowcaseGrid.css";

const cards = [
  {
    img: "https://img.freepik.com/free-vector/stylized-people-sending-payment-receiving-money-isolated-flat-mobile-app-template_74855-12505.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_incoming&w=740&q=80", // Replace with phone image
    title: "Take the next step to your professional goals",
    bg: "#ffffff",
  },
  {
    img: "https://img.freepik.com/free-vector/stylized-people-sending-payment-receiving-money-isolated-flat-mobile-app-template_74855-12505.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_incoming&w=740&q=80",
    title: "Climb higher education that elevates",
    bg: "#1a093f",
  },
  {
    img: "https://img.freepik.com/free-vector/stylized-people-sending-payment-receiving-money-isolated-flat-mobile-app-template_74855-12505.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_incoming&w=740&q=80",
    title: "Bounce beyond limits online",
    bg: "#ffdce5",
  },
  {
    img: "https://img.freepik.com/free-vector/stylized-people-sending-payment-receiving-money-isolated-flat-mobile-app-template_74855-12505.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_incoming&w=740&q=80",
    title: "Achieve your career goals",
    bg: "#ffec99",
  },
  {
    img: "https://img.freepik.com/free-vector/stylized-people-sending-payment-receiving-money-isolated-flat-mobile-app-template_74855-12505.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_incoming&w=740&q=80",
    title: "Business",
    bg: "#ffc0cb",
  },
  {
    img: "https://img.freepik.com/free-vector/stylized-people-sending-payment-receiving-money-isolated-flat-mobile-app-template_74855-12505.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_incoming&w=740&q=80",
    title: "Skillup",
    bg: "#1a093f",
  },
];

export default function ShowcaseGrid() {
  return (
    <div className="grid-container">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="grid-card"
          style={{ backgroundColor: card.bg }}
        >
          <img src={card.img} alt={card.title} />
          <p>{card.title}</p>
        </div>
      ))}
    </div>
  );
}
