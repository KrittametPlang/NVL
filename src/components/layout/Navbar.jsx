import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logoImg from '../../assets/nvl.jpg';

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-black/90 backdrop-blur-md text-white sticky top-0 z-50 border-b border-pink-600/30">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div 
          className="text-2xl font-black italic tracking-tighter flex items-center cursor-pointer select-none"
          onClick={() => navigate('/')}
        >
          <img 
            src={logoImg} 
            alt="NVL Gear Logo" 
            className="h-10 w-10 object-cover rounded-full mr-3 border-2 border-pink-500" 
          />
          <span className="text-neon-green mr-1">NVL</span>
          <span className="text-white">GEAR</span>
          <span className="text-pink-500 ml-1">SPORTS</span>
        </div>
        <div className="hidden md:flex space-x-8 font-bold text-sm uppercase tracking-widest">
          <Link to="/" className="hover:text-pink-500 transition-colors cursor-pointer">Home</Link>
          <Link to="/booking" className="hover:text-pink-500 transition-colors cursor-pointer">Booking</Link>
          <Link to="/rules" className="hover:text-pink-500 transition-colors cursor-pointer">Rules</Link>
        </div>
        <button className="bg-gradient-to-r from-pink-600 to-purple-600 px-5 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-[0_0_15px_var(--color-pink-500)]/50 cursor-pointer">
          LOGIN
        </button>
      </div>
    </nav>
  );
};