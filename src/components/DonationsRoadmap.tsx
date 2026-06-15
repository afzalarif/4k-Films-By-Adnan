/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { CheckCircle2, CircleDot, Clock, Lock, ShieldCheck, PieChart, Landmark } from "lucide-react";
import { RoadmapStepsList } from "../data";

export default function DonationsRoadmap() {
  return (
    <section id="donations" className="py-24 bg-white dark:bg-stone-950 relative overflow-hidden">
      {/* Decorative gradient backdrops */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Explanatory and donation button */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-sky-100 dark:bg-sky-950/50 text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-sky-900/60">
                <Landmark className="w-3.5 h-3.5" />
                Transparency Initiative
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-sans text-stone-900 dark:text-stone-50 tracking-tight leading-none">
                Donations will be <br />
                <span className="bg-gradient-to-r from-emerald-600 to-sky-500 bg-clip-text text-transparent">available soon.</span>
              </h2>
            </div>

            <p className="text-stone-600 dark:text-stone-400 text-base leading-relaxed">
              We are carefully laying down our legally certified foundation to launch an international-grade nature charity. While our systems are undergoing auditing and compliance setups, you can follow our development journey.
            </p>

            {/* Core Values / Commitments */}
            <div className="space-y-5">
              <div className="flex gap-4 p-4 rounded-xl bg-stone-50 dark:bg-stone-900/40 border border-stone-200/50 dark:border-stone-800/40">
                <div className="p-2.5 h-fit rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold font-sans text-stone-900 dark:text-stone-100 text-sm">
                    100% Transparency Commitment
                  </h4>
                  <p className="text-stone-500 dark:text-stone-400 text-xs leading-relaxed mt-1">
                    Every future dollar donated will be mapped directly to GPS coordinates of specific saplings or secure sanctuary block zones in public publicizing logs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-stone-50 dark:bg-stone-900/40 border border-stone-200/50 dark:border-stone-800/40">
                <div className="p-2.5 h-fit rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-400">
                  <PieChart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold font-sans text-stone-900 dark:text-stone-100 text-sm">
                    Impact-Driven Allocation
                  </h4>
                  <p className="text-stone-500 dark:text-stone-400 text-xs leading-relaxed mt-1">
                    Over 85% of incoming donations go straight into real earthwork—buying seed stock, financing local rangers, and buying high-deforested terrain.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to action & button */}
            <div className="pt-4 border-t border-stone-150 dark:border-stone-850">
              <div className="inline-block p-4 bg-orange-500/5 rounded-xl border border-orange-200/50 dark:border-orange-950/40 mb-6">
                <p className="text-xs text-orange-850 dark:text-orange-300 leading-relaxed font-medium">
                  🔒 Payment gateways are currently locked as we complete our nonprofit legal incorporation. We are not accepting any funds until registration is fully finalized.
                </p>
              </div>

              <button
                id="donations-opening-soon-btn"
                disabled
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-sm bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800 text-stone-400 dark:text-stone-500 cursor-not-allowed select-none transition-all"
              >
                <Lock className="w-4 h-4 text-stone-400 dark:text-stone-600" />
                Donations Opening Soon
              </button>
            </div>
          </div>

          {/* Right Column: Roadmap Timeline */}
          <div className="lg:col-span-7 bg-stone-50 dark:bg-stone-900/40 p-6 md:p-10 rounded-3xl border border-stone-200/80 dark:border-stone-800/80 shadow-inner">
            <h3 className="text-xl font-bold font-sans text-stone-900 dark:text-stone-100 mb-8 border-b border-stone-200/60 dark:border-stone-800/60 pb-4">
              Rollout Roadmap & NGO Launching Timeline
            </h3>

            {/* Vertically mapped milestones */}
            <div className="relative border-l-2 border-dashed border-stone-200 dark:border-stone-800 ml-4 md:ml-6 pl-6 md:pl-10 space-y-12">
              {RoadmapStepsList.map((step, idx) => {
                const isCompleted = step.status === "completed";
                const isActive = step.status === "active";

                return (
                  <div key={step.id} id={`roadmap-step-${step.id}`} className="relative">
                    
                    {/* Status icons positioned on left timeline connector */}
                    <span className={`absolute -left-[39px] md:-left-[49px] top-1.5 p-1 rounded-full bg-white dark:bg-stone-950 shadow-sm border ${
                      isCompleted 
                        ? "text-emerald-600 border-emerald-400 dark:border-emerald-900 bg-emerald-50 dark:bg-emerald-950/20"
                        : isActive 
                        ? "text-emerald-500 border-emerald-400 dark:border-emerald-600 animate-pulse bg-emerald-50 dark:bg-emerald-950/20"
                        : "text-stone-300 dark:text-stone-600 border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900"
                    }`}>
                      {isCompleted ? (
                        <CheckCircle2 className="w-5 h-5 fill-current" />
                      ) : isActive ? (
                        <CircleDot className="w-5 h-5 fill-current" />
                      ) : (
                        <Clock className="w-5 h-5" />
                      )}
                    </span>

                    {/* Content cards */}
                    <div className={`p-6 rounded-xl border transition-all ${
                      isActive 
                        ? "bg-white dark:bg-stone-950 shadow-md border-emerald-500/30 ring-1 ring-emerald-500/10" 
                        : "bg-transparent border-transparent shadow-none"
                    }`}>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-emerald-850 dark:text-emerald-400">
                          {step.phase}
                        </span>
                        <span className={`px-2.5 py-0.5 rounded text-[11px] font-mono font-medium border ${
                          isCompleted 
                            ? "bg-emerald-100/60 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-200/50 dark:border-emerald-900/50" 
                            : isActive 
                            ? "bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border-amber-200/50 dark:border-amber-900/50"
                            : "bg-stone-100 dark:bg-stone-900 text-stone-500 dark:text-stone-400 border-stone-200/50 dark:border-stone-800/50"
                        }`}>
                          {step.status === "completed" ? "Completed" : step.status === "active" ? "In Progress" : "Coming Soon"} ({step.expectedTime})
                        </span>
                      </div>
                      
                      <h4 className="font-bold text-lg font-sans text-stone-900 dark:text-stone-100 mb-2">
                        {step.title}
                      </h4>
                      <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
