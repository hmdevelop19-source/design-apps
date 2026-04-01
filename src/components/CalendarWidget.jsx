import React from 'react';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';

export default function CalendarWidget() {
  const daysInMonth = 31;
  const firstDayIndex = 6; // March 1st 2026 is Sunday (index 6 if Mon=0)
  
  const days = [];
  for(let i = 0; i < firstDayIndex; i++) {
    days.push(null);
  }
  for(let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }
  const totalCells = firstDayIndex + daysInMonth;
  const remainingCells = (7 - (totalCells % 7)) % 7;
  for(let i = 0; i < remainingCells; i++) {
    days.push(null);
  }

  return (
    <div className="bg-bg-card dark:bg-bg-cardDark rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-shadow duration-500 overflow-hidden">
      <div className="px-6 py-6 border-b border-border-light/50 dark:border-border-dark">
        <h2 className="font-semibold text-text-main dark:text-text-dark">Jadwal Kegiatan</h2>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <button className="w-8 h-8 rounded-lg border border-border-light dark:border-border-dark flex items-center justify-center text-text-main dark:text-text-dark hover:bg-primary/5 dark:hover:bg-white/10 transition-colors">
            <CaretLeft size={16} />
          </button>
          <h3 className="font-semibold text-[15px] text-text-main dark:text-text-dark">Maret 2026</h3>
          <button className="w-8 h-8 rounded-lg border border-border-light dark:border-border-dark flex items-center justify-center text-text-main dark:text-text-dark hover:bg-primary/5 dark:hover:bg-white/10 transition-colors">
            <CaretRight size={16} />
          </button>
        </div>
        
        <div className="grid grid-cols-7 gap-1 text-center text-sm font-medium">
          <div className="text-text-muted dark:text-text-darkMuted pb-2 text-xs">Sen</div>
          <div className="text-text-muted dark:text-text-darkMuted pb-2 text-xs">Sel</div>
          <div className="text-text-muted dark:text-text-darkMuted pb-2 text-xs">Rab</div>
          <div className="text-text-muted dark:text-text-darkMuted pb-2 text-xs">Kam</div>
          <div className="text-text-muted dark:text-text-darkMuted pb-2 text-xs">Jum</div>
          <div className="text-text-muted dark:text-text-darkMuted pb-2 text-xs">Sab</div>
          <div className="text-text-muted dark:text-text-darkMuted pb-2 text-xs">Min</div>
          
          {days.map((day, i) => (
            <div 
              key={i} 
              className={`aspect-square flex items-center justify-center rounded-lg cursor-pointer transition-colors ${
                !day 
                  ? 'bg-bg-main/50 dark:bg-white/5 opacity-50' 
                  : day === 30 
                    ? 'bg-accent text-white shadow-lg shadow-accent/30 font-bold' 
                    : 'text-text-main dark:text-text-dark hover:bg-primary/5 dark:hover:bg-white/10 hover:text-primary dark:hover:text-blue-400'
              }`}
            >
              {day || ''}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
