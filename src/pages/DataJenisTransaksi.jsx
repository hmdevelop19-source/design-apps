import React, { useState, useMemo } from 'react';
import { 
  Plus, MagnifyingGlass, CaretDown, CaretLeft, CaretRight, 
  CheckCircle, XCircle, PencilSimple, Trash, Tag
} from '@phosphor-icons/react';

export default function DataJenisTransaksi() {
  const [searchQuery, setSearchQuery] = useState('');

  const tableData = [
    { id: 'TRX-TYP-01', nama: 'Setoran Tunai Deposit', tipe: 'Kredit (+)', adminFee: 'Rp 0', status: 'Aktif' },
    { id: 'TRX-TYP-02', nama: 'Tarik Tunai Deposit', tipe: 'Debit (-)',  adminFee: 'Rp 0', status: 'Aktif' },
    { id: 'TRX-TYP-03', nama: 'Pembayaran SPP', tipe: 'Debit (-)', adminFee: 'Rp 1.500', status: 'Aktif' },
    { id: 'TRX-TYP-04', nama: 'Pembayaran Uang Makan', tipe: 'Debit (-)', adminFee: 'Rp 0', status: 'Aktif' },
    { id: 'TRX-TYP-05', nama: 'Transfer Antar Rekening', tipe: 'Debit (-)', adminFee: 'Rp 2.000', status: 'Aktif' },
    { id: 'TRX-TYP-06', nama: 'Pembelian Koperasi / Kantin', tipe: 'Debit (-)', adminFee: 'Rp 0', status: 'Non-Aktif' },
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
          <h2 className="text-2xl font-extrabold text-[#000052] dark:text-white tracking-tight">Jenis Transaksi</h2>
          <p className="text-[13.5px] text-slate-500 dark:text-slate-400 mt-1 font-medium">Kelola kategori dan Master Date untuk tipe transaksi finansial internal pesantren.</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-[#FCD526] hover:bg-[#e3be22] text-white px-5 py-3 rounded-xl font-bold shadow-lg shadow-[#FCD526]/30 transition-all hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm">
          <Plus size={18} weight="bold" />
          <span className="text-[14px]">Tambah Kategori</span>
        </button>
      </div>

      {/* Sleek Toolbar Component */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6 w-full text-left">
        <div className="text-[13px] text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap">
          Menampilkan <span className="font-bold text-slate-800 dark:text-slate-200">{filteredData.length} kategori</span> terdaftar
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
          {/* Search Bar */}
          <div className="relative w-full sm:w-[280px]">
            <input 
              type="text" 
              placeholder="Cari referensi atau nama kategori..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/40 text-[13.5px] text-slate-700 dark:text-slate-200 font-medium shadow-sm hover:border-slate-300 dark:hover:border-slate-600 transition-colors placeholder:text-slate-400"
            />
            <MagnifyingGlass size={16} weight="bold" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>

          <div className="flex flex-row gap-3 w-full sm:w-auto">
            <div className="relative w-full sm:w-[150px]">
              <select className="w-full appearance-none pl-4 pr-10 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/40 text-[13px] text-slate-700 dark:text-slate-200 font-medium cursor-pointer shadow-sm hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
                <option>Semua Tipe</option>
                <option>Debit (-)</option>
                <option>Kredit (+)</option>
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
                <th className="px-8 py-5 whitespace-nowrap text-[10px] tracking-widest uppercase">Kode Kategori</th>
                <th className="px-8 py-5 whitespace-nowrap text-[10px] tracking-widest uppercase">Nama & Deskripsi</th>
                <th className="px-8 py-5 whitespace-nowrap text-[10px] tracking-widest uppercase text-center">Tipe Arus</th>
                <th className="px-8 py-5 whitespace-nowrap text-[10px] tracking-widest uppercase text-right">Biaya Admin</th>
                <th className="px-8 py-5 whitespace-nowrap text-[10px] tracking-widest uppercase text-center">Status</th>
                <th className="px-8 py-5 whitespace-nowrap text-[10px] tracking-widest uppercase text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-transparent text-left">
              {filteredData.length > 0 ? (
                filteredData.map((row, i) => (
                  <tr key={i} className="group hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors">
                    
                    {/* Kode */}
                    <td className="px-8 py-4">
                      <span className="font-extrabold font-mono text-[#000052] dark:text-slate-200 text-[13.5px] px-2.5 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg">{row.id}</span>
                    </td>

                    {/* Nama */}
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-500">
                          <Tag size={18} weight="duotone" />
                        </div>
                        <span className="font-bold text-slate-800 dark:text-slate-200 text-[13.5px]">{row.nama}</span>
                      </div>
                    </td>
                    
                    {/* Tipe */}
                    <td className="px-8 py-4 text-center">
                      <div className="flex flex-col items-center justify-center">
                        <span className={`text-[12px] font-extrabold tracking-wide ${row.tipe.includes('+') ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-300'}`}>{row.tipe}</span>
                      </div>
                    </td>

                    {/* Admin Fee */}
                    <td className="px-8 py-4 text-right">
                      <span className="font-bold text-slate-700 dark:text-slate-300 text-[13.5px]">{row.adminFee}</span>
                    </td>
                    
                    {/* Status */}
                    <td className="px-8 py-4 text-center transition-all">
                      {row.status === 'Aktif' && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 font-bold text-[11px] border border-emerald-100 dark:border-emerald-500/20 tracking-wide justify-center w-[90px]">
                          <CheckCircle size={15} weight="fill" /> AKTIF
                        </span>
                      )}
                      {row.status === 'Non-Aktif' && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400 font-bold text-[11px] border border-slate-200 dark:border-slate-700 tracking-wide justify-center w-[90px]">
                          <XCircle size={15} weight="fill" /> NON-AKTIF
                        </span>
                      )}
                    </td>
                    
                    {/* Aksi */}
                    <td className="px-8 py-4">
                      <div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-[#FCD526] hover:bg-orange-50 hover:border-orange-200 transition-all bg-white dark:bg-slate-800 shadow-sm" title="Edit Data">
                          <PencilSimple size={16} weight="regular" />
                        </button>
                        <button className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-red-600 hover:bg-red-50 hover:border-red-200 transition-all bg-white dark:bg-slate-800 shadow-sm" title="Hapus Data">
                          <Trash size={16} weight="regular" />
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
                      <p className="text-[14px] font-medium text-slate-600 dark:text-slate-400 mb-1">Jenis Transaksi tidak ditemukan</p>
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
        </div>

      </div>
    </div>
  );
}
