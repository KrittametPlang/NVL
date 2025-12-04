import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import spinFinishImg from '../assets/spin_finish.png';
import overFinishImg from '../assets/over_finish.png';
import burstFinishImg from '../assets/burst_finish.png';
import extremeFinishImg from '../assets/extreme_finish.png';

export const RulesPage = () => {
  const navigate = useNavigate();
  const [activeRule, setActiveRule] = useState(null);

  const rules = [
    { 
      title: 'Spin Finish', 
      points: '+1pt', 
      description: 'The Beyblade that spins longer than the opponent wins.',
      image: spinFinishImg
    },
    { 
      title: 'Over Finish', 
      points: '+2pt', 
      description: 'The Beyblade that knocks the opponent out of the stadium wins.',
      image: overFinishImg
    },
    { 
      title: 'Burst Finish', 
      points: '+2pt', 
      description: 'The Beyblade that bursts the opponent into pieces wins.',
      image: burstFinishImg
    },
    { 
      title: 'Extreme Finish', 
      points: '+3pt', 
      description: 'The Beyblade that knocks the opponent into the Extreme Zone wins.',
      image: extremeFinishImg
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">BATTLE</span>
            <span className="text-white ml-4">RULES</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Click on a card to reveal the details.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rules.map((rule, index) => (
            <div 
              key={index}
              onClick={() => setActiveRule(activeRule === index ? null : index)}
              className={`group relative bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${activeRule === index ? 'ring-2 ring-pink-500 scale-105 z-20' : 'hover:border-pink-500/50 hover:-translate-y-2'}`}
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
                <img 
                  src={rule.image} 
                  alt={rule.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Points Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="bg-gradient-to-r from-pink-600 to-purple-600 px-3 py-1 rounded-full text-sm font-bold shadow-lg shadow-pink-500/20 border border-white/20">
                    {rule.points}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <h3 className="text-2xl font-bold italic tracking-wide text-white mb-2 group-hover:text-pink-400 transition-colors">
                  {rule.title}
                </h3>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeRule === index ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <p className="text-gray-300 leading-relaxed border-t border-white/10 pt-4">
                    {rule.description}
                  </p>
                </div>
                
                {activeRule !== index && (
                  <div className="mt-2 text-xs text-gray-500 uppercase tracking-widest flex items-center">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-2 animate-pulse"></span>
                    Click to info
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-bold tracking-wider transition-all hover:scale-105"
          >
            BACK TO HOME
          </button>
        </div>
      </div>
    </div>
  );
};
