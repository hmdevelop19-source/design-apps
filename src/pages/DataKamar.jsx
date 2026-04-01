import React, { useState } from 'react';
import { 
  Bed, MagnifyingGlass, Funnel, Export, Plus, 
  PencilSimple, Trash, CaretLeft, CaretRight, UserCircle,
  ArrowLeft, FloppyDisk, CaretDown, Buildings
} from '@phosphor-icons/react';

export default function DataKamar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('table'); // 'table' | 'form'
  const [selectedAsrama, setSelectedAsrama] = useState('Semua');

  const tableData = [
    { id: 'KMR-A01', asrama: 'Gedung Ali Bin Abi Thalib', nama: 'Kamar 01', ketua: 'Ahmad Syafi\'i', kapasitas: 20, terisi: 20 },
    { id: 'KMR-A02', asrama: 'Gedung Ali Bin Abi Thalib', nama: 'Kamar 02', ketua: 'Hasan Al-Banna', kapasitas: 20, terisi: 18 },
    { id: 'KMR-U01', asrama: 'Gedung Umar Bin Khattab', nama: 'Kamar 01', ketua: 'Zaidan Rizqi', kapasitas: 20, terisi: 20 },
    { id: 'KMR-F01', asrama: 'Gedung Fatimah Az-Zahra', nama: 'Kamar 01', ketua: 'Salma Zahira', kapasitas: 20, terisi: 19 },
    { id: 'KMR-Ais01', asrama: 'Gedung Aisyah', nama: 'Kamar 01', ketua: 'Nisa Rahma', kapasitas: 20, terisi: 20 },
  ];

  const uniqueAsrama = ['Semua', ...Array.from(new Set(tableData.map(item => item.asrama)))];

  const filteredData = tableData.filter(item => {
    const matchSearch = item.nama.toLowerCase().includes(searchQuery.toLowerCase()) || item.ketua.toLowerCase().includes(searchQuery.toLowerCase());
    const matchAsrama = selectedAsrama === 'Semua' || item.asrama === selectedAsrama;
    return matchSearch && matchAsrama;
  });

  return (
    <div className="max-w-7xl mx-auto space-y-6 animate-fade-in-right pb-10">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/50 dark:bg-bg-cardDark/50 backdrop-blur-xl p-6 rounded-3xl border border-slate-200/60 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#00B0FB] to-blue-400 shadow-lg shadow-[#00B0FB]/30 flex items-center justify-center text-white shrink-0">
            <Bed size={24} weight="fill" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-[#000052] dark:text-white tracking-tight">Data Kamar Santri</h1>
            <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400 mt-1">Kelola data kamar dan penempatan tempat tidur santri di setiap asrama</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-[13px] font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm">
            <Export size={16} weight="bold" /> Export
          </button>
          <button onClick={() => setViewMode('form')} className="flex items-center gap-2 px-4 py-2.5 bg-[#FCD526] hover:bg-[#e3be22] text-white rounded-xl text-[13px] font-bold shadow-lg shadow-[#FCD526]/20 transition-all active:scale-95">
            <Plus size={16} weight="bold" /> Tambah Kamar
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
                <h2 className="text-lg font-black text-[#000052] dark:text-white">Registrasi Kamar Baru</h2>
                <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">Lengkapi form di bawah untuk mendaftarkan kamar baru di gedung asrama</p>
              </div>
            </div>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 max-w-4xl">
              <div className="space-y-2.5">
                <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Gedung Asrama</label>
                <div className="relative">
                  <select className="w-full appearance-none px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white cursor-pointer transition-colors">
                    <option value="">Pilih Gedung Asrama</option>
                    <option>Gedung Ali Bin Abi Thalib</option>
                    <option>Gedung Umar Bin Khattab</option>
                    <option>Gedung Fatimah Az-Zahra</option>
                    <option>Gedung Aisyah</option>
                  </select>
                  <CaretDown size={14} weight="bold" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>
              <div className="space-y-2.5">
                <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Kode Kamar</label>
                <input type="text" placeholder="Contoh: KMR-A03" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white transition-colors" />
              </div>
              <div className="space-y-2.5">
                <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Nama / Nomor Kamar</label>
                <input type="text" placeholder="Contoh: Kamar 03" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white transition-colors" />
              </div>
              <div className="space-y-2.5">
                <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Ketua Kamar (Pengurus Kamar)</label>
                <input type="text" placeholder="Masukkan nama ketua kamar" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white transition-colors" />
              </div>
              <div className="space-y-2.5">
                <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Kapasitas Penghuni</label>
                <input type="number" placeholder="Contoh: 20" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white transition-colors" />
              </div>
              <div className="pt-6 md:col-span-2 flex items-center justify-end gap-3 border-t border-slate-100 dark:border-slate-800">
                <button 
                  onClick={() => setViewMode('table')}
                  className="px-6 py-3 rounded-xl font-bold text-[13.5px] text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  Batal
                </button>
                <button 
                  className="px-6 py-3 rounded-xl font-bold text-[13.5px] bg-[#FCD526] hover:bg-[#e3be22] text-white shadow-lg shadow-[#FCD526]/20 flex items-center gap-2 transition-transform active:scale-95"
                >
                  <FloppyDisk size={18} weight="fill" />
                  Simpan Data Kamar
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
              placeholder="Cari kamar..." 
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

        {/* Asrama Filter Tabs */}
        <div className="px-6 py-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-800/20 overflow-x-auto custom-scrollbar flex items-center gap-2">
          {uniqueAsrama.map(asrama => (
            <button
              key={asrama}
              onClick={() => setSelectedAsrama(asrama)}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-[13px] font-bold transition-all duration-300 ${
                selectedAsrama === asrama 
                  ? 'bg-[#000052] text-white shadow-md shadow-[#000052]/20' 
                  : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-[#000052] hover:bg-blue-50/50'
              }`}
            >
              {asrama}
            </button>
          ))}
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-800/20">
                <th className="px-6 py-4 text-[11px] font-extrabold text-slate-400 uppercase tracking-widest whitespace-nowrap w-[100px]">KODE</th>
                <th className="px-6 py-4 text-[11px] font-extrabold text-slate-400 uppercase tracking-widest whitespace-nowrap">NAMA KAMAR & GEDUNG</th>
                <th className="px-6 py-4 text-[11px] font-extrabold text-slate-400 uppercase tracking-widest whitespace-nowrap">KETUA KAMAR</th>
                <th className="px-6 py-4 text-[11px] font-extrabold text-slate-400 uppercase tracking-widest whitespace-nowrap">KAPASITAS VS TERISI</th>
                <th className="px-6 py-4 text-[11px] font-extrabold text-slate-400 uppercase tracking-widest whitespace-nowrap text-center">STATUS</th>
                <th className="px-6 py-4 text-[11px] font-extrabold text-slate-400 uppercase tracking-widest whitespace-nowrap text-center">AKSI</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
              {filteredData.map((row) => {
                const occupancyRate = Math.round((row.terisi / row.kapasitas) * 100);
                const isFull = occupancyRate >= 100;
                
                return (
                  <tr key={row.id} className="hover:bg-blue-50/30 dark:hover:bg-blue-500/5 transition-colors group">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-[12px] font-black text-slate-500 dark:text-slate-400 tracking-wider bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md">{row.id}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="font-extrabold text-[#000052] dark:text-white text-[13.5px] pb-0.5">{row.nama}</span>
                        <div className="flex items-center gap-1.5 text-[12px] font-bold text-slate-400 tracking-wider">
                          <Buildings size={14} weight="fill" className="text-[#00B0FB]" />
                          {row.asrama}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <UserCircle size={18} weight="fill" className="text-slate-400" />
                        <span className="font-bold text-slate-700 dark:text-slate-300 text-[13px]">{row.ketua}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col gap-1 w-32">
                        <div className="flex justify-between items-center text-[11px] font-bold">
                          <span className={`${isFull ? 'text-red-500' : 'text-emerald-600 dark:text-emerald-400'}`}>{row.terisi}</span>
                          <span className="text-slate-400">/ {row.kapasitas}</span>
                        </div>
                        <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5">
                          <div 
                            className={`h-1.5 rounded-full ${isFull ? 'bg-red-500' : 'bg-[#00B0FB]'}`} 
                            style={{ width: `${occupancyRate}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-bold text-[11px] border tracking-wide ${isFull ? 'bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400 border-red-100 dark:border-red-500/20' : 'bg-[#00B0FB]/10 text-[#00B0FB] dark:bg-[#00B0FB]/20 dark:text-[#00B0FB] border-[#00B0FB]/20 dark:border-[#00B0FB]/30'}`}>
                        {isFull ? 'PENUH' : 'TERSEDIA'}
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
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <span className="text-[12.5px] font-medium text-slate-500 dark:text-slate-400">Menampilkan 1 sampai 5 dari 55 kamar</span>
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
