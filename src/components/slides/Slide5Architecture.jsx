import React, { useState, useEffect } from 'react';
import { Layers, MapPin, BookOpenCheck, AlertTriangle, KeyRound, ArrowRight, Play, Pause, RotateCcw, CheckCircle2, ChevronRight } from 'lucide-react';

export const Slide5Architecture = ({ data, onNext }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const steps = data.chainSteps;

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length);
      }, 2500);
    }
    return () => clearInterval(timer);
  }, [isPlaying, steps.length]);

  const activeStepData = steps[currentStep];

  const moduleIcons = [MapPin, BookOpenCheck, AlertTriangle, KeyRound];

  return (
    <div className="relative min-h-full flex flex-col justify-center px-4 md:px-12 py-8 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              5-SLAYD: ARXITEKTURA & HARAKAT ZANJIRI
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              PLATFORMA MODULLARI VA <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">7 BOSQICHLI ZANJIR</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-1 max-w-3xl">
              Faqat hisobot ko'rsatuvchi monitor emas, balki anomaliyani aniqlashdan tortib sensor orqali tasdiqlashgacha bo'lgan yopiq zanjir.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 font-mono transition-colors cursor-pointer"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
              {isPlaying ? "Pauza" : "Avto-O'ynatish"}
            </button>
            <button
              onClick={() => { setCurrentStep(0); setIsPlaying(false); }}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
              title="Qayta boshlash"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onNext}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
            >
              6-Slayd: Roadmap <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 7-Step Interactive Chevron Pipeline */}
        <div className="mb-6 p-4 rounded-2xl bg-slate-900/90 border border-emerald-500/30 backdrop-blur-md">
          <div className="flex items-center justify-between mb-3 text-xs font-mono">
            <span className="text-emerald-400 font-bold uppercase tracking-wider">
              7 Bosqichli Amaliyot Zanjiri (Action Center Pipeline)
            </span>
            <span className="text-slate-400">
              Bosqich {currentStep + 1} / 7
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {steps.map((st, idx) => {
              const isCurrent = currentStep === idx;
              const isPast = idx < currentStep;

              return (
                <button
                  key={st.step}
                  onClick={() => { setCurrentStep(idx); setIsPlaying(false); }}
                  className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer relative ${
                    isCurrent
                      ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-lg shadow-emerald-500/30 scale-105'
                      : isPast
                      ? 'bg-emerald-950/40 text-emerald-300 border-emerald-800/60'
                      : 'bg-slate-950/70 text-slate-400 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono font-bold mb-1">
                    <span>{st.step}</span>
                    {isPast && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
                    {isCurrent && <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping" />}
                  </div>
                  <div className={`text-xs font-bold leading-tight line-clamp-1 ${isCurrent ? 'text-slate-950' : 'text-slate-200'}`}>
                    {st.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Real-time Explanation Banner */}
          <div className="mt-4 p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-emerald-950 text-emerald-400 font-mono text-xs font-bold border border-emerald-800">
                {activeStepData.step} — {activeStepData.actor}
              </span>
              <span className="text-sm font-bold text-white">
                {activeStepData.title}:
              </span>
              <span className="text-xs text-slate-300">
                {activeStepData.desc}
              </span>
            </div>
            <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
              <span>Yopiq avtomatlashgan zanjir</span>
            </div>
          </div>
        </div>

        {/* 4 Core Functional Modules Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.modules.map((mod, idx) => {
            const Icon = moduleIcons[idx] || MapPin;

            return (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-emerald-400 w-fit mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5">
                    {mod.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {mod.desc}
                  </p>
                </div>

                <div className="mt-4 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Modul #{idx + 1}</span>
                  <span className="text-emerald-400">Integratsiyalashgan</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slide5Architecture;
