import React, { useState, useEffect } from "react";
import GodCard from "./components/GodCard";
import data from "./data/gods.json";
import Calendar from "./components/Calendar";
import { askNotificationPermission, showGodReminder } from "./utils/notifications";

export default function App() {
  const [search, setSearch] = useState("");

  useEffect(() => {
    askNotificationPermission();
    showGodReminder(data);
  }, []);

  const filtered = data.filter(
    (g) =>
      g.name.toLowerCase().includes(search.toLowerCase()) ||
      g.sphere.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Боги Рідної Віри</h1>
      <input
        type="text"
        placeholder="Пошук за іменем або сферою..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filtered.map((god, idx) => (
          <GodCard key={idx} god={god} />
        ))}
      </div>
      <Calendar />
    </div>
  );
}
