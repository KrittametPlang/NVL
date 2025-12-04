import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { useBooking } from '../hooks/useBooking';
import { MOCK_DATA } from '../data/mockData';
import { PrimaryButton } from '../components/common/PrimaryButton';
import { ProgressBar } from '../components/features/booking/ProgressBar';
import { StepStadium, StepDateTime, StepSummary } from '../components/features/booking/BookingSteps';

export const BookingPage = () => {
  const navigate = useNavigate();
  const { 
    step, selections, selectStadium, selectDate, selectTime, 
    nextStep, prevStep, confirmBooking, canProceed 
  } = useBooking();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 min-h-[60vh]">
      <ProgressBar currentStep={step} />
      
      <h2 className="text-3xl font-black text-white italic mb-8 text-center">
        {step === 1 && "SELECT YOUR ARENA"}
        {step === 2 && "CHOOSE DATE & TIME"}
        {step === 3 && "CONFIRMATION"}
      </h2>

      <div className="min-h-[300px]">
        {step === 1 && (
          <StepStadium 
            stadiums={MOCK_DATA.stadiums} 
            selectedId={selections.stadium?.id} 
            onSelect={selectStadium} 
          />
        )}
        {step === 2 && (
          <StepDateTime 
            dates={MOCK_DATA.dates}
            timeSlots={MOCK_DATA.timeSlots}
            selectedDate={selections.date}
            selectedTime={selections.time}
            onSelectDate={selectDate}
            onSelectTime={selectTime}
          />
        )}
        {step === 3 && (
          <StepSummary selections={selections} />
        )}
      </div>

      <div className="mt-12 flex justify-between items-center">
         {step > 1 ? (
           <button onClick={prevStep} className="px-6 py-3 text-gray-400 hover:text-white font-bold flex items-center gap-2 cursor-pointer">
             <ArrowLeft size={18}/> BACK
           </button>
         ) : <div/>}

         <PrimaryButton 
           onClick={step === 3 ? (() => { confirmBooking(); navigate('/'); }) : nextStep} 
           disabled={!canProceed}
           icon={ChevronRight}
           className="cursor-pointer"
         >
           {step === 3 ? 'CONFIRM BOOKING' : 'NEXT STEP'}
         </PrimaryButton>
      </div>
    </div>
  );
};