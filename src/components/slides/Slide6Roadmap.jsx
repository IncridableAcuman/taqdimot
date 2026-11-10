import React, { useState } from 'react';
import { Clock, CheckCircle2, ArrowRight, Sparkles, MapPin, Layers, ChevronRight } from 'lucide-react';

export const Slide6Roadmap = ({ data, onNext }) => {
  const [selectedPhase, setSelectedPhase] = useState(0);

  const phases = data.phases;

  return (
    <div className="relative min-h-full flex flex-col justify-center px-4 md:px-12 py-8 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              6-SLAYD: AMALGA OSHIRISH STRATEGIYASI
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              YO'L XARITASI: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">4 TA ANIQ BOSQICH</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-1.5 max-w-3xl">
              Yangiariq tumanidagi boshqariladigan amaliy tajribadan viloyat va respublika miqyosiga qadar.
            </p>
          </div>

          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
          >
            7-Slayd: Bozor Hajmi <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 Phases Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {phases.map((ph, idx) => {
            const isSelected = selectedPhase === idx;
            const isDone = idx === 0;

            return (
              <div
                key={idx}
                onClick={() => setSelectedPhase(idx)}
                className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden ${
                  isSelected
                    ? 'bg-slate-900 border-emerald-400/80 shadow-lg shadow-emerald-950/60 ring-1 ring-emerald-400/50 scale-[1.02]'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {ph.phase}
                    </span>
                    <span className="text-[11px] font-mono font-semibold text-slate-300">
                      {ph.timeline}
                    </span>
                  </div>

                  <span className={`inline-block px-2.5 py-1 rounded-md text-[11px] font-mono font-bold border ${ph.badgeColor} mb-2.5`}>
                    {ph.status}
                  </span>

                  <h3 className="text-sm sm:text-base font-bold text-white mb-2 leading-snug">
                    {ph.title}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono">
                  <span className={isDone ? 'text-emerald-400 font-bold' : 'text-slate-400'}>
                    {isDone ? '✓ 920 Test Bajarildi' : `${ph.items.length} ta asosiy vazifa`}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                </div>

                {isDone && (
                  <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/10 rounded-bl-full pointer-events-none" />
                )}
              </div>
            );
          })}
        </div>

        {/* Selected Phase Deep Dive Card */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900 border border-emerald-500/30 backdrop-blur-md">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800 mb-4">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-1">
                Tanlangan Bosqich Rejasi: {phases[selectedPhase].phase} ({phases[selectedPhase].timeline})
              </span>
              <h4 className="text-lg font-black text-white">
                {phases[selectedPhase].title} — Harakatlar Ro'yxati
              </h4>
            </div>

            <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${phases[selectedPhase].badgeColor}`}>
              {phases[selectedPhase].status}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {phases[selectedPhase].items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/90"
              >
                <div className="p-1 rounded bg-emerald-500/10 text-emerald-400 mt-0.5 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide6Roadmap;
