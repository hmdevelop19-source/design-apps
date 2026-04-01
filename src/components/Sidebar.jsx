import React, { useState } from 'react';
import {
  SquaresFour,
  Bank,
  Wallet,
  Users,
  ChalkboardTeacher,
  Briefcase,
  BookOpen,
  ShieldCheck,
  Mosque,
  Student,
  Info,
  Database,
  Gear,
  X,
  CaretDown
} from '@phosphor-icons/react';

const navItems = [
  { id: 'dasbor', label: 'Dasbor', icon: SquaresFour, active: true },
  { id: 'bank-santri', label: 'Bank Santri', icon: Bank, hasSub: true, subItems: ['Rekening', 'Transaksi', 'Laporan Keuangan'] },
  { id: 'manajemen-bank', label: 'Manajemen Bank', icon: Wallet, hasSub: true, subItems: ['Produk', 'COA', 'Jenis Transaksi'] },
  { id: 'manajemen-santri', label: 'Manajemen Santri', icon: Users, hasSub: true, subItems: ['Santri Baru', 'Data Santri', 'Data Wali Santri'] },
  { id: 'guru-tugas', label: 'Guru Tugas', icon: ChalkboardTeacher, hasSub: true, subItems: ['Penanggung Jawab', 'Institusi Tugas', 'Data UT-D'] },
  { id: 'manajemen-staf', label: 'Manajemen Staf', icon: Briefcase, hasSub: true, subItems: ['Data Staf'] },
  { id: 'kurikulum', label: 'Kurikulum', icon: BookOpen, hasSub: true, subItems: ['Mata Pelajaran', 'Guru', 'Penugasan Guru', 'Jam Pelajaran', 'Jadwal Pelajaran', 'Presensi', 'Penilaian', 'Raport', 'Siswa', 'Kenaikan Kelas'] },
  { id: 'manajemen-kamtib', label: 'Manajemen Kamtib', icon: ShieldCheck, hasSub: true, subItems: ['Kategori Pelanggaran', 'Pelanggaran', 'Sanksi', 'Laporan Kamtib', 'Tipe Izin', 'Perizinan', 'Manajemen Libur', 'Libur Sanrtri', 'Posko Keamana'] },
  { id: 'kepesantrenan', label: 'Kepesantrenan', icon: Mosque, hasSub: true, subItems: ['Asrama', 'Kamar', 'Mutasi', 'Jadwal Kegiatan'] },
  { id: 'manajemen-pendidikan', label: 'Manajemen Pendidikan', icon: Student, hasSub: true, subItems: ['Kelompok Pendidikan', 'Manajemen Pendidikan', 'Institusi Pendidikan', 'Kelas', 'Rombel'] },
  { id: 'informasi', label: 'Informasi', icon: Info, hasSub: true },
  { id: 'data-master', label: 'Data Master', icon: Database, hasSub: true },
  { id: 'pengaturan', label: 'Pengaturan', icon: Gear, hasSub: true }
];

export default function Sidebar({ isOpen, onClose, onNavigate, activePage }) {
  const [openMenus, setOpenMenus] = useState({ 'manajemen-santri': true }); // Open by default since user asked for it

  const toggleSubMenu = (id, e) => {
    e.preventDefault();
    setOpenMenus(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 left-0 h-full w-[280px] bg-gradient-to-b from-[#000052] to-[#000020] dark:from-[#0B1121] dark:to-[#050810] border-r border-white/5 z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0 overflow-y-auto custom-scrollbar ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="h-[74px] flex items-center px-6 border-b border-white/5 sticky top-0 bg-[#000052]/90 dark:bg-[#0B1121]/90 backdrop-blur-xl z-20">
          <div className="flex items-center gap-3">
            <div className="w-[30px] h-[30px] rounded-[10px] bg-gradient-to-tr from-[#FCD526] to-orange-400 shadow-lg shadow-[#FCD526]/30 flex items-center justify-center text-white font-extrabold text-[16px]">
              T
            </div>
            <span className="text-[18px] font-black tracking-widest text-white tracking-wide drop-shadow-sm">TAMJID</span>
          </div>
          <button onClick={onClose} className="lg:hidden text-white/50 hover:text-white ml-auto">
            <X size={20} weight="bold" />
          </button>
        </div>

        <nav className="p-4">
          <ul className="flex flex-col gap-1.5 mt-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isSubOpen = openMenus[item.id];
              const isActiveNode = activePage === item.label || (item.active && !activePage) || (item.hasSub && isSubOpen);
              
              return (
                <li key={item.id} className="relative">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (item.hasSub) { toggleSubMenu(item.id, e); }
                      else if (onNavigate) { onNavigate(item.label); }
                    }}
                    className={`group flex items-center px-3 py-[10px] mx-3 rounded-xl transition-all duration-300 font-medium ${
                      isActiveNode
                        ? 'bg-gradient-to-r from-[#FCD526]/10 to-transparent text-white shadow-[inset_3px_0_0_0_#FCD526]' 
                        : 'text-slate-400 hover:bg-white/5 hover:text-slate-100 hover:translate-x-1'
                      }`}
                  >
                    <div className={`flex items-center justify-center w-[34px] h-[34px] rounded-xl transition-all duration-300 ${
                      isActiveNode
                        ? 'bg-[#FCD526]/15 text-[#FCD526] shadow-sm shadow-[#FCD526]/10' 
                        : 'bg-transparent text-slate-400 group-hover:text-slate-300 group-hover:bg-white/5'
                    }`}>
                      <Icon size={18} weight={isActiveNode ? "fill" : "duotone"} className="shrink-0 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span className="ml-3 text-[13px] font-bold tracking-wide whitespace-nowrap overflow-hidden text-ellipsis">{item.label}</span>
                    {item.hasSub && (
                      <CaretDown
                        size={14}
                        weight="bold"
                        className={`ml-auto shrink-0 transition-transform duration-300 ${isSubOpen ? 'rotate-180 text-[#FCD526]' : 'text-slate-500 group-hover:text-slate-300'}`}
                      />
                    )}
                  </a>

                  {/* Submenu Area */}
                  {item.hasSub && (
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isSubOpen ? 'max-h-[800px] opacity-100 mt-1.5 mb-3' : 'max-h-0 opacity-0'}`}>
                      <ul className="flex flex-col gap-1 ml-11 relative">
                        {/* Vertical Depth Line */}
                        <div className="absolute left-[13px] top-1.5 bottom-1.5 w-[2px] bg-slate-700/50 rounded-full z-0"></div>
                        
                        {(item.subItems || ['Umum']).map((subLabel, idx) => {
                          const isSubActive = activePage === subLabel;
                          return (
                            <li key={idx} className="relative z-10 pr-4">
                              <a 
                                href="#" 
                                onClick={(e) => {
                                  e.preventDefault();
                                  if (onNavigate) onNavigate(subLabel);
                                }}
                                className={`flex items-center px-4 py-[9px] text-[12.5px] font-bold rounded-xl transition-all duration-200 w-full whitespace-nowrap overflow-hidden text-ellipsis ${
                                  isSubActive 
                                    ? 'text-white bg-white/10 ring-1 ring-white/10 shadow-sm pl-11' 
                                    : 'text-slate-400 hover:text-white hover:bg-white/5 hover:translate-x-1 pl-11'
                                }`}
                              >
                                {/* Indicator Dot */}
                                <div className={`absolute left-[10px] w-2 h-2 rounded-full border-2 transition-all duration-300 ${
                                  isSubActive ? 'border-[#FCD526] bg-[#FCD526] shadow-[0_0_8px_rgba(251,133,0,0.6)]' : 'border-slate-600 bg-[#0F172A]'
                                }`}></div>
                                
                                {subLabel}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}
