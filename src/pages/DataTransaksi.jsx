import React, { useState, useMemo } from 'react';
import { 
  Plus, MagnifyingGlass, CaretDown, CaretLeft, CaretRight, 
  CheckCircle, XCircle, Clock, Eye, Printer, Receipt, ArrowDownLeft, ArrowUpRight
} from '@phosphor-icons/react';

export default function DataTransaksi() {
  const [searchQuery, setSearchQuery] = useState('');

  const tableData = [
    { id: 'TRX-1092831', refDate: '30 Okt 2026 • 14:30', nama: 'Moh. Raja', asrama: 'Asrama Putra A', jenis: 'Setor Tunai', type: 'Kredit', nominal: '+ Rp 500.000', status: 'Selesai' },
    { id: 'TRX-1092832', refDate: '30 Okt 2026 • 13:15', nama: 'Siti Aminah', asrama: 'Asrama Putri A', jenis: 'Tarik Tunai', type: 'Debit', nominal: '- Rp 150.000', status: 'Selesai' },
    { id: 'TRX-1092833', refDate: '30 Okt 2026 • 10:05', nama: 'Ahmad Faisal', asrama: 'Asrama Putra B', jenis: 'Pembayaran SPP', type: 'Debit', nominal: '- Rp 300.000', status: 'Selesai' },
    { id: 'TRX-1092834', refDate: '29 Okt 2026 • 16:45', nama: 'Zainab', asrama: 'Asrama Putri C', jenis: 'Transfer Keluar', type: 'Debit', nominal: '- Rp 200.000', status: 'Pending' },
    { id: 'TRX-1092835', refDate: '29 Okt 2026 • 09:20', nama: 'Umar Khalid', asrama: 'Asrama Putra B', jenis: 'Setor Tunai', type: 'Kredit', nominal: '+ Rp 1.000.000', status: 'Gagal' },
    { id: 'TRX-1092836', refDate: '28 Okt 2026 • 11:10', nama: 'Fathur Rohman', asrama: 'Asrama Putra C', jenis: 'Tarik Tunai', type: 'Debit', nominal: '- Rp 50.000', status: 'Selesai' },
  ];

  const filteredData = useMemo(() => {
    return tableData.filter(row => 
      row.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
      row.nama.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, tableData]);

  return (
    <div className="animate-fade-in-up w-full">
      {/* Header & Main Actions */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-8 text-left">
        <div>
          <h2 className="text-2xl font-extrabold text-[#023047] dark:text-white tracking-tight">Riwayat Transaksi Bank</h2>
          <p className="text-[13.5px] text-slate-500 dark:text-slate-400 mt-1 font-medium">Pantau semua aktivitas setoran, penarikan, dan pemindahan saldo deposit santri.</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-[#FB8500] hover:bg-[#e07700] text-white px-5 py-3 rounded-xl font-bold shadow-lg shadow-[#FB8500]/30 transition-all hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm">
          <Receipt size={18} weight="bold" />
          <span className="text-[14px]">Catat Transaksi</span>
        </button>
      </div>

      {/* Sleek Toolbar Component */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6 w-full text-left">
        <div className="text-[13px] text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap">
          Menampilkan <span className="font-bold text-slate-800 dark:text-slate-200">{filteredData.length} transaksi</span> terbaru
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
          {/* Search Bar */}
          <div className="relative w-full sm:w-[280px]">
            <input 
              type="text" 
              placeholder="Cari referensi atau nama..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/40 text-[13.5px] text-slate-700 dark:text-slate-200 font-medium shadow-sm hover:border-slate-300 dark:hover:border-slate-600 transition-colors placeholder:text-slate-400"
            />
            <MagnifyingGlass size={16} weight="bold" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>

          <div className="flex flex-row gap-3 w-full sm:w-auto">
            <div className="relative w-full sm:w-[160px]">
              <select className="w-full appearance-none pl-4 pr-10 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/40 text-[13px] text-slate-700 dark:text-slate-200 font-medium cursor-pointer shadow-sm hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
                <option>Semua Jenis</option>
                <option>Setor Tunai</option>
                <option>Tarik Tunai</option>
                <option>Pembayaran</option>
                <option>Transfer</option>
              </select>
              <CaretDown size={14} weight="bold" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
            
            <div className="relative w-full sm:w-[150px]">
              <select className="w-full appearance-none pl-4 pr-10 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/40 text-[13px] text-slate-700 dark:text-slate-200 font-medium cursor-pointer shadow-sm hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
                <option>Semua Status</option>
                <option>Selesai</option>
                <option>Pending</option>
                <option>Gagal</option>
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
                <th className="px-8 py-5 whitespace-nowrap text-[10px] tracking-widest uppercase">ID & Tanggal</th>
                <th className="px-8 py-5 whitespace-nowrap text-[10px] tracking-widest uppercase">Santri / Rekening</th>
                <th className="px-8 py-5 whitespace-nowrap text-[10px] tracking-widest uppercase">Jenis Transaksi</th>
                <th className="px-8 py-5 whitespace-nowrap text-[10px] tracking-widest uppercase text-right">Nominal</th>
                <th className="px-8 py-5 whitespace-nowrap text-[10px] tracking-widest uppercase text-center">Status</th>
                <th className="px-8 py-5 whitespace-nowrap text-[10px] tracking-widest uppercase text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-transparent text-left">
              {filteredData.length > 0 ? (
                filteredData.map((row, i) => (
                  <tr key={i} className="group hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors">
                    
                    {/* ID & Tanggal */}
                    <td className="px-8 py-4">
                      <div className="flex flex-col gap-1 items-start">
                        <span className="font-black font-mono text-[#023047] dark:text-slate-200 text-[13.5px] tracking-wider">{row.id}</span>
                        <span className="text-slate-400 font-medium text-[11px]">{row.refDate}</span>
                      </div>
                    </td>

                    {/* Santri */}
                    <td className="px-8 py-4">
                      <div className="flex flex-col gap-0.5">
                        <span className="font-bold text-slate-800 dark:text-slate-200 text-[13px]">{row.nama}</span>
                        <span className="text-slate-400 font-medium text-[11px]">{row.asrama}</span>
                      </div>
                    </td>
                    
                    {/* Jenis Transaksi */}
                    <td className="px-8 py-4">
                      <div className="flex flex-col gap-1.5 items-start">
                        <span className="font-extrabold text-slate-700 dark:text-slate-300 text-[12.5px]">{row.jenis}</span>
                      </div>
                    </td>
                    
                    {/* Nominal */}
                    <td className="px-8 py-4 text-right">
                      <div className={`flex items-center justify-end gap-1.5 font-black text-[14px] ${row.type === 'Kredit' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-slate-300'}`}>
                        {row.type === 'Kredit' ? <ArrowDownLeft size={16} weight="bold" /> : <ArrowUpRight size={16} weight="bold" className="text-orange-500" />}
                        {row.nominal}
                      </div>
                    </td>
                    
                    {/* Status */}
                    <td className="px-8 py-4 text-center transition-all">
                      {row.status === 'Selesai' && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 font-bold text-[11px] border border-emerald-100 dark:border-emerald-500/20 tracking-wide justify-center w-[90px]">
                          <CheckCircle size={15} weight="fill" /> SELESAI
                        </span>
                      )}
                      {row.status === 'Pending' && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400 font-bold text-[11px] border border-amber-100 dark:border-amber-500/20 tracking-wide justify-center w-[90px]">
                          <Clock size={15} weight="fill" /> PENDING
                        </span>
                      )}
                      {row.status === 'Gagal' && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400 font-bold text-[11px] border border-red-100 dark:border-red-500/20 tracking-wide justify-center w-[90px]">
                          <XCircle size={15} weight="fill" /> GAGAL
                        </span>
                      )}
                    </td>
                    
                    {/* Aksi */}
                    <td className="px-8 py-4">
                      <div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition-all bg-white dark:bg-slate-800 shadow-sm" title="Lihat Detail">
                          <Eye size={16} weight="regular" />
                        </button>
                        <button className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-[#FB8500] hover:bg-orange-50 hover:border-orange-200 transition-all bg-white dark:bg-slate-800 shadow-sm" title="Cetak Struk">
                          <Printer size={16} weight="regular" />
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
                      <p className="text-[14px] font-medium text-slate-600 dark:text-slate-400 mb-1">Riwayat transaksi tidak ditemukan</p>
                      <p className="text-[13px]">Coba gunakan kata referensi pencarian lain.</p>
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
