"use client";

import React, { useState } from 'react';

export default function EmotionCheck() {
  const [selected, setSelected] = useState<string[]>([]);
  const [result, setResult] = useState<{ states: string[]; message: string } | null>(null);

  const emotions = ["不安", "寂しい", "イライラ", "もやもや", "疲れた", "悲しい"];
  const messages = [
    "これは今の反応。結論じゃないよ。",
    "今の気持ちは一時的なもの。",
    "判断しなくていい時間。グレーもあるよ",
    "これは状態なだけ。事実かな？",
    "今は波の中にいるだけ。波は凪になるよ",
    "今ちょっと揺れてるだけ、ゆっくりで大丈夫だよ",
    "今の気持ち、ちゃんとここに出せてえらいよ",
    "そう思っちゃう日もあるよ、大丈夫だよ",
    "今のこれは“全部の事実”じゃなくて、“今の気分”だよ",
    "不安になるくらい、大事に思ってるってことでもあるよ",
    "相手の今の余裕と、あなたの大切さは別の話だよ",
    "不安が出るのは、関係をちゃんと感じたい気持ちの裏返しだよ"
  ];

  const toggle = (emotion: string) => {
    if (selected.includes(emotion)) {
      setSelected(selected.filter((e) => e !== emotion));
    } else {
      setSelected([...selected, emotion]);
    }
  };

  const handleGo = () => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setResult({ states: selected, message: randomMessage });
  };

  const handleReset = () => {
    setSelected([]);
    setResult(null);
  };

  return (
    <div className="max-w-md mx-auto p-6 font-sans text-slate-800">
      <h3 className="text-center text-xl font-normal mb-8">今の気持ちチェック</h3>
      
      <p className="font-bold mb-4">今どんな感じ？（複数OK）</p>

      {/* ① 2列になるようにグリッド設定 */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {emotions.map((e) => (
          <button
            key={e}
            onClick={() => toggle(e)}
            className={`py-3 px-4 rounded-lg border transition-colors ${
              selected.includes(e)
              ? "bg-blue-500 text-white border-blue-600" // ② 選択時の色
              : "bg-white text-slate-700 border-slate-300 active:bg-slate-100"
            }`}
          >
            {e}
          </button>
        ))}
      </div>

      <button
        onClick={handleGo}
        className="w-full py-3 bg-white border-2 border-slate-800 font-bold rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none transition-all"
      >
        GO
      </button>

      <hr className="my-8 border-slate-200" />

      {result && (
        <div className="animate-in fade-in slide-in-from-top-4 duration-500">
          <p className="font-bold mb-2 text-lg">今の状態</p>
          <p className="mb-4 text-slate-600">
            {result.states.length > 0 ? result.states.join(" / ") : "（未選択）"}
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-6 italic text-blue-900">
            {result.message}
          </div>

          <button
            onClick={handleReset}
            className="text-sm text-slate-500 underline"
          >
            リセット
          </button>
        </div>
      )}
    </div>
  );
}
