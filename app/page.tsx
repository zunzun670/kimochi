"use client";

import React, { useMemo, useState } from "react";

export default function EmotionApp() {
  const [selectedEmotions, setSelectedEmotions] = useState([]);

  const comments = [
    "それは今の波。ずっと同じ強さでは続かない。",
    "感情は整理するものというより、通り過ぎるもの。",
    "複雑な気持ちを持てるのは、それだけ真剣に向き合っているから。",
    "今の状態に名前をつけられた時点で、一歩進んでいる。",
    "気持ちは一色じゃない。混ざっていて当然。",
    "急いで結論を出さなくていい日もある。",
    "しんどさの中にも、ちゃんと回復の流れはある。",
    "感情を見つめること自体がセルフケア。",
    "今日の自分を責めるより、観察してみる。",
    "どの感情も、あなたの一部として意味がある。"
  ];

  const emotions = [
    {
      id: "happy",
      label: "うれしい",
      emoji: "✨",
      base: "bg-pink-100 text-pink-700 border-pink-200",
      active:
        "bg-gradient-to-r from-pink-500 to-rose-500 text-white border-transparent shadow-xl scale-105",
    },
    {
      id: "sad",
      label: "悲しい",
      emoji: "🌧️",
      base: "bg-sky-100 text-sky-700 border-sky-200",
      active:
        "bg-gradient-to-r from-sky-500 to-cyan-500 text-white border-transparent shadow-xl scale-105",
    },
    {
      id: "angry",
      label: "イライラ",
      emoji: "🔥",
      base: "bg-orange-100 text-orange-700 border-orange-200",
      active:
        "bg-gradient-to-r from-orange-500 to-red-500 text-white border-transparent shadow-xl scale-105",
    },
    {
      id: "anxious",
      label: "不安",
      emoji: "🌙",
      base: "bg-amber-100 text-amber-700 border-amber-200",
      active:
        "bg-gradient-to-r from-amber-500 to-yellow-500 text-white border-transparent shadow-xl scale-105",
    },
    {
      id: "tired",
      label: "疲れた",
      emoji: "☁️",
      base: "bg-violet-100 text-violet-700 border-violet-200",
      active:
        "bg-gradient-to-r from-violet-500 to-indigo-500 text-white border-transparent shadow-xl scale-105",
    },
    {
      id: "calm",
      label: "落ち着く",
      emoji: "🍃",
      base: "bg-emerald-100 text-emerald-700 border-emerald-200",
      active:
        "bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-transparent shadow-xl scale-105",
    },
  ];

  const toggleEmotion = (id) => {
    setSelectedEmotions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const message = useMemo(() => {
    if (selectedEmotions.length === 0) return "";
    const index = selectedEmotions.length % comments.length;
    return comments[index];
  }, [selectedEmotions]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#fff7fb] via-[#f8fbff] to-[#eef7ff] flex items-center justify-center px-6">
      <section className="w-full max-w-2xl rounded-[32px] bg-white/80 backdrop-blur-xl border border-white shadow-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800">
            今日の気持ちを選んでください
          </h1>
          <p className="text-slate-500 mt-2">
            複数選択OK・今の自分に近いものをタップ
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {emotions.map((emotion) => {
            const selected = selectedEmotions.includes(emotion.id);

            return (
              <button
                key={emotion.id}
                onClick={() => toggleEmotion(emotion.id)}
                className={`
                  relative rounded-3xl border px-5 py-6 text-left
                  transition-all duration-300 ease-out
                  hover:-translate-y-1 hover:shadow-lg
                  ${selected ? emotion.active : emotion.base}
                `}
              >
                <div className="text-2xl mb-2">{emotion.emoji}</div>
                <div className="font-semibold text-base">{emotion.label}</div>

                {selected && (
                  <span className="absolute top-3 right-3 text-sm font-bold">
                    ✓
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {selectedEmotions.length > 0 && (
          <div className="mt-8 rounded-3xl bg-white shadow-inner border border-slate-100 p-6">
            <h2 className="text-lg font-semibold text-slate-700 mb-3">
              今のあなたへ
            </h2>
            <p className="text-slate-600 leading-relaxed">{message}</p>
          </div>
        )}
      </section>
    </main>
  );
}
