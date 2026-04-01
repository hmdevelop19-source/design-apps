import React, { useState } from 'react';
import { 
  ArrowLeft, UserCircle, FileText, CheckCircle, WarningCircle, 
  XCircle, Printer, PencilSimple, FloppyDisk, Check, X,
  FilePdf, ShieldCheck, GraduationCap, Clock, Buildings, BookOpen, Fingerprint
} from '@phosphor-icons/react';

export default function DetailSantriBaru({ pendaftar, onBack }) {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('pribadi');

  // Form State Dummy
  const [formData, setFormData] = useState({
    // Santri
    namaDepanSantri: 'Ahmad',
    namaBelakangSantri: 'Faisal',
    nikSantri: pendaftar?.nik || '3201123456789012',
    jkSantri: 'Laki-laki',
    tempatLahir: 'Bandung',
    tanggalLahir: '2010-05-12',
    desaKelurahan: 'Banyukapah',
    alamatSantri: 'Dsn. Tebbas',
    
    // Wali
    nikWali: '3201998877665544',
    noKk: '3201112233445566',
    namaDepanWali: 'Budi',
    namaBelakangWali: 'Faisal',
    jkWali: 'Laki-laki',
    peran: 'Ayah',
    pekerjaanWali: 'Wiraswasta',
    pendidikanWali: 'SMA/Sederajat',
    phoneWali: '08123456789',
    emailWali: 'budi@example.com',
    alamatKtpWali: 'Jl. Merdeka No. 45',
    alamatDomisiliWali: 'Jl. Merdeka No. 45',

    // Pendidikan Formal
    nisn: '0012345678',
    noIjazahFormal: '001/IJZ/SMP/2023',
    asalSekolah: pendaftar?.asalSekolah || 'SMPN 1 Bandung',
    jenjangFormal: 'SMP',
    alamatSekolahFormal: 'Jl. Pendidikan 1, Bandung',

    // Pendidikan Madrasah
    namaMadrasah: 'MI Al-Hidayah',
    jenjangMadrasah: 'Madrasah Diniyah Awwaliyah (MDA)',
    noIjazahMadrasah: '-',
    alamatMadrasah: 'Bandung',

    // Meta
    idReg: pendaftar?.id || 'REG-2401',
    gelombang: pendaftar?.gelombang || 'Gelombang 1',
    status: pendaftar?.status || 'Menunggu Ujian',
    program: 'Reguler'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const InputField = ({ label, name, type = 'text', readOnlyIfEditing = false, options = [] }) => {
    // Determine target tab based on name roughly
    const isTabPribadi = ['namaDepanSantri', 'namaBelakangSantri', 'nikSantri', 'jkSantri', 'tempatLahir', 'tanggalLahir', 'desaKelurahan', 'alamatSantri', 'nikWali', 'noKk', 'namaDepanWali', 'namaBelakangWali', 'jkWali', 'peran', 'pekerjaanWali', 'pendidikanWali', 'phoneWali', 'emailWali', 'alamatKtpWali', 'alamatDomisiliWali'].includes(name);
    const isTabPendidikan = ['nisn', 'noIjazahFormal', 'asalSekolah', 'jenjangFormal', 'alamatSekolahFormal', 'namaMadrasah', 'jenjangMadrasah', 'noIjazahMadrasah', 'alamatMadrasah', 'program'].includes(name);

    const checkTabMatch = (activeTab === 'pribadi' && isTabPribadi) || (activeTab === 'pendidikan' && isTabPendidikan);

    if (isEditing && !readOnlyIfEditing && checkTabMatch) {
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
        <span className="text-[11px] text-slate-400 dark:text-slate-500 font-bold tracking-widest uppercase break-words">{label}</span>
        <p className="text-[14px] font-extrabold text-[#000052] dark:text-white">{formData[name] || '-'}</p>
      </div>
    );
  };

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Diterima': return 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 border-emerald-100 dark:border-emerald-500/20';
      case 'DiTolak': return 'bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400 border-red-100 dark:border-red-500/20';
      case 'Berkas Kurang': return 'bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400 border-orange-100 dark:border-orange-500/20';
      default: return 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 border-blue-100 dark:border-blue-500/20';
    }
  };

  const isFormTabActive = activeTab === 'pribadi' || activeTab === 'pendidikan';

  return (
    <div className="animate-fade-in-right pb-10 w-full">
      {/* Top Banner and Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-[#FCD526] font-bold transition-all hover:-translate-x-1">
          <ArrowLeft size={18} weight="bold" />
          <span className="text-[13.5px]">Kembali ke Daftar Pendaftar</span>
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
                <span className="hidden sm:inline">Cetak Bukti Daftar</span>
              </button>
              {isFormTabActive && (
                <button onClick={() => setIsEditing(true)} className="px-5 py-2.5 bg-[#FCD526] text-white rounded-xl hover:bg-[#e3be22] flex items-center gap-2 font-bold shadow-lg shadow-[#FCD526]/20 transition-transform active:scale-95">
                  <PencilSimple size={18} weight="fill" /> Edit Formulir
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
              <div className={`w-28 h-28 rounded-2xl bg-gradient-to-tr ${pendaftar?.initialBg || 'from-blue-500 to-indigo-500'} flex items-center justify-center text-4xl font-extrabold text-white shadow-xl shadow-blue-500/30 border-4 border-white dark:border-bg-cardDark z-10 transition-transform group-hover:scale-105 duration-300`}>
                {pendaftar?.initial || 'A'}
              </div>
            </div>
            
            <h2 className="text-xl font-black text-[#000052] dark:text-white text-center pb-0.5">{formData.namaDepanSantri} {formData.namaBelakangSantri}</h2>
            <p className="text-slate-500 font-bold text-[13px] mt-1 text-center bg-slate-100 dark:bg-slate-800/50 px-3 py-1 rounded-md tracking-wider">REG: {formData.idReg}</p>
            
            <div className={`mt-6 inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-black text-[11.5px] border tracking-widest shadow-sm ${getStatusBadge(formData.status)}`}>
              {formData.status === 'Diterima' ? <CheckCircle size={15} weight="fill" /> : 
               formData.status === 'Berkas Kurang' ? <WarningCircle size={15} weight="fill" /> : 
               formData.status === 'DiTolak' ? <XCircle size={15} weight="fill" /> : 
               <Clock size={15} weight="fill" />}
              STATUS: {formData.status.toUpperCase()}
            </div>

            <div className="w-full h-px bg-slate-100 dark:border-slate-800 my-8"></div>

            <div className="w-full space-y-5">
              <div className="flex items-center justify-between text-[13.5px]">
                <span className="text-slate-400 font-bold">Jalur Masuk</span>
                <span className="text-[#000052] dark:text-white font-black">{formData.gelombang}</span>
              </div>
              <div className="flex items-center justify-between text-[13.5px]">
                <span className="text-slate-400 font-bold">Program</span>
                <span className="text-blue-600 dark:text-blue-400 font-black">{formData.program}</span>
              </div>
              <div className="flex items-center justify-between text-[13.5px]">
                <span className="text-slate-400 font-bold">Tgl Daftar</span>
                <span className="text-[#000052] dark:text-white font-black">{pendaftar?.tanggal || '12 Mei 2024'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Content Area */}
        <div className="xl:col-span-2 flex flex-col gap-6">
          
          {/* Tabs Navigation */}
          <div className="flex flex-wrap items-center justify-start p-1.5 bg-white/80 dark:bg-bg-cardDark/90 backdrop-blur-xl rounded-2xl border border-slate-200/60 dark:border-slate-800 shadow-[0_4px_20px_rgb(0,0,0,0.02)] w-max max-w-full overflow-x-auto custom-scrollbar">
            <button 
              onClick={() => { setActiveTab('pribadi'); setIsEditing(false); }}
              className={`px-6 py-3 rounded-xl font-bold text-[13px] transition-all whitespace-nowrap flex items-center gap-2 ${activeTab === 'pribadi' ? 'bg-[#000052] text-white shadow-md' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
            >
              <UserCircle size={18} weight={activeTab === 'pribadi' ? "fill" : "bold"} />
              Form Pribadi & Wali
            </button>
            <button 
              onClick={() => { setActiveTab('pendidikan'); setIsEditing(false); }}
              className={`px-6 py-3 rounded-xl font-bold text-[13px] transition-all whitespace-nowrap flex items-center gap-2 ${activeTab === 'pendidikan' ? 'bg-[#000052] text-white shadow-md' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
            >
              <Buildings size={18} weight={activeTab === 'pendidikan' ? "fill" : "bold"} />
              Form Pendidikan
            </button>
            <button 
              onClick={() => { setActiveTab('berkas'); setIsEditing(false); }}
              className={`px-6 py-3 rounded-xl font-bold text-[13px] transition-all whitespace-nowrap flex items-center gap-2 ${activeTab === 'berkas' ? 'bg-[#000052] text-white shadow-md' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
            >
              <FileText size={18} weight={activeTab === 'berkas' ? "fill" : "bold"} />
              Pemberkasan
            </button>
            <button 
              onClick={() => { setActiveTab('seleksi'); setIsEditing(false); }}
              className={`px-6 py-3 rounded-xl font-bold text-[13px] transition-all whitespace-nowrap flex items-center gap-2 ${activeTab === 'seleksi' ? 'bg-[#000052] text-white shadow-md' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
            >
              <ShieldCheck size={18} weight={activeTab === 'seleksi' ? "fill" : "bold"} />
              Kelulusan
            </button>
          </div>

          {/* Tab 1: Form Pribadi & Wali */}
          {activeTab === 'pribadi' && (
            <div className="space-y-6 animate-fade-in-up">
              
              {/* Card: Santri */}
              <div className="bg-white/80 dark:bg-bg-cardDark/90 backdrop-blur-xl rounded-3xl border border-slate-200/60 dark:border-slate-800 p-8 shadow-[0_4px_20px_rgb(0,0,0,0.02)] relative overflow-hidden">
                {isEditing && <div className="absolute top-0 left-0 w-1 h-full bg-[#FCD526]"></div>}
                
                <h3 className="text-[14px] font-black text-[#000052] dark:text-white mb-7 uppercase tracking-widest flex items-center gap-2">
                  <UserCircle size={22} weight="fill" className={isEditing ? "text-[#FCD526]" : "text-blue-500"} />
                  Data Diri Pendaftar
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-7">
                  <InputField label="Nama Depan" name="namaDepanSantri" />
                  <InputField label="Nama Belakang" name="namaBelakangSantri" />
                  <InputField label="NIK Santri" name="nikSantri" type="number" />
                  <InputField label="Jenis Kelamin" name="jkSantri" options={['Laki-laki', 'Perempuan']} />
                  <InputField label="Tempat Lahir" name="tempatLahir" />
                  <InputField label="Tanggal Lahir" name="tanggalLahir" type="date" />
                  <InputField label="Desa / Kelurahan" name="desaKelurahan" />
                  <InputField label="Alamat Lengkap Santri" name="alamatSantri" />
                </div>
              </div>

               {/* Card: Wali */}
              <div className="bg-white/80 dark:bg-bg-cardDark/90 backdrop-blur-xl rounded-3xl border border-slate-200/60 dark:border-slate-800 p-8 shadow-[0_4px_20px_rgb(0,0,0,0.02)] relative overflow-hidden">
                {isEditing && <div className="absolute top-0 left-0 w-1 h-full bg-[#FCD526]"></div>}
                
                <h3 className="text-[14px] font-black text-[#000052] dark:text-white mb-7 uppercase tracking-widest flex items-center gap-2">
                  <Fingerprint size={22} weight="fill" className={isEditing ? "text-[#FCD526]" : "text-emerald-500"} />
                  Data Wali
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-7">
                  <InputField label="NIK Wali" name="nikWali" type="number" />
                  <InputField label="Nomor KK" name="noKk" type="number" />
                  <InputField label="Nama Depan Wali" name="namaDepanWali" />
                  <InputField label="Nama Belakang Wali" name="namaBelakangWali" />
                  <InputField label="Jenis Kelamin" name="jkWali" options={['Laki-laki', 'Perempuan']} />
                  <InputField label="Peran Sebagai" name="peran" options={['Ayah', 'Ibu', 'Wali']} />
                  <InputField label="Pekerjaan Wali" name="pekerjaanWali" options={['PNS / ASN', 'Wiraswasta', 'Pegawai Swasta', 'Lainnya']} />
                  <InputField label="Pendidikan Terakhir" name="pendidikanWali" options={['SD/Sederajat', 'SMP/Sederajat', 'SMA/Sederajat', 'S1/S2/S3']} />
                  <InputField label="Nomor Telepon" name="phoneWali" type="tel" />
                  <InputField label="Email Aktif" name="emailWali" type="email" />
                  <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-7">
                    <InputField label="Alamat Sesuai KTP" name="alamatKtpWali" />
                    <InputField label="Alamat Domisili" name="alamatDomisiliWali" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Form Pendidikan */}
          {activeTab === 'pendidikan' && (
            <div className="space-y-6 animate-fade-in-up">
              
              <div className="bg-white/80 dark:bg-bg-cardDark/90 backdrop-blur-xl rounded-3xl border border-slate-200/60 dark:border-slate-800 p-8 shadow-[0_4px_20px_rgb(0,0,0,0.02)] relative overflow-hidden">
                {isEditing && <div className="absolute top-0 left-0 w-1 h-full bg-[#FCD526]"></div>}
                <h3 className="text-[14px] font-black text-[#000052] dark:text-white mb-7 uppercase tracking-widest flex items-center gap-2">
                  <Buildings size={22} weight="fill" className={isEditing ? "text-[#FCD526]" : "text-purple-500"} />
                  Pendidikan Formal
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-7">
                  <InputField label="NISN" name="nisn" type="number" />
                  <InputField label="Nomor Ijazah Formal" name="noIjazahFormal" />
                  <InputField label="Nama Sekolah Asal" name="asalSekolah" />
                  <InputField label="Jenjang Pendidikan Formal" name="jenjangFormal" options={['SD', 'MI', 'SMP', 'MTs', 'SMA']} />
                  <div className="md:col-span-2">
                    <InputField label="Alamat Sekolah Asal" name="alamatSekolahFormal" />
                  </div>
                </div>
              </div>

              <div className="bg-white/80 dark:bg-bg-cardDark/90 backdrop-blur-xl rounded-3xl border border-slate-200/60 dark:border-slate-800 p-8 shadow-[0_4px_20px_rgb(0,0,0,0.02)] relative overflow-hidden">
                {isEditing && <div className="absolute top-0 left-0 w-1 h-full bg-[#FCD526]"></div>}
                <h3 className="text-[14px] font-black text-[#000052] dark:text-white mb-7 uppercase tracking-widest flex items-center gap-2">
                  <BookOpen size={22} weight="fill" className={isEditing ? "text-[#FCD526]" : "text-teal-500"} />
                  Pendidikan Madrasah
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-7">
                  <InputField label="Nama Madrasah Asal" name="namaMadrasah" />
                  <InputField label="Jenjang Pendidikan Madrasah" name="jenjangMadrasah" options={['-', 'Madrasah Diniyah Awwaliyah (MDA)', 'Madrasah Diniyah Wustho (MDW)', 'Madrasah Diniyah Ulya (MDU)']} />
                  <InputField label="Nomor Ijazah Madrasah" name="noIjazahMadrasah" />
                  <InputField label="Program Pesantren Pilihan" name="program" options={['Tibyan', 'Tahfidz', 'Reguler']} />
                  <div className="md:col-span-2">
                    <InputField label="Alamat Madrasah Asal" name="alamatMadrasah" />
                  </div>
                </div>
              </div>
            </div>
          )}


          {/* Tab 3: Pemberkasan */}
          {activeTab === 'berkas' && (
            <div className="space-y-6 animate-fade-in-up">
              
              <div className="bg-white/80 dark:bg-bg-cardDark/90 backdrop-blur-xl rounded-3xl border border-slate-200/60 dark:border-slate-800 p-8 shadow-[0_4px_20px_rgb(0,0,0,0.02)] relative overflow-hidden">
                <h3 className="text-[14px] font-black text-[#000052] dark:text-white mb-7 uppercase tracking-widest flex items-center gap-2">
                  <FileText size={22} weight="fill" className="text-orange-500" />
                  Daftar Kelengkapan Dokumen Fisik
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm">
                    <div className="flex items-center gap-4">
                      <FilePdf size={32} weight="duotone" className="text-red-500" />
                      <div>
                        <h4 className="font-extrabold text-slate-800 dark:text-slate-200 text-[14px]">Fotokopi Kartu Keluarga (KK)</h4>
                        <p className="text-[12px] text-slate-500 mt-0.5">Wajib diverifikasi keasliannya</p>
                      </div>
                    </div>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 font-bold text-[12px] transition-colors hover:bg-emerald-100">
                      <CheckCircle size={16} weight="fill" /> Diterima
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-slate-800 border border-orange-200 dark:border-orange-500/30 shadow-sm ring-1 ring-orange-500/10 dark:ring-0">
                    <div className="flex items-center gap-4">
                      <FilePdf size={32} weight="duotone" className="text-red-500 opacity-50" />
                      <div>
                        <h4 className="font-extrabold text-slate-800 dark:text-slate-200 text-[14px]">Ijazah Terakhir / Surat Lulus</h4>
                        <p className="text-[12px] text-slate-500 mt-0.5">Berkas Asli</p>
                      </div>
                    </div>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400 font-bold text-[12px] transition-colors hover:bg-orange-100">
                      <WarningCircle size={16} weight="fill" /> Belum Serah Terima
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm">
                    <div className="flex items-center gap-4">
                      <FilePdf size={32} weight="duotone" className="text-red-500" />
                      <div>
                        <h4 className="font-extrabold text-slate-800 dark:text-slate-200 text-[14px]">Foto Berwarna 3x4</h4>
                        <p className="text-[12px] text-slate-500 mt-0.5">Background Biru (4 Lembar)</p>
                      </div>
                    </div>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 font-bold text-[12px] transition-colors hover:bg-emerald-100">
                      <CheckCircle size={16} weight="fill" /> Diterima
                    </button>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* Tab 4: Seleksi */}
          {activeTab === 'seleksi' && (
            <div className="space-y-6 animate-fade-in-up">
              
              <div className="bg-white/80 dark:bg-bg-cardDark/90 backdrop-blur-xl rounded-3xl border border-slate-200/60 dark:border-slate-800 p-8 shadow-[0_4px_20px_rgb(0,0,0,0.02)] relative overflow-hidden">
                <h3 className="text-[14px] font-black text-[#000052] dark:text-white mb-7 uppercase tracking-widest flex items-center gap-2">
                  <ShieldCheck size={22} weight="fill" className="text-purple-500" />
                  Jadwal & Hasil Ujian Seleksi
                </h3>
                
                <div className="p-6 rounded-2xl bg-purple-50/50 dark:bg-purple-500/5 border border-purple-100 dark:border-purple-500/10 flex flex-col items-center justify-center text-center">
                  <GraduationCap size={48} weight="duotone" className="text-purple-400 mb-4" />
                  <h4 className="text-[16px] font-black text-slate-800 dark:text-white mb-2">Menunggu Pelaksanaan Ujian</h4>
                  <p className="text-[13px] font-medium text-slate-500 dark:text-slate-400 max-w-sm">Calon santri dijadwalkan mengikuti tes baca Al-Quran dan Wawancara Psikologi pada tanggal yang telah ditetapkan panitia.</p>
                  
                  <div className="mt-6 inline-flex px-5 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm text-[13px] font-bold text-slate-700 dark:text-slate-200">
                    Jadwal Ujian: 25 Mei 2024 Pukul 08:00 WIB
                  </div>
                </div>

                {/* Quick Action Decision */}
                <div className="w-full mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-[11px] text-slate-400 font-bold tracking-widest uppercase mb-3 block text-center">Tindakan Keputusan Akhir</span>
                  <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                    <button className="py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:hover:bg-emerald-500/20 dark:text-emerald-400 font-bold text-[13px] transition-colors border border-emerald-200 dark:border-emerald-500/30">
                      Terima Santri
                    </button>
                    <button className="py-2.5 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 dark:bg-red-500/10 dark:hover:bg-red-500/20 dark:text-red-400 font-bold text-[13px] transition-colors border border-red-200 dark:border-red-500/30">
                      Tolak Santri
                    </button>
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
