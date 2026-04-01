import React, { useState } from 'react';
import { 
  CalendarMinus, MagnifyingGlass, Funnel, Export, Plus, 
  PencilSimple, Trash, Coffee, Clock, BookOpen, UserFocus,
  ArrowLeft, FloppyDisk, CaretDown, Student
} from '@phosphor-icons/react';

export default function DataJadwalPelajaran() {
  const [activeDay, setActiveDay] = useState('Senin');
  const [activeClass, setActiveClass] = useState('Kelas 7A');
  const [viewMode, setViewMode] = useState('table'); // 'table' | 'form'

  const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
  const classes = ['Kelas 7A', 'Kelas 7B', 'Kelas 8A', 'Kelas 8B', 'Kelas 9A'];

  const scheduleData = [
    { id: 'JDW-01', jam: 1, waktu: '07:00 - 07:45', mapel: 'Pendidikan Agama Islam', guru: 'Ust. Abdul Somad', tipe: 'Belajar' },
    { id: 'JDW-02', jam: 2, waktu: '07:45 - 08:30', mapel: 'Pendidikan Agama Islam', guru: 'Ust. Abdul Somad', tipe: 'Belajar' },
    { id: 'JDW-03', jam: 3, waktu: '08:30 - 09:15', mapel: 'Nahwu Shorof', guru: 'Ust. Ramdani', tipe: 'Belajar' },
    { id: 'JDW-IS1', jam: '-', waktu: '09:15 - 09:45', mapel: 'Istirahat Pagi', guru: '-', tipe: 'Istirahat' },
    { id: 'JDW-04', jam: 4, waktu: '09:45 - 10:30', mapel: 'Matematika', guru: 'Usth. Laila', tipe: 'Belajar' },
    { id: 'JDW-05', jam: 5, waktu: '10:30 - 11:15', mapel: 'Matematika', guru: 'Usth. Laila', tipe: 'Belajar' },
    { id: 'JDW-IS2', jam: '-', waktu: '11:15 - 13:00', mapel: 'Istirahat Siang (ISHOMA)', guru: '-', tipe: 'Istirahat' },
    { id: 'JDW-06', jam: 6, waktu: '13:00 - 13:45', mapel: 'Aqidah Akhlaq', guru: 'Ust. Fauzi', tipe: 'Belajar' },
    { id: 'JDW-07', jam: 7, waktu: '13:45 - 14:30', mapel: 'Fiqih', guru: 'Hj. Maisaroh', tipe: 'Belajar' },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6 animate-fade-in-right pb-10">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/50 dark:bg-bg-cardDark/50 backdrop-blur-xl p-6 rounded-3xl border border-slate-200/60 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#00B0FB] to-blue-500 shadow-lg shadow-[#00B0FB]/30 flex items-center justify-center text-white shrink-0">
            <CalendarMinus size={24} weight="fill" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-[#000052] dark:text-white tracking-tight">Jadwal Pelajaran Kelas</h1>
            <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400 mt-1">Pemetaan jadwal kegiatan belajar mengajar berdasarkan kelas dan hari</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-[13px] font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm">
            <Export size={16} weight="bold" /> Cetak Jadwal
          </button>
          <button onClick={() => setViewMode('form')} className="flex items-center gap-2 px-4 py-2.5 bg-[#FCD526] hover:bg-[#e3be22] text-[#000052] rounded-xl text-[13px] font-extrabold shadow-lg shadow-[#FCD526]/20 transition-all active:scale-95">
            <Plus size={16} weight="bold" /> Isi Jadwal Baru
          </button>
        </div>
      </div>

      {viewMode === 'form' ? (
        <div className="bg-white dark:bg-bg-cardDark rounded-3xl border border-slate-200 dark:border-slate-800 shadow-[0_4px_20px_rgb(0,0,0,0.03)] overflow-hidden animate-fade-in-up flex flex-col items-center">
          <div className="w-full px-8 py-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setViewMode('table')}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-400 transition-colors"
              >
                <ArrowLeft size={20} weight="bold" />
              </button>
              <div>
                <h2 className="text-lg font-black text-[#000052] dark:text-white">Form Pengisian Jadwal Ajar</h2>
                <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">Petakan relasi antara kelas, hari, waktu, dan penugasan guru</p>
              </div>
            </div>
          </div>
          
          <div className="w-full p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 max-w-4xl mx-auto">
              
              <div className="grid grid-cols-2 gap-4 md:col-span-2">
                <div className="space-y-2.5">
                  <label className="text-[13px] font-extrabold text-[#00B0FB] dark:text-[#00B0FB]">Target Kelas (Rombel)</label>
                  <div className="relative">
                    <select className="w-full appearance-none px-4 py-3 rounded-xl border border-blue-200 dark:border-blue-900 bg-blue-50/50 dark:bg-blue-900/10 focus:outline-none focus:ring-1 focus:ring-[#00B0FB] focus:border-[#00B0FB] text-[13.5px] font-bold text-[#000052] dark:text-white cursor-pointer transition-colors">
                      {classes.map(c => <option key={c}>{c}</option>)}
                    </select>
                    <CaretDown size={14} weight="bold" className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-400 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2.5">
                  <label className="text-[13px] font-extrabold text-[#00B0FB] dark:text-[#00B0FB]">Hari Pelaksanaan</label>
                  <div className="relative">
                    <select className="w-full appearance-none px-4 py-3 rounded-xl border border-blue-200 dark:border-blue-900 bg-blue-50/50 dark:bg-blue-900/10 focus:outline-none focus:ring-1 focus:ring-[#00B0FB] focus:border-[#00B0FB] text-[13.5px] font-bold text-[#000052] dark:text-white cursor-pointer transition-colors">
                      {days.map(d => <option key={d}>{d}</option>)}
                    </select>
                    <CaretDown size={14} weight="bold" className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="space-y-2.5">
                <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Pilih Jam Ke- (Waktu)</label>
                <div className="relative">
                  <select className="w-full appearance-none px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white cursor-pointer transition-colors">
                    <option value="">-- Pilih Urutan Jam Pelajaran --</option>
                    <option>Jam ke-1 (07:00 - 07:45)</option>
                    <option>Jam ke-2 (07:45 - 08:30)</option>
                    <option>Jam ke-3 (08:30 - 09:15)</option>
                    <option>Jam ke-4 (09:45 - 10:30)</option>
                    <option>Jam ke-5 (10:30 - 11:15)</option>
                  </select>
                  <CaretDown size={14} weight="bold" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>
              
              <div className="space-y-2.5">
                <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Mata Pelajaran (Tertaut Penugasan Guru)</label>
                <div className="relative">
                  <select className="w-full appearance-none px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white cursor-pointer transition-colors">
                    <option value="">-- Pilih Mata Pelajaran --</option>
                    <option>Pendidikan Agama Islam - Ust. Abdul Somad</option>
                    <option>Matematika - Usth. Laila</option>
                    <option>Nahwu Shorof - Ust. Ramdani</option>
                  </select>
                  <CaretDown size={14} weight="bold" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>

              <div className="pt-6 md:col-span-2 flex items-center justify-end gap-3 border-t border-slate-100 dark:border-slate-800">
                <button 
                  onClick={() => setViewMode('table')}
                  className="px-6 py-3 rounded-xl font-bold text-[13.5px] text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  Batal
                </button>
                <button 
                  className="px-6 py-3 rounded-xl font-bold text-[13.5px] bg-[#FCD526] hover:bg-[#e3be22] text-[#000052] shadow-lg shadow-[#FCD526]/20 flex items-center gap-2 transition-transform active:scale-95"
                >
                  <FloppyDisk size={18} weight="fill" />
                  Simpan Jadwal Utama
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        
        {/* Left Sidebar Filter (Classes) */}
        <div className="w-full lg:w-64 shrink-0 bg-white dark:bg-bg-cardDark rounded-3xl border border-slate-200 dark:border-slate-800 shadow-[0_4px_20px_rgb(0,0,0,0.03)] overflow-hidden">
          <div className="p-5 border-b border-slate-100 dark:border-slate-800">
            <h3 className="text-[14px] font-black text-[#000052] dark:text-white flex items-center gap-2">
              <Student size={20} className="text-[#00B0FB]" weight="fill" />
              Pilih Kelas Induk
            </h3>
          </div>
          <div className="p-3 flex flex-col gap-1 max-h-[500px] overflow-y-auto custom-scrollbar">
            {classes.map(c => (
              <button
                key={c}
                onClick={() => setActiveClass(c)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-[13px] font-bold transition-all ${
                  activeClass === c 
                  ? 'bg-[#000052] text-white shadow-md shadow-[#000052]/20' 
                  : 'text-slate-500 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800 hover:text-[#000052] dark:hover:text-white'
                }`}
              >
                <span>{c}</span>
                {activeClass === c && <div className="w-2 h-2 rounded-full bg-[#FCD526]"></div>}
              </button>
            ))}
          </div>
        </div>

        {/* Right Content Area */}
        <div className="flex-1 min-w-0 bg-white dark:bg-bg-cardDark rounded-3xl border border-slate-200 dark:border-slate-800 shadow-[0_4px_20px_rgb(0,0,0,0.03)] overflow-hidden">
          
          {/* Days Tab Row */}
          <div className="flex overflow-x-auto custom-scrollbar bg-slate-50/50 dark:bg-slate-800/30 border-b border-slate-200 dark:border-slate-800 p-2">
            {days.map(d => (
              <button
                key={d}
                onClick={() => setActiveDay(d)}
                className={`flex-1 shrink-0 px-6 py-3.5 rounded-2xl text-[13px] font-black transition-all duration-300 min-w-[120px] ${
                  activeDay === d 
                  ? 'bg-white dark:bg-slate-700 text-[#000052] dark:text-white shadow-sm ring-1 ring-slate-200 dark:ring-slate-600'
                  : 'text-slate-400 hover:text-[#000052] hover:bg-white/50 dark:hover:bg-slate-800'
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-[16px] font-black text-[#000052] dark:text-white">Jadwal Hari {activeDay}</h2>
                <p className="text-[13px] font-medium text-slate-500">Rincian Kegiatan Belajar {activeClass}</p>
              </div>
            </div>

            {/* Timetable */}
            <div className="overflow-x-auto custom-scrollbar rounded-2xl border border-slate-200/60 dark:border-slate-700">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/80 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
                    <th className="px-6 py-4 text-[11px] font-extrabold text-slate-400 uppercase tracking-widest whitespace-nowrap text-center w-[80px]">JAM KE</th>
                    <th className="px-6 py-4 text-[11px] font-extrabold text-slate-400 uppercase tracking-widest whitespace-nowrap text-center">WAKTU (WITA)</th>
                    <th className="px-6 py-4 text-[11px] font-extrabold text-[#000052] dark:text-[#00B0FB] uppercase tracking-widest whitespace-nowrap">MATA PELAJARAN & GURU</th>
                    <th className="px-6 py-4 text-[11px] font-extrabold text-slate-400 uppercase tracking-widest whitespace-nowrap text-right">AKSI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                  {scheduleData.map((row, idx) => (
                    <tr key={idx} className={`transition-colors group ${row.tipe === 'Istirahat' ? 'bg-orange-50/40 dark:bg-orange-950/20' : 'hover:bg-blue-50/30 dark:hover:bg-blue-900/10'}`}>
                      <td className="px-6 py-4 text-center whitespace-nowrap">
                        {row.tipe === 'Istirahat' ? (
                          <Coffee size={24} weight="duotone" className="text-orange-400 mx-auto" />
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-[#000052]/5 dark:bg-[#00B0FB]/10 text-[#000052] dark:text-white flex items-center justify-center mx-auto text-[14px] font-extrabold">
                            {row.jam}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center whitespace-nowrap">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
                          <Clock size={16} className={row.tipe === 'Istirahat' ? 'text-orange-500' : 'text-slate-400'} weight="bold" />
                          <span className="font-extrabold text-slate-700 dark:text-slate-200 text-[13px]">{row.waktu}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {row.tipe === 'Istirahat' ? (
                          <div className="font-black text-orange-600 dark:text-orange-400 text-[14px] tracking-wide uppercase">
                            {row.mapel}
                          </div>
                        ) : (
                          <div className="flex flex-col">
                            <div className="flex items-center gap-1.5 font-extrabold text-[#000052] dark:text-white text-[14.5px] pb-1">
                              <BookOpen size={16} className="text-[#00B0FB]" weight="fill" />
                              {row.mapel}
                            </div>
                            <div className="flex items-center gap-1.5 font-bold text-slate-500 dark:text-slate-400 text-[12.5px]">
                              <UserFocus size={16} className="text-[#FCD526]" weight="duotone" />
                              {row.guru}
                            </div>
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 text-right whitespace-nowrap">
                        {row.tipe !== 'Istirahat' && (
                          <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-[#00B0FB] hover:bg-blue-50 transition-all bg-white dark:bg-slate-800 shadow-sm">
                              <PencilSimple size={16} weight="regular" />
                            </button>
                            <button className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-red-600 hover:bg-red-50 transition-all bg-white dark:bg-slate-800 shadow-sm">
                              <Trash size={16} weight="regular" />
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Empty placeholder example if needed later */}
            </div>

          </div>
        </div>

      </div>
      )}
    </div>
  );
}
