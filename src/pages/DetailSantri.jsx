import React, { useState } from 'react';
import { 
  ArrowLeft, UserCircle, Fingerprint, BookOpen, House, 
  Printer, PencilSimple, Check, FloppyDisk, Camera, X,
  GraduationCap, Bed, Trophy, WarningCircle, Star
} from '@phosphor-icons/react';

export default function DetailSantri({ santri, onBack }) {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('biodata');

  // Form State Dummy synchronized with Registration Schema
  const [formData, setFormData] = useState({
    // Pribadi Santri
    namaDepanSantri: 'Muhammad',
    namaBelakangSantri: 'Fatih',
    nis: santri?.nis || '12S001',
    nikSantri: '3527061906100003',
    jkSantri: 'Laki-laki',
    tempatLahir: 'Sampang',
    tanggalLahir: '2010-06-19',
    desaKelurahan: 'Banyukapah',
    alamatSantri: 'Dsn. Tebbas',
    
    // Wali Santri
    nikWali: '3527998877665544',
    noKk: '3527112233445566',
    namaDepanWali: 'Abdullah',
    namaBelakangWali: 'Ghani',
    jkWali: 'Laki-laki',
    peran: 'Ayah',
    pekerjaanWali: 'Wiraswasta',
    pendidikanWali: 'SMA/Sederajat',
    phoneWali: santri?.phone || '0812-3456-7890',
    emailWali: 'abdullah@email.com',
    alamatKtpWali: 'Dsn. Tebbas, Banyukapah',
    alamatDomisiliWali: 'Dsn. Tebbas, Banyukapah',

    // Akademik (Pendidikan Formal & Madrasah Internal Pesantren)
    sekolahAsal: 'SMP Darussalam',
    jenjangFormal: 'Kelas 8',
    statusSiswaFormal: 'Aktif',
    tahunMasukFormal: '2024',

    jenjangMadrasah: 'Madrasah Diniyah Wustha',
    kelasMadrasah: 'Kelas 2',
    program: 'Tahfidz Al-Quran',
    capaianHafalan: '5 Juz'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const InputField = ({ label, name, type = 'text', readOnlyIfEditing = false, options = [] }) => {
    // Only allow editing if we are in the 'biodata' tab and edit is turned on
    // Or if we want to edit akademik tab... wait, the user previously wanted edit for Biodata.
    // Let's make it editable on both Biodata and Akademik depending on activeTab.
    if (isEditing && !readOnlyIfEditing && (activeTab === 'biodata' || activeTab === 'akademik')) {
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
        <p className="text-[14px] font-extrabold text-[#000052] dark:text-white">{formData[name] || '-'}</p>
      </div>
    );
  };

  const isFormTabActive = activeTab === 'biodata' || activeTab === 'akademik';

  return (
    <div className="animate-fade-in-right pb-10 w-full">
      {/* Top Banner and Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-[#FCD526] font-bold transition-all hover:-translate-x-1">
          <ArrowLeft size={18} weight="bold" />
          <span className="text-[13.5px]">Kembali ke Data Santri</span>
        </button>
        
        <div className="flex gap-3">
          {isEditing && isFormTabActive ? (
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
                <Printer size={18} weight="duotone" /> 
                <span className="hidden sm:inline">Cetak Portfolio</span>
              </button>
              {isFormTabActive && (
                <button onClick={() => setIsEditing(true)} className="px-5 py-2.5 bg-[#FCD526] text-white rounded-xl hover:bg-[#e3be22] flex items-center gap-2 font-bold shadow-lg shadow-[#FCD526]/20 transition-transform active:scale-95">
                  <PencilSimple size={18} weight="fill" /> Edit Biodata
                </button>
              )}
            </>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* Left Column: Profile Card */}
        <div className="xl:col-span-1 space-y-8">
          <div className="bg-white/80 dark:bg-bg-cardDark/90 backdrop-blur-xl rounded-3xl border border-slate-200/60 dark:border-slate-800 p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col items-center relative overflow-hidden sticky top-24">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-[#000052] to-[#000020]"></div>
            
            <div className="relative mt-6 mb-5 group">
              <div className={`w-28 h-28 rounded-2xl bg-gradient-to-tr ${santri?.initialBg || 'from-blue-500 to-indigo-500'} flex items-center justify-center text-4xl font-extrabold text-white shadow-xl shadow-blue-500/30 border-4 border-white dark:border-bg-cardDark z-10 transition-transform group-hover:scale-105 duration-300`}>
                {santri?.initial || 'M'}
              </div>
              {isEditing && activeTab === 'biodata' && (
                <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-white dark:bg-slate-800 rounded-full shadow-lg border-2 border-slate-100 dark:border-slate-700 flex items-center justify-center text-slate-600 hover:text-blue-500 transition-colors z-20">
                  <Camera size={18} weight="fill" />
                </button>
              )}
            </div>
            
            <h2 className="text-xl font-black text-[#000052] dark:text-white text-center pb-0.5">{formData.namaDepanSantri} {formData.namaBelakangSantri}</h2>
            <p className="text-slate-500 font-bold text-[13px] mt-1 text-center bg-slate-100 dark:bg-slate-800/50 px-3 py-1 rounded-md tracking-wider">NIS: {formData.nis}</p>
            
            <div className="mt-6 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 font-black text-[11.5px] border border-emerald-100 dark:border-emerald-500/20 tracking-widest shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              STATUS: AKTIF
            </div>

            <div className="w-full h-px bg-slate-100 dark:border-slate-800 my-8"></div>

            <div className="w-full space-y-5">
              <div className="flex items-center justify-between text-[13.5px]">
                <span className="text-slate-400 font-bold">Asrama Saat Ini</span>
                <span className="text-[#000052] dark:text-white font-black">{santri?.asrama || 'Gedung Ali-01'}</span>
              </div>
              <div className="flex items-center justify-between text-[13.5px]">
                <span className="text-slate-400 font-bold">Kelas & Rombel</span>
                <span className="text-[#000052] dark:text-white font-black">{santri?.kelas || 'Kelas 8'} - {santri?.rombel || 'A'}</span>
              </div>
              <div className="flex items-center justify-between text-[13.5px]">
                <span className="text-slate-400 font-bold">Program Pesantren</span>
                <span className="text-blue-600 dark:text-blue-400 font-black">{formData.program}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Content Area */}
        <div className="xl:col-span-2 flex flex-col gap-6">
          
          {/* Tabs Navigation */}
          <div className="flex flex-wrap items-center justify-start p-1.5 bg-white/80 dark:bg-bg-cardDark/90 backdrop-blur-xl rounded-2xl border border-slate-200/60 dark:border-slate-800 shadow-[0_4px_20px_rgb(0,0,0,0.02)] w-max max-w-full overflow-x-auto custom-scrollbar">
            <button 
              onClick={() => { setActiveTab('biodata'); setIsEditing(false); }}
              className={`px-6 py-3 rounded-xl font-bold text-[13.5px] transition-all whitespace-nowrap flex items-center gap-2 ${activeTab === 'biodata' ? 'bg-[#000052] text-white shadow-md' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
            >
              <UserCircle size={18} weight={activeTab === 'biodata' ? "fill" : "bold"} />
              Biodata Utama
            </button>
            <button 
              onClick={() => { setActiveTab('akademik'); setIsEditing(false); }}
              className={`px-6 py-3 rounded-xl font-bold text-[13.5px] transition-all whitespace-nowrap flex items-center gap-2 ${activeTab === 'akademik' ? 'bg-[#000052] text-white shadow-md' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
            >
              <GraduationCap size={18} weight={activeTab === 'akademik' ? "fill" : "bold"} />
              Historis & Asrama
            </button>
            <button 
              onClick={() => { setActiveTab('catatan'); setIsEditing(false); }}
              className={`px-6 py-3 rounded-xl font-bold text-[13.5px] transition-all whitespace-nowrap flex items-center gap-2 ${activeTab === 'catatan' ? 'bg-[#000052] text-white shadow-md' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
            >
              <Trophy size={18} weight={activeTab === 'catatan' ? "fill" : "bold"} />
              Rekam Jejak
            </button>
          </div>

          {/* Tab 1: Biodata */}
          {activeTab === 'biodata' && (
            <div className="space-y-6 animate-fade-in-up">
              {/* Card 1: Pribadi */}
              <div className="bg-white/80 dark:bg-bg-cardDark/90 backdrop-blur-xl rounded-3xl border border-slate-200/60 dark:border-slate-800 p-8 shadow-[0_4px_20px_rgb(0,0,0,0.02)] relative overflow-hidden">
                {isEditing && activeTab === 'biodata' && <div className="absolute top-0 left-0 w-1 h-full bg-[#FCD526]"></div>}
                
                <h3 className="text-[14px] font-black text-[#000052] dark:text-white mb-7 uppercase tracking-widest flex items-center gap-2">
                  <UserCircle size={22} weight="fill" className={isEditing && activeTab === 'biodata' ? "text-[#FCD526]" : "text-blue-500"} />
                  Informasi Pribadi Santri
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-7">
                  <InputField label="Nama Depan" name="namaDepanSantri" />
                  <InputField label="Nama Belakang" name="namaBelakangSantri" />
                  <InputField label="NIK Santri" name="nikSantri" type="number" />
                  <InputField label="Jenis Kelamin" name="jkSantri" options={['Laki-laki', 'Perempuan']} />
                  <div className="grid grid-cols-2 gap-4">
                    <InputField label="Tempat Lahir" name="tempatLahir" />
                    <InputField label="Tanggal Lahir" name="tanggalLahir" type="date" />
                  </div>
                  <InputField label="Desa / Kelurahan" name="desaKelurahan" />
                  <div className="md:col-span-2">
                    <InputField label="Alamat Lengkap" name="alamatSantri" />
                  </div>
                </div>
              </div>

               {/* Card 2: Wali */}
              <div className="bg-white/80 dark:bg-bg-cardDark/90 backdrop-blur-xl rounded-3xl border border-slate-200/60 dark:border-slate-800 p-8 shadow-[0_4px_20px_rgb(0,0,0,0.02)] relative overflow-hidden">
                {isEditing && activeTab === 'biodata' && <div className="absolute top-0 left-0 w-1 h-full bg-[#FCD526]"></div>}
                
                <h3 className="text-[14px] font-black text-[#000052] dark:text-white mb-7 uppercase tracking-widest flex items-center gap-2">
                  <Fingerprint size={22} weight="fill" className={isEditing && activeTab === 'biodata' ? "text-[#FCD526]" : "text-emerald-500"} />
                  Data Wali Penanggungjawab
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-7">
                  <InputField label="Nama Depan Wali" name="namaDepanWali" />
                  <InputField label="Nama Belakang Wali" name="namaBelakangWali" />
                  <div className="md:col-span-2">
                    <InputField label="Nomor WhatsApp / Telepon" name="phoneWali" type="tel" />
                  </div>
                </div>
              </div>
            </div>
          )}


          {/* Tab 2: Historis (Pendidikan & Asrama) */}
          {activeTab === 'akademik' && (
            <div className="space-y-6 animate-fade-in-up">
              
              {/* Card 3: Pendidikan Terakhir */}
              <div className="bg-white/80 dark:bg-bg-cardDark/90 backdrop-blur-xl rounded-3xl border border-slate-200/60 dark:border-slate-800 p-8 shadow-[0_4px_20px_rgb(0,0,0,0.02)] relative overflow-hidden">
                {isEditing && activeTab === 'akademik' && <div className="absolute top-0 left-0 w-1 h-full bg-[#FCD526]"></div>}
                
                <h3 className="text-[14px] font-black text-[#000052] dark:text-white mb-7 uppercase tracking-widest flex items-center gap-2">
                  <BookOpen size={22} weight="fill" className={isEditing && activeTab === 'akademik' ? "text-[#FCD526]" : "text-purple-500"} />
                  Riwayat Pendidikan Pesantren
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-7">
                  <div className="md:col-span-2 mb-2 pb-2 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-[12px] font-bold text-slate-400">Pendidikan Formal (Internal)</span>
                  </div>
                  <InputField label="Instansi Formal" name="sekolahAsal" options={['SMP Darussalam', 'MTs Darussalam', 'SMA Darussalam', 'MA Darussalam', 'SMK Darussalam']} />
                  <InputField label="Kelas Saat Ini" name="jenjangFormal" options={['Kelas 7', 'Kelas 8', 'Kelas 9', 'Kelas 10', 'Kelas 11', 'Kelas 12']} />
                  <InputField label="Status Siswa" name="statusSiswaFormal" options={['Aktif', 'Lulus', 'Pindah', 'Berhenti']} />
                  <InputField label="Tahun Masuk" name="tahunMasukFormal" type="number" />

                  <div className="md:col-span-2 mt-4 mb-2 pb-2 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-[12px] font-bold text-slate-400">Pendidikan Madrasah (Internal)</span>
                  </div>
                  <InputField label="Tingkatan Madrasah" name="jenjangMadrasah" options={['Madrasah Diniyah Ula', 'Madrasah Diniyah Wustha', 'Madrasah Diniyah Ulya']} />
                  <InputField label="Kelas / Jilid" name="kelasMadrasah" />
                  <InputField label="Program Ekstra" name="program" options={['Kajian Kitab Kuning', 'Tahfidz Al-Quran', 'Program Bahasa Terpadu']} />
                  <InputField label="Capaian Hafalan" name="capaianHafalan" />
                </div>
              </div>

              {/* Card 4: Asrama */}
              <div className="bg-white/80 dark:bg-bg-cardDark/90 backdrop-blur-xl rounded-3xl border border-slate-200/60 dark:border-slate-800 p-8 shadow-[0_4px_20px_rgb(0,0,0,0.02)] relative overflow-hidden">
                <h3 className="text-[14px] font-black text-[#000052] dark:text-white mb-7 uppercase tracking-widest flex items-center gap-2">
                  <Bed size={22} weight="fill" className="text-teal-500" />
                  Riwayat Penempatan Asrama
                </h3>
                
                <div className="space-y-6">
                  {/* Current Asrama */}
                  <div className="flex gap-4 p-4 rounded-2xl bg-teal-50/50 dark:bg-teal-500/10 border border-teal-100 dark:border-teal-500/20">
                    <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-500/20 flex items-center justify-center text-teal-600 dark:text-teal-400 shrink-0">
                      <Bed size={20} weight="fill" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-[#000052] dark:text-slate-200 text-[14px]">Gedung Ali - Kamar 01</h4>
                      <p className="text-[12.5px] font-medium text-slate-500 mt-1">Asrama Putra Terpadu</p>
                      <p className="text-[12px] font-bold text-teal-600 dark:text-teal-400 mt-1.5 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span> Aktif Sejak: Juli 2024
                      </p>
                    </div>
                  </div>

                  {/* Past Asrama */}
                  <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700/50">
                    <div className="w-12 h-12 rounded-xl bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 shrink-0 opacity-50">
                      <House size={20} weight="fill" />
                    </div>
                    <div className="opacity-70">
                      <h4 className="font-extrabold text-[#000052] dark:text-slate-200 text-[14px]">Gedung Umar - Kamar 05</h4>
                      <p className="text-[12.5px] font-medium text-slate-500 mt-1">Pemindahan Kelas 7</p>
                      <p className="text-[12px] font-bold text-slate-400 mt-1.5 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span> Juli 2023 - Juni 2024
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}


          {/* Tab 3: Catatan (Prestasi & Kamtib) */}
          {activeTab === 'catatan' && (
            <div className="space-y-6 animate-fade-in-up">
              
              {/* Card 5: Prestasi */}
              <div className="bg-white/80 dark:bg-bg-cardDark/90 backdrop-blur-xl rounded-3xl border border-slate-200/60 dark:border-slate-800 p-8 shadow-[0_4px_20px_rgb(0,0,0,0.02)] relative overflow-hidden">
                <h3 className="text-[14px] font-black text-[#000052] dark:text-white mb-7 uppercase tracking-widest flex items-center gap-2">
                  <Trophy size={22} weight="fill" className="text-amber-500" />
                  Pencapaian & Prestasi
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50/50 dark:from-amber-500/10 dark:to-orange-500/5 border border-amber-100 dark:border-amber-500/20">
                    <div className="flex items-start justify-between">
                      <h4 className="font-extrabold text-[#000052] dark:text-slate-200 text-[14px] leading-tight pr-4">
                        Juara 1 Pidato B. Arab
                      </h4>
                      <Star size={18} weight="fill" className="text-amber-500 shrink-0" />
                    </div>
                    <p className="text-[12.5px] font-medium text-slate-500 dark:text-slate-400 mt-2">Tingkat Kabupaten Sampang 2025.</p>
                    <p className="text-[11px] font-black text-amber-600 dark:text-amber-400 mt-4 uppercase tracking-wider">
                      Oktober 2025
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50/50 dark:from-amber-500/10 dark:to-orange-500/5 border border-amber-100 dark:border-amber-500/20">
                    <div className="flex items-start justify-between">
                      <h4 className="font-extrabold text-[#000052] dark:text-slate-200 text-[14px] leading-tight pr-4">
                        Hafalan 5 Juz (Mutqin)
                      </h4>
                      <Star size={18} weight="fill" className="text-amber-500 shrink-0" />
                    </div>
                    <p className="text-[12.5px] font-medium text-slate-500 dark:text-slate-400 mt-2">Ujian Tahfiz Terbuka Pesantren.</p>
                    <p className="text-[11px] font-black text-amber-600 dark:text-amber-400 mt-4 uppercase tracking-wider">
                      Desember 2024
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 6: Pelanggaran */}
              <div className="bg-white/80 dark:bg-bg-cardDark/90 backdrop-blur-xl rounded-3xl border border-slate-200/60 dark:border-slate-800 p-8 shadow-[0_4px_20px_rgb(0,0,0,0.02)] relative overflow-hidden">
                <h3 className="text-[14px] font-black text-[#000052] dark:text-white mb-7 uppercase tracking-widest flex items-center gap-2">
                  <WarningCircle size={22} weight="fill" className="text-rose-500" />
                  Catatan Pelanggaran (Kamtib)
                </h3>
                
                <div className="space-y-4">
                  <div className="flex gap-4 p-4 rounded-2xl bg-rose-50/50 dark:bg-rose-500/5 border border-rose-100 dark:border-rose-500/10 transition-colors hover:bg-rose-100/50 dark:hover:bg-rose-500/10">
                    <div className="w-11 h-11 rounded-xl bg-rose-100 dark:bg-rose-500/20 flex items-center justify-center text-rose-600 dark:text-rose-400 shrink-0">
                      <WarningCircle size={20} weight="fill" />
                    </div>
                    <div className="flex-1">
                      <div className="flex sm:items-center flex-col sm:flex-row justify-between gap-1 mb-1">
                        <h4 className="font-extrabold text-[#000052] dark:text-slate-200 text-[14px]">Terlambat Shalat Subuh Berjamaah</h4>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-100 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400 uppercase tracking-widest w-max">Ringan</span>
                      </div>
                      <p className="text-[12px] font-bold text-slate-400 mt-1 flex items-center justify-between">
                        <span>12 Agustus 2025</span>
                        <span className="text-rose-600 dark:text-rose-400 text-[11px]">Poin: 5</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-between items-center px-5 py-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700/50">
                  <span className="text-[12.5px] font-bold text-slate-500 dark:text-slate-400">Total Akumulasi Poin Pelanggaran</span>
                  <span className="text-[16px] font-black text-rose-600 dark:text-rose-400">5 Poin</span>
                </div>
              </div>

            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}
