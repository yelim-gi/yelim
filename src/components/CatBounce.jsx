import React from "react";
import "../styles/CatBounce.css";
import catImage from "../assets/Untitled-2.png";

export default function CatBounce() {
  const cats = new Array(10).fill(0); // 고양이 10마리

  return (
    <div className="cat-bounce-container">
      {cats.map((_, index) => (
        <img
          key={index}
          src={catImage}
          alt="cat"
          className="bouncing-cat"
          style={{
            animationDelay: `${index * 0.3}s`,
          }}
        />
      ))}
    </div>
  );
}
