import React from 'react';
import { cn } from '../../../utils/cn';

export const BeybladeCard = ({ beyblade, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group relative bg-neutral-900 rounded-xl border border-gray-800 overflow-hidden cursor-pointer hover:border-pink-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]"
    >
      <div className="aspect-square p-6 flex items-center justify-center bg-gradient-to-b from-neutral-800/50 to-transparent">
        <img 
          src={beyblade.image} 
          alt={beyblade.name}
          className="w-full h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className={cn(
            "text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider",
            beyblade.type === 'Attack' && "bg-red-500/20 text-red-400",
            beyblade.type === 'Defense' && "bg-green-500/20 text-green-400",
            beyblade.type === 'Stamina' && "bg-yellow-500/20 text-yellow-400",
            beyblade.type === 'Balance' && "bg-purple-500/20 text-purple-400",
          )}>
            {beyblade.type}
          </span>
        </div>
        <h3 className="text-lg font-bold text-white italic truncate">{beyblade.name}</h3>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};
