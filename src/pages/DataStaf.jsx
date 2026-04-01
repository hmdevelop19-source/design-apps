import React, { useState, useMemo } from 'react';
import { 
  UserPlus, MagnifyingGlass, CaretDown, CaretLeft, CaretRight, 
  CheckCircle, XCircle, ClockCountdown, Eye, PencilSimple, Trash
} from '@phosphor-icons/react';

export default function DataStaf() {
  const [searchQuery, setSearchQuery] = useState('');

  const tableData = [
    { id: 'STF-201', initial: 'M', initialBg: 'from-blue-500 to-indigo-500 shadow-blue-500/30', nama: 'Muhammad Ridwan', nip: '198501012010011001', kontak: '0812-3456-7890', email: 'ridwan@pesantren.id', role: 'Kepala Tata Usaha', departemen: 'Administrasi', status: 'Aktif' },
    { id: 'STF-202', initial: 'F', initialBg: 'from-emerald-500 to-teal-500 shadow-emerald-500/30', nama: 'Fatimah Az-Zahra', nip: '199002022015022002', kontak: '0813-4567-8901', email: 'fatimah@pesantren.id', role: 'Staf Keuangan', departemen: 'Keuangan', status: 'Aktif' },
    { id: 'STF-203', initial: 'A', initialBg: 'from-[#FB8500] to-orange-500 shadow-orange-500/30', nama: 'Ahmad Syafii', nip: '198803032014031003', kontak: '0852-5678-9012', email: 'ahmad@pesantren.id', role: 'Kepala Keamanan', departemen: 'Kamtib', status: 'Cuti' },
    { id: 'STF-204', initial: 'S', initialBg: 'from-pink-500 to-rose-500 shadow-pink-500/30', nama: 'Siti Aminah', nip: '199204042018042004', kontak: '0821-6789-0123', email: 'siti@pesantren.id', role: 'Staf HRD', departemen: 'Kepegawaian', status: 'Aktif' },
    { id: 'STF-205', initial: 'H', initialBg: 'from-purple-500 to-violet-500 shadow-purple-500/30', nama: 'Hasan Basri', nip: '198705052012051005', kontak: '0811-7890-1234', email: 'hasan@pesantren.id', role: 'Koordinator IT', departemen: 'Teknologi Informasi', status: 'Non-Aktif' },
    { id: 'STF-206', initial: 'U', initialBg: 'from-blue-400 to-cyan-500 shadow-blue-500/30', nama: 'Umar Khalid', nip: '199506062020061006', kontak: '0822-8901-2345', email: 'umar@pesantren.id', role: 'Staf Sarana Prasarana', departemen: 'Logistik', status: 'Aktif' },
  ];

  const filteredData = useMemo(() => {
    return tableData.filter(row => 
      row.nama.toLowerCase().includes(searchQuery.toLowerCase()) || 
      row.nip.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.id.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, tableData]);

  return (
    <div className="animate-fade-in-up w-full">
      {/* Header & Main Actions */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-8 text-left">
        <div>
          <h2 className="text-2xl font-extrabold text-[#023047] dark:text-white tracking-tight">Manajemen Data Staf</h2>
          <p className="text-[13.5px] text-slate-500 dark:text-slate-400 mt-1 font-medium">Kelola informasi pegawai, staf operasional, dan admin pondok.</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-[#FB8500] hover:bg-[#e07700] text-white px-5 py-3 rounded-xl font-bold shadow-lg shadow-[#FB8500]/30 transition-all hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm">
          <UserPlus size={18} weight="bold" />
          <span className="text-[14px]">Tambah Staf</span>
        </button>
      </div>

      {/* Sleek Toolbar Component */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6 w-full text-left">
        <div className="text-[13px] text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap">
          Menampilkan <span className="font-bold text-slate-800 dark:text-slate-200">{filteredData.length} staf</span> terdaftar
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
          {/* Search Bar */}
          <div className="relative w-full sm:w-[280px]">
            <input 
              type="text" 
              placeholder="Cari nama, ID, atau NIP..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/40 text-[13.5px] text-slate-700 dark:text-slate-200 font-medium shadow-sm hover:border-slate-300 dark:hover:border-slate-600 transition-colors placeholder:text-slate-400"
            />
            <MagnifyingGlass size={16} weight="bold" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>

          <div className="flex flex-row gap-3 w-full sm:w-auto">
            <div className="relative w-full sm:w-[160px]">
              <select className="w-full appearance-none pl-4 pr-10 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/40 text-[13px] text-slate-700 dark:text-slate-200 font-medium cursor-pointer shadow-sm hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
                <option>Semua Departemen</option>
                <option>Administrasi</option>
                <option>Keuangan</option>
                <option>Kamtib</option>
                <option>Kepegawaian</option>
                <option>Teknologi</option>
              </select>
              <CaretDown size={14} weight="bold" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
            
            <div className="relative w-full sm:w-[150px]">
              <select className="w-full appearance-none pl-4 pr-10 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/40 text-[13px] text-slate-700 dark:text-slate-200 font-medium cursor-pointer shadow-sm hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
                <option>Semua Status</option>
                <option>Status: Aktif</option>
                <option>Status: Cuti</option>
                <option>Status: Non-Aktif</option>
              </select>
              <CaretDown size={14} weight="bold" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Table Container */}
      <div className="bg-white/90 dark:bg-bg-cardDark/90 backdrop-blur-2xl rounded-3xl border border-slate-200/60 dark:border-border-dark flex flex-col overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] dark:shadow-none min-h-[400px]">
        
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse text-[13px]">
            <thead className="border-b border-slate-100 dark:border-slate-800 bg-[#f8fafc]/50 dark:bg-[#1E293B]/50 text-slate-500 dark:text-slate-400 font-bold">
              <tr>
                <th className="px-8 py-5 whitespace-nowrap text-[10px] tracking-widest uppercase">Profil Staf</th>
                <th className="px-8 py-5 whitespace-nowrap text-[10px] tracking-widest uppercase">Informasi Kontak</th>
                <th className="px-8 py-5 whitespace-nowrap text-[10px] tracking-widest uppercase">Jabatan & Divisi</th>
                <th className="px-8 py-5 whitespace-nowrap text-[10px] tracking-widest uppercase text-center">Status</th>
                <th className="px-8 py-5 whitespace-nowrap text-[10px] tracking-widest uppercase text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-transparent text-left">
              {filteredData.length > 0 ? (
                filteredData.map((row, i) => (
                  <tr key={i} className="group hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors">
                    {/* Profil Staf */}
                    <td className="px-8 py-4">
                      <div className="flex items-center gap-4">
                        <div className={`w-11 h-11 rounded-[14px] bg-gradient-to-tr flex items-center justify-center text-[16px] font-extrabold text-white shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300 ${row.initialBg}`}>
                          {row.initial}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-extrabold text-[#023047] dark:text-white text-[14.5px]">{row.nama}</span>
                          <span className="text-slate-400 font-medium text-[12px] mt-0.5">NIP: <span className="text-slate-500 dark:text-slate-300 font-semibold">{row.nip}</span></span>
                        </div>
                      </div>
                    </td>
                    
                    {/* Informasi Kontak */}
                    <td className="px-8 py-4">
                      <div className="flex flex-col gap-1">
                        <span className="font-bold text-slate-700 dark:text-slate-200 text-[13px]">{row.kontak}</span>
                        <span className="text-slate-400 font-medium text-[12px]">{row.email}</span>
                      </div>
                    </td>
                    
                    {/* Jabatan & Divisi */}
                    <td className="px-8 py-4">
                      <div className="flex flex-col gap-1.5 items-start">
                        <span className="font-bold text-slate-800 dark:text-slate-200 text-[13px]">{row.role}</span>
                        <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10.5px] font-extrabold tracking-wide uppercase border border-slate-200 dark:border-slate-700">
                          {row.departemen}
                        </span>
                      </div>
                    </td>
                    
                    {/* Status */}
                    <td className="px-8 py-4 text-center transition-all">
                      {row.status === 'Aktif' && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 font-bold text-[11px] border border-emerald-100 dark:border-emerald-500/20 tracking-wide justify-center min-w-[100px]">
                          <CheckCircle size={15} weight="fill" /> AKTIF
                        </span>
                      )}
                      {row.status === 'Cuti' && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400 font-bold text-[11px] border border-amber-100 dark:border-amber-500/20 tracking-wide justify-center min-w-[100px]">
                          <ClockCountdown size={15} weight="fill" /> CUTI
                        </span>
                      )}
                      {row.status === 'Non-Aktif' && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400 font-bold text-[11px] border border-slate-200 dark:border-slate-700 tracking-wide justify-center min-w-[100px]">
                          <XCircle size={15} weight="fill" /> NON-AKTIF
                        </span>
                      )}
                    </td>
                    
                    {/* Aksi */}
                    <td className="px-8 py-4">
                      <div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition-all bg-white dark:bg-slate-800 shadow-sm" title="Lihat Profil">
                          <Eye size={16} weight="regular" />
                        </button>
                        <button className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-[#FB8500] hover:bg-orange-50 hover:border-orange-200 transition-all bg-white dark:bg-slate-800 shadow-sm" title="Edit Data">
                          <PencilSimple size={16} weight="regular" />
                        </button>
                        <button className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-red-600 hover:bg-red-50 hover:border-red-200 transition-all bg-white dark:bg-slate-800 shadow-sm" title="Hapus Staf">
                          <Trash size={16} weight="regular" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-8 py-16 text-center">
                    <div className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500">
                      <MagnifyingGlass size={48} weight="thin" className="mb-3 opacity-50" />
                      <p className="text-[14px] font-medium text-slate-600 dark:text-slate-400 mb-1">Data staf tidak ditemukan</p>
                      <p className="text-[13px]">Coba gunakan kata pencarian atau filter lain.</p>
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
            HLM <span className="text-slate-800 dark:text-white font-black px-1">1</span> DARI <span className="text-slate-800 dark:text-white font-black px-1">1</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-9 h-9 flex items-center justify-center rounded-xl text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors disabled:opacity-50" disabled>
              <CaretLeft size={16} weight="bold" />
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-[#023047] dark:bg-slate-700 text-white font-extrabold text-[13px] shadow-md shadow-[#023047]/20">
              1
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-[#023047] dark:hover:text-white transition-colors" disabled>
              <CaretRight size={16} weight="bold" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
