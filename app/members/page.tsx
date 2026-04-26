'use client';

import React from 'react';
import { 
  Download, 
  UserPlus, 
  Search, 
  Filter, 
  Edit, 
  ShieldAlert, 
  Eye, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight,
  ShieldCheck,
  Star,
  Users2
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const members = [
  { id: 'MM-4829', name: 'Anjali Makhija', email: 'anjali.m@email.com', gender: 'Female', age: '28 Years', city: 'Mumbai', gotra: 'Chandnani Gotra', membership: 'Gold Heritage', status: 'Active', login: 'Today, 10:45 AM', image: 'https://picsum.photos/seed/anjali/100/100' },
  { id: 'MM-4835', name: 'Rohan Advani', email: 'r.advani@workmail.com', gender: 'Male', age: '31 Years', city: 'Pune', gotra: 'Kripalani Gotra', membership: 'Platinum Legacy', status: 'Pending', login: 'Yesterday, 04:12 PM', image: 'https://picsum.photos/seed/rohan/100/100' },
  { id: 'MM-3921', name: 'Sunita Thadani', email: 'sunita.t@domain.in', gender: 'Female', age: '26 Years', city: 'Delhi', gotra: 'Vaswani Gotra', membership: 'Free', status: 'Suspended', login: '2 Weeks Ago', image: 'https://picsum.photos/seed/sunita/100/100' },
  { id: 'MM-4902', name: 'Karan Shivdasani', email: 'karan.shiv@lifestyle.com', gender: 'Male', age: '29 Years', city: 'Dubai', gotra: 'Mansukhani Gotra', membership: 'Gold Heritage', status: 'Active', login: 'Today, 09:15 AM', image: 'https://picsum.photos/seed/karan/100/100' },
  // Adding more for demo pagination
  { id: 'MM-4903', name: 'Pooja Hiranandani', email: 'pooja.h@email.com', gender: 'Female', age: '27 Years', city: 'London', gotra: 'Balani Gotra', membership: 'Platinum Legacy', status: 'Active', login: 'Today, 11:30 AM', image: 'https://picsum.photos/seed/pooja/100/100' },
];

export default function MembersPage() {
  return (
    <div className="p-8 lg:p-12 space-y-10 max-w-[1600px] mx-auto w-full">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-4xl font-serif font-black text-primary tracking-tight italic">Family Archives</h2>
          <p className="text-on-surface-variant font-bold text-sm mt-2 opacity-60 tracking-tight">Active registry of the MitiMighty heritage network.</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-6 py-3 text-xs font-black uppercase tracking-widest text-on-surface-variant bg-white border border-outline-variant hover:bg-surface-container-low rounded-xl transition-all flex items-center gap-2 shadow-sm">
            <Download className="w-4 h-4 opacity-40 " /> Export Archive
          </button>
          <button className="px-8 py-3 text-xs font-black uppercase tracking-[0.2em] text-white bg-primary rounded-xl shadow-xl shadow-primary/20 hover:brightness-110 active:scale-95 transition-all flex items-center gap-2">
            <UserPlus className="w-4 h-4" /> New Registry
          </button>
        </div>
      </div>

      {/* Advanced Filters - Natural Tones Style */}
      <div className="bg-white rounded-[32px] p-8 flex flex-wrap items-center gap-8 shadow-sm border border-outline-variant">
        <div className="flex-1 min-w-[180px]">
          <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 mb-2 ml-1">Gender</label>
          <select className="w-full bg-surface-container-low border-none rounded-xl text-sm font-bold px-5 py-3.5 focus:ring-2 focus:ring-primary/20 outline-none transition-all">
            <option>All Collective</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div className="flex-1 min-w-[180px]">
          <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 mb-2 ml-1">Heritage Tier</label>
          <select className="w-full bg-surface-container-low border-none rounded-xl text-sm font-bold px-5 py-3.5 focus:ring-2 focus:ring-primary/20 outline-none transition-all">
            <option>All Tiers</option>
            <option>Legacy</option>
            <option>Heritage</option>
            <option>Standard</option>
          </select>
        </div>
        <div className="flex-1 min-w-[180px]">
          <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 mb-2 ml-1">Archive Status</label>
          <select className="w-full bg-surface-container-low border-none rounded-xl text-sm font-bold px-5 py-3.5 focus:ring-2 focus:ring-primary/20 outline-none transition-all">
            <option>All Records</option>
            <option>Verified</option>
            <option>Awaiting</option>
            <option>Flagged</option>
          </select>
        </div>
        <button className="self-end p-4 bg-secondary text-white rounded-2xl hover:brightness-110 transition-all shadow-lg shadow-secondary/20">
          <Filter className="w-6 h-6" />
        </button>
      </div>

      {/* Data Table Card - Natural Tones Style */}
      <div className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-outline-variant">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low/50">
                <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">Codex ID</th>
                <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">Heritage Seeker</th>
                <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">Profile</th>
                <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">Heritage Roots</th>
                <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">Tier</th>
                <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant text-right">Moderation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20 border-t border-outline-variant/30">
              {members.map((member) => (
                <tr key={member.id} className="hover:bg-surface-container-low/20 transition-colors group">
                  <td className="px-10 py-8 whitespace-nowrap">
                    <Link href={`/members/${member.id}`} className="text-primary font-black hover:underline font-serif text-lg italic">
                      {member.id}
                    </Link>
                  </td>
                  <td className="px-10 py-8 whitespace-nowrap">
                    <div className="flex items-center gap-4">
                      <div className="relative w-14 h-14 rounded-2xl overflow-hidden shadow-sm ring-1 ring-primary/10">
                        <Image 
                          src={member.image} 
                          alt={member.name} 
                          fill 
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-black text-on-surface tracking-tight">{member.name}</p>
                        <p className="text-[10px] text-on-surface-variant/40 font-bold uppercase tracking-widest mt-1 italic">{member.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-10 py-8 whitespace-nowrap">
                    <div className="flex flex-col">
                      <span className="text-xs font-black text-on-surface">{member.gender}</span>
                      <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-tighter opacity-50">{member.age}</span>
                    </div>
                  </td>
                  <td className="px-10 py-8 whitespace-nowrap">
                    <div className="flex flex-col">
                      <span className="text-xs font-black text-on-surface">{member.city}</span>
                      <span className="text-[10px] text-primary font-black uppercase tracking-widest mt-1 opacity-50 underline decoration-primary/20 underline-offset-4">{member.gotra}</span>
                    </div>
                  </td>
                  <td className="px-10 py-8 whitespace-nowrap">
                    <span className={cn(
                      "inline-flex items-center px-4 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] shadow-sm",
                      member.membership.includes('Gold') ? "bg-secondary text-white" : 
                      member.membership.includes('Platinum') ? "bg-primary text-white" : "bg-surface-container-low text-on-surface-variant"
                    )}>
                      {member.membership}
                    </span>
                  </td>
                  <td className="px-10 py-8 whitespace-nowrap text-right">
                    <div className="flex items-center justify-end gap-3 translate-x-2">
                       <button className="p-2.5 text-on-surface-variant/30 hover:text-primary hover:bg-primary/5 rounded-xl transition-all"><Edit className="w-4 h-4" /></button>
                      <button className="p-2.5 text-on-surface-variant/30 hover:text-error hover:bg-error-container/20 rounded-xl transition-all"><ShieldAlert className="w-4 h-4" /></button>
                      <Link href={`/members/${member.id}`} className="p-2.5 text-on-surface-variant/30 hover:text-secondary hover:bg-secondary/5 rounded-xl transition-all">
                        <Eye className="w-4 h-4" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination - Natural Tones Style */}
        <div className="px-10 py-8 flex items-center justify-between bg-surface-container-low/20">
          <p className="text-[10px] text-on-surface-variant font-black uppercase tracking-widest opacity-40">
            Records <span className="text-on-surface">1-10</span> / <span className="text-on-surface font-black italic">1,248</span> Heritage Archive
          </p>
          <div className="flex items-center gap-2">
            <button className="p-3 text-on-surface-variant hover:bg-white hover:shadow-sm rounded-xl disabled:opacity-20 transition-all shadow-inner" disabled>
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-11 h-11 flex items-center justify-center text-xs font-black rounded-xl bg-primary text-white shadow-xl shadow-primary/20 italic">1</button>
            <button className="w-11 h-11 flex items-center justify-center text-xs font-black rounded-xl hover:bg-white hover:shadow-sm text-on-surface-variant transition-all">2</button>
            <button className="w-11 h-11 flex items-center justify-center text-xs font-black rounded-xl hover:bg-white hover:shadow-sm text-on-surface-variant transition-all">3</button>
            <span className="px-2 text-xs text-on-surface-variant opacity-20 font-black">/</span>
            <button className="w-11 h-11 flex items-center justify-center text-xs font-black rounded-xl hover:bg-white hover:shadow-sm text-on-surface-variant transition-all">125</button>
            <button className="p-3 text-on-surface-variant hover:bg-white hover:shadow-sm rounded-xl transition-all shadow-inner">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Bento Stats Footer */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10">
        <div className="bg-primary text-white p-10 rounded-[32px] flex flex-col justify-between h-56 shadow-2xl shadow-primary/20 group overflow-hidden relative border border-white/10">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-bl-[120px] -mr-10 -mt-10 group-hover:scale-110 transition-transform duration-700"></div>
          <ShieldCheck className="text-secondary w-12 h-12" />
          <div className="relative">
            <h4 className="text-4xl font-serif font-black italic tracking-tight">142 Pending</h4>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] mt-2 opacity-60">Verification Dispatch</p>
          </div>
        </div>
        <div className="bg-white p-10 rounded-[32px] border border-outline-variant flex flex-col justify-between h-56 shadow-sm hover:shadow-xl transition-all group overflow-hidden relative">
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-secondary/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
          <Star className="text-secondary w-12 h-12 fill-secondary/10 group-hover:rotate-12 transition-transform" />
          <div>
            <h4 className="text-4xl font-serif font-black text-on-surface italic tracking-tight">Heritage Elite</h4>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] mt-2 opacity-40">68% Premium Migration</p>
          </div>
        </div>
        <div className="bg-white p-10 rounded-[32px] border border-outline-variant flex flex-col justify-between h-56 shadow-sm hover:shadow-xl transition-all group overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
          <Users2 className="text-primary w-12 h-12 opacity-40 group-hover:-translate-y-1 transition-transform" />
          <div>
            <h4 className="text-4xl font-serif font-black text-on-surface italic tracking-tight">Archive Integrity</h4>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] mt-2 opacity-40">98.4% Consistency Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
}
