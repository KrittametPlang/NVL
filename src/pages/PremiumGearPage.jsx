import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Star } from 'lucide-react';
import { beyblades } from '../data/beyblades';
import { BeybladeCard } from '../components/features/gear/BeybladeCard';
import { BeybladeModal } from '../components/features/gear/BeybladeModal';

export const PremiumGearPage = () => {
  const navigate = useNavigate();
  const [selectedBeyblade, setSelectedBeyblade] = useState(null);

  return (
    <div className="min-h-screen bg-neutral-950 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-400 hover:text-pink-500 transition-colors mb-8"
        >
          <ArrowLeft size={20} /> Back to Home
        </button>

        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-neutral-900 rounded-lg border border-gray-800">
            <Star className="w-8 h-8 text-neon-green" />
          </div>
          <div>
            <h1 className="text-4xl font-black italic tracking-tighter">Beyblade X</h1>
            <p className="text-gray-400 mt-2">Discover our elite collection of X-Treme Beyblades</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {beyblades.map((bey) => (
            <BeybladeCard 
              key={bey.id} 
              beyblade={bey} 
              onClick={() => setSelectedBeyblade(bey)}
            />
          ))}
        </div>

        <BeybladeModal 
          beyblade={selectedBeyblade} 
          onClose={() => setSelectedBeyblade(null)} 
        />
      </div>
    </div>
  );
};
