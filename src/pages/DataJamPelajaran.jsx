import React, { useState } from 'react';
import { 
  Clock, MagnifyingGlass, Funnel, Export, Plus, 
  PencilSimple, Trash, CaretLeft, CaretRight, Hourglass,
  ArrowLeft, FloppyDisk, CaretDown, Coffee
} from '@phosphor-icons/react';

export default function DataJamPelajaran() {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('table'); // 'table' | 'form'

  const tableData = [
    { id: 'JP-01', urutan: 1, mulai: '07:00', selesai: '07:45', durasi: '45', tipe: 'Belajar' },
    { id: 'JP-02', urutan: 2, mulai: '07:45', selesai: '08:30', durasi: '45', tipe: 'Belajar' },
    { id: 'JP-03', urutan: 3, mulai: '08:30', selesai: '09:15', durasi: '45', tipe: 'Belajar' },
    { id: 'JP-IS1', urutan: '-', mulai: '09:15', selesai: '09:45', durasi: '30', tipe: 'Istirahat' },
    { id: 'JP-04', urutan: 4, mulai: '09:45', selesai: '10:30', durasi: '45', tipe: 'Belajar' },
    { id: 'JP-05', urutan: 5, mulai: '10:30', selesai: '11:15', durasi: '45', tipe: 'Belajar' },
    { id: 'JP-IS2', urutan: '-', mulai: '11:15', selesai: '13:00', durasi: '105', tipe: 'Istirahat (ISHOMA)' },
    { id: 'JP-06', urutan: 6, mulai: '13:00', selesai: '13:45', durasi: '45', tipe: 'Belajar' },
    { id: 'JP-07', urutan: 7, mulai: '13:45', selesai: '14:30', durasi: '45', tipe: 'Belajar' },
  ];

  const filteredData = tableData.filter(item => {
    return item.tipe.toLowerCase().includes(searchQuery.toLowerCase()) || 
           item.urutan.toString().includes(searchQuery) ||
           item.mulai.includes(searchQuery);
  });

  return (
    <div className="max-w-7xl mx-auto space-y-6 animate-fade-in-right pb-10">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/50 dark:bg-bg-cardDark/50 backdrop-blur-xl p-6 rounded-3xl border border-slate-200/60 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FCD526] to-orange-400 shadow-lg shadow-[#FCD526]/30 flex items-center justify-center text-white shrink-0">
            <Clock size={24} weight="fill" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-[#000052] dark:text-white tracking-tight">Data Jam Pelajaran</h1>
            <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400 mt-1">Atur alokasi waktu kegiatan belajar mengajar (KBM) dan jam istirahat</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-[13px] font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm">
            <Export size={16} weight="bold" /> Export
          </button>
          <button onClick={() => setViewMode('form')} className="flex items-center gap-2 px-4 py-2.5 bg-[#000052] hover:bg-blue-900 text-white rounded-xl text-[13px] font-extrabold shadow-lg shadow-[#000052]/20 transition-all active:scale-95">
            <Plus size={16} weight="bold" /> Tambah Sesi Waktu
          </button>
        </div>
      </div>

      {viewMode === 'form' ? (
        <div className="bg-white dark:bg-bg-cardDark rounded-3xl border border-slate-200 dark:border-slate-800 shadow-[0_4px_20px_rgb(0,0,0,0.03)] overflow-hidden animate-fade-in-up">
          <div className="px-8 py-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setViewMode('table')}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-400 transition-colors"
              >
                <ArrowLeft size={20} weight="bold" />
              </button>
              <div>
                <h2 className="text-lg font-black text-[#000052] dark:text-white">Form Sesi Waktu Baru</h2>
                <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">Atur durasi dan keterangan sesi untuk kegiatan kurikulum</p>
              </div>
            </div>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 max-w-4xl">
              
              <div className="space-y-2.5">
                <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Tipe Sesi</label>
                <div className="relative">
                  <select className="w-full appearance-none px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white cursor-pointer transition-colors">
                    <option>Sesi Belajar KBM</option>
                    <option>Sesi Istirahat</option>
                    <option>Kegiatan Khusus (Ekstra)</option>
                  </select>
                  <CaretDown size={14} weight="bold" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>
              
              <div className="space-y-2.5">
                <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Urutan / Jam Ke-</label>
                <input type="text" placeholder="Contoh: 1, 2, atau tanda '-' jika istirahat" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white transition-colors" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2.5">
                  <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Waktu Mulai</label>
                  <input type="time" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-[#000052] focus:border-[#000052] text-[13.5px] font-medium text-slate-800 dark:text-white transition-colors" />
                </div>
                <div className="space-y-2.5">
                  <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Waktu Selesai</label>
                  <input type="time" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-[#000052] focus:border-[#000052] text-[13.5px] font-medium text-slate-800 dark:text-white transition-colors" />
                </div>
              </div>

              <div className="space-y-2.5">
                <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Durasi Otomatis (Menit)</label>
                <div className="relative">
                  <Hourglass size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input type="number" placeholder="45" readOnly className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900 cursor-not-allowed focus:outline-none text-[13.5px] font-bold text-slate-600 dark:text-slate-400 transition-colors" />
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
                  className="px-6 py-3 rounded-xl font-bold text-[13.5px] bg-[#000052] hover:bg-blue-900 text-white shadow-lg shadow-[#000052]/20 flex items-center gap-2 transition-transform active:scale-95"
                >
                  <FloppyDisk size={18} weight="fill" />
                  Simpan Sesi Waktu
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
      <div className="bg-white dark:bg-bg-cardDark rounded-3xl border border-slate-200 dark:border-slate-800 shadow-[0_4px_20px_rgb(0,0,0,0.03)] overflow-hidden">
        
        {/* Toolbar */}
        <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative w-full sm:w-72">
            <MagnifyingGlass size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Cari urutan atau jam..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-[13px] font-medium text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#00B0FB] focus:border-[#00B0FB] transition-colors"
            />
          </div>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-800/20">
                <th className="px-6 py-4 text-[11px] font-extrabold text-slate-400 uppercase tracking-widest whitespace-nowrap w-[100px] text-center">URUTAN / JAM KE</th>
                <th className="px-6 py-4 text-[11px] font-extrabold text-slate-400 uppercase tracking-widest whitespace-nowrap text-center">WAKTU (MULAI - SELESAI)</th>
                <th className="px-6 py-4 text-[11px] font-extrabold text-slate-400 uppercase tracking-widest whitespace-nowrap text-center">DURASI BERSYARAT</th>
                <th className="px-6 py-4 text-[11px] font-extrabold text-slate-400 uppercase tracking-widest whitespace-nowrap">TIPE SESI</th>
                <th className="px-6 py-4 text-[11px] font-extrabold text-slate-400 uppercase tracking-widest whitespace-nowrap text-center">AKSI</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
              {filteredData.map((row) => {
                const isIstirahat = row.tipe.includes('Istirahat');
                
                return (
                  <tr key={row.id} className={`transition-colors group ${isIstirahat ? 'bg-orange-50/30 dark:bg-orange-950/20 hover:bg-orange-50/60 dark:hover:bg-orange-900/30' : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}>
                    <td className="px-6 py-4 text-center whitespace-nowrap">
                      {isIstirahat ? (
                        <span className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 flex items-center justify-center mx-auto text-[14px] font-bold">
                          -
                        </span>
                      ) : (
                        <div className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700 text-[#000052] dark:text-white flex items-center justify-center mx-auto text-[14px] font-extrabold shadow-sm bg-white dark:bg-slate-800 group-hover:bg-[#FCD526] group-hover:text-[#000052] group-hover:border-[#FCD526] transition-colors">
                          {row.urutan}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap">
                      <div className="inline-flex items-center gap-3">
                        <span className="font-extrabold text-[#000052] dark:text-white text-[15px]">{row.mulai}</span>
                        <span className="w-3 h-[2px] bg-slate-300 dark:bg-slate-600 rounded-full"></span>
                        <span className="font-extrabold text-[#000052] dark:text-white text-[15px]">{row.selesai}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap">
                      <span className="inline-flex items-center gap-1.5 font-bold text-slate-600 dark:text-slate-300 text-[13px]">
                        <Hourglass size={16} className={isIstirahat ? "text-orange-500" : "text-[#00B0FB]"} />
                        {row.durasi} <span className="text-[11px] text-slate-400 font-medium">Menit</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        {isIstirahat ? (
                          <>
                            <Coffee size={18} weight="fill" className="text-orange-400" />
                            <span className="font-black text-orange-600 dark:text-orange-400 text-[13px] tracking-wide">{row.tipe.toUpperCase()}</span>
                          </>
                        ) : (
                          <>
                            <span className="w-2 h-2 rounded-full bg-[#00B0FB]"></span>
                            <span className="font-bold text-slate-700 dark:text-slate-300 text-[13px]">{row.tipe}</span>
                          </>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center justify-center gap-2">
                        <button className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-[#00B0FB] hover:bg-blue-50 hover:border-blue-200 transition-all bg-white dark:bg-slate-800 shadow-sm">
                          <PencilSimple size={16} weight="regular" />
                        </button>
                        <button className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-red-600 hover:bg-red-50 hover:border-red-200 transition-all bg-white dark:bg-slate-800 shadow-sm">
                          <Trash size={16} weight="regular" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <span className="text-[12.5px] font-medium text-slate-500 dark:text-slate-400">Menampilkan hasil dari alokasi waktu</span>
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-400 hover:text-[#000052] hover:border-slate-300 disabled:opacity-50 shadow-sm">
              <CaretLeft size={16} weight="bold" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#000052] bg-[#000052] text-white font-bold text-[13px] shadow-sm">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-400 hover:text-[#000052] hover:border-slate-300 shadow-sm">
              <CaretRight size={16} weight="bold" />
            </button>
          </div>
        </div>

      </div>
      )}
    </div>
  );
}
