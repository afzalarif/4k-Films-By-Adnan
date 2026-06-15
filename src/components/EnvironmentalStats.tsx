/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TrendingDown, AlertTriangle, Globe, Quote, ChevronLeft, ChevronRight, HelpCircle, ChevronDown, Sparkles } from "lucide-react";
import { EnvStatsList, NatureQuotesList } from "../data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingDown,
  AlertTriangle,
  Globe
};

export default function EnvironmentalStats() {
  const [activeQuoteIndex, setActiveQuoteIndex] = useState(0);
  const [expandedStatId, setExpandedStatId] = useState<string | null>(null);

  // Quote Carousel Auto-Rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveQuoteIndex((prev) => (prev + 1) % NatureQuotesList.length);
    }, 8000); // 8-second rotation
    return () => clearInterval(interval);
  }, []);

  const handlePrevQuote = () => {
    setActiveQuoteIndex((prev) => (prev - 1 + NatureQuotesList.length) % NatureQuotesList.length);
  };

  const handleNextQuote = () => {
    setActiveQuoteIndex((prev) => (prev + 1) % NatureQuotesList.length);
  };

  const toggleStatExpand = (id: string) => {
    setExpandedStatId(expandedStatId === id ? null : id);
  };

  const activeQuote = NatureQuotesList[activeQuoteIndex];

  return (
    <section id="advocacy" className="py-24 bg-stone-900 text-stone-100 relative overflow-hidden">
      {/* Dynamic graphic rings */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-950/40 via-stone-900 to-stone-950 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-20">
        
        {/* Sections title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-emerald-950/60 text-emerald-300 border border-emerald-900/40 mb-4">
            <Globe className="w-3.5 h-3.5" />
            Ecological Reality
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-sans text-stone-50 tracking-tight leading-tight mb-4">
            The Biomes We Fight For
          </h2>
          <p className="text-stone-400 md:text-lg">
            Human footprint has pushed our biosphere into historical fragile threshold levels. Our cinematography is built to trigger direct conservation financing.
          </p>
        </div>

        {/* Stats Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {EnvStatsList.map((stat) => {
            const Icon = iconMap[stat.iconName] || HelpCircle;
            const isExpanded = expandedStatId === stat.id;

            return (
              <div
                key={stat.id}
                id={`stat-card-${stat.id}`}
                onClick={() => toggleStatExpand(stat.id)}
                className={`group cursor-pointer p-8 rounded-2xl border transition-all duration-350 self-start ${
                  isExpanded
                    ? "bg-gradient-to-b from-stone-950 to-stone-900 border-emerald-500/50 shadow-lg shadow-emerald-950/20"
                    : "bg-stone-950/65 border-stone-850 hover:border-emerald-900 hover:bg-stone-950"
                }`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-stone-900 text-emerald-450 border border-stone-800">
                    <Icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  
                  {/* Dynamic hint button */}
                  <span className={`text-[11px] font-semibold text-emerald-400 bg-emerald-950/50 border border-emerald-900 px-2.5 py-0.5 rounded-full flex items-center gap-1 transition-all ${
                    isExpanded ? "rotate-180 bg-emerald-900 text-white" : ""
                  }`}>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="block font-mono text-3xl sm:text-4xl font-extrabold text-stone-50 tracking-tight">
                    {stat.value}
                  </span>
                  <h4 className="font-bold text-sm text-stone-300 font-sans tracking-wide uppercase">
                    {stat.label}
                  </h4>
                  <p className="text-xs text-stone-400 leading-relaxed pt-2">
                    {stat.description}
                  </p>
                </div>

                {/* Collapsible expandable segment */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden border-t border-stone-800/60 pt-4 text-xs text-stone-400 leading-relaxed"
                    >
                      <span className="inline-flex gap-1 items-center font-bold text-emerald-400 text-[10px] uppercase tracking-wider mb-2">
                        <Sparkles className="w-3 h-3" />
                        Our Restorative Plan:
                      </span>
                      <p>{stat.details}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Inspirational Nature Quote Block with Carousel layout */}
        <div className="relative max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-emerald-950/20 via-stone-950/50 to-emerald-950/20 border border-stone-800/80 p-8 md:p-12 overflow-hidden shadow-inner">
          <div className="absolute right-8 top-8 opacity-5 text-emerald-500">
            <Quote className="w-32 h-32" />
          </div>

          <div className="relative z-10 text-center space-y-6">
            <div className="mx-auto w-10 h-10 rounded-full bg-emerald-950 text-emerald-400 flex items-center justify-center border border-emerald-900/50">
              <Quote className="w-4 h-4" />
            </div>

            {/* Dynamic quote string container with subtle heights */}
            <div className="min-h-[100px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeQuoteIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  <p className="text-xl md:text-3xl font-light font-playfair italic leading-relaxed text-stone-100 max-w-3xl mx-auto">
                    "{activeQuote.text}"
                  </p>
                  <cite className="block text-emerald-450 dark:text-emerald-450/90 font-mono text-xs uppercase tracking-widest font-normal not-italic">
                    — {activeQuote.author}
                  </cite>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel navigation nodes */}
            <div className="flex items-center justify-center gap-6 pt-4">
              <button
                id="quote-prev-btn"
                onClick={handlePrevQuote}
                className="w-10 h-10 rounded-full border border-stone-800 hover:border-emerald-600 hover:bg-emerald-950/30 text-stone-400 hover:text-emerald-400 transition-colors flex items-center justify-center"
                aria-label="Previous Quote"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex gap-2">
                {NatureQuotesList.map((_, idx) => (
                  <button
                    key={idx}
                    id={`quote-dot-btn-${idx}`}
                    onClick={() => setActiveQuoteIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeQuoteIndex === idx ? "bg-emerald-500 w-4" : "bg-stone-700 hover:bg-stone-600"
                    }`}
                    aria-label={`Go to quote ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                id="quote-next-btn"
                onClick={handleNextQuote}
                className="w-10 h-10 rounded-full border border-stone-800 hover:border-emerald-600 hover:bg-emerald-950/30 text-stone-400 hover:text-emerald-400 transition-colors flex items-center justify-center"
                aria-label="Next Quote"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
