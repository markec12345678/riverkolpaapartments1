'use client';

import { useState } from 'react';
import { DayPicker, DateRange } from 'react-day-picker';
import { sl } from 'date-fns/locale';
import './BookingCalendar.css';

export default function BookingCalendar() {
  const [range, setRange] = useState<DateRange | undefined>(undefined);

  // Zasedeni datumi (primer za julij/avgust 2026)
  const blockedDays = [
    new Date(2026, 6, 15), // 15. julij
    new Date(2026, 6, 16),
    new Date(2026, 6, 17),
    new Date(2026, 7, 1),  // 1. avgust
    new Date(2026, 7, 2),
  ];

  return (
    <div className="premium-calendar-container">
      <h3 className="premium-calendar-title">Preveri razpoložljivost</h3>
      
      <DayPicker
        mode="range"
        selected={range}
        onSelect={setRange}
        locale={sl}
        numberOfMonths={1}
        fixedWeeks
        showOutsideDays
        disabled={blockedDays}
        modifiers={{ booked: blockedDays }}
        classNames={{
          // Using Tailwind classes via our custom CSS mostly, but ensuring base structure
          // The CSS file handles the heavy lifting for colors and hover states
        }}
      />

      {range?.from && range?.to && (
        <div className="mt-6 p-5 bg-primary/5 border border-primary/10 rounded-2xl">
          <p className="text-primary font-semibold mb-2 text-lg">Izbrani termini:</p>
          <div className="flex justify-between items-center text-text-muted mb-4">
            <span>📅 {range.from.toLocaleDateString('sl-SI')} — {range.to.toLocaleDateString('sl-SI')}</span>
          </div>
          <p className="text-primary font-bold text-xl mb-4">
            Skupaj: {Math.ceil((range.to.getTime() - range.from.getTime()) / (1000 * 60 * 60 * 24))} noči
          </p>
        </div>
      )}

      <a
        href={`https://wa.me/38640858732?text=Pozdravljeni! Zanima me rezervacija od ${range?.from?.toLocaleDateString('sl-SI') || '...'} do ${range?.to?.toLocaleDateString('sl-SI') || '...'}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 w-full bg-primary text-white px-6 py-4 rounded-full font-bold hover:bg-primary-light hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-center block text-lg"
      >
        💬 Pošlji povpraševanje
      </a>
    </div>
  );
}
