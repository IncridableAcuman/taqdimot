import React, { useState } from 'react';
import { Layers, Landmark, Tractor, ArrowRight, Sparkles, CheckCircle2, DollarSign } from 'lucide-react';

export const Slide7MarketSize = ({ data, onNext }) => {
  const [activeTier, setActiveTier] = useState('SOM');

  const tiers = data.marketTiers;
  const segments = data.customerSegments;

  const segmentIcons = [Layers, Landmark, Tractor];

  return (
    <div className="relative min-h-full flex flex-col justify-center px-4 md:px-12 py-8 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
              7-SLAYD: BOZOR SALOHIYATI VA SEGMENTATSIYA
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              BOZOR HAJMI VA <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">MAQSADLI SEGMENTLAR</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-1.5 max-w-3xl">
              Yangiariq tumanining aniq hisoblangan ehtiyojidan boshlab, butun O'zbekiston sug'orma maydonlarigacha.
            </p>
          </div>

          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
          >
            8-Slayd: Biznes Model <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* TAM / SAM / SOM Concentric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {tiers.map((t) => {
            const isSelected = activeTier === t.tier;

            return (
              <div
                key={t.tier}
                onClick={() => setActiveTier(t.tier)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden ${
                  isSelected
                    ? 'bg-slate-900 border-emerald-400/80 shadow-lg shadow-emerald-950/60 ring-1 ring-emerald-400/50 scale-[1.02]'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-300">
                      {t.tier}
                    </span>
                    <span className="text-xs font-mono text-emerald-400">
                      {t.tier === 'SOM' ? 'Pilot Bosqichi' : t.tier === 'SAM' ? 'Mintaqaviy' : 'Milliy Qamrov'}
                    </span>
                  </div>

                  <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300 font-mono mb-2">
                    {t.value}
                  </div>

                  <h3 className="text-sm font-bold text-white mb-2">
                    {t.label}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {t.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{t.tier === 'SOM' ? '2,500 ga' : t.tier === 'SAM' ? '270,000 ga' : '4,300,000 ga'}</span>
                  <span className="text-emerald-400 font-semibold">{isSelected ? 'Faol tanlov' : 'Ko\'rish'}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3 Customer Segments */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {segments.map((seg, idx) => {
            const Icon = segmentIcons[idx] || Layers;

            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-emerald-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-slate-400 block">Segment 0{idx + 1}</span>
                      <h4 className="text-sm font-bold text-white">{seg.title}</h4>
                    </div>
                  </div>

                  <div className="space-y-2 mt-3">
                    {seg.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                        <span className="leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-emerald-400">
                  {idx === 0 ? "Asosiy ARR drayveri" : idx === 1 ? "B2G Barqarorlik" : "Fermerlar ommaviyligi"}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slide7MarketSize;
