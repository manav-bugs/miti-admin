'use client';

import React from 'react';
import { 
  Users, 
  ShieldCheck, 
  History,
  TrendingUp,
  Heart,
  CreditCard,
  UserPlus,
  ArrowUpRight,
  MoreVertical,
  Check,
  X,
  Plus
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';
import { cn } from '@/lib/utils';

const summaryStats = [
  { label: 'Total Members', value: '5,240', change: '+12%', icon: Users, color: 'text-primary' },
  { label: 'Active Profiles', value: '4,810', change: '+5%', icon: ShieldCheck, color: 'text-primary' },
  { label: 'Pending Approvals', value: '12', badge: 'Attention', icon: History, color: 'text-secondary' },
  { label: 'Premium Members', value: '1,205', change: '+18%', icon: TrendingUp, color: 'text-secondary' },
  { label: 'New Today', value: '14', badge: 'Steady', icon: ArrowUpRight, color: 'text-slate-500' },
  { label: 'Total Matches', value: '842', change: '+24%', icon: Heart, color: 'text-primary' },
  { label: 'Revenue (Monthly)', value: '₹14.2L', change: '+9%', icon: CreditCard, color: 'text-primary' },
  { label: 'Active Subs', value: '1,150', change: '+3%', icon: Users, color: 'text-primary' },
];

const growthData = [
  { month: 'Jan', members: 400 },
  { month: 'Feb', members: 600 },
  { month: 'Mar', members: 550 },
  { month: 'Apr', members: 700 },
  { month: 'May', members: 800 },
  { month: 'Jun', members: 900 },
  { month: 'Jul', members: 850 },
  { month: 'Aug', members: 1000 },
  { month: 'Sep', members: 1100 },
  { month: 'Oct', members: 1250 },
  { month: 'Nov', members: 1150 },
  { month: 'Dec', members: 1300 },
];

const genderData = [
  { name: 'Male', value: 58 },
  { name: 'Female', value: 42 },
];
const COLORS = ['#6B1111', '#B8860B'];

const recentActivity = [
  { type: 'payment', text: 'New Payment of ₹4,999 received from Rahul S.', time: '10 mins ago', icon: CreditCard, iconColor: 'text-primary', bgColor: 'bg-primary/10' },
  { type: 'report', text: 'Profile Reported: ID #8492 for suspicious activity.', time: '2 hours ago', icon: History, iconColor: 'text-error', bgColor: 'bg-error-container/30' },
  { type: 'match', text: 'Match Success! Kavita & Varun have requested a family meeting.', time: '5 hours ago', icon: Heart, iconColor: 'text-secondary', bgColor: 'bg-secondary/10' },
  { type: 'staff', text: 'New Staff Registered: Meera J. joined the moderation team.', time: 'Yesterday', icon: UserPlus, iconColor: 'text-primary', bgColor: 'bg-primary/10' },
];

export default function Dashboard() {
  return (
    <div className="p-8 space-y-10 max-w-[1600px] mx-auto w-full">
      {/* Header Greeting / Hero Style */}
      <div className="relative h-64 bg-primary rounded-[32px] overflow-hidden p-12 flex flex-col justify-end text-white shadow-xl shadow-primary/20">
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary-container rounded-full opacity-40"></div>
        <div className="absolute top-10 right-20 w-32 h-32 bg-secondary-container rounded-full opacity-20"></div>
        
        <div className="relative">
          <h2 className="font-serif text-5xl mb-4 leading-tight font-black tracking-tight italic">Rooted in Heritage.</h2>
          <p className="text-white/80 max-w-lg font-medium leading-relaxed">
            Welcome back, Administrator. The MitiMighty registry is growing steadily. 
            Verification queues are optimal today.
          </p>
        </div>
        <div className="absolute top-12 right-12 flex gap-3">
          <button className="px-6 py-2.5 text-xs font-black uppercase tracking-widest bg-white/20 backdrop-blur-md rounded-xl hover:bg-white/30 transition-all border border-white/10">
            Archive Stats
          </button>
          <button className="px-6 py-2.5 text-xs font-black uppercase tracking-widest bg-secondary text-white rounded-xl shadow-lg shadow-black/10 hover:brightness-110 transition-all flex items-center gap-2">
            <Plus className="w-4 h-4" /> New Entry
          </button>
        </div>
      </div>

      {/* Summary Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {summaryStats.map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-[24px] shadow-sm border border-outline-variant hover:shadow-lg transition-all group relative overflow-hidden">
            <div className="flex items-center gap-3 text-on-surface-variant/40 mb-4">
              <stat.icon className={cn("w-5 h-5", stat.color.replace('text-primary', 'text-primary'))} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">{stat.label}</span>
            </div>
            <div className="flex items-baseline justify-between relative z-10">
              <h3 className="text-4xl font-serif font-black text-on-surface tracking-tight">{stat.value}</h3>
              {stat.change && (
                <span className="text-[10px] font-black text-primary bg-primary/10 px-2 py-1 rounded-lg uppercase tracking-widest">{stat.change}</span>
              )}
              {stat.badge && (
                <span className={cn(
                  "text-[10px] font-black px-2 py-1 rounded-lg uppercase tracking-widest",
                  stat.badge === 'Attention' ? 'text-secondary bg-secondary/10' : 'text-on-surface-variant font-bold bg-surface-container-low'
                )}>{stat.badge}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Analytics & Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 bg-white p-10 rounded-[32px] shadow-sm border border-outline-variant">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h4 className="text-2xl font-serif font-black text-on-surface">Census Growth</h4>
              <p className="text-xs text-on-surface-variant/60 font-medium">Monthly registry population analysis</p>
            </div>
            <select className="text-[10px] font-black uppercase tracking-widest bg-surface-container-low border-none rounded-xl focus:ring-primary/20 px-4 py-3 outline-none transition-all">
              <option>Archive Cycle 2023</option>
              <option>Archive Cycle 2022</option>
            </select>
          </div>
          <div className="h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={growthData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E0D8" />
                <XAxis 
                  dataKey="month" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 900, fill: '#6D6864' }}
                  dy={15}
                />
                <YAxis hide />
                <Tooltip 
                  cursor={{ fill: '#F5F1EA' }}
                  contentStyle={{ 
                    borderRadius: '16px', 
                    border: '1px solid #E5E0D8', 
                    boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
                    padding: '12px 16px'
                  }}
                />
                <Bar 
                  dataKey="members" 
                  fill="#8B9D83" 
                  radius={[8, 8, 0, 0]} 
                  barSize={32}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <div className="bg-white p-10 rounded-[32px] shadow-sm border border-outline-variant">
            <h4 className="text-xl font-serif font-black text-on-surface mb-8 italic">Registry Ratio</h4>
            <div className="h-[220px] w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={genderData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={95}
                    paddingAngle={8}
                    dataKey="value"
                  >
                    {genderData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-serif font-black text-primary italic leading-none">58%</span>
                <span className="text-[10px] text-on-surface-variant font-black uppercase tracking-widest mt-1">Male Core</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[32px] shadow-sm border border-outline-variant">
            <h4 className="text-xl font-serif font-black text-on-surface mb-6 italic">Tier Coverage</h4>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-2 opacity-60">
                  <span>Elite Tiers</span>
                  <span className="text-primary font-black">23%</span>
                </div>
                <div className="w-full h-2 bg-surface-container-low rounded-full overflow-hidden shadow-inner">
                  <div className="h-full bg-primary w-[23%] rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-2 opacity-60">
                  <span>Standard</span>
                  <span className="text-on-surface font-black">77%</span>
                </div>
                <div className="w-full h-2 bg-surface-container-low rounded-full overflow-hidden shadow-inner">
                  <div className="h-full bg-secondary w-[77%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Moderation Queue & Activity */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        <div className="xl:col-span-8 bg-white rounded-[32px] shadow-sm overflow-hidden flex flex-col border border-outline-variant">
          <div className="p-10 border-b border-outline-variant/30 flex justify-between items-center bg-white">
            <h4 className="text-2xl font-serif font-black text-on-surface italic">Awaiting Verification</h4>
            <button className="text-[10px] font-black text-primary bg-primary/10 px-5 py-2.5 rounded-xl hover:bg-primary/20 transition-all uppercase tracking-[0.2em]">
              Archive Queue
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low/30">
                  <th className="px-10 py-5 text-[10px] font-black text-on-surface-variant uppercase tracking-widest">Candidate</th>
                  <th className="px-10 py-5 text-[10px] font-black text-on-surface-variant uppercase tracking-widest">Entry Date</th>
                  <th className="px-10 py-5 text-[10px] font-black text-on-surface-variant uppercase tracking-widest">Gotra Trace</th>
                  <th className="px-10 py-5 text-[10px] font-black text-on-surface-variant uppercase tracking-widest text-right">Moderation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/20">
                {[
                  { name: 'Rajesh Kewalramani', id: '#M92031', date: 'Oct 24, 2023', gotra: 'Kshatriya', initial: 'RK' },
                  { name: 'Sneha Makhija', id: '#M92035', date: 'Oct 25, 2023', gotra: 'Arora', initial: 'SM' },
                  { name: 'Prakash Tejwani', id: '#M92040', date: 'Oct 25, 2023', gotra: 'Lohana', initial: 'PT' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-surface-container-low/20 transition-colors group">
                    <td className="px-10 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center font-serif text-primary font-black text-lg shadow-inner ring-1 ring-primary/10">
                          {row.initial}
                        </div>
                        <div>
                          <div className="text-sm font-black text-on-surface">{row.name}</div>
                          <div className="text-[10px] text-on-surface-variant/40 font-bold uppercase tracking-widest">{row.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-10 py-6 text-xs text-on-surface-variant font-bold">{row.date}</td>
                    <td className="px-10 py-6 text-xs text-on-surface-variant font-bold italic">{row.gotra}</td>
                    <td className="px-10 py-6 text-right">
                      <div className="flex justify-end gap-3 translate-x-2">
                        <button className="p-3 text-error hover:bg-error-container/20 rounded-xl transition-all shadow-sm bg-white">
                          <X className="w-5 h-5" />
                        </button>
                        <button className="p-3 text-primary hover:bg-primary/10 rounded-xl transition-all shadow-sm bg-white">
                          <Check className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="xl:col-span-4 bg-white p-10 rounded-[32px] shadow-sm flex flex-col border border-outline-variant relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none"></div>
          <h4 className="text-xl font-serif font-black text-on-surface mb-10 italic">Heritage Log</h4>
          <div className="flex-1 space-y-10">
            {recentActivity.map((activity, i) => (
              <div key={i} className="flex gap-5 group">
                <div className={cn("mt-1 w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm border border-outline-variant/30 transition-transform group-hover:scale-110 duration-500 bg-white")}>
                  <activity.icon className={cn("w-5 h-5", activity.iconColor)} />
                </div>
                <div>
                  <p className="text-sm text-on-surface leading-snug font-bold">
                    {activity.text}
                  </p>
                  <span className="text-[9px] text-on-surface-variant font-black uppercase tracking-widest mt-2 block opacity-50 underline decoration-primary/30 underline-offset-4">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-10 py-3 w-full text-[10px] font-black text-primary border border-primary/20 rounded-xl hover:bg-primary/5 transition-all uppercase tracking-[0.2em] shadow-sm">
            Full Archive Log
          </button>
        </div>
      </div>

      <footer className="mt-auto pt-10 border-t border-outline-variant/50 flex justify-between items-center text-[10px] text-on-surface-variant/40 font-black uppercase tracking-[0.3em]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-sm shadow-primary"></span>
          Registry Secure & Online
        </div>
        <div className="flex gap-10">
          <a href="#" className="hover:text-primary transition-colors italic">Codex 2.0</a>
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary transition-colors">Staff Access</a>
        </div>
      </footer>
    </div>
  );
}
