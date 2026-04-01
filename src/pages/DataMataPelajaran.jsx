import React, { useState } from 'react';
import { 
  BookOpen, MagnifyingGlass, Funnel, Export, Plus, 
  PencilSimple, Trash, CaretLeft, CaretRight, FileText,
  ArrowLeft, FloppyDisk, CaretDown
} from '@phosphor-icons/react';

export default function DataMataPelajaran() {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('table'); // 'table' | 'form'

  const tableData = [
    { id: 'MPL-101', mapel: 'Fikih', kategori: 'Diniyah', kelas: 'Kelas 7, 8, 9', kkm: '75', status: 'Aktif' },
    { id: 'MPL-102', mapel: 'Aqidah Akhlak', kategori: 'Diniyah', kelas: 'Semua Kelas', kkm: '75', status: 'Aktif' },
    { id: 'MPL-103', mapel: 'Matematika', kategori: 'Umum', kelas: 'Kelas 7, 8, 9', kkm: '70', status: 'Aktif' },
    { id: 'MPL-104', mapel: 'Bahasa Arab', kategori: 'Bahasa', kelas: 'Semua Kelas', kkm: '80', status: 'Aktif' },
    { id: 'MPL-105', mapel: 'Nahwu Shorof', kategori: 'Diniyah', kelas: 'Kelas 8, 9', kkm: '75', status: 'Aktif' },
    { id: 'MPL-106', mapel: 'Kajian Kitab Kuning', kategori: 'Muatan Lokal', kelas: 'Kelas 10, 11, 12', kkm: '75', status: 'Aktif' },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6 animate-fade-in-right pb-10">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/50 dark:bg-bg-cardDark/50 backdrop-blur-xl p-6 rounded-3xl border border-slate-200/60 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-500 to-indigo-500 shadow-lg shadow-blue-500/20 flex items-center justify-center text-white shrink-0">
            <BookOpen size={24} weight="fill" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-[#023047] dark:text-white tracking-tight">Data Mata Pelajaran</h1>
            <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400 mt-1">Kelola kurikulum dan standar kelulusan mata pelajaran</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-[13px] font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm">
            <Export size={16} weight="bold" /> Export
          </button>
          <button onClick={() => setViewMode('form')} className="flex items-center gap-2 px-4 py-2.5 bg-[#FB8500] hover:bg-[#e07700] text-white rounded-xl text-[13px] font-bold shadow-lg shadow-[#FB8500]/20 transition-all active:scale-95">
            <Plus size={16} weight="bold" /> Tambah Mapel
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
                <h2 className="text-lg font-black text-[#023047] dark:text-white">Tambah Mata Pelajaran</h2>
                <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">Lengkapi form di bawah untuk mendaftarkan mapel baru</p>
              </div>
            </div>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 max-w-4xl">
              <div className="space-y-2.5">
                <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Kode Mata Pelajaran</label>
                <input type="text" placeholder="Contoh: MPL-107" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white transition-colors" />
              </div>
              <div className="space-y-2.5">
                <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Nama Mata Pelajaran</label>
                <input type="text" placeholder="Contoh: Tafsir Jalalain" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white transition-colors" />
              </div>
              <div className="space-y-2.5">
                <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Kategori</label>
                <div className="relative">
                  <select className="w-full appearance-none px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white cursor-pointer transition-colors">
                    <option>Diniyah</option>
                    <option>Umum</option>
                    <option>Bahasa</option>
                    <option>Muatan Lokal</option>
                  </select>
                  <CaretDown size={14} weight="bold" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>
              <div className="space-y-2.5">
                <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Target Kelas Ajar</label>
                <div className="relative">
                  <select className="w-full appearance-none px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white cursor-pointer transition-colors">
                    <option>Semua Kelas</option>
                    <option>Kelas 7, 8, 9</option>
                    <option>Kelas 10, 11, 12</option>
                  </select>
                  <CaretDown size={14} weight="bold" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>
              <div className="space-y-2.5">
                <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Nilai KKM Minimum</label>
                <input type="number" placeholder="Contoh: 75" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white transition-colors" />
              </div>
              <div className="space-y-2.5">
                <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Deskripsi Singkat (Opsional)</label>
                <input type="text" placeholder="Deskripsi mata pelajaran..." className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white transition-colors" />
              </div>
              <div className="pt-6 md:col-span-2 flex items-center justify-end gap-3 border-t border-slate-100 dark:border-slate-800">
                <button 
                  onClick={() => setViewMode('table')}
                  className="px-6 py-3 rounded-xl font-bold text-[13.5px] text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  Batal
                </button>
                <button 
                  className="px-6 py-3 rounded-xl font-bold text-[13.5px] bg-[#FB8500] hover:bg-[#e07700] text-white shadow-lg shadow-[#FB8500]/20 flex items-center gap-2 transition-transform active:scale-95"
                >
                  <FloppyDisk size={18} weight="fill" />
                  Simpan Mata Pelajaran
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
              placeholder="Cari mata pelajaran..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-[13px] font-medium text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-xl text-[13px] font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <Funnel size={16} weight="bold" /> Filter
            </button>
          </div>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-800/20">
                <th className="px-6 py-4 text-[11px] font-extrabold text-slate-400 uppercase tracking-widest whitespace-nowrap w-[120px]">KODE</th>
                <th className="px-6 py-4 text-[11px] font-extrabold text-slate-400 uppercase tracking-widest whitespace-nowrap">MATA PELAJARAN</th>
                <th className="px-6 py-4 text-[11px] font-extrabold text-slate-400 uppercase tracking-widest whitespace-nowrap">KATEGORI</th>
                <th className="px-6 py-4 text-[11px] font-extrabold text-slate-400 uppercase tracking-widest whitespace-nowrap">KELAS AJAR</th>
                <th className="px-6 py-4 text-[11px] font-extrabold text-slate-400 uppercase tracking-widest whitespace-nowrap text-center">KKM</th>
                <th className="px-6 py-4 text-[11px] font-extrabold text-slate-400 uppercase tracking-widest whitespace-nowrap text-center">STATUS</th>
                <th className="px-6 py-4 text-[11px] font-extrabold text-slate-400 uppercase tracking-widest whitespace-nowrap text-center">AKSI</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
              {tableData.map((row) => (
                <tr key={row.id} className="hover:bg-blue-50/30 dark:hover:bg-blue-500/5 transition-colors group">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-[12px] font-black text-slate-500 dark:text-slate-400 tracking-wider bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md">{row.id}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                        <FileText size={16} weight="fill" />
                      </div>
                      <span className="font-extrabold text-slate-800 dark:text-slate-200 text-[13.5px]">{row.mapel}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="font-bold text-slate-600 dark:text-slate-300 text-[13px]">{row.kategori}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="font-medium text-slate-500 dark:text-slate-400 text-[13px]">{row.kelas}</span>
                  </td>
                  <td className="px-6 py-4 text-center whitespace-nowrap">
                    <span className="font-black text-[#023047] dark:text-white text-[14px]">{row.kkm}</span>
                  </td>
                  <td className="px-6 py-4 text-center whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 font-bold text-[11px] border border-emerald-100 dark:border-emerald-500/20 tracking-wide">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> {row.status.toUpperCase()}
                    </span>
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
          <span className="text-[12.5px] font-medium text-slate-500 dark:text-slate-400">Menampilkan 1 sampai 6 dari 45 mapel</span>
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-400 hover:text-[#023047] hover:border-slate-300 disabled:opacity-50 shadow-sm">
              <CaretLeft size={16} weight="bold" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#023047] bg-[#023047] text-white font-bold text-[13px] shadow-sm">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold text-[13px] hover:bg-slate-50 shadow-sm">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-400 hover:text-[#023047] hover:border-slate-300 shadow-sm">
              <CaretRight size={16} weight="bold" />
            </button>
          </div>
        {/* Pagination end */}
        </div>

      </div>
      )}
    </div>
  );
}
