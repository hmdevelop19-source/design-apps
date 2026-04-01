import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import { ChartBar, ChartLineUp } from '@phosphor-icons/react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

// Generic options for dark mode handling can be set globally, but here we'll define chart specific ones
const getBarOptions = (isDark) => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: 'bottom', labels: { usePointStyle: true, boxWidth: 8, color: isDark ? '#94A3B8' : '#64748B' } },
    tooltip: { 
      backgroundColor: isDark ? '#1E293B' : '#FFFFFF',
      titleColor: isDark ? '#F1F5F9' : '#0F172A',
      bodyColor: isDark ? '#94A3B8' : '#64748B',
      borderColor: isDark ? '#334155' : '#E2E8F0',
      borderWidth: 1
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 220,
      ticks: { stepSize: 55, color: isDark ? '#94A3B8' : '#64748B' },
      border: { dash: [4, 4], display: false },
      grid: { color: isDark ? '#334155' : '#E2E8F0', tickBorderDash: [4, 4] }
    },
    x: {
      grid: { display: false },
      border: { display: false },
      ticks: { color: isDark ? '#94A3B8' : '#64748B' }
    }
  }
});

const getDonutOptions = (isDark) => ({
  responsive: true,
  maintainAspectRatio: false,
  cutout: '70%',
  plugins: {
    legend: { position: 'bottom', labels: { usePointStyle: true, boxWidth: 6, padding: 20, color: isDark ? '#94A3B8' : '#64748B' } },
    tooltip: {
      backgroundColor: isDark ? '#1E293B' : '#FFFFFF',
      titleColor: isDark ? '#F1F5F9' : '#0F172A',
      bodyColor: isDark ? '#94A3B8' : '#64748B',
      borderColor: isDark ? '#334155' : '#E2E8F0',
      borderWidth: 1
    }
  }
});

export function SantriBarChart({ isDark }) {
  const data = {
    labels: ['1444-1445', '1446-1447', '1447-1448', '1448-1449', '1449-1450'],
    datasets: [{
      label: 'Jumlah Santri',
      data: [150, 180, 215, 230, 280],
      backgroundColor: ['#b0c6d2', '#86a7bc', '#517a95', '#245171', '#FB8500'],
      borderRadius: 4,
      barThickness: 32
    }]
  };

  return (
    <div className="bg-bg-card dark:bg-bg-cardDark rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-shadow duration-500 overflow-hidden">
      <div className="px-6 py-6 border-b border-border-light/50 dark:border-border-dark flex justify-between items-center">
        <div className="flex items-center gap-2">
          <ChartLineUp size={22} className="text-primary" />
          <h2 className="font-semibold text-lg text-text-main dark:text-text-dark">Statistik Pertumbuhan Santri</h2>
        </div>
        <select className="bg-transparent border border-border-light dark:border-border-dark text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:bg-[#1E293B] dark:text-text-dark">
          <option>5 Tahun Terakhir</option>
          <option>3 Tahun Terakhir</option>
        </select>
      </div>
      <div className="p-6">
        <h3 className="text-sm text-text-muted dark:text-text-darkMuted mb-8">Tren pendaftaran santri baru 5 tahun terakhir.</h3>
        <div className="h-[260px] w-full">
          <Bar options={getBarOptions(isDark)} data={data} />
        </div>
      </div>
    </div>
  );
}

export function PelanggaranProgress({ isDark }) {
  const data = [
    { label: 'Terlambat Jamaah', value: 45, color: '#EF4444' },
    { label: 'Tidak ikut KBM', value: 25, color: '#FB8500' },
    { label: 'Keluar Tanpa Izin', value: 15, color: '#F59E0B' },
    { label: 'Lain-lain', value: 15, color: '#64748B' },
  ];

  return (
    <div className="bg-bg-card dark:bg-bg-cardDark rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-shadow duration-500 flex flex-col items-stretch h-full overflow-hidden">
      <div className="px-6 py-6 border-b border-border-light/50 dark:border-border-dark flex items-center gap-2">
        <ChartBar size={20} className="text-danger" />
        <h2 className="font-semibold text-text-main dark:text-text-dark">Statistik Pelanggaran</h2>
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div className="space-y-5 mb-6">
          {data.map((item, idx) => (
            <div key={idx}>
              <div className="flex justify-between text-sm font-semibold mb-2 text-text-main dark:text-text-dark">
                <span>{item.label}</span>
                <span>{item.value}%</span>
              </div>
              <div className="w-full bg-border-light dark:bg-slate-700/50 rounded-full h-2 overflow-hidden relative">
                <div className="absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out" style={{ width: `${item.value}%`, backgroundColor: item.color }}></div>
              </div>
            </div>
          ))}
        </div>
        <button className="w-full py-2.5 border border-border-light dark:border-border-dark rounded-xl text-sm font-semibold text-text-main dark:text-text-dark hover:bg-bg-main dark:hover:bg-white/5 transition-colors">
          Lihat Detail Rekap
        </button>
      </div>
    </div>
  );
}

export function PerizinanDonut({ isDark }) {
  const data = {
    labels: ['Berobat'],
    datasets: [{
      data: [2],
      backgroundColor: ['#3B82F6'],
      borderWidth: 0,
      hoverOffset: 4
    }]
  };

  return (
    <div className="bg-bg-card dark:bg-bg-cardDark rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-shadow duration-500 overflow-hidden">
      <div className="px-6 py-6 border-b border-border-light/50 dark:border-border-dark">
        <h2 className="font-semibold text-text-main dark:text-text-dark">Statistik Perizinan</h2>
        <p className="text-[13px] text-text-muted dark:text-text-darkMuted mt-1">Ringkasan perizinan terbaru</p>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-[13px] text-text-muted dark:text-text-darkMuted mb-2">
          <ChartBar size={18} /> Total Perizinan
        </div>
        <div className="text-3xl font-bold mb-6 text-text-main dark:text-text-dark">2</div>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="flex justify-between items-center p-3 rounded-lg border border-border-light dark:border-border-dark bg-bg-main dark:bg-white/5 text-[13px] font-medium text-text-main dark:text-text-dark">
            <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-warning"></span> Pending</div>
            <span className="font-bold">-</span>
          </div>
          <div className="flex justify-between items-center p-3 rounded-lg border border-border-light dark:border-border-dark bg-bg-main dark:bg-white/5 text-[13px] font-medium text-text-main dark:text-text-dark">
            <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-success"></span> Disetujui</div>
            <span className="font-bold">-</span>
          </div>
          <div className="flex justify-between items-center p-3 rounded-lg border border-border-light dark:border-border-dark bg-bg-main dark:bg-white/5 text-[13px] font-medium text-text-main dark:text-text-dark">
            <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-danger"></span> Ditolak</div>
            <span className="font-bold">-</span>
          </div>
          <div className="flex justify-between items-center p-3 rounded-lg border border-border-light dark:border-border-dark bg-bg-main dark:bg-white/5 text-[13px] font-medium text-text-main dark:text-text-dark">
            <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-info"></span> Selesai</div>
            <span className="font-bold">1</span>
          </div>
          <div className="flex justify-between items-center p-3 rounded-lg border border-border-light dark:border-border-dark bg-bg-main dark:bg-white/5 text-[13px] font-medium text-text-main dark:text-text-dark">
            <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-orange -500"></span> Terlambat</div>
            <span className="font-bold">1</span>
          </div>
          <div className="flex justify-between items-center p-3 rounded-lg border border-border-light dark:border-border-dark bg-bg-main dark:bg-white/5 text-[13px] font-medium text-text-main dark:text-text-dark">
            <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-purple"></span> Penalti</div>
            <span className="font-bold">1</span>
          </div>
        </div>

        <div className="h-[200px] w-full flex justify-center">
          <div className="w-[80%] max-w-[280px]">
            <Doughnut data={data} options={getDonutOptions(isDark)} />
          </div>
        </div>
      </div>
    </div>
  );
}
