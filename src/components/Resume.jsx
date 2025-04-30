import React from "react";

export default function Resume() {
  return (
    <div className="min-h-screen bg-white px-4 py-16 flex justify-center items-start">
      <div className="w-full max-w-3xl text-gray-800 text-center">
        <h1 className="text-3xl font-bold mb-10 pb-2 border-b">간단한 자기소개</h1>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-3 border-b inline-block">장점과 단점</h2>
          <p className="leading-relaxed mt-4">
            장점: 협업 시 유연하고 조율 능력이 뛰어납니다.<br />
            단점: 신중함이 지나쳐 실행이 늦어질 수 있으며, 이를 개선 중입니다.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-3 border-b inline-block">역량</h2>
          <p className="leading-relaxed mt-4">
            기획, 디자인, 영상 편집 등 다양한 툴에 대한 숙련도가 있으며,<br />
            문제 발생 시 빠르게 구조를 파악하고 개선하는 역량이 있습니다.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-3 border-b inline-block">경력</h2>
          <p className="leading-relaxed mt-4">
            졸업준비위원회 총무 및 일정 총괄<br />
            태국 굿즈 공동구매 및 통관 실무 경험<br />
            BTS 관련 유튜브 영상 제작 (총 69만 조회수)
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-3 border-b inline-block">자격증</h2>
          <p className="leading-relaxed mt-4">
            컴퓨터활용능력 1급 (준비 중)<br />
            GTQ 포토샵, 일러스트 1급 (준비 중)<br />
            ITQ 엑셀 (예정)
          </p>
        </section>
      </div>
    </div>
  );
}
