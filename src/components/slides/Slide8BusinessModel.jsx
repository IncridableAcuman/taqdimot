import React, { useState } from 'react';
import { Sliders, DollarSign, CloudSync, ShieldAlert, Radio, FileSpreadsheet, ArrowRight, Sparkles, Calculator, CheckCircle2 } from 'lucide-react';

export const Slide8BusinessModel = ({ data, onNext }) => {
  const [hectares, setHectares] = useState(100);

  // Dynamic ROI calculation
  const saasRate = 3.0; // $3/ha
  const annualSub = hectares * saasRate;
  const waterSavedM3 = hectares * 4500; // ~4500 m3 per ha saved on average
  const netBenefit = hectares * 75; // ~$75 net gain per ha
  const roiMultiplier = Math.round((netBenefit / Math.max(annualSub, 1)));

  const streamIcons = [CloudSync, ShieldAlert, Radio, FileSpreadsheet];

  return (
    <div className="relative min-h-full flex flex-col justify-center px-4 md:px-12 py-8 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
              8-SLAYD: MONETIZATSIYA VA BIZNES MODEL
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              BIZ QANDAY VA <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">QAYERDAN DAROMAD OLAMIZ?</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-1 max-w-3xl">
              Ko'p kanalli va barqaror takroriy SaaS daromadi: mijoz har $1 sarflaganiga $20 dan ortiq aniq iqtisodiy foyda oladi.
            </p>
          </div>

          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
          >
            9-Slayd: Natijalar & ROI <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 Revenue Streams Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {data.revenueStreams.map((stream, idx) => {
            const Icon = streamIcons[idx] || CloudSync;

            return (
              <div
                key={stream.id}
                className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-emerald-400 w-fit mb-3">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="text-[10px] font-mono uppercase text-slate-400 block">
                    {stream.target}
                  </span>
                  <h3 className="text-sm font-bold text-white mb-1.5">
                    {stream.title}
                  </h3>

                  <div className="text-base font-black text-emerald-400 font-mono mb-2">
                    {stream.price}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-2">
                    {stream.example}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-800/80 text-[11px] font-mono text-cyan-300">
                  {stream.roiHighlight}
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Dynamic ROI Calculator */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900 border border-emerald-500/40 backdrop-blur-md">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800 mb-4">
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-emerald-400" />
              <h4 className="text-base font-bold text-white">
                Interaktiv ROI & Tejamkorlik Kalkulyatori (Mijoz Uchun Foyda)
              </h4>
            </div>
            <span className="text-xs font-mono text-slate-400">
              Surib sinab ko'ring (50 – 10,000 gektar)
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Slider Input */}
            <div className="lg:col-span-5 space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-300 font-medium">Ekin Maydoni Hajmi:</span>
                <span className="text-xl font-black text-emerald-400 font-mono">
                  {hectares.toLocaleString()} gektar
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="10000"
                step="50"
                value={hectares}
                onChange={(e) => setHectares(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-500">
                <span>50 ga (Kichik fermer)</span>
                <span>1,000 ga (O'rta xo'jalik)</span>
                <span>10,000 ga (Klaster)</span>
              </div>
            </div>

            {/* Calculated Results Grid */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="text-[10px] text-slate-400 font-mono block">Yillik SaaS To'lov</span>
                <span className="text-base font-black text-white font-mono">
                  ${annualSub.toLocaleString()}
                </span>
                <span className="text-[10px] text-slate-500 block font-mono">~$3 / ga / yil</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="text-[10px] text-slate-400 font-mono block">Tejalgan Suv</span>
                <span className="text-base font-black text-cyan-400 font-mono">
                  {(waterSavedM3 / 1000).toLocaleString()} ming m³
                </span>
                <span className="text-[10px] text-slate-500 block font-mono">~4,500 m³/ga</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="text-[10px] text-slate-400 font-mono block">Kutilgan Sof Foyda</span>
                <span className="text-base font-black text-emerald-400 font-mono">
                  ${netBenefit.toLocaleString()}
                </span>
                <span className="text-[10px] text-slate-500 block font-mono">Hosil + Resurs</span>
              </div>

              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40">
                <span className="text-[10px] text-emerald-400 font-mono block font-bold">Investitsiya Qaytimi</span>
                <span className="text-base font-black text-emerald-300 font-mono">
                  1 ga {roiMultiplier}
                </span>
                <span className="text-[10px] text-emerald-400 block font-mono">1 mavsumda (4 oy)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide8BusinessModel;
