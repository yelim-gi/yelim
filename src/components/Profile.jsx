import React from "react";
import profileImg from "../assets/KakaoTalk_20240513_210758279.jpg";

export default function Profile() {
  return (
    <section className="flex flex-col items-center text-center px-6 py-10 bg-[#fef7ec] rounded-2xl mb-10">
<img
  src={profileImg}
  alt="Profile"
  className="rounded-full mb-4 shadow-lg object-cover"
  style={{ width: "250px", height: "250px" }}
/>
      <h1 className="text-3xl font-bold mb-2">Ye-Lim Kang</h1>
      <p className="text-gray-700 max-w-md leading-relaxed">
        배움을 좋아하고, 경험을 즐기는 사람입니다 :) <br />
        사람들을 좋아하고, 평범한데 어떻게 보면 괴짜입니다.
      </p>
      <p className="mt-2 text-sm text-gray-400">※ 고양이 좋아함</p>
    </section>
  );
}
