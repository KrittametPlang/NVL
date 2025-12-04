import React from 'react';
import { cn } from '@/utils/cn.js';

export const PrimaryButton = ({ children, onClick, disabled, icon: Icon, className }) => (
  <button 
    onClick={onClick}
    disabled={disabled}
    className={cn(
      "px-8 py-3 bg-pink-600 text-white font-bold rounded-lg",
      "hover:bg-pink-500 transition-colors flex items-center gap-2 justify-center",
      "disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
      className
    )}
  >
    {children} 
    {Icon && <Icon size={18}/>}
  </button>
);