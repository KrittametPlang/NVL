import React from 'react';
import { MapPin, Facebook, Instagram } from 'lucide-react';

export const Footer = () => (
  <footer className="bg-black text-white border-t border-gray-800 py-12 mt-auto">
    <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
      <div>
        <div className="text-2xl font-black italic tracking-tighter mb-4">
           <span className="text-neon-green">NVL</span> GEAR SPORTS
        </div>
        <p className="text-gray-500 text-sm">
          ศูนย์รวม Beyblade ที่ใหญ่ที่สุดในย่าน พร้อมสนามมาตรฐานและการแข่งขันประจำสัปดาห์
        </p>
      </div>
      <div>
        <h4 className="font-bold text-pink-500 mb-4 uppercase tracking-wider">Contact Us</h4>
        <div className="space-y-2 text-gray-400 text-sm">
          <div className="flex items-center gap-2"><MapPin size={14} /> NVL Store, 2nd Floor</div>
          <div className="flex items-center gap-2"><Facebook size={14} /> NVL Gear Sports</div>
          <div className="flex items-center gap-2"><Instagram size={14} /> @nvl_beyblade</div>
        </div>
      </div>
      <div>
         <h4 className="font-bold text-cyan-500 mb-4 uppercase tracking-wider">Opening Hours</h4>
         <div className="space-y-2 text-gray-400 text-sm">
           <div className="flex justify-between"><span>Mon - Fri</span> <span>10:00 - 20:00</span></div>
           <div className="flex justify-between"><span>Sat - Sun</span> <span>09:00 - 21:00</span></div>
         </div>
      </div>
    </div>
  </footer>
);