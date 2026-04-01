import React from 'react';
import { PlusCircle } from '@phosphor-icons/react';

export default function QuickActions() {
  return (
    <div className="bg-bg-card dark:bg-bg-cardDark rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-shadow duration-500 overflow-hidden">
      <div className="px-6 py-6 border-b border-border-light/50 dark:border-border-dark">
        <h2 className="font-semibold text-text-main dark:text-text-dark">Tindakan Cepat</h2>
      </div>
      <div className="p-6 flex flex-col gap-3">
        <button className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover active:scale-95 hover:shadow-lg hover:shadow-accent/30 text-white py-3.5 px-4 rounded-2xl font-semibold transition-all duration-300">
          <PlusCircle size={22} weight="bold" /> Tambah Santri Baru
        </button>
        <button className="w-full flex items-center justify-center gap-2 bg-primary/5 dark:bg-white/5 border border-transparent hover:border-primary/20 dark:hover:border-white/20 text-text-main dark:text-text-dark py-3.5 px-4 rounded-2xl font-semibold active:scale-95 transition-all duration-300">
          Lihat Laporan Keuangan
        </button>
        <button className="w-full flex items-center justify-center gap-2 bg-primary/5 dark:bg-white/5 border border-transparent hover:border-primary/20 dark:hover:border-white/20 text-text-main dark:text-text-dark py-3.5 px-4 rounded-2xl font-semibold active:scale-95 transition-all duration-300">
          Kelola Pengumuman
        </button>
      </div>
    </div>
  );
}
