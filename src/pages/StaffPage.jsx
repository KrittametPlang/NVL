import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Users } from 'lucide-react';
import { staffMembers } from '../data/staff';
import { StaffCard } from '../components/features/staff/StaffCard';
import { StaffModal } from '../components/features/staff/StaffModal';

export const StaffPage = () => {
  const navigate = useNavigate();
  const [selectedStaff, setSelectedStaff] = useState(null);

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
            <Users className="w-8 h-8 text-cyan-400" />
          </div>
          <div>
            <h1 className="text-4xl font-black italic tracking-tighter">NVL STAFF</h1>
            <p className="text-gray-400 mt-2">Meet the elite team behind the X-Treme Zone</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {staffMembers.map((staff) => (
            <StaffCard 
              key={staff.id} 
              staff={staff} 
              onClick={() => setSelectedStaff(staff)}
            />
          ))}
        </div>

        <StaffModal 
          staff={selectedStaff} 
          onClose={() => setSelectedStaff(null)} 
        />
      </div>
    </div>
  );
};
