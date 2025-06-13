"use client";

import { useState } from "react";
import { words_01 } from "@/lib/words_01";
import { words_02 } from "@/lib/words_02";
import { words_03 } from "@/lib/words_03";
import { words_04 } from "@/lib/words_04";
import { words_05 } from "@/lib/words_05";
import QuizPage from "@/components/quizpage";

const units = {
  "기출 어휘 1": words_01,
  "기출 어휘 2": words_02,
  "기출 어휘 3": words_03,
  "기출 어휘 4": words_04,
  "기출 어휘 5": words_05,
};

export default function HomePage() {
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);

  if (selectedUnit) {
    return (
      <QuizPage
        words={units[selectedUnit]}
        onBack={() => setSelectedUnit(null)}
      />
    );
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">JLPT N3 퀴즈</h1>
      <p className="mb-4 text-center text-gray-600">풀고 싶은 유닛을 선택하세요:</p>
      <div className="space-y-2">
        {Object.keys(units).map((unitName) => (
          <button
            key={unitName}
            onClick={() => setSelectedUnit(unitName)}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            {unitName}
          </button>
        ))}
      </div>
    </div>
  );
}
