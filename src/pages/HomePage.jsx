import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap, User, Trophy, Star } from 'lucide-react';
import { FeatureCard } from '../components/features/home/FeatureCard';
import { BannerSlider } from '../components/features/home/BannerSlider';

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="relative overflow-hidden bg-neutral-900 min-h-[500px] flex items-center justify-center text-center px-4">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-pink-600 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-cyan-500 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1 border border-pink-500/50 rounded-full bg-black/50 text-pink-400 text-xs font-bold tracking-[0.2em] mb-4">
            WELCOME TO THE X-TREME ZONE
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter mb-6 leading-tight">
            READY ?<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
              3 2 1 Go Shoot !  
            </span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            สนามประลอง Beyblade มาตรฐานระดับแข่งขัน บรรยากาศสุดมันส์ พร้อมอุปกรณ์ครบครันที่ NVL Gear Sports
          </p>
          <button 
            onClick={() => navigate('/booking')}
            className="group relative px-8 py-4 bg-pink-600 text-white font-black text-xl italic tracking-widest clip-path-slant hover:bg-pink-500 transition-all duration-300 cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-2">
              JUMP TO BOOKING <Zap className="group-hover:text-yellow-300 transition-colors" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </div>
      </div>
      
      <div className="py-12 px-4 text-center bg-neutral-950">
        <h2 className="text-3xl font-black text-white italic mb-8 uppercase">Why Choose <span className="text-pink-600">NVL?</span></h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
           <FeatureCard 
             icon={User} 
             title="NVL Staff" 
             desc="พบปะทีมงานตึงโหดโคตรอันตราย" 
             color="text-cyan-400"
             onClick={() => navigate('/staff')}
           />
           <FeatureCard icon={Trophy} title="Weekly Tournament" desc="การแข่งขันประจำสัปดาห์ ชิงรางวัล Exclusive" color="text-pink-500"/>
           <FeatureCard 
             icon={Star} 
             title="Beyblade X" 
             desc="สินค้าลิขสิทธิ์แท้ และสนามแข่งมาตรฐานสากล" 
             color="text-neon-green"
             onClick={() => navigate('/premium-gear')}
           />
        </div>
      </div>
      <BannerSlider />
    </>
  );
};