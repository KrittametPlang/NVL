export const MOCK_DATA = {
  stadiums: [
    {
      id: 1,
      name: "Standard X Stadium",
      type: "1v1 Battle",
      price: "50฿ / ชม.",
      image: "linear-gradient(135deg, #ff00cc 0%, #333 100%)", 
      features: ["Extreme Line", "Standard Size", "เหมาะสำหรับซ้อมแข่ง"]
    },
    {
      id: 2,
      name: "Wide Stadium (3-Player)",
      type: "Battle Royale",
      price: "80฿ / ชม.",
      image: "linear-gradient(135deg, #00ffff 0%, #333 100%)",
      features: ["พื้นที่กว้าง", "เล่นได้ 3 คน", "Party Mode"]
    },
    {
      id: 3,
      name: "Tournament Stage",
      type: "Professional",
      price: "100฿ / ชม.",
      image: "linear-gradient(135deg, #39ff14 0%, #333 100%)",
      features: ["ไฟสนาม", "อัฒจันทร์จำลอง", "Live Camera"]
    }
  ],
  timeSlots: [
    "10:00 - 11:00", "11:00 - 12:00", "13:00 - 14:00", 
    "14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00", 
    "17:00 - 18:00", "18:00 - 19:00", "19:00 - 20:00"
  ],
  dates: [
    { day: "Today", date: "2 Dec" },
    { day: "Wed", date: "3 Dec" },
    { day: "Thu", date: "4 Dec" },
    { day: "Fri", date: "5 Dec" },
    { day: "Sat", date: "6 Dec" },
  ]
};