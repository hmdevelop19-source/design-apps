import React, { useState } from 'react';
import { 
  ChalkboardTeacher, MagnifyingGlass, Funnel, Export, Plus, 
  PencilSimple, Trash, CaretLeft, CaretRight, UserCircle,
  ArrowLeft, FloppyDisk, CaretDown
} from '@phosphor-icons/react';

export default function DataGuru() {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('table'); // 'table' | 'form'

  const tableData = [
    { id: 'GR-1001', nik: '3527061906100010', nama: 'Ust. Abdul Kholiq, S.Pd', mapel: 'Fikih & Akhlak', institusi: 'MTs Darussalam', status: 'Tetap', isMale: true },
    { id: 'GR-1002', nik: '3527061906100012', nama: 'Hj. Siti Aminah, S.Ag', mapel: 'Tahfidz', institusi: 'MI Darussalam', status: 'Tetap', isMale: false },
    { id: 'GR-1003', nik: '3527061906100015', nama: 'Ust. Zainal Abidin', mapel: 'Kajian Kitab Kuning', institusi: 'Madrasah Diniyah Ulya', status: 'Kontrak', isMale: true },
    { id: 'GR-1004', nik: '3527061906100018', nama: 'Drs. Ahmad Fauzi', mapel: 'Matematika', institusi: 'SMP Darussalam', status: 'Tetap', isMale: true },
    { id: 'GR-1005', nik: '3527061906100021', nama: 'Usth. Laila Fitriani, M.Pd', mapel: 'Bahasa Arab', institusi: 'SMA Darussalam', status: 'Tetap', isMale: false },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6 animate-fade-in-right pb-10">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/50 dark:bg-bg-cardDark/50 backdrop-blur-xl p-6 rounded-3xl border border-slate-200/60 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#FCD526] to-orange-400 shadow-lg shadow-[#FCD526]/20 flex items-center justify-center text-white shrink-0">
            <ChalkboardTeacher size={24} weight="fill" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-[#000052] dark:text-white tracking-tight">Data Guru Instansi</h1>
            <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400 mt-1">Manajemen pendidik untuk seluruh unit / institusi pesantren</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-[13px] font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm">
            <Export size={16} weight="bold" /> Export
          </button>
          <button onClick={() => setViewMode('form')} className="flex items-center gap-2 px-4 py-2.5 bg-[#000052] hover:bg-[#000035] text-white rounded-xl text-[13px] font-bold shadow-lg shadow-[#000052]/20 transition-all active:scale-95">
            <Plus size={16} weight="bold" /> Tambah Guru
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
                <h2 className="text-lg font-black text-[#000052] dark:text-white">Registrasi Guru Baru</h2>
                <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">Lengkapi form identitas pendidik instansi pesantren</p>
              </div>
            </div>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 max-w-4xl">
              <div className="space-y-2.5">
                <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Nomor Induk Kependudukan (NIK)</label>
                <input type="number" placeholder="Contoh: 3527000000000000" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white transition-colors" />
              </div>
              <div className="space-y-2.5">
                <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Nama Lengkap beserta Gelar</label>
                <input type="text" placeholder="Contoh: Ust. Abdul Kholiq, S.Pd" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white transition-colors" />
              </div>
              <div className="space-y-2.5">
                <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Jenis Kelamin</label>
                <div className="relative">
                  <select className="w-full appearance-none px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white cursor-pointer transition-colors">
                    <option>Laki-laki (Ustadz)</option>
                    <option>Perempuan (Ustadzah)</option>
                  </select>
                  <CaretDown size={14} weight="bold" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>
              <div className="space-y-2.5">
                <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Mata Pelajaran yang Diampu</label>
                <input type="text" placeholder="Contoh: Fikih, Aqidah Akhlak" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white transition-colors" />
              </div>
              <div className="space-y-2.5">
                <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Institusi Induk</label>
                <div className="relative">
                  <select className="w-full appearance-none px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white cursor-pointer transition-colors">
                    <option>SMP Darussalam</option>
                    <option>MTs Darussalam</option>
                    <option>SMA Darussalam</option>
                    <option>MA Darussalam</option>
                    <option>MI Darussalam</option>
                    <option>Madrasah Diniyah Ula</option>
                    <option>Madrasah Diniyah Wustha</option>
                    <option>Madrasah Diniyah Ulya</option>
                  </select>
                  <CaretDown size={14} weight="bold" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>
              <div className="space-y-2.5">
                <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Status Pegawai</label>
                <div className="relative">
                  <select className="w-full appearance-none px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white cursor-pointer transition-colors">
                    <option>Tetap</option>
                    <option>Kontrak</option>
                    <option>Magang</option>
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
                  className="px-6 py-3 rounded-xl font-bold text-[13.5px] bg-[#000052] hover:bg-[#000035] text-white shadow-lg shadow-[#000052]/20 flex items-center gap-2 transition-transform active:scale-95"
                >
                  <FloppyDisk size={18} weight="fill" />
                  Simpan Data Guru
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
              placeholder="Cari nama atau NIK guru..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-[13px] font-medium text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#FCD526] focus:border-[#FCD526] transition-colors"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-xl text-[13px] font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <Funnel size={16} weight="bold" /> Unit Instansi
            </button>
          </div>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-800/20">
                <th className="px-6 py-4 text-[11px] font-extrabold text-slate-400 uppercase tracking-widest whitespace-nowrap w-[120px]">KODE GURU</th>
                <th className="px-6 py-4 text-[11px] font-extrabold text-slate-400 uppercase tracking-widest whitespace-nowrap">NAMA & NIK</th>
                <th className="px-6 py-4 text-[11px] font-extrabold text-slate-400 uppercase tracking-widest whitespace-nowrap">MATA PELAJARAN</th>
                <th className="px-6 py-4 text-[11px] font-extrabold text-slate-400 uppercase tracking-widest whitespace-nowrap">INSTITUSI INDUK</th>
                <th className="px-6 py-4 text-[11px] font-extrabold text-slate-400 uppercase tracking-widest whitespace-nowrap text-center">STATUS PEGAWAI</th>
                <th className="px-6 py-4 text-[11px] font-extrabold text-slate-400 uppercase tracking-widest whitespace-nowrap text-center">AKSI</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
              {tableData.map((row) => (
                <tr key={row.id} className="hover:bg-orange-50/30 dark:hover:bg-orange-500/5 transition-colors group">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-[12px] font-black text-slate-500 dark:text-slate-400 tracking-wider bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md">{row.id}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${row.isMale ? 'bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400' : 'bg-pink-100 dark:bg-pink-500/20 text-pink-600 dark:text-pink-400'}`}>
                        <UserCircle size={24} weight="fill" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-extrabold text-[#000052] dark:text-white text-[13.5px] pb-0.5">{row.nama}</span>
                        <span className="text-[11px] font-bold text-slate-400 tracking-wider">NIK: {row.nik}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="font-bold text-slate-700 dark:text-slate-300 text-[13px]">{row.mapel}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 font-bold text-[12px]">
                      {row.institusi}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center whitespace-nowrap">
                    {row.status === 'Tetap' ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 font-bold text-[11px] border border-emerald-100 dark:border-emerald-500/20 tracking-wide">
                        GT - TETAP
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCD526]/10 text-[#FCD526] dark:bg-[#FCD526]/10 dark:text-[#FCD526] font-bold text-[11px] border border-[#FCD526]/20 tracking-wide">
                        GT - KONTRAK
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center justify-center gap-2">
                      <button className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition-all bg-white dark:bg-slate-800 shadow-sm">
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
          <span className="text-[12.5px] font-medium text-slate-500 dark:text-slate-400">Menampilkan 1 sampai 5 dari 105 guru</span>
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-400 hover:text-[#000052] hover:border-slate-300 disabled:opacity-50 shadow-sm">
              <CaretLeft size={16} weight="bold" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#000052] bg-[#000052] text-white font-bold text-[13px] shadow-sm">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold text-[13px] hover:bg-slate-50 shadow-sm">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-400 hover:text-[#000052] hover:border-slate-300 shadow-sm">
              <CaretRight size={16} weight="bold" />
            </button>
        {/* Pagination end */}
          </div>
        </div>

      </div>
      )}
    </div>
  );
}
