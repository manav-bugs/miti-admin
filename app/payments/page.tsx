'use client';

import React from 'react';
import { 
  Download, 
  Plus, 
  Search, 
  Bell, 
  ChevronLeft, 
  ChevronRight, 
  CreditCard, 
  Users, 
  Star, 
  ShieldCheck, 
  TrendingUp, 
  Wallet,
  Info,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const plans = [
  { name: 'Basic Plan', price: '₹4,999', period: '/6mo', active: '124 Active', icon: Users, border: 'border-slate-300' },
  { name: 'Gold Plan', price: '₹9,999', period: '/yr', active: '89 Active', icon: Star, border: 'border-yellow-500', color: 'text-secondary' },
  { name: 'Platinum', price: '₹14,999', period: '/yr', active: '42 Active', icon: ShieldCheck, border: 'border-slate-500' },
  { name: 'Diamond Elite', price: '₹24,999', period: '/yr', active: '18 Active', icon: TrendingUp, border: 'border-primary', color: 'text-primary' },
];

const transactions = [
  { name: 'Rajesh Malkani', initials: 'RM', plan: 'Diamond', amount: '₹24,999', gateway: 'Razorpay', id: 'PAY_8H2K9L1Z', date: '24 Oct 2023', status: 'Success' },
  { name: 'Pooja Hiranandani', initials: 'PH', plan: 'Gold', amount: '₹9,999', gateway: 'Razorpay', id: 'PAY_3N5M7V2X', date: '23 Oct 2023', status: 'Failed' },
  { name: 'Sanjay Chawla', initials: 'SC', plan: 'Basic', amount: '₹4,999', gateway: 'Razorpay', id: 'PAY_1A9C4F8D', date: '22 Oct 2023', status: 'Success' },
  { name: 'Varun Khubani', initials: 'VK', plan: 'Platinum', amount: '₹14,999', gateway: 'Razorpay', id: 'PAY_6G2Y0K7L', date: '21 Oct 2023', status: 'Success' },
  { name: 'Anita Daswani', initials: 'AD', plan: 'Gold', amount: '₹9,999', gateway: 'Razorpay', id: 'PAY_4T8Q1P3E', date: '21 Oct 2023', status: 'Success' },
];

export default function PaymentsPage() {
  return (
    <div className="p-8 lg:p-12 space-y-12 max-w-[1700px] mx-auto w-full">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h2 className="text-5xl font-serif font-black text-primary tracking-tight italic">Financial Codex</h2>
          <p className="text-on-surface-variant font-bold text-sm tracking-tight opacity-50 mt-2">Historical ledger of heritage subscriptions and revenue streams.</p>
        </div>
        <div className="flex gap-4">
          <button className="px-8 py-3.5 bg-white text-on-surface border border-outline-variant hover:bg-surface-container-low rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all flex items-center gap-3 shadow-sm">
            <Download className="w-4 h-4 opacity-40" /> Ledger Export
          </button>
          <button className="px-8 py-3.5 bg-secondary text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-xl shadow-secondary/20 hover:brightness-110 transition-all active:scale-95 flex items-center gap-3">
            <Plus className="w-5 h-5" /> Adjust Balance
          </button>
        </div>
      </div>

      {/* Active Plans Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {plans.map((plan, i) => (
          <div key={i} className={cn("bg-white p-10 rounded-[32px] shadow-sm border-t-8 transition-all hover:shadow-xl hover:-translate-y-1 group relative overflow-hidden", 
            i === 0 ? "border-outline-variant/30" : 
            i === 1 ? "border-secondary/30" : 
            i === 2 ? "border-primary/30" : "border-primary")}>
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[60px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <p className={cn("text-[10px] font-black uppercase tracking-[0.3em] mb-4 opacity-40 px-2 underline underline-offset-8 decoration-primary/20", plan.color)}>{plan.name}</p>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-serif font-black text-on-surface tracking-tighter">{plan.price}</span>
              <span className="text-[10px] text-on-surface-variant font-black uppercase tracking-widest opacity-30">{plan.period}</span>
            </div>
            <div className={cn("mt-10 flex items-center gap-3 font-black text-[10px] uppercase tracking-[0.2em] bg-surface-container-low px-4 py-2 rounded-xl inline-flex", plan.color || 'text-on-surface-variant/70')}>
              <plan.icon className="w-4 h-4 opacity-40" /> {plan.active}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Transactions Main View */}
        <div className="lg:col-span-12 space-y-10">
          {/* Navigation Tabs */}
          <div className="flex items-center gap-12 border-b border-outline-variant/20">
            <button className="pb-6 text-xs font-black text-primary border-b-4 border-primary uppercase tracking-[0.2em] italic">Active Ledger</button>
            <button className="pb-6 text-xs font-black text-on-surface-variant/40 hover:text-primary transition-colors uppercase tracking-[0.2em] italic">Strategy Matrix</button>
            <button className="pb-6 text-xs font-black text-on-surface-variant/40 hover:text-primary transition-colors uppercase tracking-[0.2em] italic">Revenue Yields</button>
          </div>

          {/* Table */}
          <div className="bg-white rounded-[32px] shadow-sm overflow-hidden border border-outline-variant">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low/50 text-on-surface-variant text-[10px] uppercase tracking-[0.2em] font-black">
                  <th className="px-10 py-6">Member Seeker</th>
                  <th className="px-10 py-6">Tier</th>
                  <th className="px-10 py-6 text-on-surface">Value</th>
                  <th className="px-10 py-6">Processor</th>
                  <th className="px-10 py-6 text-right">Moderation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10 border-t border-outline-variant/30">
                {transactions.map((txn, i) => (
                  <tr key={i} className="hover:bg-surface-container-low/20 transition-colors group">
                    <td className="px-10 py-8">
                      <div className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center font-serif text-primary font-black text-lg shadow-inner ring-1 ring-primary/10 transition-transform group-hover:scale-110">
                          {txn.initials}
                        </div>
                        <div>
                          <div className="text-sm font-black text-on-surface tracking-tight">{txn.name}</div>
                          <div className="text-[9px] text-on-surface-variant/40 font-black uppercase tracking-widest mt-1 italic">{txn.date}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-10 py-8 whitespace-nowrap">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface opacity-60 bg-surface-container-low px-4 py-1.5 rounded-full">{txn.plan}</span>
                    </td>
                    <td className="px-10 py-8 whitespace-nowrap">
                      <span className="text-lg font-serif font-black text-primary italic">{txn.amount}</span>
                    </td>
                    <td className="px-10 py-8 whitespace-nowrap">
                      <div className="flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                        <div className="w-2 h-2 rounded-full bg-secondary"></div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-50">{txn.gateway}</span>
                      </div>
                    </td>
                    <td className="px-10 py-8 text-right">
                      <span className={cn(
                        "inline-flex px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] shadow-sm",
                        txn.status === 'Success' ? "bg-primary text-white" : "bg-error text-white opacity-40"
                      )}>
                        {txn.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="px-10 py-8 border-t border-outline-variant/20 bg-surface-container-low/10 flex items-center justify-between">
              <span className="text-[10px] text-on-surface-variant font-black uppercase tracking-widest opacity-40">Codex records 1-10 / 432 Ledger</span>
              <div className="flex gap-4">
                <button className="p-3 rounded-xl hover:bg-white hover:shadow-sm text-on-surface-variant transition-all shadow-inner"><ChevronLeft className="w-6 h-6" /></button>
                <button className="p-3 rounded-xl hover:bg-white hover:shadow-sm text-on-surface-variant transition-all shadow-inner"><ChevronRight className="w-6 h-6" /></button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar/Quick Stats */}
        <aside className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Monthly Revenue */}
          <div className="bg-primary text-white p-12 rounded-[48px] shadow-2xl shadow-primary/20 relative overflow-hidden group border border-white/10">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-bl-[120px] -mr-12 -mt-12 group-hover:scale-110 transition-transform duration-1000"></div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/50 font-black mb-4">Registry Revenue Yield</p>
            <h3 className="text-6xl font-serif font-black tracking-tighter italic">₹12.4L</h3>
            <div className="mt-12 pt-10 border-t border-white/10 flex flex-wrap gap-10">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-2">Success Velocity</p>
                <p className="text-3xl font-serif font-black italic">+14.2%</p>
              </div>
              <div className="flex-1 min-w-[180px]">
                 <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">Archive Consistency</span>
                  <span className="text-xs font-black tracking-widest text-white/60">95.3%</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden shadow-inner">
                  <div className="h-full bg-secondary w-[95%]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Revenue Breakdown */}
          <div className="bg-white p-12 rounded-[48px] border border-outline-variant shadow-sm flex flex-col justify-between">
            <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-12 italic border-b border-outline-variant/20 pb-4 inline-block">Revenue Projections</h4>
            <div className="space-y-10">
              {[
                { label: 'Diamond Elite', value: '45%', color: 'bg-primary' },
                { label: 'Platinum & Gold', value: '38%', color: 'bg-secondary' },
                { label: 'Basic Plan', value: '17%', color: 'bg-on-surface-variant/40' },
              ].map((row, i) => (
                <div key={i} className="group">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.3em] mb-4 opacity-40 group-hover:opacity-100 transition-opacity">
                    <span className="text-on-surface-variant">{row.label}</span>
                    <span className="text-primary">{row.value}</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container-low rounded-full overflow-hidden shadow-inner">
                    <div className={cn("h-full transition-all duration-1000", row.color)} style={{ width: row.value }}></div>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-12 py-4 w-full bg-surface-container-low text-primary rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:shadow-xl transition-all shadow-sm border border-outline-variant/30">Deep Archive Audit</button>
          </div>

          {/* Quick Support Action */}
          <div className="p-12 rounded-[48px] bg-white border border-outline-variant shadow-sm relative group overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-[80px] group-hover:scale-110 transition-transform"></div>
            <div>
              <div className="w-16 h-16 rounded-[24px] bg-surface-container-low flex items-center justify-center text-secondary mb-10 shadow-inner group-hover:rotate-12 transition-transform">
                <Wallet className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-serif font-black text-on-surface tracking-tight italic">Payout Ledger</h4>
              <p className="text-sm text-on-surface-variant/60 mt-4 leading-relaxed tracking-tight">Review pending payouts for community heritage ambassadors.</p>
            </div>
            <button className="mt-10 text-[10px] font-black text-primary flex items-center gap-2.5 hover:translate-x-2 transition-transform uppercase tracking-[0.3em]">
              Access Ledger <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
