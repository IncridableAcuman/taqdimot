import React, { useState, useEffect } from 'react';
import {
  Droplets,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Volume2,
  HelpCircle,
  Grid,
  Laptop,
  ScrollText,
  Sparkles
} from 'lucide-react';

export const Navigation = ({
  currentSlideIndex,
  totalSlides,
  slides,
  onPrev,
  onNext,
  onGoToSlide,
  viewMode,
  onToggleViewMode,
  onOpenNotes,
  onOpenQA,
  onOpenGrid
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const currentSlide = slides[currentSlideIndex];
  const progressPercent = ((currentSlideIndex + 1) / totalSlides) * 100;

  return (
    <>
      {/* Top Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 px-4 md:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 p-0.5 shadow-md shadow-emerald-500/20 flex items-center justify-center">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Droplets className="w-4 h-4 text-emerald-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-black text-white tracking-wide">
                  YANGIARIQ <span className="text-emerald-400">AQUA AI</span>
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 hidden sm:inline-block">
                  PITCH DECK
                </span>
              </div>
              <span className="text-[11px] text-slate-400 block -mt-0.5 font-mono truncate max-w-[200px] sm:max-w-xs">
                {currentSlide ? `${currentSlide.id}-slayd: ${currentSlide.title}` : ''}
              </span>
            </div>
          </div>

          {/* Action Tools */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* View Mode Toggle */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-0.5 flex items-center">
              <button
                onClick={() => onToggleViewMode('slide')}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  viewMode === 'slide'
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Slayd rejimi (birma-bir)"
              >
                <Laptop className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Slayd</span>
              </button>
              <button
                onClick={() => onToggleViewMode('website')}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  viewMode === 'website'
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Veb-sayt rejimi (barcha bo'limlar ketma-ket)"
              >
                <ScrollText className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Sayt</span>
              </button>
            </div>

            {/* Grid Overview button */}
            <button
              onClick={onOpenGrid}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Mundarija (Grid - 'G')"
            >
              <Grid className="w-4 h-4" />
            </button>

            {/* Presenter Notes button */}
            <button
              onClick={onOpenNotes}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer flex items-center gap-1.5"
              title="Spiker Nutqi ('S')"
            >
              <Volume2 className="w-4 h-4" />
              <span className="text-xs font-mono font-bold hidden lg:inline">Spiker</span>
            </button>

            {/* Judge Q&A button */}
            <button
              onClick={onOpenQA}
              className="p-2 rounded-xl bg-cyan-950/40 border border-cyan-800/50 hover:bg-cyan-900/40 text-cyan-400 transition-colors cursor-pointer flex items-center gap-1.5"
              title="Hakamlar Savollari ('Q')"
            >
              <HelpCircle className="w-4 h-4" />
              <span className="text-xs font-mono font-bold hidden lg:inline">Q&A</span>
            </button>

            {/* Fullscreen button */}
            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title={isFullscreen ? "To'liq ekrandan chiqish ('F')" : "To'liq ekran ('F')"}
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Progress Bar under header */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-slate-800/80">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </header>

      {/* Bottom Floating Control Dock (Visible in Slide Mode) */}
      {viewMode === 'slide' && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-slate-950/85 backdrop-blur-md border border-slate-800/80 px-4 py-2 rounded-2xl shadow-2xl flex items-center gap-3">
          {/* Previous Button */}
          <button
            onClick={onPrev}
            disabled={currentSlideIndex === 0}
            className={`p-2 rounded-xl transition-colors cursor-pointer ${
              currentSlideIndex === 0
                ? 'text-slate-600 cursor-not-allowed'
                : 'text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
            title="Oldingi slayd (←)"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Slide Indicator */}
          <div className="flex items-center gap-2 px-2 font-mono text-xs">
            <span className="font-bold text-white">
              {(currentSlideIndex + 1).toString().padStart(2, '0')}
            </span>
            <span className="text-slate-500">/</span>
            <span className="text-slate-400 font-bold">
              {totalSlides.toString().padStart(2, '0')}
            </span>
          </div>

          {/* Next Button */}
          <button
            onClick={onNext}
            disabled={currentSlideIndex === totalSlides - 1}
            className={`p-2 rounded-xl transition-colors cursor-pointer ${
              currentSlideIndex === totalSlides - 1
                ? 'text-slate-600 cursor-not-allowed'
                : 'bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 shadow-md shadow-emerald-500/20'
            }`}
            title="Keyingi slayd (→ yoki Bo'sh joy)"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Keyboard tip hint */}
          <div className="hidden sm:flex items-center gap-1.5 pl-2 border-l border-slate-800 text-[11px] text-slate-400 font-mono">
            <span>Klavishlar: <strong>←</strong> / <strong>→</strong></span>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
