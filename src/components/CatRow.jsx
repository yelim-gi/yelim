import React from "react";
import catImage from "../assets/Untitled-2.png"; // 뽀미 머리 이미지
import "../styles/CatRow.css";

export default function CatRow() {
  const cats = new Array(10).fill(0); // 고양이 10개

  return (
    <div className="cat-row">
      {cats.map((_, idx) => (
        <img
          key={idx}
          src={catImage}
          alt="뽀미"
          className="cat-icon"
          style={{
            animationDelay: `${idx * 0.3}s`,
          }}
        />
      ))}
    </div>
  );
}
