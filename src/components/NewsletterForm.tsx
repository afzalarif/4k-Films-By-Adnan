/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Check, Mail, Sparkles, Loader2 } from "lucide-react";

interface NewsletterFormProps {
  id: string;
  variant?: "hero" | "section";
}

export default function NewsletterForm({ id, variant = "section" }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [registeredCount, setRegisteredCount] = useState(247); // Dynamic live simulated baseline

  useEffect(() => {
    // Read cached signups to update simulated count if we have local subscribers
    try {
      const saved = localStorage.getItem("nature_conservation_emails");
      if (saved) {
        const list = JSON.parse(saved);
        if (Array.isArray(list)) {
          setRegisteredCount(247 + list.length);
        }
      }
    } catch (e) {
      // Ignore storage errors
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !email.includes("@")) {
      setError("Please put list an authentic email address address.");
      return;
    }

    setIsSubmitting(true);

    // Simulate authentic network latency
    setTimeout(() => {
      try {
        const saved = localStorage.getItem("nature_conservation_emails") || "[]";
        const list = JSON.parse(saved);
        if (!list.includes(email)) {
          list.push(email);
          localStorage.setItem("nature_conservation_emails", JSON.stringify(list));
        }
        setRegisteredCount(247 + list.length);
        setSuccess(true);
        setEmail("");
      } catch (err) {
        setError("Could not register. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }, 1200);
  };

  if (success) {
    return (
      <div 
        id={`newsletter-success-${id}`} 
        className="p-6 md:p-8 rounded-2xl bg-emerald-500/10 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-center space-y-3"
      >
        <div className="mx-auto w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center text-emerald-700 dark:text-emerald-300">
          <Check className="w-5 h-5" />
        </div>
        <h4 className="text-stone-900 dark:text-stone-50 font-bold font-sans">
          You are on the reservation list!
        </h4>
        <p className="text-stone-600 dark:text-stone-300 text-xs sm:text-sm max-w-md mx-auto">
          Thank you! We will alert you immediately when our documentary films list, tree planting trackers, and official donations open.
        </p>
      </div>
    );
  }

  return (
    <div id={`newsletter-form-container-${id}`} className="w-full">
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex flex-col sm:flex-row gap-2 relative">
          <div className="relative flex-grow">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 dark:text-stone-500 pointer-events-none">
              <Mail className="w-5 h-5" />
            </span>
            <input
              id={`email-input-${id}`}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full pl-12 pr-4 py-3.5 rounded-full text-sm outline-none border transition-all bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-50 placeholder-stone-400 dark:placeholder-stone-500 border-stone-250 dark:border-stone-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              disabled={isSubmitting}
              required
            />
          </div>
          
          <button
            id={`subscribe-submit-btn-${id}`}
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3.5 bg-emerald-600 dark:bg-emerald-600 hover:bg-emerald-750 dark:hover:bg-emerald-500 text-white font-semibold text-sm rounded-full transition-colors flex items-center justify-center gap-2 shadow-md shadow-emerald-700/10 active:scale-98 disabled:opacity-80"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Registering...
              </>
            ) : (
              <>
                <span>Secure Early Pass</span>
              </>
            )}
          </button>
        </div>

        {error && (
          <p id={`newsletter-error-${id}`} className="text-red-500 dark:text-red-400 text-xs font-medium pl-4">
            {error}
          </p>
        )}

        {/* Live count of attendees */}
        <div className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-450 mt-4 pl-1">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Join <strong className="text-stone-850 dark:text-stone-250">{registeredCount}</strong> advocates tracking this journey</span>
        </div>
      </form>
    </div>
  );
}
