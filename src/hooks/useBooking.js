import { useState, useMemo } from 'react';

export const useBooking = () => {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    stadium: null,
    date: null,
    time: null
  });

  const selectStadium = (stadium) => setSelections(prev => ({ ...prev, stadium }));
  const selectDate = (date) => setSelections(prev => ({ ...prev, date }));
  const selectTime = (time) => setSelections(prev => ({ ...prev, time }));

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);
  
  const resetBooking = () => {
    setStep(1);
    setSelections({ stadium: null, date: null, time: null });
  };

  const confirmBooking = () => {
    alert(`จองสำเร็จ! \nสนาม: ${selections.stadium.name}\nวันที่: ${selections.date.date}\nเวลา: ${selections.time}`);
    resetBooking();
  };

  const canProceed = useMemo(() => {
    if (step === 1) return !!selections.stadium;
    if (step === 2) return !!selections.date && !!selections.time;
    return true;
  }, [step, selections]);

  return {
    step,
    selections,
    selectStadium,
    selectDate,
    selectTime,
    nextStep,
    prevStep,
    confirmBooking,
    canProceed
  };
};