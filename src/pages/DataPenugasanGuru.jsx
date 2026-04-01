import React, { useState } from 'react';
import { 
  ChalkboardTeacher, MagnifyingGlass, Funnel, Export, Plus, 
  PencilSimple, Trash, CaretLeft, CaretRight, BookOpen,
  ArrowLeft, FloppyDisk, CaretDown, Clock
} from '@phosphor-icons/react';

export default function DataPenugasanGuru() {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('table'); // 'table' | 'form'
  const tableData = [
    { id: 'TGS-001', guru: 'Ust. Abdul Somad', mapel: 'Pendidikan Agama Islam', status: 'Aktif' },
    { id: 'TGS-002', guru: 'Ust. Ramdani', mapel: 'Nahwu Shorof', status: 'Aktif' },
    { id: 'TGS-003', guru: 'Usth. Laila', mapel: 'Matematika', status: 'Aktif' },
    { id: 'TGS-004', guru: 'Ust. Fauzi', mapel: 'Aqidah Akhlaq', status: 'Aktif' },
    { id: 'TGS-005', guru: 'Hj. Maisaroh', mapel: 'Fiqih', status: 'Aktif' },
    { id: 'TGS-006', guru: 'Ust. Kholil', mapel: 'Sejarah Kebudayaan Islam', status: 'Non-Aktif' },
  ];

  const filteredData = tableData.filter(item => {
    return item.mapel.toLowerCase().includes(searchQuery.toLowerCase()) || item.guru.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="max-w-7xl mx-auto space-y-6 animate-fade-in-right pb-10">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/50 dark:bg-bg-cardDark/50 backdrop-blur-xl p-6 rounded-3xl border border-slate-200/60 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#000052] to-blue-800 shadow-lg shadow-[#000052]/30 flex items-center justify-center text-white shrink-0">
            <ChalkboardTeacher size={24} weight="fill" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-[#000052] dark:text-white tracking-tight">Penugasan Guru (Asatidz)</h1>
            <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400 mt-1">Atur relasi penugasan mata pelajaran, alokasi kelas, dan beban jam mengajar</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-[13px] font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm">
            <Export size={16} weight="bold" /> Export
          </button>
          <button onClick={() => setViewMode('form')} className="flex items-center gap-2 px-4 py-2.5 bg-[#FCD526] hover:bg-[#e3be22] text-[#000052] rounded-xl text-[13px] font-extrabold shadow-lg shadow-[#FCD526]/20 transition-all active:scale-95">
            <Plus size={16} weight="bold" /> Tambah Penugasan
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
                <h2 className="text-lg font-black text-[#000052] dark:text-white">Alokasi Penugasan Baru</h2>
                <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">Tentukan guru, mata pelajaran, serta beban jam yang dibebankan</p>
              </div>
            </div>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 max-w-4xl">
              
              <div className="space-y-2.5">
                <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Pilih Guru (Asatidz)</label>
                <div className="relative">
                  <select className="w-full appearance-none px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white cursor-pointer transition-colors">
                    <option value="">-- Silakan Pilih Guru --</option>
                    <option>Ust. Abdul Somad</option>
                    <option>Ust. Ramdani</option>
                    <option>Usth. Laila</option>
                    <option>Ust. Fauzi</option>
                  </select>
                  <CaretDown size={14} weight="bold" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>
              
              <div className="space-y-2.5">
                <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Pilih Mata Pelajaran</label>
                <div className="relative">
                  <select className="w-full appearance-none px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white cursor-pointer transition-colors">
                    <option value="">-- Silakan Pilih Mapel --</option>
                    <option>Pendidikan Agama Islam</option>
                    <option>Nahwu Shorof</option>
                    <option>Matematika</option>
                    <option>Aqidah Akhlaq</option>
                    <option>Fiqih</option>
                  </select>
                  <CaretDown size={14} weight="bold" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2.5">
                <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Status Penugasan</label>
                <div className="relative">
                  <select className="w-full appearance-none px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white cursor-pointer transition-colors">
                    <option>Aktif</option>
                    <option>Non-Aktif</option>
                  </select>
                  <CaretDown size={14} weight="bold" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2.5 md:col-span-2">
                <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Catatan Rekam Jejak (Opsional)</label>
                <textarea rows="3" placeholder="Masukkan keterangan tambahan jika ada..." className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white transition-colors resize-none"></textarea>
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
                  Simpan Penugasan
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
              placeholder="Cari mapel atau guru..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-[13px] font-medium text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#00B0FB] focus:border-[#00B0FB] transition-colors"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-xl text-[13px] font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <Funnel size={16} weight="bold" /> Filter Lengkap
            </button>
          </div>
        </div>



        {/* Table Container */}
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-800/20">
                <th className="px-6 py-4 text-[11px] font-extrabold text-slate-400 uppercase tracking-widest whitespace-nowrap w-[100px]">ID TUGAS</th>
                <th className="px-6 py-4 text-[11px] font-extrabold text-slate-400 uppercase tracking-widest whitespace-nowrap">NAMA GURU TUGAS</th>
                <th className="px-6 py-4 text-[11px] font-extrabold text-slate-400 uppercase tracking-widest whitespace-nowrap">MATA PELAJARAN (MAPEL)</th>
                <th className="px-6 py-4 text-[11px] font-extrabold text-slate-400 uppercase tracking-widest whitespace-nowrap text-center">STATUS</th>
                <th className="px-6 py-4 text-[11px] font-extrabold text-slate-400 uppercase tracking-widest whitespace-nowrap text-center">AKSI</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
              {filteredData.map((row) => (
                <tr key={row.id} className="hover:bg-[#00B0FB]/5 transition-colors group">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-[12px] font-black text-slate-500 dark:text-slate-400 tracking-wider bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md">{row.id}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#000052]/5 border border-[#000052]/10 flex items-center justify-center text-[#000052] dark:text-[#00B0FB]">
                        <ChalkboardTeacher size={16} weight="fill" />
                      </div>
                      <span className="font-extrabold text-[#000052] dark:text-white text-[13.5px]">{row.guru}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-1.5 text-[13px] font-bold text-slate-600 dark:text-slate-300">
                      <BookOpen size={16} weight="duotone" className="text-[#FCD526]" />
                      {row.mapel}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center whitespace-nowrap">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-bold text-[11px] border tracking-wide ${row.status === 'Aktif' ? 'bg-[#00B0FB]/10 text-[#00B0FB] dark:bg-[#00B0FB]/20 dark:text-[#00B0FB] border-[#00B0FB]/20 dark:border-[#00B0FB]/30' : 'bg-slate-50 text-slate-500 border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700'}`}>
                      {row.status === 'Aktif' && <span className="w-1.5 h-1.5 rounded-full bg-[#00B0FB]"></span>}
                      {row.status}
                    </span>
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
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <span className="text-[12.5px] font-medium text-slate-500 dark:text-slate-400">Menampilkan hasil dari daftar penugasan guru</span>
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
