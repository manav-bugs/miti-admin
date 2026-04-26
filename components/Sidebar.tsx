'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  Users, 
  Heart, 
  CreditCard, 
  MessageSquare, 
  BookOpen, 
  Database, 
  BarChart3, 
  BadgeCheck, 
  Settings,
  ShieldCheck
} from 'lucide-react';
import Image from 'next/image';

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/' },
  { name: 'Members', icon: Users, href: '/members' },
  { name: 'Matches', icon: Heart, href: '/matches' },
  { name: 'Payments', icon: CreditCard, href: '/payments' },
  { name: 'Communication', icon: MessageSquare, href: '/communication' },
  { name: 'Content', icon: BookOpen, href: '/content' },
  { name: 'Master Data', icon: Database, href: '/master-data' },
  { name: 'Reports', icon: BarChart3, href: '/reports' },
  { name: 'Staff', icon: BadgeCheck, href: '/staff' },
  { name: 'Settings', icon: Settings, href: '/settings' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen sticky left-0 top-0 bg-white/70 backdrop-blur-xl flex flex-col border-r border-outline-variant z-50">
      <div className="p-8 flex flex-col items-start gap-1">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-sm">
             <ShieldCheck className="w-6 h-6" />
          </div>
          <h1 className="text-on-surface font-serif text-2xl font-bold tracking-tight">MitiMighty</h1>
        </div>
        <p className="text-on-surface-variant/60 text-[10px] uppercase tracking-widest font-bold mt-1">Heritage Curator</p>
      </div>

      <nav className="flex-1 px-4 space-y-1 mt-4 overflow-y-auto no-scrollbar">
        {menuItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 transition-all duration-300 rounded-xl group",
                isActive 
                  ? "text-primary bg-primary/10 border-l-4 border-primary font-bold translate-x-1 shadow-sm shadow-primary/5" 
                  : "text-on-surface-variant hover:text-primary hover:bg-primary/5"
              )}
            >
              <item.icon className={cn("w-5 h-5", isActive ? "text-primary" : "text-on-surface-variant group-hover:text-primary")} />
              <span className="font-serif font-bold tracking-tight text-sm">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-8 border-t border-outline-variant/30 flex items-center gap-3 mt-auto bg-surface-container-low/50">
        <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-primary">
           <Image 
            src="https://picsum.photos/seed/admin/100/100" 
            alt="Admin" 
            fill 
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-xs font-bold text-on-surface truncate">Anand Sindhi</span>
          <span className="text-[10px] text-on-surface-variant uppercase tracking-tighter font-bold">Super Admin</span>
        </div>
      </div>
    </aside>
  );
}
