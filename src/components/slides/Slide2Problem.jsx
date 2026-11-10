import React, { useState } from 'react';
import { AlertTriangle, Droplets, Clock, TrendingDown, ZapOff, ArrowRight, ShieldAlert, Sparkles, ChevronRight } from 'lucide-react';

export const Slide2Problem = ({ data, onNext }) => {
  const [activeTab, setActiveTab] = useState(0);

  const iconComponents = [Droplets, Clock, TrendingDown, ZapOff];

  return (
    <div className="relative min-h-full flex flex-col justify-center px-4 md:px-12 py-8 overflow-hidden">
      {/* Background glow with reddish/amber tone to signal problems */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Slide Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
              2-SLAYD: TIZIMLI MUAMMO VA XATARLAR
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              SUG'ORISH TIZIMIDAGI <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-orange-400">4 TA ASOSIY MUAMMO</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-1.5 max-w-3xl">
              Nega an'anaviy sug'orish usullari fermerni ham, davlat suv xo'jaligini ham katta moliyaviy va ekologik zarar keltirmoqda?
            </p>
          </div>

          {/* Quick Stat Pill */}
          <div className="px-4 py-2.5 rounded-xl bg-rose-950/40 border border-rose-700/50 text-right">
            <span className="text-xs text-rose-300 block font-mono">Yillik Hosil Yo'qotilishi</span>
            <span className="text-xl font-black text-rose-400 font-mono">-20% gacha boy beriladi</span>
          </div>
        </div>

        {/* 4 Systemic Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {data.problems.map((prob, idx) => {
            const Icon = iconComponents[idx] || Droplets;
            const isSelected = activeTab === idx;

            return (
              <div
                key={prob.id}
                onClick={() => setActiveTab(idx)}
                className={`cursor-pointer group p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                  isSelected
                    ? 'bg-slate-900 border-rose-500/80 shadow-lg shadow-rose-950/50 scale-[1.02]'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                }`}
              >
                {/* Top Badge & Number */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl bg-slate-950 border border-slate-800 ${prob.accent}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-slate-300">
                    {prob.number}
                  </span>
                </div>

                <div className="mb-3">
                  <span className={`inline-block px-2.5 py-1 rounded-md text-[11px] font-mono font-bold border ${prob.color} mb-2`}>
                    {prob.lossBadge}
                  </span>
                  <h3 className="text-base font-bold text-white group-hover:text-rose-200 transition-colors leading-snug">
                    {prob.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {prob.desc}
                </p>

                {isSelected && (
                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-rose-400 font-mono">
                    <span>Tafsilot tanlandi</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Deep Dive Problem Analysis & Yangiariq Reality Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-rose-950/30 to-slate-900 border border-rose-500/30 backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-mono uppercase tracking-wider">
                <ShieldAlert className="w-4 h-4" />
                <span>Yangiariq Tumani Realligi va Ekotizimga Ta'siri</span>
              </div>
              <h4 className="text-lg font-bold text-white">
                Ochiq tuproq o'zanlar + Qo'rquv sababli 40% ko'p bostirib sug'orish = Sho'r sizot suvlari ko'tarilishi
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Yangiariq tumanidagi sug'orish kanallari zich, ammo aksariyati tuproq o'zanli bo'lgani sababli suvning 40% sizib va bug'lanib ketadi. Fermer suv navbatidan qolib ketishdan xavotirlanib, dalaga me'yoridan 40% ortiq suv bostiradi. Natijada yer osti minerallashgan sho'r suvi ekin ildiziga chiqadi va tuproq degradatsiyaga uchraydi.
              </p>
            </div>

            <div className="lg:col-span-4 bg-slate-950/80 p-4 rounded-xl border border-slate-800 flex flex-col justify-between space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">Magistral Yo'qotish:</span>
                <span className="text-rose-400 font-bold font-mono">35% – 45%</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-rose-500 h-full w-[42%]" />
              </div>

              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">Ortiqcha Bostirish:</span>
                <span className="text-amber-400 font-bold font-mono">+30% – +40%</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-full w-[38%]" />
              </div>

              <div className="pt-2 border-t border-slate-800 flex justify-between items-center">
                <span className="text-[11px] text-slate-400">Yechim sari:</span>
                <button
                  onClick={onNext}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 cursor-pointer"
                >
                  3-Slayd: Yechim <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide2Problem;
