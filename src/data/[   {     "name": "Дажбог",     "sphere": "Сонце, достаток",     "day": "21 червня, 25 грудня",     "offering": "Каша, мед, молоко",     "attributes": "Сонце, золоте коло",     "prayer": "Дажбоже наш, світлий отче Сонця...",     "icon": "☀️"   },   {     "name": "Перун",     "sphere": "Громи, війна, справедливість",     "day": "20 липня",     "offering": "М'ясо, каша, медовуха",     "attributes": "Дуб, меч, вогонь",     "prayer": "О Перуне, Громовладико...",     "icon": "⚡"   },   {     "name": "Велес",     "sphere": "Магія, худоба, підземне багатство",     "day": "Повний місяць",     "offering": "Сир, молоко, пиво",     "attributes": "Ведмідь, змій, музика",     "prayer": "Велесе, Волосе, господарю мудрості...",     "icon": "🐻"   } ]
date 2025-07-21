import React from "react";
import data from "../data/gods.json";

const Calendar = () => {
  const getEvents = () => {
    return data.flatMap((god) => {
      const dates = god.day.split(",").map(d => d.trim());
      return dates.map((date) => ({
        name: god.name,
        icon: god.icon,
        date
      }));
    });
  };

  const events = getEvents();

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Календар Свят</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {events.map((event, idx) => (
          <li
            key={idx}
            className="border rounded p-3 shadow hover:bg-gray-100"
          >
            <div className="text-lg">📅 {event.date}</div>
            <div className="text-xl">{event.icon} {event.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calendar;
