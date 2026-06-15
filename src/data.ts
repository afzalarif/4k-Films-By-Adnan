/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { YouTubeVideo, ConservationGoal, RoadmapStep, NatureQuote, EnvStat } from "./types";
// @ts-ignore
import adnanPortrait from "./assets/images/adnan_portrait_1781513094599.jpg";

export const YouTubeChannelURL = "https://www.youtube.com/@4kfilmsbyadnan";

export const CreatorBio = {
  name: "Adnan",
  title: "Nature Filmmaker & Environmental Storyteller",
  imageUrl: adnanPortrait, // High-quality nature conservationist portrait placeholder
  shortBio: "Adnan is a cinematic wildlife filmmaker and digital activist dedicated to capturing the raw, untouched beauty of our planet. Through '4K Films by Adnan', he seeks to bring the grounding majesty of ancient forests, crystal rivers, and wild creatures into the homes of millions, showing why these fragile ecosystems must be fiercely preserved.",
  missionStatement: "To inspire human connection with the natural world through immersive, ultra-high-definition storytelling—cultivating a global network of awareness, action, and financial support for direct ecological restoration.",
  socials: {
    youtube: YouTubeChannelURL,
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
    email: "contact@4kfilmsbyadnan.com" // Professional coming soon contact placeholder
  }
};

export const SampleVideos: YouTubeVideo[] = [
  {
    id: "j0oYoVh5C8E",
    title: "Immersive Alpine Meadows: 4K Ultra HD Relaxation",
    description: "A stunning cinematic masterpiece featuring glorious alpine wildflowers, roaring mountain streams, and majestic snowcapped summits to bring natural warmth and tranquility.",
    duration: "1:32:15",
    category: "Cinematic",
    views: "4.2M views"
  },
  {
    id: "PVDVGFBMeUw",
    title: "Cinematic Forest & Wildlife: 4K Ultra HD Relaxation",
    description: "A premium immersive experience captured in 4K resolution, exploring untamed woodlands, silent rivers, and magnificent forest animal life designed for deep mindfulness.",
    duration: "1:10:24",
    category: "Cinematic",
    views: "3.1M views"
  },
  {
    id: "hjT-GevmsD4",
    title: "Pure Nature: 4K Cinematic Relaxation",
    description: "Immerse yourself in a relaxing journey through breathtaking, pristine natural sanctuaries, gentle rivers, verdant trees, and beautiful high-definition forest landscapes.",
    duration: "2:04:18",
    category: "Cinematic",
    views: "2.5M views"
  }
];

export const ConservationGoalsList: ConservationGoal[] = [
  {
    id: "tree-planting",
    title: "Ecosystem Re-wilding",
    description: "Funding biodiverse, native tree-planting initiatives to reconstruct resilient forest networks, protect vital headwaters, and capture carbon naturally.",
    iconName: "Trees"
  },
  {
    id: "wildlife",
    title: "Endangered Habitats",
    description: "Setting up secure, technology-monitored wildlife sanctuaries to shield highly vulnerable species from commercial poachers and illegal logging.",
    iconName: "ShieldAlert"
  },
  {
    id: "education",
    title: "Visual Storytelling Grants",
    description: "Sponsoring local filmmakers, youth storytellers, and indigenous conservation experts to document and raise direct awareness for their home biomes.",
    iconName: "Video"
  },
  {
    id: "habitat",
    title: "River Clean-ups & Restoration",
    description: "Supporting community-led efforts to clear chemical plastic pollutants, restore native flora, and revive migratory fish routes in key ecosystems.",
    iconName: "Waves"
  },
  {
    id: "community",
    title: "Ecological Action Camps",
    description: "Creating educational retreats to build real-world environmental stewardship skills, connecting young urban advocates directly with earth-work.",
    iconName: "Users"
  },
  {
    id: "sustainability",
    title: "Zero-Footprint Production",
    description: "Distributing instructional resources on low-impact outdoor filmmaking and sustainable eco-tourism methods globally.",
    iconName: "Leaf"
  }
];

export const RoadmapStepsList: RoadmapStep[] = [
  {
    id: "p1",
    phase: "Phase 1",
    title: "Cinematic Awareness & Community",
    description: "Establishing our digital presence, growing the documentary subscriber community to 500k+, and expanding content outreach across environmental forums.",
    status: "completed",
    expectedTime: "Q1-Q2 2026"
  },
  {
    id: "p2",
    phase: "Phase 2",
    title: "Legal NGO Setup & Partner Alignments",
    description: "Formalizing our nonprofit conservation entity registration, ensuring high-standard transparency certifications, and forming tactical pacts with local soil-restoration teams.",
    status: "active",
    expectedTime: "Q3-Q4 2026"
  },
  {
    id: "p3",
    phase: "Phase 3",
    title: "Interactive Transparent Donation Engine",
    description: "Launching the live donation platform. Adhering to full open-ledger transparency where donors can trace precisely which forest block or wildlife corridor their funds supported.",
    status: "upcoming",
    expectedTime: "Early 2027"
  },
  {
    id: "p4",
    phase: "Phase 4",
    title: "Direct Restoration Campaigns",
    description: "Deploying our first full-scale re-wilding project. We aim to secure our first 10,000 acres of protected land and plant 100,000 native saplings within 12 months.",
    status: "upcoming",
    expectedTime: "Mid 2027"
  }
];

export const NatureQuotesList: NatureQuote[] = [
  {
    text: "The clearest way into the Universe is through a forest wilderness.",
    author: "John Muir"
  },
  {
    text: "Nature does not hurry, yet everything is accomplished.",
    author: "Lao Tzu"
  },
  {
    text: "In all things of nature there is something of the marvelous.",
    author: "Aristotle"
  },
  {
    text: "Look deep into nature, and then you will understand everything better.",
    author: "Albert Einstein"
  },
  {
    text: "The environment is where we all meet; where we all have a mutual interest; it is the one thing all of us share.",
    author: "Lady Bird Johnson"
  }
];

export const EnvStatsList: EnvStat[] = [
  {
    id: "forests",
    value: "15 Billion",
    label: "Trees Cut Annually",
    iconName: "TrendingDown",
    description: "Our core re-wilding actions directly target high-deforestation zones to rebuild dense canopies.",
    details: "Restoring native flora creates natural water tables and protects soil from severe erosion."
  },
  {
    id: "species",
    value: "1 Million",
    label: "Species at Risk",
    iconName: "AlertTriangle",
    description: "Habitat destruction is driving thousands of species close to extinction. Safe corridors are key.",
    details: "By identifying and isolating vital migratory passages, we offer animals safe shelter to reproduce."
  },
  {
    id: "carbon",
    value: "37 Billion",
    label: "Tons of CO₂ Emissions",
    iconName: "Globe",
    description: "Global carbon outputs are climbing. Growing biodiverse forests is our best natural capture method.",
    details: "Diverse old-growth forests sequester up to 4x more carbon than single-species commercial wood plantations."
  }
];
