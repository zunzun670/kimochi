"use client";

import React, { useState } from 'react';

export default function EmotionApp() {
  const [status, setStatus] = useState("今の気分はどう？");
  const [color, setColor] = useState("bg-slate-50");

  const emotions = [
    { label: "るんるん", msg: "最高だね！その調子✨", bg: "bg-pink-100", btn: "bg-pink-400" },
    { label: "のんびり", msg: "いい感じ。自分を労わってね☕️", bg: "bg-green-100", btn: "bg-green-400" },
    { label: "もやもや", msg: "そんな時もあるよ。無理しないで🌱", bg: "bg-blue-100", btn: "bg-blue-400" },
    { label: "お疲れさま", msg: "今日はもう頑張った！ゆっくり休もう🌙", bg: "bg-purple-100", btn: "bg-purple-400" },
  ];

  return (
    <div className={`min-h-screen flex items-center justify-center transition-colors duration-500 ${color} p-6`}>
      <div className="max-w-sm w-full bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 text-center border border-white">
        <h1 className="text-2xl font-bold text-gray-700 mb-8">My Emotion</h1>
        
        <div className="mb-10 p-6 rounded-2xl bg-white shadow-inner min-h-[100px] flex items-center justify-center">
          <p className="text-xl font-medium text-gray-600 leading-relaxed">
            {status}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {emotions.map((e) => (
            <button
              key={e.label}
              onClick={() => {
                setStatus(e.msg);
                setColor(e.bg);
              }}
              className={`${e.btn} text-white font-bold py-4 px-2 rounded-2xl shadow-sm hover:scale-105 active:scale-95 transition-all duration-200`}
            >
              {e.label}
            </button>
          ))}
        </div>

        <button 
          onClick={() => { setStatus("今の気分はどう？"); setColor("bg-slate-50"); }}
          className="mt-8 text-sm text-gray-400 hover:text-gray-600 underline underline-offset-4"
        >
          リセット
        </button>
      </div>
    </div>
  );
}
