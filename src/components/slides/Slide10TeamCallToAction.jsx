import React from 'react';
import confetti from 'canvas-confetti';
import { Users, DollarSign, CheckCircle2, ArrowRight, Sparkles, Phone, Mail, Send, ExternalLink, HelpCircle, FileText, Code, Compass } from 'lucide-react';

export const Slide10TeamCallToAction = ({ data, onOpenQA, onOpenNotes }) => {
  const handleCelebrate = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const budget = data.budgetBreakdown;
  const team = data.teamMembers;
  const contacts = data.contacts;

  const teamIcons = [Code, Compass, Sparkles, Users];

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
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              10-SLAYD: JAMOA VA HAMKORLIK TAKLIFI
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              JAMOA, RESURSLAR VA <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">INVESTITSIYA CHORLOVI</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-1 max-w-3xl">
              Dasturiy ta'minot 100% tayyor: Yangiariq tumani 50 ta fermerida dala pilotini ishga tushirish uchun $55,000 talab etiladi.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCelebrate}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/25 hover:from-emerald-400 hover:to-teal-400 transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              🎉 Hamkorlikni Qo'llash
            </button>
            <button
              onClick={onOpenQA}
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 font-bold text-xs hover:bg-cyan-900/40 transition-colors cursor-pointer"
            >
              <HelpCircle className="w-4 h-4" />
              Hakamlar Savollari
            </button>
          </div>
        </div>

        {/* 2-Column Split: Budget & Team */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5 items-stretch">
          {/* Left Column: Budget Allocation ($55,000) */}
          <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-900/90 border border-emerald-500/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
                <div>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block">
                    Boshlang'ich Dala Piloti Ehtiyoji
                  </span>
                  <h3 className="text-2xl font-black text-white font-mono">
                    {data.totalRequired}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-slate-400 block">Qamrov</span>
                  <span className="text-xs font-semibold text-cyan-300">50 fermer / 4 kanal</span>
                </div>
              </div>

              {/* Progress bar segments */}
              <div className="w-full h-3 rounded-full bg-slate-950 flex overflow-hidden border border-slate-800 mb-3">
                <div style={{ width: '40%' }} className="bg-emerald-500" title="IoT Uskunalar 40%" />
                <div style={{ width: '25%' }} className="bg-cyan-500" title="Kalibrlash 25%" />
                <div style={{ width: '20%' }} className="bg-blue-500" title="Treninglar 20%" />
                <div style={{ width: '15%' }} className="bg-purple-500" title="Server & Xavfsizlik 15%" />
              </div>

              {/* Breakdown list */}
              <div className="space-y-2.5">
                {budget.map((b, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
                    <div className="flex justify-between items-center text-xs mb-1">
                      <span className="font-bold text-white flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${idx === 0 ? 'bg-emerald-500' : idx === 1 ? 'bg-cyan-500' : idx === 2 ? 'bg-blue-500' : 'bg-purple-500'}`} />
                        {b.title}
                      </span>
                      <span className="font-mono text-emerald-400 font-bold">{b.amount} ({b.pct}%)</span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-tight">
                      {b.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Barcha xarajatlar smetasi hisoblangan</span>
              <span className="text-emerald-400 font-bold">100% Shaffof</span>
            </div>
          </div>

          {/* Right Column: 4 Team Members Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {team.map((member, idx) => {
              const Icon = teamIcons[idx] || Users;

              return (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-emerald-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-white">{member.role}</h4>
                        <span className="text-[11px] text-emerald-400 font-mono">{member.name}</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {member.desc}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-800/60 text-[10px] font-mono text-slate-400">
                    Mas'ul: Asosiy yo'nalish bo'yicha ekspertiza
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact & Pitch Deck Call to Action Footer */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-cyan-950/50 border border-emerald-500/30 flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-0.5">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block">
              Yangiariq Aqua AI — Hamkorlikka Tayyormiz
            </span>
            <p className="text-xs sm:text-sm text-slate-200">
              Davlat innovatsion grantlari, agrar klasterlar va strategik investorlar bilan birgalikda suvni tejaymiz!
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <a
              href="https://aqua.yangiariq.uz"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
              aqua.yangiariq.uz
            </a>
            <a
              href="mailto:contact@agronexsus.uz"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              contact@agronexsus.uz
            </a>
            <a
              href="https://t.me/agronexsus_aqua"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-700/60 text-cyan-300 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              @agronexsus_aqua
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide10TeamCallToAction;
