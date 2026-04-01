import React from 'react';

export default function StatCard({ label, value, desc, icon: Icon, iconColor, isDarkVariant, badge, badgeColor }) {
  return (
    <div className={`p-6 rounded-3xl ${isDarkVariant ? 'bg-gradient-to-br from-[#023047] to-[#044c70] text-white' : 'bg-bg-card dark:bg-bg-cardDark text-text-main dark:text-text-dark'} shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-500 relative group overflow-hidden`}>
      {/* Decorative background glow for dark variant */}
      {isDarkVariant && <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl group-hover:bg-accent/30 transition-all duration-500"></div>}
      {badge && (
        <span 
          className="absolute top-6 right-6 px-3 py-1 text-xs font-bold rounded-full"
          style={{ backgroundColor: isDarkVariant ? 'var(--color-accent)' : `${badgeColor}20`, color: isDarkVariant ? '#fff' : badgeColor, ...(isDarkVariant ? { backgroundColor: '#FB8500' } : {}) }}
        >
          {badge}
        </span>
      )}
      
      <div 
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: isDarkVariant ? 'rgba(255,255,255,0.1)' : `${iconColor}15`, color: isDarkVariant ? '#FB8500' : iconColor }}
      >
        <Icon size={24} weight={isDarkVariant ? "regular" : "fill"} />
      </div>
      
      <div className={`text-4xl font-extrabold tracking-tight mb-2 ${isDarkVariant ? 'text-white drop-shadow-md' : ''}`}>
        {value}
      </div>
      
      <div className={`text-[12px] font-bold tracking-wider uppercase ${isDarkVariant ? 'text-white/80' : 'text-text-muted dark:text-text-darkMuted'}`}>
        {label}
      </div>
    </div>
  );
}
