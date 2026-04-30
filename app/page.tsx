"use client";

import React, { useState } from "react";

export default function EmotionApp() {
  const [status, setStatus] = useState("今の感情を選択してください");
  const [color, setColor] = useState("bg-slate-50");
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [message, setMessage] = useState("");

  const comments = [
    "それは今の波だよ。波のあとには、ちゃんと凪がくる。",
    "感情は天気みたいなもの。ずっと同じ空ではいられない。",
    "今つらくても、その感情を感じられていること自体が前に進んでる証拠。",
    "心がざわつく日は、無理に整えなくていい。少し休めばいい。",
    "その気持ちを否定しなくていい。ちゃんとそこにいていい感情だよ。",
    "大丈夫じゃない日があっても、それは弱さじゃない。",
    "今のあなたに必要なのは答えじゃなくて、少しのやさしさかもしれない。",
    "気持ちは流れていくもの。今日の重さが明日も同じとは限らない。",
    "立ち止まることは後退じゃない。整えるための時間。",
    "感情を言葉にできた時点で、もうひとつ整理が進んでいる。"
  ];

  const emotions = [
    { label: "😊 うれしい", color: "bg-pink-100", active: "bg-pink-400 text-white" },
    { label: "😢 悲しい", color: "bg-blue-100", active: "bg-blue-400 text-white" },
    { label: "😡 イライラ", color: "bg-red-100", active: "bg-red-400 text-white" },
    { label: "😰 不安", color: "bg-yellow-100", active: "bg-yellow-400 text-white" },
    { label: "😴 疲れた", color: "bg-purple-100", active: "bg-purple-400 text-white" },
  ];

  const handleEmotion = (emotion) => {
    setStatus(`${emotion.label} を感じているんだね`);
    setColor(emotion.color);
    setSelectedEmotion(emotion.label);
    const randomComment =
      comments[Math.floor(Math.random() * comments.length)];
    setMessage(randomComment);
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-all duration-500 ${color}`}
    >
      <div className="bg-white/90 backdrop-blur-sm shadow-2xl rounded-3xl p-8 max-w-md w-full text-center border border-white">
        <h1 className="text-2xl font-bold mb-3 text-slate-700">
          🌷 Emotion App
        </h1>
        <p className="text-slate-600 mb-6">{status}</p>

        <div className="grid grid-cols-2 gap-3 mb-6">
          {emotions.map((emotion, index) => (
            <button
              key={index}
              onClick={() => handleEmotion(emotion)}
              className={`px-4 py-3 rounded-2xl font-medium shadow-md transition-all duration-300 hover:scale-105 ${
                selectedEmotion === emotion.label
                  ? emotion.active
                  : `${emotion.color} text-slate-700`
              }`}
            >
              {emotion.label}
            </button>
          ))}
        </div>

        {message && (
          <div className="bg-slate-50 rounded-2xl p-5 shadow-inner border border-slate-100">
            <p className="text-slate-700 leading-relaxed">{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}
