'use client';

import React from 'react';
import { 
  ChevronRight, 
  Fingerprint, 
  Calendar, 
  CheckCircle2, 
  Ban, 
  Trash2, 
  Star,
  User,
  Users,
  Church,
  Image as ImageIcon,
  Heart,
  TrendingUp,
  MessageSquare,
  ShieldCheck,
  MapPin,
  GraduationCap
} from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { use } from 'react';

export default function MemberDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  return (
    <main className="p-8 lg:p-12 max-w-7xl mx-auto w-full space-y-10">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-on-surface-variant opacity-40 italic">
        <span>Archives</span>
        <ChevronRight className="w-3 h-3" />
        <span>Grooms</span>
        <ChevronRight className="w-3 h-3" />
        <span className="text-primary not-italic font-black opacity-100">{id === 'MM-9342' ? 'Kunal Hinduja' : id}</span>
      </div>

      {/* Top Banner Card - Natural Tones Style */}
      <div className="bg-white rounded-[40px] p-12 flex flex-col lg:flex-row gap-12 items-start lg:items-center relative overflow-hidden group shadow-sm border border-outline-variant">
        {/* Branding Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-[160px] pointer-events-none group-hover:scale-110 transition-transform duration-1000"></div>
        
        <div className="relative">
          <div className="w-48 h-48 rounded-[32px] overflow-hidden shadow-2xl border-4 border-white ring-1 ring-outline-variant/30">
            <Image 
              src="https://picsum.photos/seed/kunal/400/400" 
              alt="Profile" 
              fill 
              className="object-cover group-hover:scale-110 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-secondary text-white px-5 py-2.5 rounded-2xl text-[10px] font-black tracking-[0.2em] uppercase shadow-2xl ring-4 ring-white animate-bounce-slow">
            Verified
          </div>
        </div>

        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-6">
            <h1 className="text-5xl font-serif font-black text-on-surface tracking-tight italic">{id === 'MM-9342' ? 'Kunal Hinduja' : id}</h1>
            <span className="px-5 py-1.5 bg-primary text-white rounded-full text-[10px] font-black tracking-[0.3em] uppercase shadow-lg shadow-primary/20">Legacy Tier</span>
          </div>
          
          <div className="text-on-surface-variant flex items-center gap-10 text-[11px] font-black uppercase tracking-[0.2em]">
            <span className="flex items-center gap-3"><Fingerprint className="w-4 h-4 text-primary" /> Codex: {id}</span>
            <span className="flex items-center gap-3"><Calendar className="w-4 h-4 text-primary" /> Entry: Oct 2023</span>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-primary text-white px-10 py-3.5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-3 shadow-xl shadow-primary/30 hover:brightness-110 active:scale-95 transition-all group">
              <CheckCircle2 className="w-4 h-4 group-hover:scale-110 transition-transform" /> Valid Record
            </button>
            <button className="bg-surface-container-low text-on-surface px-10 py-3.5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-3 hover:bg-surface-container-high transition-all active:scale-95 border border-outline-variant/30">
              <Ban className="w-4 h-4" /> Suspend
            </button>
            <button className="bg-white border border-error/20 text-error px-10 py-3.5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-3 hover:bg-error/5 transition-all active:scale-95">
              <Trash2 className="w-4 h-4" /> Purge
            </button>
          </div>
        </div>
      </div>

      {/* Content Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Info Section (2/3 cols) */}
        <div className="lg:col-span-2 space-y-10">
          {/* Personal & Family Section: Bento Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Personal */}
            <div className="bg-white rounded-[32px] p-10 shadow-sm border border-outline-variant hover:shadow-xl transition-all group overflow-hidden relative">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[80px] pointer-events-none"></div>
              <h3 className="text-xl font-serif font-black mb-10 text-primary flex items-center gap-4 italic group-hover:translate-x-1 transition-transform">
                <User className="w-6 h-6" /> Heritage Profile
              </h3>
              <div className="space-y-8">
                {[
                  { label: 'Chronology', value: '14 Sep 1992 (31 yrs)' },
                  { label: 'Stature', value: '5\' 10" (177cm)' },
                  { label: 'Vital Essence', value: 'O+ Positive' },
                  { label: 'Vocation', value: 'Senior Software Architect' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col border-b border-outline-variant/10 pb-6 last:border-0 last:pb-0 relative z-10">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-on-surface-variant/40 mb-2">{item.label}</span>
                    <span className="font-black text-on-surface tracking-tight text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Family */}
            <div className="bg-white rounded-[32px] p-10 shadow-sm border border-outline-variant hover:shadow-xl transition-all group overflow-hidden relative">
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary/5 rounded-tl-[80px] pointer-events-none"></div>
              <h3 className="text-xl font-serif font-black mb-10 text-primary flex items-center gap-4 italic group-hover:translate-x-1 transition-transform">
                <Users className="w-6 h-6" /> Ancestral Lineage
              </h3>
              <div className="space-y-8">
                {[
                  { label: 'Patriarch', value: 'Mr. Ashok Hinduja' },
                  { label: 'Gotra Trace', value: 'Amil' },
                  { label: 'Kinship Values', value: 'Traditional' },
                  { label: 'Heritage Core', value: 'Karachi / Sukkur' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col border-b border-outline-variant/10 pb-6 last:border-0 last:pb-0 relative z-10">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-on-surface-variant/40 mb-2">{item.label}</span>
                    <span className="font-black text-on-surface tracking-tight text-sm italic">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cultural/Religious */}
          <div className="bg-white rounded-[40px] p-12 shadow-sm border border-outline-variant relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-[160px] pointer-events-none"></div>
            <h3 className="text-2xl font-serif font-black mb-12 text-primary flex items-center gap-4 italic uppercase tracking-tighter">
              <Church className="w-8 h-8" /> Cultural Codex
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
              {[
                { label: 'Sub-Caste', value: 'Sindhi-Lohana' },
                { label: 'Mother Tongue', value: 'Sindhi, Hindi' },
                { label: 'Belief Manifest', value: 'Spiritual / Hindu' },
              ].map((item, i) => (
                <div key={i} className="p-8 bg-surface-container-low rounded-[24px] shadow-inner flex flex-col gap-3 group hover:bg-white transition-all hover:shadow-lg">
                  <span className="text-[10px] text-primary/40 font-black uppercase tracking-[0.3em]">{item.label}</span>
                  <span className="font-black text-2xl text-on-surface font-serif italic">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Photo Gallery Section */}
          <div className="bg-white rounded-[40px] p-12 shadow-sm border border-outline-variant group">
            <h3 className="text-2xl font-serif font-black mb-12 text-primary flex items-center gap-4 italic uppercase tracking-tighter">
              <ImageIcon className="w-8 h-8" /> Visual Archive
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
              {[
                { seed: 'person1', label: 'Identity' },
                { seed: 'person2' },
                { seed: 'person3' },
              ].map((img, i) => (
                <div key={i} className="space-y-6">
                  <div className="aspect-[4/5] rounded-[28px] overflow-hidden group/img relative shadow-2xl ring-1 ring-black/5 hover:ring-primary/20 transition-all duration-700">
                    <Image 
                      src={`https://picsum.photos/seed/${img.seed}/600/750`} 
                      alt="Gallery" 
                      fill 
                      className="object-cover group-hover/img:scale-110 transition-transform duration-1000" 
                      referrerPolicy="no-referrer"
                    />
                    {img.label && (
                      <div className="absolute top-4 left-4 px-4 py-1.5 bg-black/60 backdrop-blur-xl text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl">{img.label}</div>
                    )}
                  </div>
                  <div className="flex gap-3 px-1">
                    <button className="flex-1 py-3 bg-secondary text-white rounded-2xl text-[9px] font-black uppercase tracking-widest hover:brightness-110 transition-all shadow-md shadow-secondary/10">Archive</button>
                    <button className="flex-1 py-3 bg-white border border-error/20 text-error rounded-2xl text-[9px] font-black uppercase tracking-widest hover:bg-error/5 transition-all">Remove</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Partner Preferences Card */}
          <div className="bg-secondary rounded-[48px] p-16 text-white shadow-2xl shadow-secondary/20 relative overflow-hidden group">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-[120px] group-hover:scale-150 transition-transform duration-1000"></div>
            <div className="flex items-center gap-6 mb-12 relative z-10">
              <Heart className="w-10 h-10 text-white opacity-40 " />
              <h3 className="text-3xl font-serif font-black italic tracking-tight">Covenant Aspirations</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
              <div className="space-y-10">
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Age Horizon</span>
                  <span className="text-2xl font-serif font-black italic">25 to 29 years</span>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Scholarly Background</span>
                  <span className="text-2xl font-serif font-black italic">Masters • PhD Status</span>
                </div>
              </div>
              <div className="space-y-10">
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Regional Anchor</span>
                  <span className="text-2xl font-serif font-black italic">Mumbai, Dubai, or Singapore</span>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Soul Covenant</span>
                  <p className="text-sm font-medium leading-relaxed italic opacity-80">&quot;Seeking heritage depth mixed with modern ambition. Family-first orientation is non-negotiable.&quot;</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-10">
          {/* Activity Log */}
          <div className="bg-white rounded-[32px] p-10 shadow-sm border border-outline-variant relative overflow-hidden">
             <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[60px] pointer-events-none"></div>
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-xl font-serif font-black text-on-surface tracking-tight italic">Registry Trail</h3>
              <button className="text-primary text-[10px] font-black uppercase tracking-[0.2em] hover:underline decoration-primary/30 underline-offset-4 decoration-2">Full Scan</button>
            </div>
            <div className="space-y-10 relative before:content-[''] before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-[1px] before:bg-outline-variant/30">
              {[
                { icon: Heart, color: 'bg-primary/5', iconColor: 'text-primary', text: 'Sent Interest to Priya M. (MM-1022)', time: 'Today, 10:45 AM' },
                { icon: ImageIcon, color: 'bg-secondary/5', iconColor: 'text-secondary', text: 'Updated Profile Photo', time: 'Yesterday, 06:12 PM' },
                { icon: ShieldCheck, color: 'bg-primary/5', iconColor: 'text-primary', text: 'Aadhar Verification Success', time: '2 days ago' },
                { icon: MessageSquare, color: 'bg-secondary/5', iconColor: 'text-secondary', text: 'New Chat Started', time: '3 days ago' },
              ].map((act, i) => (
                <div key={i} className="relative pl-12 group/act">
                  <div className={cn("absolute left-0 top-1 w-8 h-8 rounded-xl flex items-center justify-center z-10 border-4 border-white transition-transform group-hover/act:scale-125 duration-500 shadow-sm", act.color)}>
                    <act.icon className={cn("w-3.5 h-3.5", act.iconColor)} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-black text-on-surface group-hover/act:text-primary transition-colors leading-tight tracking-tight">{act.text}</p>
                    <p className="text-[9px] text-on-surface-variant font-black uppercase tracking-widest opacity-40">{act.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Admin Stats */}
          <div className="bg-primary-container rounded-2xl p-8 text-on-primary shadow-2xl shadow-primary/20 relative overflow-hidden">
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
            <h3 className="headline text-lg font-black mb-8 opacity-90 tracking-tight">Admin Overview</h3>
            <div className="space-y-10">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md shadow-inner">
                  <TrendingUp className="w-7 h-7 text-secondary-container" />
                </div>
                <div>
                  <p className="text-[10px] opacity-50 uppercase tracking-[0.2em] font-black">Profile Visibility</p>
                  <p className="text-3xl font-black font-serif italic">1,240 <span className="text-[10px] uppercase font-bold opacity-60 italic">Views</span></p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md shadow-inner">
                  <Users className="w-7 h-7 text-secondary-container" />
                </div>
                <div>
                  <p className="text-[10px] opacity-50 uppercase tracking-[0.2em] font-black">Mutual Matches</p>
                  <p className="text-3xl font-black font-serif italic">18 <span className="text-[10px] uppercase font-bold opacity-60 italic">Pending</span></p>
                </div>
              </div>
              <div className="pt-8 border-t border-white/10">
                <p className="text-[10px] opacity-40 font-black uppercase tracking-widest mb-4">Internal Admin Note</p>
                <p className="text-xs italic font-medium opacity-90 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                  &quot;High value profile. Traditional background with global career outlook. Excellent candidate for premium curation.&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Trust Score Meter */}
          <div className="bg-surface-container-low rounded-2xl p-10 flex flex-col items-center text-center shadow-inner">
            <h3 className="headline text-[10px] font-black text-on-surface-variant uppercase tracking-[0.3em] mb-10">Trust Score</h3>
            <div className="relative w-40 h-40 mb-8 p-4 bg-white rounded-full shadow-2xl ring-1 ring-black/5">
              <svg className="w-full h-full transform -rotate-90">
                <circle className="text-slate-100" cx="80" cy="80" fill="transparent" r="72" stroke="currentColor" stroke-width="10"></circle>
                <circle className="text-secondary transition-all duration-1000" cx="80" cy="80" fill="transparent" r="72" stroke="currentColor" stroke-dasharray="452.3" stroke-dashoffset="45.2" stroke-width="10" stroke-linecap="round"></circle>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-black font-serif text-on-surface italic">90%</span>
                <span className="text-[9px] text-green-600 font-black uppercase tracking-widest mt-1">Exceptional</span>
              </div>
            </div>
            <p className="text-[11px] text-on-surface-variant/70 font-bold leading-relaxed px-4">
              Profile data verified via ID proof and historical community cross-reference.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
