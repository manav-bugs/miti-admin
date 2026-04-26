'use client';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { 
  Plus, Edit3, Trash2, Zap, Star, BadgeCheck, Gift, 
  LayoutList, Clock, Users, GripVertical 
} from 'lucide-react';
import { RootState, AppDispatch } from '@/lib/store';
import { fetchPlans, addPlan, updatePlan, deletePlan } from '@/lib/slices/planSlice';
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
      <div className="grid grid-cols-1 gap-6">
        {loading && plans.length === 0 ? (
          <div className="h-64 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-primary"></div>
          </div>
        ) : plans.length === 0 ? (
          <div className="h-96 bg-surface-container-low/50 rounded-[3rem] border-2 border-dashed border-outline-variant flex flex-col items-center justify-center p-12 text-center text-on-surface-variant">
            <div className="w-20 h-20 bg-surface-container-low rounded-[2rem] flex items-center justify-center mb-6">
              <LayoutList className="w-10 h-10 opacity-20" />
            </div>
            <p className="text-[11px] font-bold tracking-widest uppercase headline">No plans found. <br /> Create your first membership tier.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {plans.map((plan) => (
              <motion.div
                key={plan._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-surface-container-lowest p-8 rounded-[2.5rem] border border-outline-variant shadow-lg flex flex-col md:flex-row items-center justify-between gap-8 group hover:border-primary/20 transition-all duration-500"
              >
                <div className="flex items-center gap-8 flex-1">
                  <div className="w-20 h-20 bg-surface-container-low rounded-[2rem] flex items-center justify-center text-primary shadow-inner group-hover:bg-primary group-hover:text-on-primary transition-all duration-500">
                    {plan.isVIP ? <BadgeCheck className="w-10 h-10" /> : plan.isFree ? <Gift className="w-10 h-10" /> : <Star className="w-10 h-10" />}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl font-bold text-on-surface headline">{plan.name}</h3>
                      <span className="bg-secondary-container text-on-secondary-container font-black text-[10px] px-3 py-1 rounded-lg border border-outline-variant">₹{plan.price}</span>
                      {plan.isActive ? (
                        <div className="px-2 py-0.5 bg-primary/5 text-primary text-[8px] font-bold rounded-md uppercase border border-primary/10">Active</div>
                      ) : (
                        <div className="px-2 py-0.5 bg-surface-container-low text-on-surface-variant text-[8px] font-bold rounded-md uppercase border border-outline-variant">Inactive</div>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <span className="text-[10px] font-bold text-on-surface-variant flex items-center gap-1.5 capitalize">
                        <Clock className="w-3.5 h-3.5" /> {plan.validityType || 'Custom'} ({plan.durationDays} Days)
                      </span>
                      <div className="h-4 w-px bg-outline-variant" />
                      <div className="flex gap-4">
                        {plan.canChat && <div className="text-primary flex items-center gap-1.5 text-[9px] font-bold uppercase"><Zap className="w-3.5 h-3.5" /> Chat Unlocked</div>}
                        {plan.connectionLimit > 0 && <div className="text-secondary flex items-center gap-1.5 text-[9px] font-bold uppercase"><Users className="w-3.5 h-3.5" /> {plan.connectionLimit} Connections</div>}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => {
                      setEditingPlan(plan);
                      setIsModalOpen(true);
                    }}
                    className="p-4 bg-surface-container-low text-on-surface-variant rounded-2xl hover:bg-primary hover:text-on-primary transition-all duration-300 cursor-pointer"
                  >
                    <Edit3 className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => handleDeletePlan(plan._id)}
                    className="p-4 bg-surface-container-low text-on-surface-variant rounded-2xl hover:bg-error hover:text-on-primary transition-all duration-300 cursor-pointer"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                  <div className="w-10 h-10 flex items-center justify-center text-outline-variant">
                    <GripVertical className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
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
