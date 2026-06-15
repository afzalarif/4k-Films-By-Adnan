/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Trees, ShieldAlert, Video, Waves, Users, Leaf, HelpCircle, ArrowRight } from "lucide-react";
import { ConservationGoalsList } from "../data";

// Map names directly to component elements to guarantee full TS safety and prevent runtime failures
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Trees: Trees,
  ShieldAlert: ShieldAlert,
  Video: Video,
  Waves: Waves,
  Users: Users,
  Leaf: Leaf
};

export default function ConservationGoals() {
  return (
    <section id="mission" className="py-24 bg-stone-50 dark:bg-stone-900/40 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-60 h-60 bg-sky-500/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-20">
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-emerald-100 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900/60 mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Our Restorations Roadmap
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-sans text-stone-900 dark:text-stone-50 tracking-tight leading-tight mb-4">
            Future Conservation Goals
          </h2>
          <p className="text-stone-600 dark:text-emerald-100/70 md:text-lg">
            Through beautiful cinematic outreach, '4K Films by Adnan' is transitioning into a core digital-led nonprofit that directs global viewership straight into grassroots earth-restoration programs.
          </p>
        </div>

        {/* Six core goal cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ConservationGoalsList.map((goal, index) => {
            const IconComponent = iconMap[goal.iconName] || HelpCircle;
            return (
              <motion.div
                key={goal.id}
                id={`goal-card-${goal.id}`}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
                className="group relative p-8 rounded-2xl bg-white dark:bg-stone-950/75 border border-stone-200/80 dark:border-stone-800/80 shadow-sm hover:shadow-md transition-all duration-350 overflow-hidden"
              >
                {/* Visual gradient edge light highlight on card hover */}
                <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-emerald-500 to-sky-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-350" />
                
                {/* Icon wrapper */}
                <div className="inline-flex p-4 rounded-xl mb-6 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-100/60 dark:border-emerald-900/35 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-transparent transition-all duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Text details */}
                <h4 className="text-xl font-bold font-sans text-stone-900 dark:text-stone-100 mb-3 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
                  {goal.title}
                </h4>
                
                <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed mb-6">
                  {goal.description}
                </p>

                {/* Readied Indicator */}
                <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mt-auto">
                  <span>Future Initiative Goal</span>
                  <ArrowRight className="w-3.5 h-3.5 transform translate-x-0 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
