import React, { useState, useMemo } from 'react';
import { CaretDown, CaretLeft, CaretRight as CaretRightIcon, Eye, PencilSimple, Bed, House, ChatCircle, MagnifyingGlass } from '@phosphor-icons/react';
import DetailSantri from './DetailSantri';

export default function DataSantri() {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('table'); // 'table' or 'detail'
  const [selectedSantri, setSelectedSantri] = useState(null);

  const tableData = [
    { initial: 'M', initialBg: 'from-blue-500 to-indigo-500 shadow-blue-500/30', name: 'Muhammad Fatih', nis: '12S001', kelas: 'Kelas 8', rombel: 'Rombel A', asrama: 'Ali-01', asramaType: 'asrama', wali: 'Abdullah', phone: '08123456789', status: 'Aktif' },
    { initial: 'S', initialBg: 'from-pink-500 to-rose-500 shadow-pink-500/30', name: 'Siti Aminah', nis: '12S002', kelas: 'Kelas 7', rombel: 'Rombel B', asrama: 'Fatimah-03', asramaType: 'asrama', wali: 'Hasan', phone: '08987654321', status: 'Aktif' },
    { initial: 'A', initialBg: 'from-emerald-500 to-teal-500 shadow-emerald-500/30', name: 'Ahmad Zaky', nis: '12S003', kelas: 'Kelas 10', rombel: 'Rombel IPA 1', asrama: 'Umar-05', asramaType: 'asrama', wali: 'Zulkifli', phone: '08112233445', status: 'Non-Aktif' },
    { initial: 'D', initialBg: 'from-violet-500 to-fuchsia-500 shadow-violet-500/30', name: 'Dewi Sartika', nis: '12S004', kelas: 'Kelas 9', rombel: 'Rombel C', asrama: 'Pulang', asramaType: 'pulang', wali: 'Budi', phone: '08556677889', status: 'Aktif' },
    { initial: 'B', initialBg: 'from-[#FB8500] to-[#FFB703] shadow-[#FB8500]/30', name: 'Budi Santoso', nis: '12S005', kelas: 'Kelas 8', rombel: 'Rombel A', asrama: 'Ali-02', asramaType: 'asrama', wali: 'Supri', phone: '08778899001', status: 'Aktif' },
  ];

  const filteredData = useMemo(() => {
    return tableData.filter(row => 
      row.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      row.nis.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, tableData]);

  if (viewMode === 'detail') {
    return <DetailSantri santri={selectedSantri} onBack={() => setViewMode('table')} />;
  }

  return (
    <div className="animate-fade-in-up w-full">
      {/* Sleek Toolbar Component */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6 w-full">
        <div className="text-[13.5px] text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap">
          Menampilkan <span className="font-bold text-slate-800 dark:text-slate-200">{filteredData.length} data</span> santri saat ini
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
          {/* Search Bar */}
          <div className="relative w-full sm:w-[260px]">
            <input 
              type="text" 
              placeholder="Cari santri... (Nama / NIS)" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 text-[13.5px] text-slate-700 dark:text-slate-200 font-medium shadow-sm hover:border-slate-300 dark:hover:border-slate-600 transition-colors placeholder:text-slate-400"
            />
            <MagnifyingGlass size={16} weight="bold" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>

          <div className="flex flex-row gap-3 w-full sm:w-auto">
            <div className="relative w-full sm:w-[160px]">
              <select className="w-full appearance-none pl-4 pr-10 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 text-[13px] text-slate-700 dark:text-slate-200 font-medium cursor-pointer shadow-sm hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
                <option>Semua Asrama</option>
                <option>Gedung Ali</option>
                <option>Gedung Fatimah</option>
              </select>
              <CaretDown size={14} weight="bold" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
            
            <div className="relative w-full sm:w-[150px]">
              <select className="w-full appearance-none pl-4 pr-10 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 text-[13px] text-slate-700 dark:text-slate-200 font-medium cursor-pointer shadow-sm hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
                <option>Semua Kelas</option>
                <option>Kelas 7</option>
                <option>Kelas 8</option>
                <option>Kelas 9</option>
              </select>
              <CaretDown size={14} weight="bold" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Table Container */}
      <div className="bg-white/80 dark:bg-bg-cardDark/80 rounded-3xl border border-slate-200/60 dark:border-border-dark flex flex-col overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] dark:shadow-none min-h-[400px]">
        
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse text-[13px]">
            <thead className="border-b border-slate-100 dark:border-slate-800 bg-[#f8fafc]/50 dark:bg-[#1E293B]/50 text-slate-500 dark:text-slate-400 font-bold">
              <tr>
                <th className="px-8 py-5 whitespace-nowrap text-[10px] tracking-widest uppercase">Profil Santri</th>
                <th className="px-8 py-5 whitespace-nowrap text-[10px] tracking-widest uppercase">Jenjang & Kelas</th>
                <th className="px-8 py-5 whitespace-nowrap text-[10px] tracking-widest uppercase">Asrama</th>
                <th className="px-8 py-5 whitespace-nowrap text-[10px] tracking-widest uppercase">Wali Santri</th>
                <th className="px-8 py-5 whitespace-nowrap text-[10px] tracking-widest uppercase text-center">Status</th>
                <th className="px-8 py-5 whitespace-nowrap text-[10px] tracking-widest uppercase text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-transparent">
              {filteredData.length > 0 ? (
                filteredData.map((row, i) => (
                  <tr key={i} className="group hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors">
                    
                    {/* Profil Santri */}
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-4">
                        <div className={`w-11 h-11 rounded-[14px] bg-gradient-to-tr flex items-center justify-center text-[16px] font-extrabold text-white shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300 ${row.initialBg}`}>
                          {row.initial}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-extrabold text-[#023047] dark:text-white text-[14.5px]">{row.name}</span>
                          <span className="text-slate-400 font-medium text-[12px] mt-0.5">NIS: <span className="text-slate-500 dark:text-slate-300 font-semibold">{row.nis}</span></span>
                        </div>
                      </div>
                    </td>
                    
                    {/* Jenjang & Kelas */}
                    <td className="px-8 py-5">
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-800 dark:text-slate-200 text-[13.5px]">{row.kelas}</span>
                        <span className="text-slate-500 dark:text-slate-400 font-medium mt-0.5 text-[12px] bg-slate-100 dark:bg-slate-800/50 w-max px-2 py-0.5 rounded-md">{row.rombel}</span>
                      </div>
                    </td>
                    
                    {/* Asrama */}
                    <td className="px-8 py-5">
                      {row.asramaType === 'asrama' ? (
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400 font-bold text-[12px] border border-purple-100 dark:border-purple-500/20 shadow-sm shadow-purple-500/5">
                          <Bed size={16} weight="fill" /> {row.asrama}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-600 dark:bg-slate-700/50 dark:text-slate-300 font-bold text-[12px] border border-slate-200 dark:border-slate-600/50 shadow-sm shadow-slate-500/5">
                          <House size={16} weight="fill" /> {row.asrama}
                        </span>
                      )}
                    </td>
                    
                    {/* Wali Santri */}
                    <td className="px-8 py-5">
                      <div className="flex flex-col items-start gap-1">
                        <span className="font-bold text-slate-800 dark:text-slate-200 text-[13.5px]">{row.wali}</span>
                        <a href="#" className="inline-flex items-center gap-1.5 text-blue-500 hover:text-blue-600 font-bold text-[12.5px] transition-colors group/phone">
                          <span className="p-1 rounded-full bg-blue-50 group-hover/phone:bg-blue-100 dark:bg-blue-500/10 dark:group-hover/phone:bg-blue-500/20 transition-colors">
                            <ChatCircle size={14} weight="fill" />
                          </span>
                          {row.phone}
                        </a>
                      </div>
                    </td>
                    
                    {/* Status */}
                    <td className="px-8 py-5 text-center">
                      {row.status === 'Aktif' ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 font-bold text-[11px] border border-emerald-100 dark:border-emerald-500/20 tracking-wide">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> AKTIF
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400 font-bold text-[11px] border border-rose-100 dark:border-rose-500/20 tracking-wide">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500" /> NON-AKTIF
                        </span>
                      )}
                    </td>
                    
                    {/* Aksi */}
                    <td className="px-8 py-5">
                      <div className="flex items-center justify-center gap-3">
                        <button 
                          onClick={() => { setSelectedSantri(row); setViewMode('detail'); }}
                          className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200 dark:hover:bg-blue-500/10 dark:hover:text-blue-400 dark:hover:border-blue-500/30 transition-all bg-white dark:bg-transparent shadow-sm"
                        >
                          <Eye size={16} weight="regular" />
                        </button>
                        <button 
                          onClick={() => { setSelectedSantri(row); setViewMode('detail'); /* Should trigger edit mode in DetailSantri ideally, but passing state gives idea */ }}
                          className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-[#FB8500] hover:bg-orange-50 hover:border-orange-200 dark:hover:bg-orange-500/10 dark:hover:text-orange-400 dark:hover:border-orange-500/30 transition-all bg-white dark:bg-transparent shadow-sm"
                        >
                          <PencilSimple size={16} weight="regular" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-8 py-16 text-center">
                    <div className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500">
                      <MagnifyingGlass size={48} weight="thin" className="mb-3 opacity-50" />
                      <p className="text-[14px] font-medium text-slate-600 dark:text-slate-400 mb-1">Tidak ada santri ditemukan</p>
                      <p className="text-[13px]">Kami tidak menemukan santri dengan kata kunci "{searchQuery}"</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer Pagination */}
        <div className="py-6 px-8 border-t border-slate-100 dark:border-slate-800 bg-[#f8fafc]/30 dark:bg-transparent flex flex-col sm:flex-row justify-between items-center gap-4 mt-auto">
          <div className="text-[12px] text-slate-400 font-semibold tracking-wider">
            HLM <span className="text-slate-800 dark:text-white font-black px-1">1</span> DARI <span className="text-slate-800 dark:text-white font-black px-1">5</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-9 h-9 flex items-center justify-center rounded-xl text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors disabled:opacity-50" disabled>
              <CaretLeft size={16} weight="bold" />
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-[#023047] dark:bg-slate-700 text-white font-extrabold text-[13px] shadow-md shadow-[#023047]/20">
              1
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-xl text-slate-600 dark:text-slate-300 font-bold text-[13px] hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-[#023047] dark:hover:text-white transition-colors">
              2
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-xl text-slate-600 dark:text-slate-300 font-bold text-[13px] hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-[#023047] dark:hover:text-white transition-colors">
              3
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-[#023047] dark:hover:text-white transition-colors">
              <CaretRightIcon size={16} weight="bold" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
