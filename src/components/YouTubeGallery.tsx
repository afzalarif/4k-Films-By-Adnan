/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, ExternalLink, Calendar, Film, Eye, Sparkles } from "lucide-react";
import { YouTubeVideo } from "../types";
import { SampleVideos, YouTubeChannelURL } from "../data";

export default function YouTubeGallery() {
  const [videos] = useState<YouTubeVideo[]>(SampleVideos);
  const [activeVideo, setActiveVideo] = useState<YouTubeVideo>(SampleVideos[0]);

  return (
    <section id="films" className="py-24 px-4 max-w-7xl mx-auto relative z-20">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Title block */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-emerald-100 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900/60 mb-4">
          <Film className="w-3.5 h-3.5" />
          4K Immersive Screenings
        </span>
        <h2 className="text-3xl md:text-5xl font-bold font-sans text-stone-900 dark:text-stone-50 tracking-tight leading-tight mb-4">
          Cinematic Wildlife & Landscapes
        </h2>
        <p className="text-stone-600 dark:text-emerald-100/70 md:text-lg">
          Witness ancient ecosystems and rare wild behavior captured in raw, non-intrusive ultra-high-definition. Select any film below to screen it in our integrated theater.
        </p>
      </div>

      {/* Featured Theater Frame */}
      <div className="mb-16">
        <div className="bg-stone-950 rounded-2xl md:rounded-3xl border border-stone-800/80 shadow-2xl overflow-hidden relative group">
          <div className="aspect-video w-full relative bg-stone-900">
            <iframe
              id="youtube-theater-player"
              src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=0&rel=0&modestbranding=1`}
              title={activeVideo.title}
              className="w-full h-full absolute inset-0 z-10 border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          
          {/* Active video details below the screen */}
          <div className="p-6 md:p-8 bg-gradient-to-b from-stone-900 to-stone-950 border-t border-stone-800/60 text-stone-100">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-900/60 text-emerald-300 border border-emerald-800/40">
                {activeVideo.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-stone-400">
                <Eye className="w-3.5 h-3.5" />
                {activeVideo.views || "450K+ views"}
              </span>
              <span className="text-stone-600 font-mono text-xs">|</span>
              <span className="text-xs text-stone-400 font-mono">
                Duration: {activeVideo.duration}
              </span>
            </div>
            
            <h3 className="text-xl md:text-3xl font-bold tracking-tight mb-2 text-stone-100 font-sans">
              {activeVideo.title}
            </h3>
            <p className="text-stone-400 text-sm md:text-base leading-relaxed max-w-4xl">
              {activeVideo.description}
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Selector and Grid */}
      <div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 border-b border-stone-200/65 dark:border-stone-800/65 pb-6">
          <h4 className="text-lg font-bold font-sans text-stone-800 dark:text-stone-100 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-500" />
            Explore Featured Videos
          </h4>
        </div>

        {/* Video cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {videos.map((video) => {
              const isSelected = activeVideo.id === video.id;
              return (
                <motion.div
                  key={video.id}
                  id={`video-card-${video.id}`}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  onClick={() => {
                    setActiveVideo(video);
                    const theater = document.getElementById("youtube-theater-player");
                    if (theater) {
                      theater.scrollIntoView({ behavior: "smooth", block: "center" });
                    }
                  }}
                  className={`group cursor-pointer rounded-xl overflow-hidden border transition-all duration-300 dark:bg-stone-950 ${
                    isSelected
                      ? "ring-2 ring-emerald-500/80 border-transparent shadow-lg bg-stone-50 dark:border-transparent"
                      : "border-stone-200/90 dark:border-stone-800 bg-white hover:border-emerald-400 dark:hover:border-emerald-800/70 shadow-sm"
                  }`}
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-stone-900">
                    {/* High-quality YouTube thumbnail fallback */}
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Play symbol overlay */}
                    <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                      <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>

                    {/* Badge details */}
                    <div className="absolute top-2.5 left-2.5 bg-stone-900/80 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-bold text-stone-200 uppercase tracking-widest border border-stone-800/40">
                      {video.category}
                    </div>

                    <div className="absolute bottom-2.5 right-2.5 bg-stone-900/90 backdrop-blur-md px-2 py-0.5 rounded text-[11px] font-mono font-medium text-stone-100 border border-stone-800/40">
                      {video.duration}
                    </div>
                  </div>

                  {/* Body textuals */}
                  <div className="p-5">
                    <h5 className="font-semibold text-base text-stone-900 dark:text-stone-50 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors line-clamp-1 mb-2 font-sans">
                      {video.title}
                    </h5>
                    <p className="text-xs text-stone-500 dark:text-stone-400 line-clamp-2 leading-relaxed mb-4">
                      {video.description}
                    </p>
                    <div className="flex justify-between items-center text-[11px] text-stone-400 dark:text-stone-500 border-t border-stone-100 dark:border-stone-900 pt-3">
                      <span className="flex items-center gap-1 font-medium text-stone-500 dark:text-stone-400">
                        <Film className="w-3 h-3 text-emerald-500" /> Natural Visuals
                      </span>
                      <span>{video.views}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Explore Channel CTA Button */}
        <div className="text-center mt-12">
          <a
            id="visit-youtube-channel-btn"
            href={YouTubeChannelURL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm transition-all shadow-md hover:shadow-lg bg-emerald-750 dark:bg-emerald-600 hover:bg-emerald-800 dark:hover:bg-emerald-500 text-white translate-y-0 hover:-translate-y-0.5"
          >
            Visit "4K Films by Adnan" on YouTube
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
