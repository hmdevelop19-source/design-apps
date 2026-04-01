import React, { useState, useMemo } from 'react';
import { 
  UserPlus, IdentificationCard, Phone, MapPin, CalendarBlank, CaretRight, 
  CaretLeft, CaretDown, MagnifyingGlass, CheckCircle, ClockCountdown, 
  WarningCircle, Eye, PencilSimple, ArrowLeft, ArrowRight, UserCircle, 
  Buildings, BookOpen, FileText, X, House 
} from '@phosphor-icons/react';
import DetailSantriBaru from './DetailSantriBaru';

export default function SantriBaru() {
  const [viewMode, setViewMode] = useState('table'); // 'table' | 'form' | 'detail'
  const [searchQuery, setSearchQuery] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedSantri, setSelectedSantri] = useState(null);

  const tableData = [
    { id: 'REG-2401', initial: 'A', initialBg: 'from-blue-500 to-indigo-500 shadow-blue-500/30', nama: 'Ahmad Faisal', nik: '3201123456789012', tanggal: '12 Mei 2024', asalSekolah: 'SMPN 1 Bandung', gelombang: 'Gelombang 1', status: 'Diterima' },
    { id: 'REG-2402', initial: 'S', initialBg: 'from-pink-500 to-rose-500 shadow-pink-500/30', nama: 'Siti Nurhaliza', nik: '3201123456789013', tanggal: '14 Mei 2024', asalSekolah: 'MTs Al-Hidayah', gelombang: 'Gelombang 1', status: 'Menunggu Ujian' },
    { id: 'REG-2403', initial: 'B', initialBg: 'from-emerald-500 to-teal-500 shadow-emerald-500/30', nama: 'Bintang Pratama', nik: '3201123456789014', tanggal: '15 Mei 2024', asalSekolah: 'SMP IT As-Salam', gelombang: 'Gelombang 1', status: 'Berkas Kurang' },
    { id: 'REG-2404', initial: 'Z', initialBg: 'from-purple-500 to-violet-500 shadow-purple-500/30', nama: 'Zahra Anisa', nik: '3201123456789015', tanggal: '02 Jun 2024', asalSekolah: 'SMPN 4 Jakarta', gelombang: 'Gelombang 2', status: 'Menunggu Ujian' },
    { id: 'REG-2405', initial: 'D', initialBg: 'from-[#FB8500] to-orange-500 shadow-orange-500/30', nama: 'Daffa Ramadhan', nik: '3201123456789016', tanggal: '05 Jun 2024', asalSekolah: 'SDN 1 Bogor', gelombang: 'Gelombang 2', status: 'Diterima' },
  ];

  const filteredData = useMemo(() => {
    return tableData.filter(row => 
      row.nama.toLowerCase().includes(searchQuery.toLowerCase()) || 
      row.id.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, tableData]);

  const steps = [
    { id: 1, label: 'Data Wali', icon: UserCircle },
    { id: 2, label: 'Profil Santri', icon: UserPlus },
    { id: 3, label: 'Pendidikan Formal', icon: Buildings },
    { id: 4, label: 'Pendidikan Madrasah', icon: BookOpen },
    { id: 5, label: 'Dokumen & Program', icon: FileText },
  ];

  if (viewMode === 'detail') {
    return <DetailSantriBaru pendaftar={selectedSantri} onBack={() => setViewMode('table')} />;
  }

  if (viewMode === 'form') {
    return (
      <div className="max-w-6xl mx-auto space-y-6 animate-fade-in-right pb-10">
        
        {/* Breadcrumbs Top */}
        <div className="flex items-center gap-2 text-[12.5px] font-bold text-slate-400 mb-8 pt-2">
          <House size={15} weight="fill" className="text-slate-400" />
          <span>Dashboard</span>
          <CaretRight size={12} weight="bold" />
          <UserPlus size={15} weight="fill" className="text-slate-400" />
          <span>Pendaftaran Santri</span>
          <CaretRight size={12} weight="bold" />
          <FileText size={15} weight="fill" className="text-slate-700 dark:text-slate-300" />
          <span className="text-slate-700 dark:text-slate-300">Formulir Pendaftaran</span>
        </div>

        {/* Layout with Vertical Stepper */}
        <div className="flex flex-col lg:flex-row gap-6 relative items-start">
          
          {/* Left Vertical Stepper (Sidebar) */}
          <div className="w-full lg:w-[260px] shrink-0 sticky top-6 z-10 hidden sm:block">
            <div className="bg-white dark:bg-bg-cardDark rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm overflow-hidden relative">
              <h3 className="text-[13px] font-black text-slate-800 dark:text-white mb-6 uppercase tracking-wider flex items-center gap-2">
                <FileText size={16} weight="fill" className="text-blue-500" />
                Tahapan Regis
              </h3>
              
              <div className="space-y-6 relative ml-1.5">
                {/* Vertical Line Connector */}
                <div className="absolute left-[19px] top-6 bottom-6 w-[2px] bg-slate-100 dark:bg-slate-800 z-0"></div>
                
                {steps.map((step) => {
                  const Icon = step.icon;
                  const isActive = currentStep === step.id;
                  const isPassed = currentStep > step.id;
                  
                  return (
                    <div key={step.id} className="flex flex-row items-center gap-4 relative z-10 cursor-pointer group hover:-translate-y-0.5 transition-transform" onClick={() => isPassed && setCurrentStep(step.id)}>
                      {/* Circle Icon */}
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isActive ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/40 ring-4 ring-blue-50 dark:ring-blue-900/30' : 
                        isPassed ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-500 dark:text-blue-400 ring-4 ring-white dark:ring-bg-cardDark' : 
                        'bg-white dark:bg-slate-900 text-slate-300 dark:text-slate-600 border-2 border-slate-200 dark:border-slate-700 ring-4 ring-white dark:ring-bg-cardDark group-hover:border-slate-300'
                      }`}>
                        {isActive || isPassed ? <Icon size={isActive ? 18 : 20} weight="fill" /> : <Icon size={20} weight="regular" />}
                      </div>
                      
                      {/* Label Texts */}
                      <div className="flex flex-col">
                        <span className={`text-[11px] font-bold tracking-widest uppercase ${isActive ? 'text-blue-500' : 'text-slate-400 dark:text-slate-500'}`}>Langkah {step.id}</span>
                        <span className={`text-[13.5px] font-extrabold ${
                          isActive ? 'text-slate-800 dark:text-white' : 
                          isPassed ? 'text-slate-600 dark:text-slate-300' : 
                          'text-slate-400 dark:text-slate-600 group-hover:text-slate-500 dark:group-hover:text-slate-400'
                        }`}>
                          {step.label}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Form Main Container */}
          <div className="flex-1 w-full bg-white dark:bg-bg-cardDark rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm flex flex-col min-h-[550px]">
            
            {/* Step Dynamic Content */}
            <div className="p-8 lg:p-10 flex-1">
              {currentStep === 1 && (
              <div className="animate-fade-in-up">
                <h2 className="text-xl font-black text-slate-800 dark:text-white tracking-tight">Langkah 1: Data Wali Santri</h2>
                <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-1.5 font-medium pb-8">Isi informasi pribadi wali santri. NIK akan dicek secara otomatis setelah 16 digit terisi.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7">
                  {/* Item 1 */}
                  <div className="space-y-2.5">
                    <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">NIK Wali</label>
                    <input type="text" placeholder="Contoh: 3201xxxxxxxxxxxx" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white transition-colors" />
                  </div>
                  {/* Item 2 */}
                  <div className="space-y-2.5">
                    <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Nomor Kartu Keluarga (KK)</label>
                    <input type="text" placeholder="Contoh: 3201xxxxxxxxxxxx" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white transition-colors" />
                  </div>
                  {/* Item 3 */}
                  <div className="space-y-2.5">
                    <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Nama Depan Wali</label>
                    <input type="text" placeholder="Contoh: Budi" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white transition-colors" />
                  </div>
                  {/* Item 4 */}
                  <div className="space-y-2.5">
                    <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Nama Belakang Wali</label>
                    <input type="text" placeholder="Contoh: Santoso" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white transition-colors" />
                  </div>
                  {/* Item 5 Radio */}
                  <div className="space-y-3">
                    <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Jenis Kelamin</label>
                    <div className="flex items-center gap-6 h-[42px]">
                      <label className="flex items-center gap-2.5 text-[13.5px] font-medium text-slate-700 dark:text-slate-300 cursor-pointer">
                        <input type="radio" name="jk" className="w-4 h-4 text-blue-500 border-slate-300 focus:ring-blue-500" defaultChecked /> Laki-laki
                      </label>
                      <label className="flex items-center gap-2.5 text-[13.5px] font-medium text-slate-700 dark:text-slate-300 cursor-pointer">
                        <input type="radio" name="jk" className="w-4 h-4 text-blue-500 border-slate-300 focus:ring-blue-500" /> Perempuan
                      </label>
                    </div>
                  </div>
                  {/* Item 6 Radio */}
                  <div className="space-y-3">
                    <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Peran Sebagai</label>
                    <div className="flex items-center gap-6 h-[42px]">
                      <label className="flex items-center gap-2.5 text-[13.5px] font-medium text-slate-700 dark:text-slate-300 cursor-pointer">
                        <input type="radio" name="peran" className="w-4 h-4 text-blue-500 border-slate-300 focus:ring-blue-500" defaultChecked /> Ayah
                      </label>
                      <label className="flex items-center gap-2.5 text-[13.5px] font-medium text-slate-700 dark:text-slate-300 cursor-pointer">
                        <input type="radio" name="peran" className="w-4 h-4 text-blue-500 border-slate-300 focus:ring-blue-500" /> Ibu
                      </label>
                      <label className="flex items-center gap-2.5 text-[13.5px] font-medium text-slate-700 dark:text-slate-300 cursor-pointer">
                        <input type="radio" name="peran" className="w-4 h-4 text-blue-500 border-slate-300 focus:ring-blue-500" /> Wali
                      </label>
                    </div>
                  </div>
                  {/* Item 7 */}
                  <div className="space-y-2.5">
                    <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Nomor Telepon</label>
                    <input type="text" placeholder="Contoh: 081234567890" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white transition-colors" />
                  </div>
                  {/* Item 8 */}
                  <div className="space-y-2.5">
                    <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Email</label>
                    <input type="email" placeholder="Contoh: wali@example.com" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white transition-colors" />
                  </div>
                  {/* Item 9 Select */}
                  <div className="space-y-2.5">
                    <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Pekerjaan</label>
                    <div className="relative">
                      <select className="w-full appearance-none pl-4 pr-10 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white cursor-pointer transition-colors">
                        <option>Pilih pekerjaan</option>
                        <option>PNS / ASN</option>
                        <option>Wiraswasta</option>
                        <option>Pegawai Swasta</option>
                      </select>
                      <CaretDown size={14} weight="bold" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                  {/* Item 10 Select */}
                  <div className="space-y-2.5">
                    <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Pendidikan Terakhir</label>
                    <div className="relative">
                      <select className="w-full appearance-none pl-4 pr-10 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white cursor-pointer transition-colors">
                        <option>Pilih pendidikan terakhir</option>
                        <option>SD/Sederajat</option>
                        <option>SMP/Sederajat</option>
                        <option>SMA/Sederajat</option>
                        <option>S1/S2/S3</option>
                      </select>
                      <CaretDown size={14} weight="bold" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                  {/* Item 11 */}
                  <div className="space-y-2.5">
                    <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Alamat Lengkap (Sesuai KTP)</label>
                    <input type="text" placeholder="Contoh: Jl. Merdeka No. 45, RT 001/RW 002" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white transition-colors" />
                  </div>
                  {/* Item 12 */}
                  <div className="space-y-2.5">
                    <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Alamat Domisili (Jika Berbeda dengan KTP)</label>
                    <input type="text" placeholder="Contoh: Jl. Damai No. 10, RT 003/RW 004" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white transition-colors" />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="animate-fade-in-up">
                <h2 className="text-xl font-black text-slate-800 dark:text-white tracking-tight">Langkah 2: Profil Santri</h2>
                <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-1.5 font-medium pb-8">Isi informasi pribadi santri. NIK Santri akan dicek secara otomatis untuk mengisi data desa/kelurahan.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7">
                  {/* Nama Depan Santri */}
                  <div className="space-y-2.5">
                    <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Nama Depan Santri</label>
                    <input type="text" placeholder="Contoh: MOH" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white transition-colors" />
                  </div>
                  {/* Nama Belakang Santri */}
                  <div className="space-y-2.5">
                    <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Nama Belakang Santri</label>
                    <input type="text" placeholder="Contoh: RAJA" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white transition-colors" />
                  </div>
                  {/* NIK Santri */}
                  <div className="space-y-2.5">
                    <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">NIK Santri</label>
                    <input type="text" placeholder="Contoh: 3527061906100003" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white transition-colors" />
                  </div>
                  {/* Tempat Lahir */}
                  <div className="space-y-2.5">
                    <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Tempat Lahir</label>
                    <input type="text" placeholder="Contoh: KABUPATEN SAMPANG" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white transition-colors" />
                  </div>
                  {/* Tanggal Lahir */}
                  <div className="space-y-2.5">
                    <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Tanggal Lahir</label>
                    <div className="relative">
                      <input type="date" className="w-full pl-4 pr-10 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white transition-colors appearance-none" />
                      <CalendarBlank size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                  {/* Jenis Kelamin Radio */}
                  <div className="space-y-3">
                    <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Jenis Kelamin</label>
                    <div className="flex items-center gap-6 h-[42px]">
                      <label className="flex items-center gap-2.5 text-[13.5px] font-medium text-slate-700 dark:text-slate-300 cursor-pointer">
                        <input type="radio" name="jkSantri" className="w-4 h-4 text-blue-500 border-slate-300 focus:ring-blue-500" defaultChecked /> Laki-laki
                      </label>
                      <label className="flex items-center gap-2.5 text-[13.5px] font-medium text-slate-700 dark:text-slate-300 cursor-pointer">
                        <input type="radio" name="jkSantri" className="w-4 h-4 text-blue-500 border-slate-300 focus:ring-blue-500" /> Perempuan
                      </label>
                    </div>
                  </div>
                  {/* Desa/Kelurahan Select */}
                  <div className="space-y-2.5">
                    <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Desa/Kelurahan</label>
                    <div className="relative">
                      <select className="w-full appearance-none pl-4 pr-10 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white cursor-pointer transition-colors">
                        <option>BANYUKAPAH</option>
                        <option>KARANG ANYAR</option>
                      </select>
                      <CaretDown size={14} weight="bold" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                  {/* Alamat Lengkap Santri */}
                  <div className="space-y-2.5">
                    <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Alamat Lengkap Santri</label>
                    <input type="text" placeholder="Contoh: DSN. TEBBAS" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white transition-colors" />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="animate-fade-in-up">
                <h2 className="text-xl font-black text-slate-800 dark:text-white tracking-tight">Langkah 3: Informasi Pendidikan Formal</h2>
                <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-1.5 font-medium pb-8">Isi informasi pendidikan formal terakhir dan identitas pendidikan santri.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7">
                  {/* NISN */}
                  <div className="space-y-2.5">
                    <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">NISN</label>
                    <input type="text" placeholder="Contoh: 0012345678" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white transition-colors" />
                  </div>
                  {/* Nomor Ijazah */}
                  <div className="space-y-2.5">
                    <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Nomor Ijazah <span className="font-medium text-slate-400">(Opsional)</span></label>
                    <input type="text" placeholder="Contoh: 001/IJZ/SMP/2023" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white transition-colors" />
                  </div>
                  {/* Nama Sekolah Asal */}
                  <div className="space-y-2.5">
                    <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Nama Sekolah Asal</label>
                    <input type="text" placeholder="Contoh: SDN 2 PALENGGIAN" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white transition-colors" />
                  </div>
                  {/* Jenjang Pendidikan */}
                  <div className="space-y-2.5">
                    <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Jenjang Pendidikan</label>
                    <div className="relative">
                      <select className="w-full appearance-none pl-4 pr-10 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white cursor-pointer transition-colors">
                        <option>SD</option>
                        <option>MI</option>
                        <option>SMP</option>
                        <option>MTs</option>
                        <option>SMA</option>
                        <option>MA</option>
                      </select>
                      <CaretDown size={14} weight="bold" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                  {/* Alamat Sekolah Asal (Full Width) */}
                  <div className="space-y-2.5 md:col-span-2">
                    <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Alamat Sekolah Asal</label>
                    <input type="text" placeholder="Contoh: PALENGGIAN" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white transition-colors" />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="animate-fade-in-up">
                <h2 className="text-xl font-black text-slate-800 dark:text-white tracking-tight">Langkah 4: Informasi Pendidikan Madrasah <span className="text-slate-400 font-bold">(Opsional)</span></h2>
                <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-1.5 font-medium pb-8">Isi informasi pendidikan madrasah terakhir santri jika ada.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7">
                  {/* Nama Madrasah Asal */}
                  <div className="space-y-2.5">
                    <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Nama Madrasah Asal</label>
                    <input type="text" placeholder="Contoh: MI Al-Hidayah" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white transition-colors" />
                  </div>
                  {/* Jenjang Pendidikan Madrasah */}
                  <div className="space-y-2.5">
                    <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Jenjang Pendidikan Madrasah</label>
                    <div className="relative">
                      <select className="w-full appearance-none pl-4 pr-10 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white cursor-pointer transition-colors">
                        <option>Pilih jenjang pendidikan</option>
                        <option>Madrasah Diniyah Awwaliyah (MDA)</option>
                        <option>Madrasah Diniyah Wustho (MDW)</option>
                        <option>Madrasah Diniyah Ulya (MDU)</option>
                      </select>
                      <CaretDown size={14} weight="bold" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                  {/* Alamat Madrasah Asal (Full Width) */}
                  <div className="space-y-2.5 md:col-span-2">
                    <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Alamat Madrasah Asal</label>
                    <input type="text" placeholder="Contoh: Jl. Pendidikan No. 10" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white transition-colors" />
                  </div>
                  {/* Nomor Ijazah Madrasah */}
                  <div className="space-y-2.5">
                    <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Nomor Ijazah Madrasah <span className="font-medium text-slate-400">(Opsional)</span></label>
                    <input type="text" placeholder="Contoh: 001/IJZ/MI/2023" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white transition-colors" />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 5 && (
              <div className="animate-fade-in-up space-y-10">
                <div>
                  <h2 className="text-xl font-black text-slate-800 dark:text-white tracking-tight">Langkah 5: Dokumen & Program</h2>
                  <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-1.5 font-medium">Pilih program, unggah foto, dan lampirkan dokumen yang diperlukan.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  {/* Kiri: Program */}
                  <div className="space-y-4">
                    <h3 className="text-[14.5px] font-extrabold text-slate-800 dark:text-slate-200">Program Pesantren</h3>
                    <div className="space-y-2.5">
                      <label className="text-[13px] font-extrabold text-slate-700 dark:text-slate-300">Program</label>
                      <div className="relative">
                        <select className="w-full appearance-none pl-4 pr-10 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-[13.5px] font-medium text-slate-800 dark:text-white cursor-pointer transition-colors">
                          <option>Tibyan</option>
                          <option>Tahfidz</option>
                          <option>Reguler</option>
                        </select>
                        <CaretDown size={14} weight="bold" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Kanan: Foto */}
                  <div className="space-y-4">
                    <h3 className="text-[14.5px] font-extrabold text-slate-800 dark:text-slate-200">Unggah Foto Santri</h3>
                    <div className="flex flex-col sm:flex-row gap-4">
                      {/* Upload Box Container */}
                      <div className="flex-1 flex flex-col gap-3">
                        <div className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl flex flex-col items-center justify-center p-6 bg-slate-50/50 dark:bg-slate-800/30 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer group">
                          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 group-hover:text-blue-500 transition-colors mb-3">
                            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                            <polyline points="12 12 12 21" />
                            <polyline points="8 16 12 12 16 16" />
                          </svg>
                          <span className="text-[13px] font-extrabold text-blue-600 dark:text-blue-400 text-center">Klik untuk mengunggah</span>
                          <span className="text-[11px] font-medium text-slate-400 mt-1 text-center">Pas Foto 3x4 (MAX. 2MB)</span>
                        </div>
                        <button className="w-full py-2.5 border border-slate-200 dark:border-slate-700 rounded-xl text-[12.5px] font-extrabold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center justify-center gap-2 transition-colors shadow-sm">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                            <circle cx="12" cy="13" r="4" />
                          </svg>
                          Ambil Foto dari Kamera
                        </button>
                      </div>
                      {/* Preview Box */}
                      <div className="w-full sm:w-[110px] h-[120px] sm:h-auto bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 text-[11px] font-bold text-center p-2 shrink-0">
                        Pratinjau Foto
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dokumen Wajib */}
                <div className="space-y-4 pt-2">
                  <h3 className="text-[14.5px] font-extrabold text-slate-800 dark:text-slate-200">Dokumen Wajib</h3>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl flex items-center justify-center py-6 px-4 bg-slate-50/50 dark:bg-slate-800/30 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer group">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 group-hover:text-blue-500 transition-colors mr-4">
                        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                        <polyline points="12 12 12 21" />
                        <polyline points="8 16 12 12 16 16" />
                      </svg>
                      <div className="flex flex-col text-left">
                        <span className="text-[13px] font-extrabold text-blue-600 dark:text-blue-400">Klik atau seret file ijazah ke sini</span>
                        <span className="text-[11.5px] font-medium text-slate-400 mt-0.5">PNG, JPG, atau PDF (MAX. 2MB)</span>
                      </div>
                    </div>
                    {/* Right camera button small */}
                    <button className="w-14 h-14 shrink-0 border border-slate-200 dark:border-slate-700 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                        <circle cx="12" cy="13" r="4" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Dokumen Tambahan */}
                <div className="space-y-4 pt-2">
                  <h3 className="text-[14.5px] font-extrabold text-slate-800 dark:text-slate-200">Dokumen Tambahan (Opsional)</h3>
                  <button className="px-5 py-2.5 border border-slate-200 dark:border-slate-700 rounded-xl text-[13px] font-extrabold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                    Tambah Dokumen
                  </button>
                </div>

              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="px-8 xl:px-10 py-6 border-t border-slate-100 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => { setViewMode('table'); setCurrentStep(1); }}
                className="px-5 py-2.5 flex items-center justify-center gap-2 rounded-lg font-bold text-white bg-red-500 hover:bg-red-600 transition-colors shadow-sm text-[13px] tracking-wide"
              >
                <X size={15} weight="bold" />
                Batal
              </button>
              
              <button 
                onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
                disabled={currentStep === 1}
                className={`px-5 py-2.5 flex items-center justify-center gap-2 rounded-lg font-bold transition-all shadow-sm text-[13px] tracking-wide border 
                  ${currentStep === 1 
                    ? 'opacity-0 pointer-events-none' // Hide visually if step 1 for cleaner UI like the image, optionally change to opacity-50 if preferred to be visible
                    : 'border-slate-200 text-slate-600 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 hover:shadow-md'}`}
              >
                <ArrowLeft size={15} weight="bold" />
                Kembali
              </button>
            </div>
            
            <button 
              onClick={() => {
                if (currentStep < 5) {
                  setCurrentStep(prev => prev + 1);
                } else {
                  setViewMode('table'); 
                  setCurrentStep(1);
                }
              }}
              className={`px-6 py-2.5 flex items-center justify-center gap-2 rounded-lg font-bold text-white transition-all shadow-lg active:scale-95 text-[13px] tracking-wide ${currentStep === 5 ? 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-500/30' : 'bg-blue-500 hover:bg-blue-600 shadow-blue-500/30'}`}
            >
              {currentStep === 5 ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                    <polyline points="17 21 17 13 7 13 7 21" />
                    <polyline points="7 3 7 8 15 8" />
                  </svg>
                  Simpan Perubahan
                </>
              ) : (
                <>
                  Lanjutkan
                  <ArrowRight size={15} weight="bold" />
                </>
              )}
            </button>
          </div>

        </div>
        </div>
      </div>
    );
  }

  // TABLE VIEW
  return (
    <div className="animate-fade-in-up w-full">
      {/* Header & Main Actions */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-8">
        <div>
          <h2 className="text-2xl font-extrabold text-[#023047] dark:text-white tracking-tight">Pendaftar Santri Baru</h2>
          <p className="text-[13.5px] text-slate-500 dark:text-slate-400 mt-1 font-medium">Kelola daftar calon santri yang sedang mendaftar di tahun ini.</p>
        </div>
        <button 
          onClick={() => setViewMode('form')}
          className="flex items-center justify-center gap-2 bg-[#FB8500] hover:bg-[#e07700] text-white px-5 py-3 rounded-xl font-bold shadow-lg shadow-[#FB8500]/30 transition-all hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm"
        >
          <UserPlus size={18} weight="bold" />
          <span className="text-[14px]">Tambah Pendaftar</span>
        </button>
      </div>

      {/* Sleek Toolbar Component */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6 w-full">
        <div className="text-[13px] text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap">
          Menampilkan <span className="font-bold text-slate-800 dark:text-slate-200">{filteredData.length} data</span> pendaftar
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
          {/* Search Bar */}
          <div className="relative w-full sm:w-[280px]">
            <input 
              type="text" 
              placeholder="Cari ID Regis atau nama..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 text-[13.5px] text-slate-700 dark:text-slate-200 font-medium shadow-sm hover:border-slate-300 dark:hover:border-slate-600 transition-colors placeholder:text-slate-400"
            />
            <MagnifyingGlass size={16} weight="bold" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>

          <div className="flex flex-row gap-3 w-full sm:w-auto">
            <div className="relative w-full sm:w-[150px]">
              <select className="w-full appearance-none pl-4 pr-10 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 text-[13px] text-slate-700 dark:text-slate-200 font-medium cursor-pointer shadow-sm hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
                <option>Semua Gelombang</option>
                <option>Gelombang 1</option>
                <option>Gelombang 2</option>
              </select>
              <CaretDown size={14} weight="bold" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
            
            <div className="relative w-full sm:w-[160px]">
              <select className="w-full appearance-none pl-4 pr-10 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 text-[13px] text-slate-700 dark:text-slate-200 font-medium cursor-pointer shadow-sm hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
                <option>Filter Status</option>
                <option>Menunggu Ujian</option>
                <option>Diterima</option>
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
                <th className="px-8 py-5 whitespace-nowrap text-[10px] tracking-widest uppercase">Data Pendaftar</th>
                <th className="px-8 py-5 whitespace-nowrap text-[10px] tracking-widest uppercase text-center">Tanggal Regis</th>
                <th className="px-8 py-5 whitespace-nowrap text-[10px] tracking-widest uppercase">Info Asal</th>
                <th className="px-8 py-5 whitespace-nowrap text-[10px] tracking-widest uppercase text-center">Status</th>
                <th className="px-8 py-5 whitespace-nowrap text-[10px] tracking-widest uppercase text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-transparent">
              {filteredData.length > 0 ? (
                filteredData.map((row, i) => (
                  <tr key={i} className="group hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors">
                    {/* Data Pendaftar */}
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-4">
                        <div className={`w-11 h-11 rounded-[14px] bg-gradient-to-tr flex items-center justify-center text-[16px] font-extrabold text-white shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300 ${row.initialBg}`}>
                          {row.initial}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-extrabold text-[#023047] dark:text-white text-[14.5px]">{row.nama}</span>
                          <span className="text-slate-400 font-medium text-[12px] mt-0.5">ID: <span className="text-slate-500 dark:text-slate-300 font-semibold">{row.id}</span></span>
                        </div>
                      </div>
                    </td>
                    
                    {/* Tanggal Regis */}
                    <td className="px-8 py-5 text-center">
                      <div className="flex flex-col items-center gap-1.5">
                        <span className="font-bold text-slate-800 dark:text-slate-200 text-[13.5px]">{row.tanggal}</span>
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">{row.gelombang}</span>
                      </div>
                    </td>
                    
                    {/* Info Asal */}
                    <td className="px-8 py-5">
                      <div className="flex flex-col gap-0.5">
                        <span className="font-bold text-slate-700 dark:text-slate-200 text-[13.5px] flex items-center gap-1.5">
                          {row.asalSekolah}
                        </span>
                        <span className="text-slate-400 font-medium text-[12px]">NIK: {row.nik}</span>
                      </div>
                    </td>
                    
                    {/* Status */}
                    <td className="px-8 py-5 text-center">
                      {row.status === 'Diterima' && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 font-bold text-[11px] border border-emerald-100 dark:border-emerald-500/20 tracking-wide w-[130px] justify-center">
                          <CheckCircle size={15} weight="fill" /> DITERIMA
                        </span>
                      )}
                      {row.status === 'Menunggu Ujian' && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400 font-bold text-[11px] border border-amber-100 dark:border-amber-500/20 tracking-wide w-[130px] justify-center">
                          <ClockCountdown size={15} weight="fill" /> PROSES UJI
                        </span>
                      )}
                      {row.status === 'Berkas Kurang' && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400 font-bold text-[11px] border border-rose-100 dark:border-rose-500/20 tracking-wide w-[130px] justify-center">
                          <WarningCircle size={15} weight="fill" /> BERKAS -
                        </span>
                      )}
                    </td>
                    
                    {/* Aksi */}
                    <td className="px-8 py-5">
                      <div className="flex items-center justify-center gap-2">
                        <button 
                          onClick={() => { setSelectedSantri(row); setViewMode('detail'); }}
                          className="w-8 h-8 rounded-lg flex items-center justify-center border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200 dark:hover:bg-blue-500/10 dark:hover:text-blue-400 dark:hover:border-blue-500/30 transition-all bg-white dark:bg-transparent shadow-sm"
                        >
                          <Eye size={16} weight="regular" />
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
                      <p className="text-[14px] font-medium text-slate-600 dark:text-slate-400 mb-1">Pendaftar tidak ditemukan</p>
                      <p className="text-[13px]">Coba gunakan kata kunci pencarian yang lain.</p>
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
              <CaretRight size={16} weight="bold" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
