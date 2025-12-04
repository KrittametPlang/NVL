import React from 'react';

export const ProgressBar = ({ currentStep, totalSteps = 3 }) => (
  <div className="flex justify-between mb-8 relative max-w-md mx-auto">
    <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-800 -z-10"></div>
    {Array.from({ length: totalSteps }, (_, i) => i + 1).map((s) => (
      <div 
        key={s} 
        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 
        ${currentStep >= s ? 'bg-pink-600 text-white shadow-[0_0_10px_var(--color-pink-500)]' : 'bg-gray-800 text-gray-500'}`}
      >
        {s}
      </div>
    ))}
  </div>
);