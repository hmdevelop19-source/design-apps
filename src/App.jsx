import React, { useState, useEffect } from 'react';
import { Users, UserFocus, Wallet, ChartLineUp } from '@phosphor-icons/react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatCard from './components/StatCard';
import { SantriBarChart, PelanggaranProgress, PerizinanDonut } from './components/ChartCards';
import QuickActions from './components/QuickActions';
import CalendarWidget from './components/CalendarWidget';

import SantriBaru from './pages/SantriBaru';
import DataSantri from './pages/DataSantri';
import DataWaliSantri from './pages/DataWaliSantri';
import DataStaf from './pages/DataStaf';
import DataRekening from './pages/DataRekening';
import DataTransaksi from './pages/DataTransaksi';
import DataJenisTransaksi from './pages/DataJenisTransaksi';
import DataMataPelajaran from './pages/DataMataPelajaran';
import DataGuru from './pages/DataGuru';
import DataAsrama from './pages/DataAsrama';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState('Dasbor');

  useEffect(() => {
    // Check system preference on load
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.body.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  };

  const statData = [
    { label: 'TOTAL SANTRI MUKIM', value: '1,450', icon: Users, iconColor: '#00B0FB', badge: '+12 Minggu Ini', badgeColor: '#00B0FB' },
    { label: 'USTADZ TUGAS (DA\'I)', value: '85', icon: UserFocus, iconColor: '#FCD526', isDarkVariant: true, badge: 'Aktif Berdakwah' },
    { label: 'SALDO DEPOSIT SANTRI', value: 'Rp 125.4jt', icon: Wallet, iconColor: '#3B82F6' },
    { label: 'SANTRI OPNAME / SAKIT', value: '5', icon: ChartLineUp, iconColor: '#EF4444', badge: 'Butuh Perhatian', badgeColor: '#EF4444' }
  ];

  const handleNavigate = (pageName) => {
    setActivePage(pageName);
    if (window.innerWidth < 1024) setIsSidebarOpen(false); // Auto close on mobile
  };

  const renderContent = () => {
    switch (activePage) {
      case 'Santri Baru':
        return <SantriBaru />;
      case 'Data Santri':
        return <DataSantri />;
      case 'Data Wali Santri':
        return <DataWaliSantri />;
      case 'Data Staf':
        return <DataStaf />;
      case 'Rekening':
        return <DataRekening />;
      case 'Transaksi':
        return <DataTransaksi />;
      case 'Jenis Transaksi':
        return <DataJenisTransaksi />;
      case 'Mata Pelajaran':
        return <DataMataPelajaran />;
      case 'Guru':
        return <DataGuru />;
      case 'Asrama':
        return <DataAsrama />;
      case 'Dasbor':
      default:
        return (
          <>
            {/* Top Stats Cards */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {statData.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </section>

            {/* Main Dashboard Layout */}
            <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">

              {/* Left Column - Charts */}
              <div className="xl:col-span-2 space-y-6">
                <SantriBarChart isDark={isDark} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <PelanggaranProgress isDark={isDark} />
                  <PerizinanDonut isDark={isDark} />
                </div>
              </div>

              {/* Right Column - Actions & Widgets */}
              <div className="space-y-6">
                <QuickActions />
                <CalendarWidget />
              </div>

            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-bg-main dark:bg-bg-dark transition-colors duration-300 font-sans">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onNavigate={handleNavigate}
        activePage={activePage}
      />

      {/* Main Content Area */}
      <main className="lg:ml-[280px] min-h-screen flex flex-col transition-all duration-300">
        <Header
          onMenuClick={() => setIsSidebarOpen(true)}
          isDark={isDark}
          toggleTheme={toggleTheme}
          title={activePage === 'Dasbor' ? 'Dashboard Administrasi' : activePage}
        />

        <div className="flex-1 p-6 lg:p-8">
          {renderContent()}
        </div>

        <footer className="sticky bottom-0 z-10 bg-bg-main dark:bg-bg-dark transition-colors duration-300 py-4 px-6 lg:px-8 border-t border-border-light dark:border-border-dark text-center text-[13px] text-text-muted dark:text-text-darkMuted">
          <p>&copy; 2026 All rights reserved. Design UI/UX Made with ❤️ by TAMJID PP. Miftahul Ulum Panyeppen</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
