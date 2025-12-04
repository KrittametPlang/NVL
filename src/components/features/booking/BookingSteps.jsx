import React from 'react';
import { Trophy, Calendar, Clock } from 'lucide-react';

export const StepStadium = ({ stadiums, selectedId, onSelect }) => (
  <div className="grid md:grid-cols-3 gap-6 animate-fadeIn">
    {stadiums.map((stadium) => (
      <div 
        key={stadium.id}
        onClick={() => onSelect(stadium)}
        className={`bg-neutral-900 border-2 rounded-xl p-4 cursor-pointer transition-all duration-300 hover:scale-105 group relative overflow-hidden
          ${selectedId === stadium.id ? 'border-pink-500 shadow-[0_0_20px_var(--color-pink-500)]/30' : 'border-gray-800 hover:border-pink-500/50'}
        `}
      >
        <div 
          className="h-32 rounded-lg mb-4 flex items-center justify-center"
          style={{ background: stadium.image }}
        >
          <Trophy size={40} className="text-white drop-shadow-lg" />
        </div>
        <h3 className="text-xl font-bold text-white mb-1">{stadium.name}</h3>
        <p className="text-pink-400 font-mono text-sm mb-3">{stadium.type}</p>
        <div className="space-y-1 mb-4">
          {stadium.features.map((feat, i) => (
            <div key={i} className="flex items-center text-xs text-gray-400">
              <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2"></div>
              {feat}
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-800">
          <span className="text-neon-green font-bold text-lg">{stadium.price}</span>
          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedId === stadium.id ? 'border-pink-500 bg-pink-500' : 'border-gray-600'}`}>
            {selectedId === stadium.id && <div className="w-2 h-2 bg-white rounded-full"></div>}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export const StepDateTime = ({ dates, timeSlots, selectedDate, selectedTime, onSelectDate, onSelectTime }) => (
  <div className="space-y-8 animate-fadeIn">
    <div>
      <h3 className="text-gray-400 font-bold mb-4 flex items-center gap-2"><Calendar size={18}/> SELECT DATE</h3>
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {dates.map((d, i) => (
          <button
            key={i}
            onClick={() => onSelectDate(d)}
            className={`min-w-[80px] p-3 rounded-xl border flex flex-col items-center justify-center transition-all cursor-pointer
              ${selectedDate?.date === d.date ? 'bg-pink-600 border-pink-600 text-white' : 'bg-neutral-900 border-gray-700 text-gray-400 hover:border-pink-500/50'}
            `}
          >
            <span className="text-xs font-bold opacity-70">{d.day}</span>
            <span className="text-lg font-black">{d.date}</span>
          </button>
        ))}
      </div>
    </div>

    <div>
      <h3 className="text-gray-400 font-bold mb-4 flex items-center gap-2"><Clock size={18}/> SELECT TIME SLOT</h3>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
        {timeSlots.map((time, i) => (
          <button
            key={i}
            onClick={() => onSelectTime(time)}
            disabled={!selectedDate}
            className={`py-3 rounded-lg text-sm font-bold border transition-all cursor-pointer
              ${selectedTime === time 
                ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400 shadow-[0_0_10px_var(--color-cyan-500)]/30' 
                : 'bg-neutral-900 border-gray-800 text-gray-500 hover:bg-gray-800'}
              ${!selectedDate && 'opacity-50 cursor-not-allowed'}
            `}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  </div>
);

export const StepSummary = ({ selections }) => (
  <div className="bg-neutral-900 border border-pink-500/30 rounded-2xl p-8 max-w-md mx-auto animate-fadeIn relative overflow-hidden">
    <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/10 rounded-full blur-xl"></div>
    <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-800 pb-4">BOOKING SUMMARY</h3>
    <div className="space-y-4 mb-8">
      <div className="flex justify-between"><span className="text-gray-400">Stadium</span><span className="text-white font-bold">{selections.stadium?.name}</span></div>
      <div className="flex justify-between"><span className="text-gray-400">Date</span><span className="text-white font-bold">{selections.date?.day}, {selections.date?.date}</span></div>
      <div className="flex justify-between"><span className="text-gray-400">Time</span><span className="text-cyan-400 font-bold">{selections.time}</span></div>
      <div className="flex justify-between pt-4 border-t border-gray-800">
        <span className="text-gray-400">Total Price</span>
        <span className="text-neon-green font-black text-xl">{selections.stadium?.price}</span>
      </div>
    </div>
    <div className="bg-gray-800/50 p-4 rounded-lg text-xs text-gray-400 leading-relaxed">
      *กรุณามาก่อนเวลาจอง 10 นาที<br/>*หากมาช้ากว่า 15 นาที ระบบจะตัดสิทธิ์อัตโนมัติ
    </div>
  </div>
);