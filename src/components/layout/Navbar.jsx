import React, { useState } from 'react'; // 1. เพิ่ม useState
import { useNavigate, Link } from 'react-router-dom';
import logoImg from '../../assets/nvl.jpg';

export const Navbar = () => {
  const navigate = useNavigate();
  // 2. สร้าง State สำหรับเก็บสถานะเปิด/ปิดเมนูมือถือ
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-black/90 backdrop-blur-md text-white sticky top-0 z-50 border-b border-pink-600/30">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* LOGO SECTION */}
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

        {/* DESKTOP MENU (แสดงเฉพาะจอใหญ่กว่า md) */}
        <div className="hidden md:flex space-x-8 font-bold text-sm uppercase tracking-widest">
          <Link to="/" className="hover:text-pink-500 transition-colors cursor-pointer">Home</Link>
          <Link to="/booking" className="hover:text-pink-500 transition-colors cursor-pointer">Booking</Link>
          <Link to="/rules" className="hover:text-pink-500 transition-colors cursor-pointer">Rules</Link>
        </div>

        {/* LOGIN BUTTON (DESKTOP) & HAMBURGER (MOBILE) WRAPPER */}
        <div className="flex items-center gap-4">
          
          {/* ปุ่ม Login แสดงตลอด หรือจะซ่อนในมือถือก็ได้ (อันนี้เลือกให้แสดงตลอด) */}
          <button className="hidden md:block bg-gradient-to-r from-pink-600 to-purple-600 px-5 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-[0_0_15px_var(--color-pink-500)]/50 cursor-pointer">
            LOGIN
          </button>

          {/* 3. ปุ่ม Hamburger สำหรับมือถือ (แสดงเฉพาะจอเล็กกว่า md) */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              // Icon X (Close)
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Icon Hamburger (Menu)
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* 4. MOBILE MENU DROPDOWN (ส่วนที่เพิ่มมาใหม่) */}
      {/* จะแสดงเมื่อ State เป็น true เท่านั้น */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-b border-pink-600/30 backdrop-blur-xl absolute top-full left-0 w-full flex flex-col items-center py-6 space-y-6 animate-fadeIn">
          <Link 
            to="/" 
            className="text-lg font-bold uppercase tracking-widest hover:text-pink-500"
            onClick={() => setIsMobileMenuOpen(false)} // กดแล้วปิดเมนู
          >
            Home
          </Link>
          <Link 
            to="/booking" 
            className="text-lg font-bold uppercase tracking-widest hover:text-pink-500"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Booking
          </Link>
          <Link 
            to="/rules" 
            className="text-lg font-bold uppercase tracking-widest hover:text-pink-500"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Rules
          </Link>
          
          {/* ปุ่ม Login สำหรับมือถือ (เผื่ออยากให้ปุ่มใหญ่อยู่ในเมนู) */}
          <button className="bg-gradient-to-r from-pink-600 to-purple-600 px-8 py-3 rounded-full font-bold text-sm shadow-[0_0_15px_var(--color-pink-500)]/50">
            LOGIN
          </button>
        </div>
      )}
    </nav>
  );
};
