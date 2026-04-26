'use client';

import { Search, Bell, HelpCircle } from 'lucide-react';
import Image from 'next/image';

export default function TopNav() {
  return (
    <header className="flex justify-between items-center px-8 py-4 w-full border-b border-outline-variant bg-white/50 backdrop-blur-md sticky top-0 z-40">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/40 w-4 h-4" />
          <input 
            type="text" 
            className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 placeholder-on-surface-variant/40 transition-all outline-none text-on-surface font-medium"
            placeholder="Search our heritage archives..."
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative text-on-surface-variant hover:text-primary transition-colors p-2 hover:bg-primary/5 rounded-full">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full border-2 border-white shadow-sm"></span>
        </button>
        <button className="text-on-surface-variant hover:text-primary transition-colors p-2 hover:bg-primary/5 rounded-full">
          <HelpCircle className="w-5 h-5" />
        </button>
        <div className="h-8 w-px bg-outline-variant/50"></div>
        <div className="flex items-center gap-3 pl-2">
          <div className="text-right hidden sm:block">
            <p className="text-[10px] font-black uppercase tracking-widest text-on-surface">Administrator</p>
            <p className="text-[10px] text-primary font-bold">Secure Node 12</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white text-xs font-bold overflow-hidden shadow-sm">
            AS
          </div>
        </div>
      </div>
    </header>
  );
}
