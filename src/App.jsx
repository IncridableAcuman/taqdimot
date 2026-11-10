import React, { useState, useEffect, useCallback } from 'react';
import { slidesData } from './data/slidesData';
import Navigation from './components/Navigation';
import PresenterNotesModal from './components/PresenterNotesModal';
import JudgeQAModal from './components/JudgeQAModal';
import SlideOverviewDrawer from './components/SlideOverviewDrawer';

// Slide Components
import Slide1Hero from './components/slides/Slide1Hero';
import Slide2Problem from './components/slides/Slide2Problem';
import Slide3Solution from './components/slides/Slide3Solution';
import Slide4TechAdvantage from './components/slides/Slide4TechAdvantage';
import Slide5Architecture from './components/slides/Slide5Architecture';
import Slide6Roadmap from './components/slides/Slide6Roadmap';
import Slide7MarketSize from './components/slides/Slide7MarketSize';
import Slide8BusinessModel from './components/slides/Slide8BusinessModel';
import Slide9ImpactROI from './components/slides/Slide9ImpactROI';
import Slide10TeamCallToAction from './components/slides/Slide10TeamCallToAction';

export function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [viewMode, setViewMode] = useState('slide'); // 'slide' | 'website'
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isQAOpen, setIsQAOpen] = useState(false);
  const [isGridOpen, setIsGridOpen] = useState(false);

  const totalSlides = slidesData.length;

  const handleNext = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, totalSlides - 1));
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const handleGoToSlide = useCallback((index) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlideIndex(index);
    }
  }, [totalSlides]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't intercept if an input is focused
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key.toLowerCase() === 's') {
        setIsNotesOpen((prev) => !prev);
      } else if (e.key.toLowerCase() === 'q') {
        setIsQAOpen((prev) => !prev);
      } else if (e.key.toLowerCase() === 'g') {
        setIsGridOpen((prev) => !prev);
      } else if (e.key.toLowerCase() === 'f') {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {});
        } else {
          document.exitFullscreen().catch(() => {});
        }
      } else if (e.key.toLowerCase() === 'm') {
        setViewMode((prev) => (prev === 'slide' ? 'website' : 'slide'));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Current Slide Object
  const currentSlideData = slidesData[currentSlideIndex];

  // Map slide component by index
  const renderSlideComponent = (index) => {
    const data = slidesData[index];
    switch (index) {
      case 0:
        return (
          <Slide1Hero
            data={data}
            onNext={handleNext}
            onOpenNotes={() => setIsNotesOpen(true)}
            onOpenQA={() => setIsQAOpen(true)}
          />
        );
      case 1:
        return <Slide2Problem data={data} onNext={handleNext} />;
      case 2:
        return <Slide3Solution data={data} onNext={handleNext} />;
      case 3:
        return <Slide4TechAdvantage data={data} onNext={handleNext} />;
      case 4:
        return <Slide5Architecture data={data} onNext={handleNext} />;
      case 5:
        return <Slide6Roadmap data={data} onNext={handleNext} />;
      case 6:
        return <Slide7MarketSize data={data} onNext={handleNext} />;
      case 7:
        return <Slide8BusinessModel data={data} onNext={handleNext} />;
      case 8:
        return <Slide9ImpactROI data={data} onNext={handleNext} />;
      case 9:
        return (
          <Slide10TeamCallToAction
            data={data}
            onOpenQA={() => setIsQAOpen(true)}
            onOpenNotes={() => setIsNotesOpen(true)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-emerald-500 selection:text-slate-950 font-sans">
      {/* Top Navbar */}
      <Navigation
        currentSlideIndex={currentSlideIndex}
        totalSlides={totalSlides}
        slides={slidesData}
        onPrev={handlePrev}
        onNext={handleNext}
        onGoToSlide={handleGoToSlide}
        viewMode={viewMode}
        onToggleViewMode={setViewMode}
        onOpenNotes={() => setIsNotesOpen(true)}
        onOpenQA={() => setIsQAOpen(true)}
        onOpenGrid={() => setIsGridOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 pt-16 pb-16">
        {viewMode === 'slide' ? (
          /* Presentation Mode: 1 Slide at a time */
          <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center transition-opacity duration-300">
            {renderSlideComponent(currentSlideIndex)}
          </div>
        ) : (
          /* Website Mode: All 10 slides stacked sequentially as a rich landing presentation */
          <div className="max-w-7xl mx-auto space-y-16 px-4 md:px-8 py-8">
            {slidesData.map((slide, idx) => (
              <section
                key={slide.id}
                id={`slide-${slide.id}`}
                className="rounded-3xl bg-slate-900/40 border border-slate-800/80 p-4 md:p-8 backdrop-blur-sm relative overflow-hidden"
              >
                <div className="absolute top-4 right-6 text-xs font-mono text-slate-500">
                  {slide.id} / 10
                </div>
                {renderSlideComponent(idx)}
              </section>
            ))}
          </div>
        )}
      </main>

      {/* Modals & Drawers */}
      <PresenterNotesModal
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
        currentSlide={currentSlideData}
        totalSlides={totalSlides}
        onGoToSlide={handleGoToSlide}
      />

      <JudgeQAModal
        isOpen={isQAOpen}
        onClose={() => setIsQAOpen(false)}
      />

      <SlideOverviewDrawer
        isOpen={isGridOpen}
        onClose={() => setIsGridOpen(false)}
        currentSlideIndex={currentSlideIndex}
        onSelectSlide={handleGoToSlide}
      />
    </div>
  );
}

export default App;
