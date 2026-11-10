import React, { useState } from 'react';
import { Cpu, ShieldCheck, Eye, Server, ArrowRight, Sparkles, Check, Lock, AlertCircle, Layers } from 'lucide-react';

export const Slide4TechAdvantage = ({ data, onNext }) => {
  const [activeHighlight, setActiveHighlight] = useState(0);

  const icons = [Cpu, ShieldCheck, Lock, Eye, Server];

  return (
    <div className="relative min-h-full flex flex-col justify-center px-4 md:px-12 py-8 overflow-hidden">
      {/* Background ambient */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              4-SLAYD: ILMIY VA TEXNOLOGIK USTUNLIK
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              GIBRID AI VA <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">DETERMINISTIK XAVFSIZLIK</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-1.5 max-w-3xl">
              Nega bizning sun'iy intellekt tavsiyalariga agrar sohada 100% ishonish mumkin? "Qora quti" AI yo'q — qat'iy agronomik xavfsizlik filtri.
            </p>
          </div>

          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
          >
            5-Slayd: Arxitektura <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Visual Pipeline Banner: Sensor -> Weather -> Hybrid ML -> Safety ±5% -> Verified Output */}
        <div className="mb-6 p-4 rounded-2xl bg-slate-900/90 border border-emerald-500/30 backdrop-blur-md">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Agronomik Xavfsizlik Pipeline Konveyeri
            </span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
              Qat'iy Invariant: ±5.0% Cheklov
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 relative">
            {data.flow.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center relative overflow-hidden"
              >
                <div className="text-[10px] font-mono font-bold text-slate-400 mb-0.5">
                  QADAM 0{idx + 1}
                </div>
                <div className="text-xs font-bold text-white mb-1">
                  {item.step}
                </div>
                <div className="text-[10px] text-slate-300 font-mono">
                  {item.detail}
                </div>
                {idx === 3 && (
                  <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 5 Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.highlights.map((item, idx) => {
            const Icon = icons[idx] || Cpu;
            const isSelected = activeHighlight === idx;

            return (
              <div
                key={idx}
                onClick={() => setActiveHighlight(idx)}
                className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 border-emerald-400/80 shadow-lg shadow-emerald-950/60 ring-1 ring-emerald-400/50'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-emerald-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/80">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Standart #{idx + 1}</span>
                  <span className="text-emerald-400 font-semibold">Kafolatlangan</span>
                </div>
              </div>
            );
          })}

          {/* Sixth Card: Tech Stack Seal */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-emerald-950/40 to-slate-900 border border-emerald-500/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Texnologik Yadro Steki</span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Java 21 + Spring Boot 3 + PostGIS
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Tizim korporativ darajadagi barqaror arxitekturaga ega: mikro-servislar emas, balki monolit yadro tufayli qishloq sharoitida lokal serverda ham 100% mustaqil ishlaydi.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap gap-2 text-[10px] font-mono text-emerald-300">
              <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800">Java 21</span>
              <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800">PostgreSQL 16</span>
              <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800">PostGIS GIS</span>
              <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800">React 19</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide4TechAdvantage;
