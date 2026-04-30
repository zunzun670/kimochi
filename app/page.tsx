"use client";

import React, { useMemo, useState } from "react";

export default function EmotionApp() {
  const [selectedEmotions, setSelectedEmotions] = useState([]);

  const comments = [
    "それは今の波。ずっと同じ強さでは続かない。",
    "感情は通り過ぎるもの。抱え込まなくていい。",
    "複雑な気持ちも、あなたの大事な一部。",
    "今の状態を認識できた時点で前進している。",
    "気持ちは一色じゃない。混ざっていて当然。",
    "急いで結論を出さなくても大丈夫。",
    "感情を見つめること自体がセルフケア。",
    "今日の自分を責めるより、観察してみる。",
    "どの感情にも意味がある。",
    "回復は静かに進んでいく。"
  ];

  const emotions = [
    {
      id: "happy",
      label: "うれしい",
      emoji: "✨",
      active:
        "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-xl border-transparent",
    },
    {
      id: "sad",
      label: "悲しい",
      emoji: "🌧️",
      active:
        "bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-xl border-transparent",
    },
    {
      id: "angry",
      label: "イライラ",
      emoji: "🔥",
      active:
        "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-xl border-transparent",
    },
    {
      id: "anxious",
      label: "不安",
      emoji: "🌙",
      active:
        "bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-xl border-transparent",
    },
    {
      id: "tired",
      label: "疲れた",
      emoji: "☁️",
      active:
        "bg-gradient-to-r from-violet-500 to-indigo-500 text-white shadow-xl border-transparent",
    },
    {
      id: "calm",
      label: "落ち着く",
      emoji: "🍃",
      active:
        "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-xl border-transparent",
    },
  ];

  const toggleEmotion = (id) => {
    setSelectedEmotions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const message = useMemo(() => {
    if (selectedEmotions.length === 0) return "";
    return comments[selectedEmotions.length % comments.length];
  }, [selectedEmotions]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#fff9fc] via-[#f8fbff] to-[#eef8ff] flex items-center justify-center px-6 py-12">
      <section className="w-full max-w-3xl rounded-[36px] bg-white/70 backdrop-blur-2xl border border-white shadow-2xl p-8 md:p-10">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
            今日の気持ち
          </h1>
          <p className="text-slate-500 mt-3">
            今の自分に近いものを自由に選んでください
          </p>
        </div>

        {/* ボタンを離して配置 */}
        <div className="flex flex-wrap gap-4 justify-center">
          {emotions.map((emotion) => {
            const selected = selectedEmotions.includes(emotion.id);

            return (
              <button
                key={emotion.id}
                onClick={() => toggleEmotion(emotion.id)}
                className={`
                  min-w-[140px] px-6 py-4 rounded-3xl border
                  transition-all duration-300 ease-out
                  hover:-translate-y-1 hover:scale-[1.03]
                  backdrop-blur-md
                  ${
                    selected
                      ? emotion.active
                      : "bg-white/20 border-white/40 text-slate-700"
                  }
                `}
              >
                <div className="text-2xl mb-1">{emotion.emoji}</div>
                <div className="font-semibold">{emotion.label}</div>
              </button>
            );
          })}
        </div>

        {selectedEmotions.length > 0 && (
          <div className="mt-10 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/60 p-6 shadow-lg">
            <h2 className="text-lg font-semibold text-slate-700 mb-3">
              あなたへのメッセージ
            </h2>
            <p className="text-slate-600 leading-relaxed">{message}</p>
          </div>
        )}
      </section>
    </main>
  );
}
