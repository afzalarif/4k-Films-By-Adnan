/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sun, Moon, Menu, X, ArrowRight, Play, Compass, Trees, 
  MapPin, ShieldCheck, Heart, AlertCircle, Youtube, 
  Instagram, Twitter, Facebook, Mail, Sparkles, Volume2, VolumeX, Eye
} from "lucide-react";

// Import custom components
import NatureParticles from "./components/NatureParticles";
import YouTubeGallery from "./components/YouTubeGallery";
import ConservationGoals from "./components/ConservationGoals";
import DonationsRoadmap from "./components/DonationsRoadmap";
import AboutSection from "./components/AboutSection";
import EnvironmentalStats from "./components/EnvironmentalStats";
import NewsletterForm from "./components/NewsletterForm";
import { CreatorBio, YouTubeChannelURL } from "./data";

export default function App() {
  // Theme state
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem("nature_theme_dark");
      if (saved !== null) {
        return JSON.parse(saved);
      }
    } catch (e) {
      // safe fallback
    }
    return true; // Default to premium dark/cinematic mode
  });
  
  // Navigation active state
  const [activeTab, setActiveTab] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Splash Loading screen state
  const [isSplashLoading, setIsSplashLoading] = useState(true);
  
  // Cinematic Trailer Modal state
  const [isPlayingTrailer, setIsPlayingTrailer] = useState(false);

  // Custom Toast notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Theme Sync on Mount
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    try {
      localStorage.setItem("nature_theme_dark", JSON.stringify(isDarkMode));
    } catch (e) {
      // Guard
    }
  }, [isDarkMode]);

  // Splash timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  // Launch Target Countdown (80 Days Countdown)
  useEffect(() => {
    // Establishing a dynamic 80-day countdown target that updates dynamically relative to page visits
    const targetLaunch = new Date().getTime() + (80 * 24 * 60 * 60 * 1000);

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetLaunch - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        // Fallback placeholder
        setTimeLeft({ days: 80, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll Spy to update active navigation tab
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "films", "mission", "donations", "advocacy"];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 5000);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen transition-colors duration-350 bg-stone-50 dark:bg-stone-950 text-stone-850 dark:text-stone-150 relative">
      
      {/* 1. Cinematic Splash Preloader */}
      <AnimatePresence>
        {isSplashLoading && (
          <motion.div
            id="splash-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.6, ease: "easeInOut" } }}
            className="fixed inset-0 bg-stone-950 text-stone-100 flex flex-col items-center justify-center z-50 p-6"
          >
            <div className="text-center space-y-6 max-w-lg">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="flex justify-center"
              >
                <div className="w-16 h-16 rounded-full border-2 border-emerald-500 border-t-transparent animate-spin flex items-center justify-center">
                  <Compass className="w-6 h-6 text-emerald-400 animate-pulse" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="space-y-2"
              >
                <h1 className="text-2xl md:text-3xl font-bold font-sans tracking-tight text-white uppercase letters-wide scale-95">
                  4K Films by Adnan
                </h1>
                <p className="text-emerald-400 font-mono text-xs tracking-widest uppercase">
                  Nature Preservation Initiative
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="pt-6 border-t border-stone-800 text-stone-400 text-xs italic"
              >
                "The core of structural preservation lies in visual admiration."
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Nature Particles on top of screens */}
      {!isSplashLoading && <NatureParticles />}

      {/* 2. Glassmorphic Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/85 dark:bg-stone-950/85 backdrop-blur-md border-b border-stone-200/50 dark:border-stone-900/60 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <a 
            id="nav-logo"
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}
            className="flex items-center gap-2.5 group"
          >
            <div className="p-2 h-10 w-10 rounded-full bg-emerald-600/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-600 group-hover:text-white transition-all">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="block font-bold text-base md:text-lg tracking-tight text-stone-900 dark:text-stone-50 font-sans uppercase">
                4K Films by Adnan
              </span>
              <span className="block text-[10px] text-emerald-600 dark:text-emerald-450 font-mono tracking-widest uppercase font-semibold">
                CONSERVATION NGO
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "Filmmaker" },
              { id: "films", label: "Cinematics" },
              { id: "mission", label: "Mission Goals" },
              { id: "donations", label: "Donations" },
              { id: "advocacy", label: "Ecological Stats" }
            ].map((tab) => (
              <a
                key={tab.id}
                id={`nav-link-${tab.id}`}
                href={`#${tab.id}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(tab.id); }}
                className={`text-xs uppercase font-bold tracking-widest transition-colors ${
                  activeTab === tab.id
                    ? "text-emerald-700 dark:text-emerald-400"
                    : "text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50"
                }`}
              >
                {tab.label}
              </a>
            ))}
          </nav>

          {/* Navigation Actions (Theme Toggle & CTA) */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Theme Trigger Button */}
            <button
              id="theme-toggler-btn"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2.5 rounded-full border border-stone-200 dark:border-stone-800 text-stone-650 dark:text-stone-350 hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors"
              aria-label="Toggle visual theme"
            >
              {isDarkMode ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
            </button>

            <button
              id="nav-cta-btn"
              onClick={() => scrollToSection("donations")}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-750 dark:hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider rounded-full transition-colors flex items-center gap-1.5 shadow-md shadow-emerald-700/10"
            >
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Get Early Pass</span>
            </button>
          </div>

          {/* Hamburger Menu on Mobile */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              id="mobile-theme-toggler"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full border border-stone-200 dark:border-stone-850 text-stone-600 dark:text-stone-400"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            
            <button
              id="mobile-menu-hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full border border-stone-200 dark:border-stone-850 text-stone-600 dark:text-stone-400"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-20 left-0 right-0 z-30 lg:hidden bg-white dark:bg-stone-950 border-b border-stone-200 dark:border-stone-900 px-6 py-8 shadow-xl flex flex-col gap-5"
          >
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "Filmmaker Profile" },
              { id: "films", label: "Cinematics Screen" },
              { id: "mission", label: "Mission Goals" },
              { id: "donations", label: "Donation Rollout" },
              { id: "advocacy", label: "Ecological Stats" }
            ].map((tab) => (
              <a
                key={tab.id}
                id={`mobile-nav-link-${tab.id}`}
                href={`#${tab.id}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(tab.id); }}
                className="text-sm font-bold uppercase tracking-widest text-stone-700 dark:text-stone-300 hover:text-emerald-500"
              >
                {tab.label}
              </a>
            ))}
            
            <button
              id="mobile-nav-cta"
              onClick={() => scrollToSection("donations")}
              className="w-full text-center py-3.5 bg-emerald-600 text-white rounded-xl font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2"
            >
              <Heart className="w-4 h-4 fill-current" />
              Donations Opening Soon
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Hero Section with Cinematic Background & Launch Countdown */}
      <section 
        id="home" 
        className="relative pt-32 pb-24 md:pt-40 md:pb-36 min-h-screen flex items-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(12, 10, 9, 0.72) 0%, rgba(12, 10, 9, 0.88) 100%), url('https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=1920')`,
          backgroundAttachment: "fixed" // Creates smooth premium parallax effect
        }}
      >
        {/* Sky Blue soft horizon glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-20 text-center w-full">
          
          {/* Welcome Badge badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md bg-stone-900/80 border border-stone-800 text-emerald-400 text-xs font-semibold uppercase tracking-widest mx-auto mb-8 animate-bounce">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            Coming Soon: The NGO Portal
          </div>

          {/* Main Huge cinematic typography */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-sans tracking-tight text-white max-w-4xl mx-auto leading-none mb-6">
            Protect Nature. <br />
            <span className="bg-gradient-to-r from-emerald-450 via-teal-300 to-sky-400 bg-clip-text text-transparent">Inspire Change.</span>
          </h1>

          {/* Core sub-narrative */}
          <p className="text-stone-300 md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Filmmaker Adnan is launching an immersive 4K digital platform. We are connecting cinematic story appreciation straight into direct, transparent reforestation and wildlife defense grants.
          </p>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            {/* Play cinematic trailer overlay button */}
            <button
              id="hero-play-trailer-btn"
              onClick={() => setIsPlayingTrailer(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-stone-900 hover:bg-stone-100 font-bold text-sm tracking-wide transition-all shadow-lg hover:scale-102 cursor-pointer active:scale-98"
            >
              <Play className="w-4.5 h-4.5 fill-current text-emerald-700" />
              Screen Launch Trailer
            </button>

            {/* Meet Adnan profile scroll button */}
            <button
              id="hero-meet-filmmaker-btn"
              onClick={() => scrollToSection("about")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-7 py-4 rounded-full bg-stone-900/80 border border-stone-800 hover:bg-stone-850 text-white font-bold text-sm tracking-wide transition-colors"
            >
              <span>Explore NGO Roadmap</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Countdown timer ticker container */}
          <div className="max-w-2xl mx-auto bg-stone-950/85 backdrop-blur-md rounded-2xl md:rounded-3xl border border-stone-800/80 p-6 md:p-8 space-y-6 mb-16 shadow-2xl">
            <h4 className="text-stone-400 font-mono text-xs uppercase tracking-widest font-bold">
              ESTIMATED DIGITAL PLATFORM DEPLOYMENT COUNTDOWN
            </h4>
            
            {/* Numbers Grid */}
            <div className="grid grid-cols-4 gap-4">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds }
              ].map((timeUnit, idx) => (
                <div key={idx} className="space-y-1 relative">
                  <div className="text-4xl md:text-6xl font-bold text-stone-50 font-mono tracking-tight leading-none bg-gradient-to-b from-stone-50 to-stone-400 bg-clip-text text-transparent">
                    {String(timeUnit.value).padStart(2, "0")}
                  </div>
                  <div className="text-[10px] md:text-xs text-stone-500 uppercase tracking-wider font-semibold">
                    {timeUnit.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form wrapper */}
          <div className="max-w-md mx-auto">
            <h5 className="text-white text-xs font-bold font-sans uppercase tracking-widest mb-3">
              Be notified when donations and portals open
            </h5>
            <NewsletterForm id="hero-countdown" variant="hero" />
          </div>

        </div>

        {/* Scroll down indicator wire */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-stone-400 dark:text-stone-500 hover:text-emerald-400 transition-colors">
          <p className="text-[10px] font-mono tracking-widest uppercase">Scroll Explore</p>
          <div className="w-1 h-8 rounded-full bg-stone-800/80 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-emerald-500 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* 4. About Filmmaker Section */}
      <AboutSection />

      {/* 5. Ecological Stats and Heroic Nature Quote */}
      <EnvironmentalStats />

      {/* 6. YouTube Immersive Gallery Section */}
      <YouTubeGallery />

      {/* 7. Future Conservation initiatives Goals Cards */}
      <ConservationGoals />

      {/* 8. NGO Foundations & Legal Donations Roadmap */}
      <DonationsRoadmap />

      {/* 9. Standalone Large Newsletter Signup Segment */}
      <section id="updates" className="py-24 bg-stone-100 dark:bg-stone-900/60 relative overflow-hidden border-t border-b border-stone-200/40 dark:border-stone-800/40">
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 relative z-20">
          <div className="bg-white dark:bg-stone-950 rounded-3xl border border-stone-200/80 dark:border-stone-850 p-8 md:p-14 text-center space-y-8 shadow-xl">
            
            <div className="mx-auto w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 flex items-center justify-center border border-emerald-200 dark:border-emerald-900/40">
              <Mail className="w-5 h-5 animate-pulse" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl md:text-4xl font-bold font-sans text-stone-900 dark:text-stone-50 tracking-tight">
                Join the Conservation Action List
              </h3>
              <p className="text-stone-500 dark:text-stone-400 max-w-xl mx-auto text-sm md:text-base">
                Register safely today. Receive official release alerts, private high-fidelity screenings of wildlife captures, and priority news when we launch donations.
              </p>
            </div>

            {/* Newsletter form with robust hooks */}
            <div className="max-w-lg mx-auto">
              <NewsletterForm id="large-footer" variant="section" />
            </div>

            {/* Security Guarantee badge info */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-4 border-t border-stone-100 dark:border-stone-900/60 text-stone-400 text-xs">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                Zero Spam policy
              </span>
              <span>•</span>
              <span>Encrypted list secure storage</span>
              <span>•</span>
              <span>Unsubscribe anytime offline</span>
            </div>

          </div>
        </div>
      </section>

      {/* 10. Large Professional Footer */}
      <footer className="bg-stone-950 text-stone-400 border-t border-stone-900 py-16 px-4 relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-10 pb-10 border-b border-stone-900">
          
          {/* Logo block */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="p-2 h-10 w-10 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/25">
                <Compass className="w-5 h-5 animate-spin-slow" />
              </div>
              <div>
                <span className="block font-bold text-lg tracking-tight text-white font-sans uppercase">
                  4K Films by Adnan
                </span>
                <span className="block text-[10px] text-emerald-400 font-mono tracking-widest uppercase font-semibold">
                  Nature Conservation Platform
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-500 leading-relaxed max-w-md">
              A premium, content-driven nature conservation nonprofit platform under construction. Bringing cinematic high-fidelity filmmaking straight into native reforestation programs.
            </p>

            <p className="text-xs font-mono text-emerald-450">
              📍 Contact: email: {CreatorBio.socials.email}
            </p>
          </div>

          {/* Quick links block */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white font-bold font-sans text-xs uppercase tracking-widest">
              Explore NGO Roadmap
            </h4>
            <div className="flex flex-col gap-2.5 text-xs text-stone-500">
              <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection("home"); }} className="hover:text-emerald-400 transition-colors">Home Intro</a>
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection("about"); }} className="hover:text-emerald-400 transition-colors">Filmmaker Profile</a>
              <a href="#films" onClick={(e) => { e.preventDefault(); scrollToSection("films"); }} className="hover:text-emerald-400 transition-colors">Cinematics Showcase</a>
              <a href="#mission" onClick={(e) => { e.preventDefault(); scrollToSection("mission"); }} className="hover:text-emerald-400 transition-colors">Conservation Goals</a>
              <a href="#donations" onClick={(e) => { e.preventDefault(); scrollToSection("donations"); }} className="hover:text-emerald-400 transition-colors">Donation Transparency</a>
            </div>
          </div>

          {/* Placeholders for legal documents */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white font-bold font-sans text-xs uppercase tracking-widest font-semibold">
              Legal Clearances & Certification
            </h4>
            <div className="flex flex-col gap-2.5 text-xs text-stone-500">
              <a 
                href="#privacy" 
                onClick={(e) => { e.preventDefault(); triggerToast("Privacy Policy legal draft under review for NGO registration compliance."); }} 
                className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
              >
                <span>Privacy Protection Policy (Placeholder)</span>
              </a>
              <a 
                href="#terms" 
                onClick={(e) => { e.preventDefault(); triggerToast("Terms of Use document placeholder - will outline transparent donation rules upon NGO release."); }} 
                className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
              >
                <span>Terms of Use & Agreement (Placeholder)</span>
              </a>
              <a 
                href="#transparency" 
                onClick={(e) => { e.preventDefault(); triggerToast("Transparency reporting ledger is being audited in association with our phase rollout."); }} 
                className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
              >
                <span>Public Auditing & Ledger Guidelines</span>
              </a>
            </div>
          </div>

        </div>

        {/* Footer legal credits */}
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-600 font-mono text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} 4K Films by Adnan. All rights reserved. Created in synergy with local soil restoration partners.
          </div>
          
          {/* Bottom small social links */}
          <div className="flex gap-4">
            <a href={CreatorBio.socials.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors"><Youtube className="w-4 h-4" /></a>
            <a href={CreatorBio.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href={CreatorBio.socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors"><Twitter className="w-4 h-4" /></a>
          </div>
        </div>
      </footer>

      {/* 11. Immersive full-screen visual modal for trailer playback */}
      <AnimatePresence>
        {isPlayingTrailer && (
          <motion.div
            id="cinematic-trailer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-stone-950/95 flex items-center justify-center p-4 md:p-8"
          >
            <div className="bg-black w-full max-w-5xl rounded-2xl overflow-hidden border border-stone-850 shadow-2xl relative">
              
              <button
                id="close-trailer-overlay-btn"
                onClick={() => setIsPlayingTrailer(false)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-stone-900 border border-stone-800 text-stone-100 flex items-center justify-center hover:bg-stone-800 transition-colors"
                aria-label="Close cinematic screen"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-video w-full">
                <iframe
                  id="trailer-cinema-frame"
                  src="https://www.youtube.com/embed/9H_f4E_4p0s?autoplay=1&modestbranding=1"
                  title="Cinematic 4K Forest Launch Trailer"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="p-4 md:p-6 bg-stone-950 text-stone-100 flex items-center justify-between text-xs sm:text-sm">
                <div>
                  <h4 className="font-bold text-white font-sans text-base">"Ancient Canopies" — NGO Cinematic Intro</h4>
                  <p className="text-emerald-400 mt-1">Directly filmed and compiled in 4K by Adnan</p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 text-stone-400 font-mono">
                  <Eye className="w-4 h-4 text-emerald-500" />
                  <span>Cinematic Test Premiere</span>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 12. Floating notification toast panel */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            id="toast-notification-panel"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 bg-stone-900 text-stone-100 p-4 rounded-xl border border-stone-850 shadow-2xl flex items-center gap-3 max-w-sm"
          >
            <AlertCircle className="w-5 h-5 text-emerald-400 shrink-0" />
            <div className="text-xs leading-relaxed font-sans">{toastMessage}</div>
            <button
              onClick={() => setToastMessage(null)}
              className="text-stone-500 hover:text-stone-350 p-1 font-bold ml-auto"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
