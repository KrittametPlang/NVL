import React from 'react';

export const StaffCard = ({ staff, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group relative bg-neutral-900 rounded-xl border border-gray-800 overflow-hidden cursor-pointer hover:border-pink-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]"
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={staff.image} 
          alt={staff.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-6 pt-12">
        <h3 className="text-xl font-bold text-white italic">{staff.name}</h3>
        <p className="text-pink-500 text-sm font-bold uppercase tracking-wider">{staff.nickname}</p>
      </div>
    </div>
  );
};
