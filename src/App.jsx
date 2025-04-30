// src/App.jsx
import React, { useEffect } from "react";
import VideoPortfolio from "./components/VideoPortfolio";
import AnimatedBackground from "./components/AnimatedBackground";
import Profile from "./components/Profile";
import CatRow from "./components/CatRow";
import "./styles/cursor.css";
import "./styles/background.css";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "custom-cursor";
    document.body.appendChild(cursor);

    const move = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const addHover = () => cursor.classList.add("hovering-button");
    const removeHover = () => cursor.classList.remove("hovering-button");

    window.addEventListener("mousemove", move);
    document.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("mouseenter", addHover);
      btn.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      cursor.remove();
    };
  }, []);

  return (
    <div className="relative bg-dark text-white min-h-screen flex justify-center px-4 py-10 overflow-x-hidden">
      <AnimatedBackground />
      <div className="w-full max-w-7xl flex flex-col items-center">
        <Profile />

        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">About Ye Lim</h2>
          <div className="mb-10">
            <button
              onClick={() => navigate("/resume")}
              className="bg-black text-white px-6 py-2 rounded-full shadow hover:bg-gray-800 transition duration-200"
            >
              간단 자기소개 보러가기 ★
            </button>
          </div>

          <VideoPortfolio />
          <CatRow />
        </div>
      </div>
    </div>
  );
}
