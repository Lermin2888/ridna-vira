import React from "react";

export default function GodCard({ god }: { god: any }) {
  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(god.prayer);
    utterance.lang = "uk-UA";
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="border rounded-2xl shadow p-4 flex flex-col gap-2">
      <div className="text-4xl">{god.icon}</div>
      <h2 className="text-xl font-bold">{god.name}</h2>
      <p><strong>Сфера:</strong> {god.sphere}</p>
      <p><strong>День/Час:</strong> {god.day}</p>
      <p><strong>Підношення:</strong> {god.offering}</p>
      <p><strong>Атрибути:</strong> {god.attributes}</p>
      <p className="italic">“{god.prayer}”</p>
      <button
        onClick={speak}
        className="mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        🔊 Прослухати молитву
      </button>
    </div>
  );
}
