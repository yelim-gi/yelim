import React from "react";

export default function VideoPortfolio() {
  const handleClick = () => {
    window.open(
      "https://youtube.com/channel/UCmhllUguxFMUJqh4K40uPCA",
      "_blank"
    );
  };

  return (
    <div className="text-center mt-10">
      <h2 className="text-3xl font-bold mb-4">Ye Lim’s Portfolio </h2>
      <p className="text-gray-600 mb-6">
        아래 버튼을 누르면 유튜브 채널로 이동합니다.
      </p>
      <button
        onClick={handleClick}
        className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:brightness-110 transition-all duration-300 active:scale-95"
      >
        <span className="text-lg font-semibold">포트폴리오 보러가기</span>
        <span className="text-xl">🚀</span>
      </button>
    </div>
  );
}
