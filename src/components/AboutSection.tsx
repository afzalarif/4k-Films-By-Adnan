/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Youtube, Instagram, Twitter, Facebook, Mail, Camera, Compass, Award, Heart } from "lucide-react";
import { CreatorBio } from "../data";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-stone-50 dark:bg-stone-900/40 relative overflow-hidden">
      {/* Decorative light rings */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Block: Image & Visual Credentials */}
          <div className="lg:col-span-5 relative">
            <div className="relative group">
              {/* Outer soft shadow ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-emerald-600/15 to-sky-600/15 blur-lg opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Profile Image with high contrast styling */}
              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-stone-200 dark:border-stone-850 aspect-[4/5] bg-stone-100 dark:bg-stone-900">
                <img
                  src={CreatorBio.imageUrl}
                  alt={CreatorBio.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale opacity-95 hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Floating camera badge overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl backdrop-blur-md bg-stone-900/80 border border-white/10 text-white flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                    <Camera className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold font-sans text-xs text-stone-100">Filming on Location</h5>
                    <p className="text-[10px] text-stone-300 font-mono">RED & Arri 4K/8K HDR Capture</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid under image */}
            <div className="grid grid-cols-3 gap-3 mt-6">
              <div className="p-3 rounded-xl bg-white dark:bg-stone-950 border border-stone-150 dark:border-stone-850 text-center">
                <span className="block font-bold text-lg text-emerald-600 dark:text-emerald-400 font-mono">4K+</span>
                <span className="text-[10px] text-stone-500 dark:text-stone-400 uppercase tracking-widest font-rose">UHD Clarity</span>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-stone-950 border border-stone-150 dark:border-stone-850 text-center">
                <span className="block font-bold text-lg text-emerald-600 dark:text-emerald-400 font-mono">10M+</span>
                <span className="text-[10px] text-stone-500 dark:text-stone-400 uppercase tracking-widest font-rose">Views</span>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-stone-950 border border-stone-150 dark:border-stone-850 text-center">
                <span className="block font-bold text-lg text-emerald-600 dark:text-emerald-400 font-mono">100%</span>
                <span className="text-[10px] text-stone-500 dark:text-stone-400 uppercase tracking-widest font-rose">Restorative</span>
              </div>
            </div>
          </div>

          {/* Right Block: Biography & Mission */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-emerald-100 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900/60">
                <Compass className="w-3.5 h-3.5 animate-spin-slow" />
                Meet The Creator
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-sans text-stone-900 dark:text-stone-50 tracking-tight leading-tight">
                About Adnan <br />
                <span className="text-stone-500 text-2xl md:text-3xl font-medium block mt-1">Nature Filmmaker & Conservation Activist</span>
              </h2>
            </div>

            {/* Narrative */}
            <div className="space-y-4 text-stone-600 dark:text-stone-300 text-sm md:text-base leading-relaxed">
              <p>{CreatorBio.shortBio}</p>
              <p>
                Having spent over a decade documenting remote ecosystems—from ancient rain forests to high polar altitudes—Adnan knows our planet is undergoing rapid, dangerous transformations. Each frame is a love letter and an alert call.
              </p>
            </div>

            {/* Mission Statement Block */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-600/5 to-sky-600/5 dark:from-emerald-950/20 dark:to-sky-950/20 border-l-4 border-emerald-500 dark:bg-stone-950/50 space-y-2">
              <h4 className="flex items-center gap-2 font-bold font-sans text-stone-900 dark:text-stone-100 uppercase tracking-wide text-xs">
                <Heart className="w-4 h-4 text-emerald-500 fill-current" />
                The Storytelling Mission
              </h4>
              <p className="italic text-stone-600 dark:text-emerald-100/85 text-xs sm:text-sm">
                "{CreatorBio.missionStatement}"
              </p>
            </div>

            {/* Social handles */}
            <div className="space-y-4 pt-6 border-t border-stone-200/60 dark:border-stone-800/60">
              <h4 className="font-bold font-sans text-stone-900 dark:text-stone-100 text-xs uppercase tracking-widest">
                Connect & Subscribe Offline
              </h4>
              <div className="flex flex-wrap gap-3">
                <a
                  id="about-yt-link"
                  href={CreatorBio.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border rounded-full text-xs font-semibold text-stone-600 dark:text-stone-400 border-stone-350 dark:border-stone-850 hover:bg-emerald-50 hover:border-emerald-300 dark:hover:bg-emerald-950/40 dark:hover:border-emerald-900/60 transition-colors"
                >
                  <Youtube className="w-4 h-4 text-red-500" />
                  <span>YouTube</span>
                </a>
                <a
                  id="about-ig-link"
                  href={CreatorBio.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border rounded-full text-xs font-semibold text-stone-600 dark:text-stone-400 border-stone-350 dark:border-stone-850 hover:bg-emerald-50 hover:border-emerald-300 dark:hover:bg-emerald-950/40 dark:hover:border-emerald-900/60 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-500" />
                  <span>Instagram</span>
                </a>
                <a
                  id="about-tw-link"
                  href={CreatorBio.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border rounded-full text-xs font-semibold text-stone-600 dark:text-stone-400 border-stone-350 dark:border-stone-850 hover:bg-emerald-50 hover:border-emerald-300 dark:hover:bg-emerald-950/40 dark:hover:border-emerald-900/60 transition-colors"
                >
                  <Twitter className="w-4 h-4 text-sky-450" />
                  <span>Twitter</span>
                </a>
                <a
                  id="about-mail-link"
                  href={`mailto:${CreatorBio.socials.email}`}
                  className="flex items-center gap-2 px-4 py-2 border rounded-full text-xs font-semibold text-stone-600 dark:text-stone-400 border-stone-350 dark:border-stone-850 hover:bg-emerald-50 hover:border-emerald-300 dark:hover:bg-emerald-950/40 dark:hover:border-emerald-900/60 transition-colors"
                >
                  <Mail className="w-4 h-4 text-emerald-600" />
                  <span>{CreatorBio.socials.email}</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
