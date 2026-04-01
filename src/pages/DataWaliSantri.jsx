import React, { useState, useMemo } from 'react';
import { CaretDown, CaretLeft, CaretRight as CaretRightIcon, Eye, PencilSimple, ChatCircle, EnvelopeSimple, MapPin, MagnifyingGlass, UserSquare } from '@phosphor-icons/react';
import DetailWaliSantri from './DetailWaliSantri';

export default function DataWaliSantri() {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('table');
  const [selectedWali, setSelectedWali] = useState(null);

  const tableData = [
    { initial: 'A', initialBg: 'from-blue-500 to-indigo-500 shadow-blue-500/30', name: 'Abdullah', pekerjaan: 'Pegawai Negeri Sipil', phone: '08123456789', email: 'abdullah@email.com', santri: 'Muhammad Fatih', rombel: 'Kelas 8 - Rombel A', alamat: 'Kota Bandung', status: 'Aktif' },
    { initial: 'H', initialBg: 'from-emerald-500 to-teal-500 shadow-emerald-500/30', name: 'Hasan', pekerjaan: 'Wiraswasta', phone: '08987654321', email: 'hasan.wira@email.com', santri: 'Siti Aminah', rombel: 'Kelas 7 - Rombel B', alamat: 'Jakarta Selatan', status: 'Aktif' },
    { initial: 'Z', initialBg: 'from-purple-500 to-fuchsia-500 shadow-purple-500/30', name: 'Zulkifli', pekerjaan: 'Guru / Pendidik', phone: '08112233445', email: '-', santri: 'Ahmad Zaky', rombel: 'Kelas 10 - IPA 1', alamat: 'Surabaya', status: 'Non-Aktif' },
    { initial: 'B', initialBg: 'from-pink-500 to-rose-500 shadow-pink-500/30', name: 'Budi Saputra', pekerjaan: 'Pegawai Swasta', phone: '08556677889', email: 'budi.s@email.com', santri: 'Dewi Sartika', rombel: 'Kelas 9 - Rombel C', alamat: 'Kota Bogor', status: 'Aktif' },
    { initial: 'S', initialBg: 'from-[#FB8500] to-[#FFB703] shadow-[#FB8500]/30', name: 'Supri', pekerjaan: 'Pedagang / Pengusaha', phone: '08778899001', email: '-', santri: 'Budi Santoso', rombel: 'Kelas 8 - Rombel A', alamat: 'Kab. Bekasi', status: 'Aktif' },
  ];

  const filteredData = useMemo(() => {
    return tableData.filter(row => 
      row.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      row.santri.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.phone.includes(searchQuery)
    );
  }, [searchQuery, tableData]);

  if (viewMode === 'detail') {
    return <DetailWaliSantri wali={selectedWali} onBack={() => setViewMode('table')} />;
  }

  return (
    <div className="animate-fade-in-up w-full">
      {/* Sleek Toolbar Component */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6 w-full">
        <div className="text-[13.5px] text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap">
          Menampilkan <span className="font-bold text-slate-800 dark:text-slate-200">{filteredData.length} data</span> wali santri
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
          {/* Search Bar */}
          <div className="relative w-full sm:w-[280px]">
            <input 
              type="text" 
              placeholder="Cari wali, no hp, santri..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 text-[13.5px] text-slate-700 dark:text-slate-200 font-medium shadow-sm hover:border-slate-300 dark:hover:border-slate-600 transition-colors placeholder:text-slate-400"
            />
            <MagnifyingGlass size={16} weight="bold" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>

          <div className="flex flex-row gap-3 w-full sm:w-auto">
            <div className="relative w-full sm:w-[160px]">
              <select className="w-full appearance-none pl-4 pr-10 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 text-[13px] text-slate-700 dark:text-slate-200 font-medium cursor-pointer shadow-sm hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
                <option>Semua Status</option>
                <option>Santri Aktif</option>
                <option>Santri Non-Aktif</option>
              </select>
              <CaretDown size={14} weight="bold" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
            
            <div className="relative w-full sm:w-[150px]">
              <select className="w-full appearance-none pl-4 pr-10 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 text-[13px] text-slate-700 dark:text-slate-200 font-medium cursor-pointer shadow-sm hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
                <option>Pekerjaan</option>
                <option>PNS / TNI / Polri</option>
                <option>Wiraswasta</option>
                <option>Karyawan</option>
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
                <th className="px-8 py-5 whitespace-nowrap text-[10px] tracking-widest uppercase">Data Wali Santri</th>
                <th className="px-8 py-5 whitespace-nowrap text-[10px] tracking-widest uppercase">Kontak Akses</th>
                <th className="px-8 py-5 whitespace-nowrap text-[10px] tracking-widest uppercase">Santri Tanggungan</th>
                <th className="px-8 py-5 whitespace-nowrap text-[10px] tracking-widest uppercase">Alamat Asal</th>
                <th className="px-8 py-5 whitespace-nowrap text-[10px] tracking-widest uppercase text-center">Status</th>
                <th className="px-8 py-5 whitespace-nowrap text-[10px] tracking-widest uppercase text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-transparent">
              {filteredData.length > 0 ? (
                filteredData.map((row, i) => (
                  <tr key={i} className="group hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors">
                    
                    {/* Data Wali Santri */}
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-4">
                        <div className={`w-11 h-11 rounded-[14px] bg-gradient-to-tr flex items-center justify-center text-[16px] font-extrabold text-white shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300 ${row.initialBg}`}>
                          {row.initial}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-extrabold text-[#023047] dark:text-white text-[14.5px]">{row.name}</span>
                          <span className="text-slate-400 dark:text-slate-500 font-medium text-[12px] mt-0.5">{row.pekerjaan}</span>
                        </div>
                      </div>
                    </td>
                    
                    {/* Kontak Akses */}
                    <td className="px-8 py-5">
                      <div className="flex flex-col gap-2">
                        <a href="#" className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 font-bold text-[13px] transition-colors w-max group/phone">
                          <span className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-50 group-hover/phone:bg-blue-100 dark:bg-blue-500/10 dark:group-hover/phone:bg-blue-500/20 transition-colors">
                            <ChatCircle size={13} weight="fill" />
                          </span>
                          {row.phone}
                        </a>
                        {row.email !== '-' && (
                          <div className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 font-medium text-[12.5px] w-max">
                            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                              <EnvelopeSimple size={13} weight="fill" />
                            </span>
                            {row.email}
                          </div>
                        )}
                      </div>
                    </td>
                    
                    {/* Santri Tanggungan */}
                    <td className="px-8 py-5">
                      <div className="flex flex-col gap-1.5 items-start">
                        <span className="inline-flex items-center gap-1.5 font-bold text-slate-700 dark:text-slate-200 text-[13.5px]">
                          <UserSquare size={16} weight="duotone" className="text-primary" /> {row.santri}
                        </span>
                        <span className="text-slate-400 dark:text-slate-500 font-semibold text-[11px] bg-slate-50 dark:bg-slate-800/50 px-2 py-0.5 rounded border border-slate-100 dark:border-slate-700">
                          {row.rombel}
                        </span>
                      </div>
                    </td>
                    
                    {/* Alamat Asal */}
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 font-medium text-[13px]">
                        <MapPin size={16} weight="fill" className="text-rose-400 dark:text-rose-500" />
                        {row.alamat}
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
                          onClick={() => { setSelectedWali(row); setViewMode('detail'); }}
                          className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200 dark:hover:bg-blue-500/10 dark:hover:text-blue-400 dark:hover:border-blue-500/30 transition-all bg-white dark:bg-transparent shadow-sm"
                        >
                          <Eye size={16} weight="regular" />
                        </button>
                        <button 
                          onClick={() => { setSelectedWali(row); setViewMode('detail'); }}
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
                      <p className="text-[14px] font-medium text-slate-600 dark:text-slate-400 mb-1">Tidak ada wali santri ditemukan</p>
                      <p className="text-[13px]">Kami tidak menemukan pangkalan data untuk kata kunci "{searchQuery}"</p>
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
            HLM <span className="text-slate-800 dark:text-white font-black px-1">1</span> DARI <span className="text-slate-800 dark:text-white font-black px-1">2</span>
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
            <button className="w-9 h-9 flex items-center justify-center rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-[#023047] dark:hover:text-white transition-colors">
              <CaretRightIcon size={16} weight="bold" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
