/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: "Wildlife" | "Cinematic" | "Conservation";
  views?: string;
}

export interface ConservationGoal {
  id: string;
  title: string;
  description: string;
  iconName: string; // Will match Lucide Icon component names
}

export interface RoadmapStep {
  id: string;
  phase: string;
  title: string;
  description: string;
  status: "completed" | "active" | "upcoming";
  expectedTime: string;
}

export interface NatureQuote {
  text: string;
  author: string;
}

export interface EnvStat {
  id: string;
  value: string;
  label: string;
  iconName: string;
  description: string;
  details: string;
}
