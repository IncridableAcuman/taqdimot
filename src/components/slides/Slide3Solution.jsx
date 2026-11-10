import React, { useState } from 'react';
import { Smartphone, Gauge, Building2, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, MessageSquareQuote, Layers } from 'lucide-react';

export const Slide3Solution = ({ data, onNext }) => {
  const [selectedRoleIndex, setSelectedRoleIndex] = useState(0);

  const roles = data.userRoles;
  const currentRole = roles[selectedRoleIndex];

  return (
    <div className="relative min-h-full flex flex-col justify-center px-4 md:px-12 py-8 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              3-SLAYD: YAXLIT RAQAMLI YECHIM
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              AGRO-GIDROLOGIK <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">BOSHQARUV EKOTIZIMI</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-1.5 max-w-3xl">
              Manbadan dalagacha, datchikdan amaliy agrotexnik harakatgacha: Fermer, Dispetcher va Suv xo'jaligini yagona raqamli platformada birlashtirdik.
            </p>
          </div>

          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
          >
            4-Slayd: Texnologik Ustunlik <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3 Role Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
          {roles.map((r, idx) => {
            const isSelected = selectedRoleIndex === idx;
            const Icon = idx === 0 ? Smartphone : idx === 1 ? Gauge : Building2;

            return (
              <button
                key={r.id}
                onClick={() => setSelectedRoleIndex(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 flex items-center gap-3.5 cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? 'bg-slate-900 border-emerald-400/80 shadow-lg shadow-emerald-950/60 ring-1 ring-emerald-400/50'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                }`}
              >
                <div className={`p-3 rounded-xl ${isSelected ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-emerald-400'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                    {r.subtitle}
                  </span>
                  <h3 className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                    {r.title}
                  </h3>
                </div>
                {isSelected && (
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Role Interactive Mockup and Feature Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Feature Capabilities */}
          <div className="lg:col-span-6 p-6 rounded-3xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-950 text-emerald-400 border border-emerald-800">
                  {currentRole.badge}
                </span>
                <span className="text-xs text-slate-400 font-mono">Modul {selectedRoleIndex + 1} / 3</span>
              </div>

              <h3 className="text-xl font-black text-white mb-4">
                {currentRole.title} imkoniyatlari
              </h3>

              <div className="space-y-3">
                {currentRole.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Message / Recommendation Quote */}
            <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-cyan-950/50 border border-emerald-500/40 relative">
              <div className="flex items-start gap-3">
                <MessageSquareQuote className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block mb-1">
                    Haqiqiy Tizim Bildirishnomasi Misoli
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200 italic font-mono leading-relaxed">
                    {currentRole.mockupQuote}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Simulated UI Interface */}
          <div className="lg:col-span-6 p-6 rounded-3xl bg-slate-950 border border-emerald-500/30 flex flex-col justify-between relative overflow-hidden glow-emerald">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-xs font-mono text-slate-400 ml-2">
                  yangiariq.aqua.ai/{currentRole.id}-portal
                </span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800">
                LIVE DEMO STATE
              </span>
            </div>

            {/* Interactive Preview Content depending on role */}
            {selectedRoleIndex === 0 && (
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-white">14-Kontur (G'alla Maydoni)</span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                      Sug'orish Rejalashtirilgan
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                      <span className="text-[10px] text-slate-400 block">Tuproq Namligi</span>
                      <span className="text-base font-bold text-emerald-400 font-mono">68%</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                      <span className="text-[10px] text-slate-400 block">Tavsiya Hajm</span>
                      <span className="text-base font-bold text-cyan-400 font-mono">350 m³</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                      <span className="text-[10px] text-slate-400 block">Sho'rlanish (EC)</span>
                      <span className="text-base font-bold text-slate-200 font-mono">1.2 dS/m</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-white block">Svetofor Ko'rsatkichi</span>
                    <span className="text-[11px] text-slate-400">Fermer uchun sodda holat nazorati</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/50">
                      ✓
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-800 opacity-40 flex items-center justify-center text-xs">
                      !
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-800 opacity-40 flex items-center justify-center text-xs">
                      ✕
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedRoleIndex === 1 && (
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-white">Shovot-Yangiariq Magistral Kanali</span>
                    <span className="text-[11px] font-mono text-cyan-400">Post #4 (Oqim: 12.8 m³/s)</span>
                  </div>
                  <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-800">
                    <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-full w-[78%]" />
                  </div>
                  <div className="flex justify-between text-[11px] font-mono text-slate-400">
                    <span>O'tkazish Quvvati: 78%</span>
                    <span>Anomaliya Ehtimoli: 1.2% (Normal)</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-cyan-950/30 border border-cyan-800/40 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-xs text-cyan-200 font-mono">Suv Navbati: 8-sektor navbati tasdiqlandi</span>
                  </div>
                  <button className="px-2.5 py-1 rounded bg-cyan-500 text-slate-950 font-bold text-[11px] font-mono">
                    Audit Log
                  </button>
                </div>
              </div>
            )}

            {selectedRoleIndex === 2 && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-[10px] text-slate-400 font-mono uppercase">Tuman Limiti</span>
                    <div className="text-lg font-bold text-white font-mono">82% Ijro</div>
                    <span className="text-[10px] text-emerald-400 font-mono">Tejam: +1.4 mln m³</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-[10px] text-slate-400 font-mono uppercase">Audit Holati</span>
                    <div className="text-lg font-bold text-white font-mono">100% Shaffof</div>
                    <span className="text-[10px] text-cyan-400 font-mono">Inson omili yo'q</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
                  <span className="text-xs font-bold text-white block mb-1">Audit Ledger Xavfsizligi</span>
                  <p className="text-[11px] text-slate-300 font-mono leading-relaxed">
                    Har bir taqsimot harakati PostgreSQL audit jadvaliga vaqt tamg'asi bilan yoziladi. O'zgartirib bo'lmas shaffof hisobot.
                  </p>
                </div>
              </div>
            )}

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span>Markaziy PostGIS yadrosi</span>
              <span className="text-emerald-400">Barcha rollar sinxron</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide3Solution;
