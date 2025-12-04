import React from 'react';
import { X, User, Star } from 'lucide-react';

export const StaffModal = ({ staff, onClose }) => {
  if (!staff) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative z-10 w-full max-w-2xl bg-neutral-900 rounded-2xl border border-gray-800 overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white bg-black/50 rounded-full z-20 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="grid md:grid-cols-2">
          <div className="aspect-[3/4] md:aspect-auto relative">
            <img 
              src={staff.image} 
              alt={staff.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent md:hidden" />
          </div>

          <div className="p-8 flex flex-col justify-center">
            <div className="mb-6">
              <h2 className="text-3xl font-black text-white italic tracking-tighter mb-1">
                {staff.name}
              </h2>
              <p className="text-pink-500 text-lg font-bold uppercase tracking-widest mb-4">
                "{staff.nickname}"
              </p>
              <p className="text-gray-400 leading-relaxed">
                {staff.description}
              </p>
            </div>

            <div className="bg-neutral-950 p-4 rounded-lg border border-gray-800">
              <div className="flex items-center gap-2 mb-2 text-neon-green">
                <Star size={18} />
                <span className="text-sm font-bold uppercase tracking-wider">Specialty</span>
              </div>
              <p className="text-white font-medium">{staff.specialty}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
