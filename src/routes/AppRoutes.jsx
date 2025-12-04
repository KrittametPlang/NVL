import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { BookingPage } from '../pages/BookingPage';
import { PremiumGearPage } from '../pages/PremiumGearPage';
import { StaffPage } from '../pages/StaffPage';
import { RulesPage } from '../pages/RulesPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/premium-gear" element={<PremiumGearPage />} />
      <Route path="/staff" element={<StaffPage />} />
      <Route path="/rules" element={<RulesPage />} />
    </Routes>
  );
};