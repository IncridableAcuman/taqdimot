import React, { useState } from 'react';
import { X, HelpCircle, ChevronDown, CheckCircle2, ShieldCheck, Sparkles, MessageCircle } from 'lucide-react';
import { judgeQA } from '../data/slidesData';

export const JudgeQAModal = ({ isOpen, onClose }) => {
  const [expandedId, setExpandedId] = useState(1);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-cyan-500/40 w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-cyan-400 tracking-wider block">
                Taqdimotchi uchun maxsus qo'llanma
              </span>
              <h3 className="text-base font-bold text-white">
                Hakamlar va Investorlar Savollariga Aniq Javoblar
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

        {/* Q&A Accordion List */}
        <div className="p-6 overflow-y-auto space-y-3">
          {judgeQA.map((item) => {
            const isExpanded = expandedId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isExpanded
                    ? 'bg-slate-950 border-cyan-500/50 shadow-lg'
                    : 'bg-slate-950/50 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                  className="w-full p-4 text-left flex items-center justify-between gap-3 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-cyan-950 text-cyan-400 text-xs font-mono font-bold flex items-center justify-center border border-cyan-800/80 shrink-0">
                      0{item.id}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white">
                      {item.question}
                    </h4>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-180 text-cyan-400' : ''}`} />
                </button>

                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 text-slate-200 text-xs sm:text-sm leading-relaxed border-t border-slate-900">
                    <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-500/30">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                        <p className="leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>Qisqa klavish: <strong>Q</strong> (Savollarni ochish/yopish)</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
          >
            Yopish
          </button>
        </div>
      </div>
    </div>
  );
};

export default JudgeQAModal;
