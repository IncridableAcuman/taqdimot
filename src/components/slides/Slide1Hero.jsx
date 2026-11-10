import React from 'react';
import { Droplets, Cpu, MapPin, CheckCircle2, Sparkles, ArrowRight, ShieldCheck, Database, Layers } from 'lucide-react';

export const Slide1Hero = ({ data, onNext, onOpenNotes, onOpenQA }) => {
  return (
    <div className="relative min-h-full flex flex-col justify-center px-4 md:px-12 py-8 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            1-SLAYD: MUQOVA & HOOK
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-medium backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            AgriTech / Smart Water / AI Gidrologiya
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-300 text-xs">
            <MapPin className="w-3 h-3 text-emerald-400" />
            Yangiariq tumani, Xorazm viloyati
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Title & Mission */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 to-cyan-500 p-0.5 shadow-lg shadow-emerald-500/20 flex items-center justify-center">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                    <Droplets className="w-7 h-7 text-emerald-400" />
                  </div>
                </div>
                <span className="text-sm font-semibold tracking-widest text-emerald-400 uppercase font-mono">
                  AGRONEXSUS PLATFORMA
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                YANGIARIQ <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">AQUA AI</span>
              </h1>
              <p className="mt-3 text-lg sm:text-xl text-slate-300 font-light max-w-2xl leading-relaxed">
                Suv resurslarini adolatli taqsimlash va sug'orishni optimallashtirish bo'yicha sun'iy intellekt ekotizimi.
              </p>
            </div>

            {/* Mission Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-950/60 to-slate-900/80 border border-emerald-500/30 backdrop-blur-md glow-card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none" />
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-300 mt-1">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
                    Asosiy Missiya va Maqsad
                  </h3>
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                    Suv taqsimotidagi isrofgarchilikni bartaraf etish, tuproq ikkilamchi sho'rlanishini to'xtatish va ekin hosildorligini kafolatli <strong>+18% ga oshirish</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Tech Pills */}
            <div>
              <span className="text-xs text-slate-400 font-medium uppercase tracking-wider block mb-2.5">
                Asosiy Texnologik Poylavor:
              </span>
              <div className="flex flex-wrap gap-2">
                {data.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-slate-200 text-xs font-medium hover:border-emerald-500/50 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Tags & Action */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onNext}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-400 transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                Taqdimotni Boshlash (2-slayd)
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenNotes}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 hover:border-slate-600 text-slate-300 text-sm font-medium hover:text-white transition-all cursor-pointer"
              >
                🎙️ Spiker Eslatmalari
              </button>

              <button
                onClick={onOpenQA}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 text-sm font-medium hover:bg-cyan-900/40 transition-all cursor-pointer"
              >
                ❓ Hakamlar Q&A
              </button>
            </div>
          </div>

          {/* Right Column: High-tech System Snapshot & Metrics */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-emerald-500/30 backdrop-blur-xl shadow-2xl relative overflow-hidden glow-emerald">
              {/* Top Bar of Widget */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2">Yangiariq.GIS.Telemetry</span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                  ONLINE v1.0
                </span>
              </div>

              {/* 3D District Map Simulation Card */}
              <div className="relative h-44 rounded-2xl bg-gradient-to-br from-slate-950 via-emerald-950/30 to-slate-950 border border-slate-800 p-4 flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]" />
                
                <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-mono block">
                      Hududiy Pilot Sektori
                    </span>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-emerald-400" />
                      Yangiariq Tumani Kanallar Tarmog'i
                    </h4>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 font-mono block">Magistral Kanal</span>
                    <span className="text-xs font-semibold text-cyan-400">Shovot & Toshsoqa o'zanlari</span>
                  </div>
                </div>

                {/* Animated Hydro Flow simulation line */}
                <div className="relative z-10 space-y-2">
                  <div className="flex justify-between text-[11px] font-mono text-slate-300">
                    <span>Gidrologik Oqim Holati:</span>
                    <span className="text-emerald-400 font-bold">14.2 m³/sek (Stabil)</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 rounded-full w-4/5 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* 4 Ready Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                {data.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-emerald-500/40 transition-all"
                  >
                    <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300 font-mono">
                      {m.value}
                    </div>
                    <div className="text-xs font-semibold text-slate-200 mt-0.5 leading-snug">
                      {m.label}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1 font-mono">
                      {m.detail}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Developer Stamp */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span>Taqdimotchi: Loyiha Asoschisi</span>
                <span className="text-emerald-400 font-mono">100% Sinovdan O'tgan Yadro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide1Hero;
