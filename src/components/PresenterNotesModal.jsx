import React, { useState, useEffect } from 'react';
import { X, Play, Pause, RotateCcw, Clock, Volume2, Eye, ChevronRight } from 'lucide-react';

export const PresenterNotesModal = ({ isOpen, onClose, currentSlide, totalSlides, onGoToSlide }) => {
  const [seconds, setSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  if (!isOpen || !currentSlide) return null;

  const formatTime = (totalSec) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-emerald-500/40 w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
              <Volume2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-emerald-400 tracking-wider block">
                Taqdimotchi Boshqaruv Paneli
              </span>
              <h3 className="text-base font-bold text-white">
                Spiker Nutqi & Slayd Eslatmalari ({currentSlide.id} / {totalSlides})
              </h3>
            </div>
          </div>

          {/* Stopwatch & Close */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-white font-bold">{formatTime(seconds)}</span>
              <button
                onClick={() => setIsTimerRunning(!isTimerRunning)}
                className="text-slate-400 hover:text-emerald-400 cursor-pointer ml-1"
                title={isTimerRunning ? "To'xtatish" : "Boshlash"}
              >
                {isTimerRunning ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
              </button>
              <button
                onClick={() => { setSeconds(0); setIsTimerRunning(false); }}
                className="text-slate-400 hover:text-slate-200 cursor-pointer"
                title="Qayta o'rnatish"
              >
                <RotateCcw className="w-3 h-3" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Current Slide Info */}
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono text-slate-400 block uppercase">Joriy Slayd</span>
              <h4 className="text-sm font-bold text-white">{currentSlide.title}</h4>
            </div>
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 font-bold">
              #{currentSlide.id}
            </span>
          </div>

          {/* Speaker Notes text */}
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <Volume2 className="w-4 h-4 text-emerald-400" />
              Spiker Nutqi (So'zlash Uchun Matn):
            </span>
            <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 text-slate-200 text-sm sm:text-base leading-relaxed italic font-serif">
              "{currentSlide.speakerNotes}"
            </div>
          </div>

          {/* Visual Design Tips */}
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
              <Eye className="w-4 h-4 text-cyan-400" />
              Vizual Dizayn Tavsiyasi:
            </span>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 text-xs sm:text-sm leading-relaxed">
              {currentSlide.visualTip}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>Qisqa klavish: <strong>S</strong> (Eslatmalarni yopish)</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
          >
            Tushundim, davom etish
          </button>
        </div>
      </div>
    </div>
  );
};

export default PresenterNotesModal;
