import React, { useState } from 'react';
import { TrendingUp, Droplets, Zap, Clock, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const Slide9ImpactROI = ({ data, onNext }) => {
  const [filterMode, setFilterMode] = useState('all');

  const kpis = data.kpis;
  const tableData = data.tableData;

  const kpiIcons = [Droplets, TrendingUp, Zap, Clock];

  return (
    <div className="relative min-h-full flex flex-col justify-center px-4 md:px-12 py-8 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              9-SLAYD: IQTISODIY VA EKOLOGIK FOYDA
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              KUTILAYOTGAN NATIJALAR VA <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">ANIQ METRIKALAR</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-1 max-w-3xl">
              Yangiariq tumani miqyosidagi yillik aniq o'lchanadigan yutuqlar: suv, energiya, hosildorlik va daromad sintezi.
            </p>
          </div>

          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
          >
            10-Slayd: Jamoa & Resurslar <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 Large KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 mb-5">
          {kpis.map((kpi, idx) => {
            const Icon = kpiIcons[idx] || Droplets;

            return (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-slate-400">KPI #{idx + 1}</span>
                  <div className={`p-2 rounded-lg bg-slate-950 ${kpi.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className={`text-2xl sm:text-3xl font-black font-mono ${kpi.color} mb-1`}>
                  {kpi.value}
                </div>

                <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5">
                  {kpi.label}
                </h4>

                <p className="text-[11px] text-slate-400 font-mono">
                  {kpi.sub}
                </p>
              </div>
            );
          })}
        </div>

        {/* Comparison Matrix Table */}
        <div className="rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-xl">
          <div className="px-5 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 bg-slate-950/60">
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              An'anaviy Usul vs Yangiariq Aqua AI Taqqoslama Matritsasi
            </span>
            <span className="text-xs font-mono text-emerald-400">
              Yangiariq Tumani Namunasi
            </span>
          </div>

          <div className="overflow-x-auto max-h-64 overflow-y-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/40 text-slate-400 font-mono uppercase text-[10px]">
                  <th className="py-2.5 px-4">Ko'rsatkich</th>
                  <th className="py-2.5 px-4 text-rose-400">An'anaviy Holat</th>
                  <th className="py-2.5 px-4 text-cyan-300">Yangiariq Aqua AI Bilan</th>
                  <th className="py-2.5 px-4 text-emerald-400 font-bold">Kutilayotgan Sof Foyda</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {tableData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-2.5 px-4 font-semibold text-slate-200 whitespace-nowrap">
                      {row.metric}
                    </td>
                    <td className="py-2.5 px-4 text-slate-400 font-mono">
                      {row.traditional}
                    </td>
                    <td className="py-2.5 px-4 text-cyan-200 font-mono">
                      {row.withAquaAI}
                    </td>
                    <td className="py-2.5 px-4 font-bold text-emerald-400 font-mono">
                      {row.benefit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Highlight Callout */}
          <div className="p-3 bg-emerald-950/30 border-t border-emerald-900/40 flex flex-wrap items-center justify-between text-xs text-slate-200 gap-2">
            <span>
              💡 <strong>100 gektarlik Yangiariq fermeri misolida:</strong> Dastur xarajat $300/yil ➔ Olingan qo'shimcha hosil va tejamkorlik: <strong>$6,000 – $9,000 sof foyda!</strong>
            </span>
            <span className="font-mono text-emerald-400 font-bold">
              O'zini oqlash: 1 Mavsum (4 oy)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide9ImpactROI;
