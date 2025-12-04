import React from 'react';
import { cn } from '../../../utils/cn';

export const FeatureCard = ({ icon: Icon, title, desc, color, onClick }) => (
  <div 
    onClick={onClick}
    className={cn(
      "p-6 bg-neutral-900 rounded-xl border border-gray-800 hover:border-pink-500 transition-colors",
      onClick && "cursor-pointer hover:bg-neutral-800/50"
    )}
  >
    <Icon 
      className={cn("w-12 h-12 mx-auto mb-4", color)} 
    />
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-500 text-sm">{desc}</p>
  </div>
);