"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button"; // shadcn/uiコンポーネント

export default function EmotionLabelingApp() {
  // 選択された感情を配列で管理（マルチセレクト）
  const [selectedEmotions, setSelectedEmotions] = useState<string[]>([]);

  const emotions = [
    { id: 'lonely', label: "寂しい" },
    { id: 'sad', label: "悲しい" },
    { id: 'anxious', label: "不安" },
    { id: 'angry', label: "怒り" },
    { id: 'empty', label: "虚しい" },
    { id: 'painful', label: "苦しい" }
  ];

  const toggleEmotion = (label: string) => {
    setSelectedEmotions((prev) =>
      prev.includes(label)
        ? prev.filter((e) => e !== label)
        : [...prev, label]
    );
  };

  const resetSelection = () => setSelectedEmotions([]);

  return (
    <div className="min-h-screen w-full bg-[#f0f7ff] flex items-center justify-center p-6">
      {/* iOSガラス風カード */}
      <div className="w-full max-w-2xl bg-white/60 backdrop-blur-sm rounded-[40px] border border-[#bfdbfe]/40 shadow-sm p-10 flex flex-col items-center">
        
        <header className="mb-12 text-center">
          <h1 className="text-[#1e3a8a]/40 text-xs tracking-[0.3em] font-bold uppercase mb-4">
            Labeling Thoughts
          </h1>
          <p className="text-[#1e3a8a] text-xl font-medium">
            今、心にある感覚をすべて選んでください
          </p>
        </header>

        {/* 感情ボタンエリア: スマホで縦(flex-col)、PCで横(sm:flex-row) */}
        <div className="flex flex-wrap flex-col sm:flex-row justify-center gap-4 w-full mb-12">
          {emotions.map((emotion) => {
            const isSelected = selectedEmotions.includes(emotion.label);
            return (
              <Button
                key={emotion.id}
                onClick={() => toggleEmotion(emotion.label)}
                variant="outline"
                // 指示通りの条件分岐クラス
                className={`
                  h-14 px-8 rounded-full text-lg transition-all duration-300 shadow-sm
                  ${isSelected 
                    ? "bg-[#dbeafe] text-[#1e3a8a] border-transparent" 
                    : "bg-white text-[#1e3a8a]/70 border-[#bfdbfe] hover:bg-[#f0f7ff]"}
                `}
              >
                {emotion.label}
              </Button>
            );
          })}
        </div>

        {/* 選択後の表示エリア（透明感のあるボックス） */}
        {selectedEmotions.length > 0 && (
          <div className="w-full bg-white/40 border border-[#bfdbfe]/30 p-6 rounded-[30px] text-center mb-8">
            <p className="text-xs text-[#1e3a8a]/50 mb-2 uppercase tracking-widest">Selected Labels</p>
            <div className="flex flex-wrap justify-center gap-2">
              {selectedEmotions.map(label => (
                <span key={label} className="text-[#1e3a8a] font-bold">
                  {label}
                </span>
              ))}
            </div>
          </div>
        )}

        <Button
          variant="ghost"
          onClick={resetSelection}
          className="text-[#1e3a8a]/30 hover:text-[#1e3a8a]/60 hover:bg-transparent text-xs tracking-widest uppercase"
        >
          Reset Selection
        </Button>
      </div>
    </div>
  );
}
