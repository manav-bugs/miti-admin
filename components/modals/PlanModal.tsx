'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap, Star, BadgeCheck, Gift, LayoutList } from 'lucide-react';

interface PlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (plan: any) => void;
  initialData?: any;
}

export function PlanModal({ isOpen, onClose, onSave, initialData }: PlanModalProps) {
  const [formData, setFormData] = useState<any>({
    name: '',
    price: 0,
    durationDays: 30,
    connectionLimit: 0,
    canChat: false,
    isVIP: false,
    searchPriority: false,
    description: '',
    isActive: true,
    isFree: false,
    order: 0,
    features: ['']
  });

  useEffect(() => {
    if (isOpen) {
      if (initialData) {
        setFormData({
          ...initialData,
          features: initialData.features || ['']
        });
      } else {
        setFormData({
          name: '',
          price: 0,
          durationDays: 30,
          connectionLimit: 0,
          canChat: false,
          isVIP: false,
          searchPriority: false,
          description: '',
          isActive: true,
          isFree: false,
          order: 0,
          features: ['']
        });
      }
    }
  }, [initialData, isOpen]);

  const handleFeatureChange = (index: number, value: string) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData({ ...formData, features: newFeatures });
  };

  const addFeature = () => {
    setFormData({ ...formData, features: [...formData.features, ''] });
  };

  const removeFeature = (index: number) => {
    const newFeatures = formData.features.filter((_: any, i: number) => i !== index);
    setFormData({ ...formData, features: newFeatures.length ? newFeatures : [''] });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-on-surface/40 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-surface rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-outline-variant"
          >
            {/* Header */}
            <div className="p-8 border-b border-outline-variant flex items-center justify-between bg-surface-container-low">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                   <LayoutList className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-on-surface headline">
                    {initialData ? 'Update' : 'Create'} <span className="text-primary">Plan</span>
                  </h2>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-1">
                    Membership Tiers & Feature Matrix
                  </p>
                </div>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-surface-container-lowest rounded-full transition-colors cursor-pointer">
                <X className="w-6 h-6 text-on-surface-variant" />
              </button>
            </div>

            {/* Form Body */}
            <div className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide">
              <form id="plan-form" onSubmit={handleSubmit} className="space-y-8">
                {/* Basic Info */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Plan Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sutho (Basic)"
                      className="w-full px-5 py-4 bg-surface-container-lowest border border-outline-variant rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Price (₹)</label>
                    <input
                      type="number"
                      required
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                      className="w-full px-5 py-4 bg-surface-container-lowest border border-outline-variant rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Validity Type</label>
                    <select
                      value={formData.validityType || 'monthly'}
                      onChange={(e) => {
                        const val = e.target.value;
                        const option = [
                          { v: 'monthly', d: 30 },
                          { v: 'quarterly', d: 90 },
                          { v: 'semi-annually', d: 180 },
                          { v: 'annually', d: 365 },
                          { v: 'custom', d: formData.durationDays }
                        ].find(o => o.v === val);
                        setFormData({ 
                          ...formData, 
                          validityType: val, 
                          durationDays: option ? option.d : 30 
                        });
                      }}
                      className="w-full px-5 py-4 bg-surface-container-lowest border border-outline-variant rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none"
                    >
                      <option value="monthly">Monthly</option>
                      <option value="quarterly">Quarterly</option>
                      <option value="semi-annually">Semi-Annually</option>
                      <option value="annually">Annually</option>
                      <option value="custom">Custom Days</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Duration (Days)</label>
                    <input
                      type="number"
                      required
                      disabled={formData.validityType !== 'custom'}
                      value={formData.durationDays}
                      onChange={(e) => setFormData({ ...formData, durationDays: Number(e.target.value) })}
                      className={`w-full px-5 py-4 bg-surface-container-lowest border border-outline-variant rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 ${formData.validityType !== 'custom' ? 'opacity-50' : ''}`}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Connection Limit</label>
                    <input
                      type="number"
                      value={formData.connectionLimit}
                      onChange={(e) => setFormData({ ...formData, connectionLimit: Number(e.target.value) })}
                      className="w-full px-5 py-4 bg-surface-container-lowest border border-outline-variant rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6">
                   <div className="space-y-2">
                    <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Display Order</label>
                    <input
                      type="number"
                      value={formData.order}
                      onChange={(e) => setFormData({ ...formData, order: Number(e.target.value) })}
                      className="w-full px-5 py-4 bg-surface-container-lowest border border-outline-variant rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                {/* Feature Toggles */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { key: 'canChat', label: 'Can Chat', icon: <Zap className="w-3.5 h-3.5" /> },
                    { key: 'isVIP', label: 'VIP Plan', icon: <BadgeCheck className="w-3.5 h-3.5" /> },
                    { key: 'searchPriority', label: 'Priority', icon: <Star className="w-3.5 h-3.5" /> },
                    { key: 'isFree', label: 'Reg Free', icon: <Gift className="w-3.5 h-3.5" /> },
                  ].map((feat) => (
                    <button
                      key={feat.key}
                      type="button"
                      onClick={() => setFormData({ ...formData, [feat.key]: !formData[feat.key] })}
                      className={`flex items-center gap-3 p-4 rounded-xl border transition-all cursor-pointer ${
                        formData[feat.key] 
                          ? 'bg-primary border-primary text-on-primary shadow-lg' 
                          : 'bg-surface-container-lowest border-outline-variant text-on-surface-variant hover:border-primary/20 shadow-sm'
                      }`}
                    >
                      {feat.icon}
                      <span className="text-[9px] font-bold uppercase tracking-wider">{feat.label}</span>
                    </button>
                  ))}
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between px-1">
                    <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Plan Highlights</label>
                    <button 
                      type="button" 
                      onClick={addFeature}
                      className="text-[10px] font-bold text-primary hover:underline px-3 py-1 bg-primary/5 rounded-lg cursor-pointer"
                    >
                      + Add Feature
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {formData.features.map((feature: string, index: number) => (
                      <div key={index} className="flex gap-2 group">
                        <input
                          type="text"
                          value={feature}
                          onChange={(e) => handleFeatureChange(index, e.target.value)}
                          placeholder="e.g. Unlimited Messaging"
                          className="flex-1 px-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-xl text-[11px] font-bold focus:bg-surface focus:ring-1 focus:ring-primary/10 focus:outline-none"
                        />
                        <button 
                          type="button" 
                          onClick={() => removeFeature(index)}
                          className="p-3 text-error hover:bg-error-container rounded-xl transition-colors opacity-0 group-hover:opacity-100 cursor-pointer"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Admin Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-5 py-4 bg-surface-container-lowest border border-outline-variant rounded-xl text-[11px] font-bold min-h-[80px] focus:outline-none focus:bg-surface"
                    placeholder="Short internal summary for the plan..."
                  />
                </div>
              </form>
            </div>

            {/* Footer */}
            <div className="p-8 border-t border-outline-variant bg-surface-container-low flex gap-4">
              <button 
                type="button"
                className="flex-1 py-4 text-[10px] font-bold tracking-widest uppercase border border-outline-variant text-on-surface-variant rounded-xl hover:bg-surface-container-lowest transition-all cursor-pointer"
                onClick={onClose}
              >
                Cancel
              </button>
              <button 
                form="plan-form"
                type="submit"
                className="flex-1 py-4 text-[10px] font-bold tracking-widest uppercase bg-primary text-on-primary rounded-xl hover:opacity-90 transition-all shadow-xl shadow-primary/20 cursor-pointer"
              >
                {initialData ? 'Save Changes' : 'Publish Plan'}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
