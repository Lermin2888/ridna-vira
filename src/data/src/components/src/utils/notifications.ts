export function askNotificationPermission() {
  if ("Notification" in window && Notification.permission !== "granted") {
    Notification.requestPermission();
  }
}

export function showGodReminder(gods: any[]) {
  if (Notification.permission !== "granted") return;

  const today = new Date();
  const dd = today.getDate();
  const mm = today.getMonth() + 1;

  gods.forEach(god => {
    const dates = god.day.split(",").map(d => d.trim());

    dates.forEach(dateStr => {
      const parts = dateStr.split(" ");
      if (parts.length !== 2) return;

      const [day, monthName] = parts;
      const map: Record<string, number> = {
        "січня": 1, "лютого": 2, "березня": 3,
        "квітня": 4, "травня": 5, "червня": 6,
        "липня": 7, "серпня": 8, "вересня": 9,
        "жовтня": 10, "листопада": 11, "грудня": 12
      };

      const godDay = parseInt(day);
      const godMonth = map[monthName.toLowerCase()];

      if (godDay === dd && godMonth === mm) {
        new Notification(`Сьогодні день ${god.name}`, {
          body: `Не забудь піднести: ${god.offering}`,
          icon: "/icons/bell.png"
        });
      }
    });
  });
}
