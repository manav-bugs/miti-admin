'use client';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion, Reorder } from 'framer-motion';
import { 
  Plus, Edit3, Trash2, Zap, Star, BadgeCheck, Gift, 
  LayoutList, Clock, Users, GripVertical 
} from 'lucide-react';
import { RootState, AppDispatch } from '@/lib/store';
import { fetchPlans, addPlan, updatePlan, deletePlan, reorderPlansAction, reorderLocal } from '@/lib/slices/planSlice';
import { PlanModal } from '@/components/modals/PlanModal';

export default function PlansPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { items: plans, loading, error } = useSelector((state: RootState) => state.plans);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPlan, setEditingPlan] = useState<any>(null);

  useEffect(() => {
    dispatch(fetchPlans());
  }, [dispatch]);

  const handleSavePlan = (formData: any) => {
    if (editingPlan) {
      dispatch(updatePlan({ id: editingPlan._id, data: formData }));
    } else {
      dispatch(addPlan(formData));
    }
    setIsModalOpen(false);
    setEditingPlan(null);
  };

  const handleDeletePlan = (id: string) => {
    if (confirm('Move this plan to archive? (Soft Delete)')) {
      dispatch(deletePlan(id));
    }
  };

  const handleReorder = (newOrder: any[]) => {
    dispatch(reorderLocal(newOrder));
    const orders = newOrder.map((plan, index) => ({ id: plan._id, order: index }));
    dispatch(reorderPlansAction(orders));
  };

  return (
    <div className="p-8 space-y-12">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3 bg-primary/5 text-primary px-4 py-1.5 rounded-full w-fit border border-primary/10">
            <LayoutList className="w-4 h-4" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Membership Architecture</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-on-surface leading-none headline">
            Subscription <br />
            <span className="text-primary">Tiers & Plans</span>
          </h1>
        </div>

        <button 
          onClick={() => {
            setEditingPlan(null);
            setIsModalOpen(true);
          }}
          className="bg-primary text-on-primary px-8 py-4 rounded-2xl flex items-center gap-3 font-bold text-[11px] uppercase tracking-widest hover:opacity-90 transition-all shadow-xl shadow-primary/20 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          Create New Tier
        </button>
      </header>

      {/* Error State */}
      {error && (
        <div className="p-4 bg-error-container text-error rounded-xl border border-error/10 text-xs font-bold">
          Error: {error}
        </div>
      )}

      {/* Plans List */}
      <div className="relative">
        {loading && plans.length === 0 ? (
          <div className="h-96 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
              <p className="text-[10px] font-bold tracking-widest text-primary uppercase animate-pulse">Syncing Archives...</p>
            </div>
          </div>
        ) : plans.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="h-[500px] bg-surface-container-low/30 rounded-[4rem] border-2 border-dashed border-outline-variant flex flex-col items-center justify-center p-12 text-center"
          >
            <div className="w-24 h-24 bg-surface-container-low rounded-[2.5rem] flex items-center justify-center mb-8 shadow-inner">
              <LayoutList className="w-12 h-12 opacity-10" />
            </div>
            <h2 className="text-2xl font-bold text-on-surface headline mb-2">No Tiers Found</h2>
            <p className="text-xs font-medium text-on-surface-variant max-w-xs opacity-60">Begin your legacy by creating the first membership tier for the elite Sindhi registry.</p>
          </motion.div>
        ) : (
          <div className="pb-12 overflow-x-auto no-scrollbar">
            <Reorder.Group 
              axis="x" 
              values={plans} 
              onReorder={handleReorder} 
              className="flex gap-8 px-4 min-w-max"
            >
              {plans.map((plan, index) => (
                <Reorder.Item
                  key={plan._id}
                  value={plan}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  layout
                  className={`w-[380px] rounded-[3.5rem] border shadow-xl hover:shadow-2xl transition-all duration-500 cursor-grab active:cursor-grabbing relative overflow-hidden flex flex-col group ${
                    plan.isPopular 
                    ? 'bg-surface-container-lowest border-primary shadow-primary/10 ring-4 ring-primary/5 scale-[1.02]' 
                    : 'bg-surface-container-lowest border-outline-variant hover:shadow-primary/10'
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.isPopular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-6 py-2 rounded-b-2xl z-20 flex items-center gap-2 shadow-lg">
                      <Zap className="w-3.5 h-3.5 fill-current" />
                      <span className="text-[10px] font-black uppercase tracking-widest">Most Popular</span>
                    </div>
                  )}

                  {/* Premium Header Decoration */}
                  <div className={`absolute top-0 left-0 right-0 h-24 pointer-events-none ${plan.isPopular ? 'bg-gradient-to-b from-primary/10 to-transparent' : 'bg-gradient-to-b from-primary/[0.03] to-transparent'}`} />
                  
                  {/* Top Bar with Actions & Drag Handle */}
                  <div className="p-8 flex items-center justify-between relative z-10">
                    <div className="p-1 bg-surface-container-low/50 backdrop-blur-sm rounded-2xl border border-outline-variant/30 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <button 
                        onClick={(e) => { e.stopPropagation(); setEditingPlan(plan); setIsModalOpen(true); }}
                        className="p-3 text-on-surface-variant rounded-xl hover:bg-primary hover:text-on-primary transition-all duration-300"
                        title="Edit"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); handleDeletePlan(plan._id); }}
                        className="p-3 text-on-surface-variant rounded-xl hover:bg-error hover:text-on-primary transition-all duration-300"
                        title="Archive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors touch-none shadow-sm ${plan.isPopular ? 'bg-primary text-on-primary' : 'bg-surface-container-low text-outline-variant group-hover:text-primary'}`}>
                      <GripVertical className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Icon & Badge */}
                  <div className="px-10 pb-6 flex flex-col items-center text-center relative z-10">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className="w-24 h-24 bg-surface-container-low rounded-[2.5rem] flex items-center justify-center text-primary shadow-inner mb-6 group-hover:bg-primary group-hover:text-on-primary transition-all duration-700"
                    >
                      {plan.isVIP ? <BadgeCheck className="w-12 h-12" /> : plan.isFree ? <Gift className="w-12 h-12" /> : <Star className="w-12 h-12" />}
                    </motion.div>
                    
                    <div className="space-y-1">
                       <h3 className="text-3xl font-bold text-on-surface headline tracking-tight group-hover:text-primary transition-colors">{plan.name}</h3>
                       <div className="flex items-center justify-center gap-3">
                         {plan.isActive ? (
                            <span className="text-[9px] font-black uppercase tracking-widest text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">Active Node</span>
                          ) : (
                            <span className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant/40 bg-surface-container-low px-2 py-0.5 rounded-full border border-outline-variant">Legacy Tier</span>
                          )}
                          {plan.isFree && <span className="text-[9px] font-black uppercase tracking-widest text-secondary bg-secondary/10 px-2 py-0.5 rounded-full border border-secondary/20">Public Entry</span>}
                       </div>
                    </div>
                  </div>

                  {/* Pricing Section */}
                  <div className="mx-8 p-8 bg-surface-container-low/50 rounded-[2.5rem] border border-outline-variant/30 flex flex-col items-center gap-1 mb-8 relative z-10 overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                      <Zap className="w-24 h-24" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-on-surface-variant/50">Investment</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-on-surface headline">₹{plan.price}</span>
                      <span className="text-xs font-bold text-on-surface-variant/60">/ {plan.validityType || 'Cycle'}</span>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-primary bg-primary/5 px-4 py-2 rounded-xl border border-primary/10">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{plan.durationDays} DAYS PROTOCOL</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="px-10 space-y-4 mb-10 flex-1 relative z-10">
                    <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/40 mb-6">Inclusions & Privileges</p>
                    
                    <div className="space-y-5">
                      <div className="flex items-start gap-4">
                        <div className={`w-5 h-5 rounded-lg flex items-center justify-center ${plan.connectionLimit > 0 ? 'bg-secondary/10 text-secondary' : 'bg-surface-container-low text-outline-variant'}`}>
                          <Users className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex flex-col">
                          <span className={`text-xs font-bold ${plan.connectionLimit > 0 ? 'text-on-surface' : 'text-on-surface-variant/40'}`}>
                            {plan.connectionLimit > 0 ? `${plan.connectionLimit} Match Connections` : 'No Connection Limit'}
                          </span>
                          <span className="text-[9px] font-medium text-on-surface-variant/50">Verified family introductions</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className={`w-5 h-5 rounded-lg flex items-center justify-center ${plan.canChat ? 'bg-primary/10 text-primary' : 'bg-surface-container-low text-outline-variant'}`}>
                          <Zap className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex flex-col">
                          <span className={`text-xs font-bold ${plan.canChat ? 'text-on-surface' : 'text-on-surface-variant/40'}`}>
                            {plan.canChat ? 'Direct Communication' : 'Chat Restricted'}
                          </span>
                          <span className="text-[9px] font-medium text-on-surface-variant/50">Secure end-to-end conversations</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className={`w-5 h-5 rounded-lg flex items-center justify-center ${plan.isVIP ? 'bg-amber-100 text-amber-600' : 'bg-surface-container-low text-outline-variant'}`}>
                          <Star className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex flex-col">
                          <span className={`text-xs font-bold ${plan.isVIP ? 'text-on-surface' : 'text-on-surface-variant/40'}`}>
                            {plan.isVIP ? 'VIP Status & Visibility' : 'Standard Visibility'}
                          </span>
                          <span className="text-[9px] font-medium text-on-surface-variant/50">Priority in search results</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Footer */}
                  <div className="p-8 mt-auto border-t border-outline-variant/30 flex items-center justify-between bg-surface-container-low/20">
                     <div className="flex flex-col">
                       <span className="text-[9px] font-black uppercase tracking-tighter text-on-surface-variant/40">Tier Priority</span>
                       <span className="text-xs font-bold text-on-surface">Level 0{index + 1}</span>
                     </div>
                     <div className="w-8 h-8 rounded-full border-2 border-outline-variant/30 flex items-center justify-center text-[10px] font-black text-on-surface-variant/30">
                       {plan.order || 0}
                     </div>
                  </div>
                </Reorder.Item>
              ))}
            </Reorder.Group>
          </div>
        )}
      </div>

      <PlanModal 
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingPlan(null);
        }}
        onSave={handleSavePlan}
        initialData={editingPlan}
      />
    </div>
  );
}
