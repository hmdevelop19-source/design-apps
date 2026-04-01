import React, { useState } from 'react';
import { 
  ArrowLeft, UserCircle, MapPin, 
  Printer, PencilSimple, FloppyDisk, Camera, X,
  Users, Receipt, CheckCircle, WarningCircle, HandCoins, UserSquare, CaretRight, ShieldCheck
} from '@phosphor-icons/react';

export default function DetailWaliSantri({ wali, onBack }) {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('biodata');

  // Form State Dummy exactly mimicking SantriBaru Step 1
  const [formData, setFormData] = useState({
    nikWali: '3201998877665544',
    noKk: '3201112233445566',
    namaDepanWali: wali?.name?.split(' ')[0] || 'Abdullah',
    namaBelakangWali: wali?.name?.split(' ').slice(1).join(' ') || 'Faisal',
    jkWali: 'Laki-laki',
    peran: 'Ayah',
    pekerjaanWali: wali?.pekerjaan || 'PNS / ASN',
    pendidikanWali: 'S1/S2/S3',
    phoneWali: wali?.phone || '0812-3456-7890',
    emailWali: wali?.email && wali.email !== '-' ? wali.email : 'abdullah@email.com',
    alamatKtpWali: 'Jl. Merdeka No. 45, Kota Bandung, Jawa Barat',
    alamatDomisiliWali: 'Jl. Merdeka No. 45, Kota Bandung, Jawa Barat',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const InputField = ({ label, name, type = 'text', readOnlyIfEditing = false, options = [] }) => {
    if (isEditing && !readOnlyIfEditing && activeTab === 'biodata') {
      return (
        <div className="space-y-1.5 animate-fade-in">
          <label className="text-[12px] font-extrabold text-slate-700 dark:text-slate-300 uppercase tracking-widest">{label}</label>
          {options.length > 0 ? (
            <select
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 text-[13.5px] font-bold text-slate-800 dark:text-white transition-all shadow-sm"
            >
              {options.map(opt => <option key={opt}>{opt}</option>)}
            </select>
          ) : (
            <input 
              type={type} 
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 text-[13.5px] font-bold text-slate-800 dark:text-white transition-all shadow-sm"
            />
          )}
        </div>
      );
    }
    
    return (
      <div className="space-y-1">
        <span className="text-[11px] text-slate-400 dark:text-slate-500 font-bold tracking-widest uppercase">{label}</span>
        <p className="text-[14px] font-extrabold text-[#023047] dark:text-white">{formData[name]}</p>
      </div>
    );
  };

  const currentFullName = `${formData.namaDepanWali} ${formData.namaBelakangWali}`;

  return (
    <div className="animate-fade-in-right pb-10 w-full">
      {/* Top Banner and Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-[#FB8500] font-bold transition-all hover:-translate-x-1">
          <ArrowLeft size={18} weight="bold" />
          <span className="text-[13.5px]">Kembali ke Data Wali</span>
        </button>
        
        <div className="flex gap-3">
          {isEditing && activeTab === 'biodata' ? (
            <>
              <button onClick={() => setIsEditing(false)} className="px-5 py-2.5 bg-white dark:bg-slate-800 border shadow-sm border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-xl hover:bg-slate-50 flex items-center gap-2 font-bold transition-colors">
                <X size={16} weight="bold" /> Batal
              </button>
              <button onClick={() => setIsEditing(false)} className="px-5 py-2.5 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 flex items-center gap-2 font-bold shadow-lg shadow-emerald-500/20 transition-transform active:scale-95">
                <FloppyDisk size={18} weight="fill" /> Simpan Perubahan
              </button>
            </>
          ) : (
            <>
              <button className="px-5 py-2.5 bg-white dark:bg-slate-800 border shadow-sm border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-xl hover:bg-slate-50 flex items-center gap-2 font-bold transition-colors">
                <HandCoins size={18} weight="duotone" /> 
                <span className="hidden sm:inline">Kirim Penagihan</span>
              </button>
              <button onClick={() => { setActiveTab('biodata'); setIsEditing(true); }} className="px-5 py-2.5 bg-[#FB8500] text-white rounded-xl hover:bg-[#e07700] flex items-center gap-2 font-bold shadow-lg shadow-[#FB8500]/20 transition-transform active:scale-95">
                <PencilSimple size={18} weight="fill" /> Edit Biodata
              </button>
            </>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* Left Column: Profile Card */}
        <div className="xl:col-span-1 space-y-8">
          <div className="bg-white/80 dark:bg-bg-cardDark/90 backdrop-blur-xl rounded-3xl border border-slate-200/60 dark:border-slate-800 p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col items-center relative overflow-hidden sticky top-24">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-[#023047] to-[#011c29]"></div>
            
            <div className="relative mt-6 mb-5 group">
              <div className={`w-28 h-28 rounded-2xl bg-gradient-to-tr ${wali?.initialBg || 'from-blue-500 to-indigo-500'} flex items-center justify-center text-4xl font-extrabold text-white shadow-xl shadow-blue-500/30 border-4 border-white dark:border-bg-cardDark z-10 transition-transform group-hover:scale-105 duration-300`}>
                {wali?.initial || 'A'}
              </div>
              {isEditing && activeTab === 'biodata' && (
                <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-white dark:bg-slate-800 rounded-full shadow-lg border-2 border-slate-100 dark:border-slate-700 flex items-center justify-center text-slate-600 hover:text-blue-500 transition-colors z-20">
                  <Camera size={18} weight="fill" />
                </button>
              )}
            </div>
            
            <h2 className="text-xl font-black text-[#023047] dark:text-white text-center pb-0.5">{currentFullName}</h2>
            <p className="text-emerald-500 font-bold text-[13px] mt-1 text-center bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1 rounded-md tracking-wider">
              {formData.pekerjaanWali.toUpperCase()}
            </p>
            
            <div className="mt-6 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 font-black text-[11.5px] border border-blue-100 dark:border-blue-500/20 tracking-widest shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              AKSES: AKTIF
            </div>

            <div className="w-full h-px bg-slate-100 dark:border-slate-800 my-8"></div>

            <div className="w-full space-y-5">
              <div className="flex items-center justify-between text-[13.5px]">
                <span className="text-slate-400 font-bold">Total Tanggungan</span>
                <span className="text-[#023047] dark:text-white font-black">1 Santri</span>
              </div>
              <div className="flex items-center justify-between text-[13.5px]">
                <span className="text-slate-400 font-bold">Status Keuangan</span>
                <span className="text-emerald-500 font-black">Lancar</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Content Area */}
        <div className="xl:col-span-2 flex flex-col gap-6">
          
          {/* Tabs Navigation */}
          <div className="flex flex-wrap items-center justify-start p-1.5 bg-white/80 dark:bg-bg-cardDark/90 backdrop-blur-xl rounded-2xl border border-slate-200/60 dark:border-slate-800 shadow-[0_4px_20px_rgb(0,0,0,0.02)] w-max max-w-full overflow-x-auto custom-scrollbar">
            <button 
              onClick={() => setActiveTab('biodata')}
              className={`px-6 py-3 rounded-xl font-bold text-[13.5px] transition-all whitespace-nowrap flex items-center gap-2 ${activeTab === 'biodata' ? 'bg-[#023047] text-white shadow-md' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
            >
              <UserCircle size={18} weight={activeTab === 'biodata' ? "fill" : "bold"} />
              Biodata Lengkap Wali
            </button>
            <button 
              onClick={() => { setActiveTab('tanggungan'); setIsEditing(false); }}
              className={`px-6 py-3 rounded-xl font-bold text-[13.5px] transition-all whitespace-nowrap flex items-center gap-2 ${activeTab === 'tanggungan' ? 'bg-[#023047] text-white shadow-md' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
            >
              <Users size={18} weight={activeTab === 'tanggungan' ? "fill" : "bold"} />
              Data Tanggungan
            </button>
            <button 
              onClick={() => { setActiveTab('keuangan'); setIsEditing(false); }}
              className={`px-6 py-3 rounded-xl font-bold text-[13.5px] transition-all whitespace-nowrap flex items-center gap-2 ${activeTab === 'keuangan' ? 'bg-[#023047] text-white shadow-md' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
            >
              <Receipt size={18} weight={activeTab === 'keuangan' ? "fill" : "bold"} />
              Riwayat Keuangan
            </button>
          </div>

          {/* Tab 1: Biodata Wali */}
          {activeTab === 'biodata' && (
            <div className="space-y-6 animate-fade-in-up">
              <div className="bg-white/80 dark:bg-bg-cardDark/90 backdrop-blur-xl rounded-3xl border border-slate-200/60 dark:border-slate-800 p-8 shadow-[0_4px_20px_rgb(0,0,0,0.02)] relative overflow-hidden">
                {isEditing && activeTab === 'biodata' && <div className="absolute top-0 left-0 w-1 h-full bg-[#FB8500]"></div>}
                
                <h3 className="text-[14px] font-black text-[#023047] dark:text-white mb-7 uppercase tracking-widest flex items-center gap-2">
                  <UserCircle size={22} weight="fill" className={isEditing && activeTab === 'biodata' ? "text-[#FB8500]" : "text-blue-500"} />
                  Identitas & Kontak Wali
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-7">
                  <InputField label="NIK Wali" name="nikWali" type="number" />
                  <InputField label="Nomor Kartu Keluarga (KK)" name="noKk" type="number" />
                  <InputField label="Nama Depan Wali" name="namaDepanWali" />
                  <InputField label="Nama Belakang Wali" name="namaBelakangWali" />
                  <InputField label="Jenis Kelamin" name="jkWali" options={['Laki-laki', 'Perempuan']} />
                  <InputField label="Peran Sebagai" name="peran" options={['Ayah', 'Ibu', 'Wali']} />
                  <InputField label="Pekerjaan" name="pekerjaanWali" options={['PNS / ASN', 'Wiraswasta', 'Pegawai Swasta', 'Lainnya']} />
                  <InputField label="Pendidikan Terakhir" name="pendidikanWali" options={['SD/Sederajat', 'SMP/Sederajat', 'SMA/Sederajat', 'S1/S2/S3']} />
                  <InputField label="Nomor Telepon Pribadi" name="phoneWali" type="tel" />
                  <InputField label="Alamat Email Aktif" name="emailWali" type="email" />
                  <div className="md:col-span-2">
                    <InputField label="Alamat Lengkap (Sesuai KTP)" name="alamatKtpWali" />
                  </div>
                  <div className="md:col-span-2">
                    <InputField label="Alamat Domisili (Tempat Tinggal Saat Ini)" name="alamatDomisiliWali" />
                  </div>
                </div>
              </div>
            </div>
          )}


          {/* Tab 2: Tanggungan */}
          {activeTab === 'tanggungan' && (
            <div className="space-y-6 animate-fade-in-up">
              
              <div className="bg-white/80 dark:bg-bg-cardDark/90 backdrop-blur-xl rounded-3xl border border-slate-200/60 dark:border-slate-800 p-8 shadow-[0_4px_20px_rgb(0,0,0,0.02)] relative overflow-hidden">
                <h3 className="text-[14px] font-black text-[#023047] dark:text-white mb-7 uppercase tracking-widest flex items-center gap-2">
                  <Users size={22} weight="fill" className="text-purple-500" />
                  Daftar Santri Tanggungan
                </h3>
                
                <div className="space-y-4">
                  {/* Santri Card */}
                  <div className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-none transition-all cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
                        <UserSquare size={24} weight="fill" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-[#023047] dark:text-slate-200 text-[15px]">{wali?.santri || 'Ahmad Faisal'}</h4>
                        <p className="text-[12.5px] font-medium text-slate-500 mt-1">{wali?.rombel || 'Kelas 8 - Rombel A'} • Gedung Ali Kamar 01</p>
                        <p className="text-[12px] font-bold text-emerald-600 dark:text-emerald-400 mt-1.5 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Status Santri Aktif
                        </p>
                      </div>
                    </div>
                    
                    <button className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-500 hover:text-blue-600 hover:border-blue-200 transition-colors font-bold text-[12px]">
                      Lihat Profil <CaretRight size={14} weight="bold" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          )}


          {/* Tab 3: Keuangan */}
          {activeTab === 'keuangan' && (
            <div className="space-y-6 animate-fade-in-up">
              
              <div className="bg-white/80 dark:bg-bg-cardDark/90 backdrop-blur-xl rounded-3xl border border-slate-200/60 dark:border-slate-800 p-8 shadow-[0_4px_20px_rgb(0,0,0,0.02)] relative overflow-hidden">
                <h3 className="text-[14px] font-black text-[#023047] dark:text-white mb-7 uppercase tracking-widest flex items-center gap-2">
                  <WarningCircle size={22} weight="fill" className="text-rose-500" />
                  Tagihan Aktif (Menunggu Pembayaran)
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-5 rounded-2xl bg-rose-50/50 dark:bg-rose-500/5 border border-rose-100 dark:border-rose-500/10">
                    <div>
                      <h4 className="font-extrabold text-[#023047] dark:text-slate-200 text-[14px]">Iuran Komite & SPP - November 2026</h4>
                      <p className="text-[12.5px] font-medium text-slate-500 mt-1">Belum Dibayarkan. Jatuh tempo: 10 Nov 2026.</p>
                    </div>
                    <div className="text-right">
                      <span className="block font-black text-rose-600 dark:text-rose-400 text-[16px]">Rp 300.000</span>
                      <button className="mt-2 text-[11px] font-bold bg-rose-600 text-white px-3 py-1.5 rounded-lg hover:bg-rose-700 transition-colors">Bayar Sekarang</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 dark:bg-bg-cardDark/90 backdrop-blur-xl rounded-3xl border border-slate-200/60 dark:border-slate-800 p-8 shadow-[0_4px_20px_rgb(0,0,0,0.02)] relative overflow-hidden">
                <h3 className="text-[14px] font-black text-[#023047] dark:text-white mb-7 uppercase tracking-widest flex items-center gap-2">
                  <Receipt size={22} weight="fill" className="text-emerald-500" />
                  Riwayat Pembayaran Selesai
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700/50">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                        <CheckCircle size={20} weight="fill" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-[#023047] dark:text-slate-200 text-[13.5px]">Iuran SPP - Oktober 2026</h4>
                        <p className="text-[11px] font-bold text-slate-400 mt-1 uppercase tracking-wider">05 OKT 2026 • 09:15 WIB</p>
                      </div>
                    </div>
                    <span className="font-black text-slate-700 dark:text-slate-300 text-[14px]">Rp 300.000</span>
                  </div>

                  <div className="flex items-center justify-between p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700/50">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                        <CheckCircle size={20} weight="fill" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-[#023047] dark:text-slate-200 text-[13.5px]">Biaya Asrama & Uang Makan - Semester Ganjil</h4>
                        <p className="text-[11px] font-bold text-slate-400 mt-1 uppercase tracking-wider">12 JUL 2026 • 13:40 WIB</p>
                      </div>
                    </div>
                    <span className="font-black text-slate-700 dark:text-slate-300 text-[14px]">Rp 1.500.000</span>
                  </div>
                </div>
              </div>

            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}
