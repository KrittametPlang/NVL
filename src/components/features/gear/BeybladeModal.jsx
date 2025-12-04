import React from 'react';
import { X, Shield, Sword, Zap, Activity } from 'lucide-react';
import { cn } from '../../../utils/cn';

export const BeybladeModal = ({ beyblade, onClose }) => {
  if (!beyblade) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative z-10 w-full max-w-4xl bg-neutral-900 rounded-2xl border border-gray-800 overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white bg-black/50 rounded-full z-20 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Image Section */}
          <div className="p-8 md:p-12 bg-gradient-to-br from-neutral-800 to-neutral-950 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-500/20 via-transparent to-transparent opacity-50" />
            <img 
              src={beyblade.image} 
              alt={beyblade.name}
              className="w-full max-w-[300px] object-contain drop-shadow-[0_0_50px_rgba(0,0,0,0.5)] relative z-10"
            />
          </div>

          {/* Info Section */}
          <div className="p-8">
            <div className="mb-6">
              <span className={cn(
                "inline-block text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3",
                beyblade.type === 'Attack' && "bg-red-500/20 text-red-400",
                beyblade.type === 'Defense' && "bg-green-500/20 text-green-400",
                beyblade.type === 'Stamina' && "bg-yellow-500/20 text-yellow-400",
                beyblade.type === 'Balance' && "bg-purple-500/20 text-purple-400",
              )}>
                {beyblade.type} Type
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white italic tracking-tighter mb-4">
                {beyblade.name}
              </h2>
              <p className="text-gray-400 leading-relaxed">
                {beyblade.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <StatBar icon={Sword} label="Attack" value={beyblade.stats.attack} color="text-red-400" bg="bg-red-500" />
              <StatBar icon={Shield} label="Defense" value={beyblade.stats.defense} color="text-green-400" bg="bg-green-500" />
              <StatBar icon={Activity} label="Stamina" value={beyblade.stats.stamina} color="text-yellow-400" bg="bg-yellow-500" />
              <StatBar icon={Zap} label="Dash" value={beyblade.stats.dash} color="text-cyan-400" bg="bg-cyan-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatBar = ({ icon: Icon, label, value, color, bg }) => (
  <div className="bg-neutral-950 p-4 rounded-lg border border-gray-800">
    <div className="flex items-center gap-2 mb-2">
      <Icon size={16} className={color} />
      <span className="text-sm font-bold text-gray-300">{label}</span>
    </div>
    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
      <div 
        className={`h-full ${bg} transition-all duration-1000 ease-out`}
        style={{ width: `${(value / 10) * 100}%` }}
      />
    </div>
    <div className="text-right mt-1">
      <span className={`text-xs font-bold ${color}`}>{value}/10</span>
    </div>
  </div>
);
