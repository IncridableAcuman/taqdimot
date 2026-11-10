import React from 'react';
import { X, Grid, ArrowRight, CheckCircle2 } from 'lucide-react';
import { slidesData } from '../data/slidesData';

export const SlideOverviewDrawer = ({ isOpen, onClose, currentSlideIndex, onSelectSlide }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
              <Grid className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-emerald-400 tracking-wider block">
                Taqdimot Mundarijasi
              </span>
              <h3 className="text-base font-bold text-white">
                Barcha 10 ta Slayd Ko'rinishi (Grid rejimi)
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Grid of 10 Slides */}
        <div className="p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
          {slidesData.map((s, idx) => {
            const isCurrent = currentSlideIndex === idx;

            return (
              <div
                key={s.id}
                onClick={() => {
                  onSelectSlide(idx);
                  onClose();
                }}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between text-left relative overflow-hidden ${
                  isCurrent
                    ? 'bg-slate-950 border-emerald-400 shadow-lg ring-1 ring-emerald-400/50'
                    : 'bg-slate-950/50 border-slate-800 hover:border-slate-700 hover:bg-slate-950'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-emerald-400">
                      #{s.id}
                    </span>
                    {isCurrent && (
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    )}
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 block line-clamp-1 uppercase">
                    {s.badge}
                  </span>
                  <h4 className="text-xs font-bold text-white line-clamp-2 mt-1">
                    {s.title}
                  </h4>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>{isCurrent ? "Joriy" : "O'tish"}</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>Qisqa klavish: <strong>G</strong> (Grid ko'rinishi)</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs transition-colors cursor-pointer"
          >
            Yopish
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlideOverviewDrawer;
