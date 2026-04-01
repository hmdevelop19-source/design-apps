import React from 'react';
import { List, CornersOut, Sun, Moon, Globe, User } from '@phosphor-icons/react';

export default function Header({ isDark, toggleTheme, toggleSidebar, title }) {
  return (
    <header className="h-[70px] bg-bg-card dark:bg-bg-cardDark border-b border-border-light dark:border-border-dark flex items-center justify-between px-4 lg:px-8 sticky top-0 z-40 transition-colors duration-300">
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleSidebar}
          className="lg:hidden text-text-main dark:text-text-dark p-2 -ml-2 rounded-lg hover:bg-bg-main dark:hover:bg-bg-dark transition-colors"
        >
          <List size={24} />
        </button>
        <h1 className="text-lg font-bold text-text-main dark:text-text-dark hidden sm:block">
          {title || 'Dashboard Administrasi'}
        </h1>
      </div>

      <div className="flex items-center gap-4 lg:gap-6">
        <div className="hidden md:block text-sm font-medium text-text-muted dark:text-text-darkMuted">
          11, Syawal 1447
        </div>
        
        <div className="flex items-center gap-1 sm:gap-2">
          <button className="w-9 h-9 flex items-center justify-center rounded-full text-text-main dark:text-text-dark hover:bg-primary-light dark:hover:bg-primary/10 hover:text-primary transition-colors">
            <CornersOut size={18} />
          </button>
          <button 
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-full text-text-main dark:text-text-dark hover:bg-primary-light dark:hover:bg-primary/10 hover:text-primary transition-colors"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="w-9 h-9 flex items-center justify-center rounded-full text-text-main dark:text-text-dark hover:bg-primary-light dark:hover:bg-primary/10 hover:text-primary transition-colors">
            <Globe size={18} />
          </button>
        </div>

        <div className="flex items-center gap-3 pl-4 lg:pl-6 border-l border-border-light dark:border-border-dark cursor-pointer group">
          <div className="w-9 h-9 rounded-full bg-primary/10 dark:bg-white/10 text-primary dark:text-blue-400 flex items-center justify-center group-hover:bg-primary group-hover:text-white dark:group-hover:bg-blue-500 dark:group-hover:text-white transition-colors">
            <User size={18} weight="fill" />
          </div>
          <span className="hidden sm:block text-sm font-semibold text-text-main dark:text-text-dark">
            Admin Admin
          </span>
        </div>
      </div>
    </header>
  );
}
