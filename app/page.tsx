"use client";

import React, { useState } from 'react';

export default function EmotionApp() {
  const [status, setStatus] = useState("今の感情を選択してください");
  const [color, setColor] = useState("bg-slate-50");

  // ぴよさんが思考を整理するために必要な、本来の感情ラベル
  const emotions = [
    { label: "寂しい", msg: "寂しい", bg: "bg-blue-50", btn: "bg-blue-500" },
    { label: "悲しい", msg: "悲しい", bg: "bg-indigo-50", btn: "bg-indigo-500" },
    { label: "不安", msg: "不安", bg: "bg-slate-100", btn: "bg-slate-600" },
    { label: "怒り", msg: "怒り", bg: "bg-red-50", btn: "bg-red-500" },
    { label: "虚しい", msg: "虚しい", bg: "bg-gray-100", btn: "bg-gray-500" },
    { label: "苦しい", msg: "苦しい", bg: "bg-zinc-100", btn: "bg-zinc-700" },
  ];

  return (
    <div className={`min-h-screen flex items-center justify-center transition-colors duration-700 ${color} p-4`}>
      <div className="max-w-md w-full bg-white/80 backdrop-blur-xl rounded-[40px] shadow-2xl p-10 text-center border border-white">
        <h1 className="text-sm font-semibold text-gray-400 tracking-[0.2em] mb-12 uppercase">Labeling Thoughts</h1>
        
        <div className="mb-12 min-h-[80px] flex items-center justify-center">
          <p className="text-3xl font-bold text-gray-800 tracking-tight">
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
              className={`${e.btn} text-white font-medium py-5 rounded-3xl shadow-lg hover:brightness-110 active:scale-95 transition-all duration-200 text-lg`}
            >
              {e.label}
            </button>
          ))}
        </div>

        <button 
          onClick={() => { setStatus("今の感情を選択してください"); setColor("bg-slate-50"); }}
          className="mt-12 text-xs text-gray-400 hover:text-gray-600 transition-colors tracking-widest uppercase"
        >
          Reset View
        </button>
      </div>
    </div>
  );
}
