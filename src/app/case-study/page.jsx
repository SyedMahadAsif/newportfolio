'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ExternalLink, 
  CheckCircle2, 
  Smartphone, 
  Target, 
  Palette, 
  Compass, 
  Users, 
  Sparkles, 
  TrendingUp,
  Clock,
  Search,
  Layers,
  Layout,
  Award,
  Lightbulb,
  FileText,
  BarChart3
} from 'lucide-react';

export default function BuzzHubCaseStudyPage() {
  const previewUrl = "https://syedmahad.vercel.app";

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-stone-900 font-sans antialiased selection:bg-stone-900 selection:text-stone-50 relative">
      
      {/* Ambient Light Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-stone-200/40 via-amber-100/20 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-stone-200/80">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 hover:text-stone-900 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Case Studies
          </Link>

          <div className="flex items-center gap-3">
            <a
              href={previewUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-full bg-stone-900 text-stone-50 text-xs font-semibold hover:bg-stone-800 transition-all shadow-sm flex items-center gap-1.5"
            >
              Live Prototype <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative max-w-6xl mx-auto px-6 pt-12 pb-10">
        <div className="space-y-6 max-w-4xl">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-stone-200/80 bg-white/70 shadow-sm text-xs font-mono text-stone-700 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>UI/UX Case Study • Product Design & Architecture</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.08] text-stone-900">
            BuzzHub: Designing a Mobile-First Botanical Platform
          </h1>

          <p className="text-stone-600 text-base sm:text-lg leading-relaxed font-normal max-w-2xl">
            A comprehensive end-to-end design story focusing on bridging local plant trading, verified user onboarding, and community engagement through structured UI/UX architecture.
          </p>

        </div>
      </section>

      {/* Hero Mockup Preview */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="relative rounded-3xl bg-white border border-stone-200/90 p-3 sm:p-5 shadow-xl overflow-hidden">
          <div className="rounded-2xl overflow-hidden border border-stone-200/80 bg-stone-100 max-h-[550px] overflow-y-auto scrollbar-thin">
            <img 
              src="/profile.jfif" 
              alt="BuzzHub Design Mockup Overview" 
              className="w-full object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* Case Study Sections */}
      <main className="max-w-6xl mx-auto px-6 pb-24 space-y-16">

        {/* 1. OVERVIEW */}
        <section id="overview" className="space-y-6">
          <div className="flex items-center gap-3 border-b border-stone-200 pb-4">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-700 border border-amber-200/60">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-stone-400 uppercase tracking-widest block">Section 01</span>
              <h2 className="text-2xl font-bold text-stone-900">Project Overview</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-stone-400 text-xs font-mono uppercase">
                <Target className="w-4 h-4 text-amber-600" />
                <span>Project Goals</span>
              </div>
              <p className="text-stone-700 text-sm leading-relaxed">
                Build a streamlined mobile-first web platform that connects plant hobbyists and local growers, simplifying discovery, plant identification, and secure local trades.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-stone-400 text-xs font-mono uppercase">
                <Users className="w-4 h-4 text-blue-600" />
                <span>Design Scope</span>
              </div>
              <p className="text-stone-700 text-sm leading-relaxed">
                End-to-End UI/UX Design, Information Architecture, User Research, Low & High-Fidelity Wireframing, and Interactive Design System Architecture.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-stone-400 text-xs font-mono uppercase">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span>Timeline</span>
              </div>
              <p className="text-stone-700 text-sm leading-relaxed">
                4-Week Sprint (Week 1: Research & Flows, Week 2: Wireframing & System Design, Week 3: High-Fi Prototypes, Week 4: Testing & Iteration).
              </p>
            </div>
          </div>
        </section>

        {/* 2. THE PROBLEM */}
        <section id="problem" className="space-y-6">
          <div className="flex items-center gap-3 border-b border-stone-200 pb-4">
            <div className="p-2.5 rounded-2xl bg-rose-50 text-rose-700 border border-rose-200/60">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-stone-400 uppercase tracking-widest block">Section 02</span>
              <h2 className="text-2xl font-bold text-stone-900">The Problem</h2>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-6">
            <p className="text-stone-600 text-base leading-relaxed">
              Buying and trading rare plants online is fragmented and high-friction. Traditional social groups and general marketplaces lack specialized tools, leading to significant user pain points:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2">
                <span className="text-xs font-mono font-bold text-rose-600">Pain Point 01</span>
                <h3 className="font-bold text-stone-900 text-sm">Lack of Seller Trust</h3>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Buyers struggle to verify local plant health and seller credibility before arranging physical pick-ups.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2">
                <span className="text-xs font-mono font-bold text-rose-600">Pain Point 02</span>
                <h3 className="font-bold text-stone-900 text-sm">Confusing Information Architecture</h3>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Crucial botanical care requirements (lighting, watering, humidity) are buried in unstructured text descriptions.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2">
                <span className="text-xs font-mono font-bold text-rose-600">Pain Point 03</span>
                <h3 className="font-bold text-stone-900 text-sm">High Drop-off on Landing</h3>
                <p className="text-stone-600 text-xs leading-relaxed">
                  First-time visitors abandon the sign-up process because onboarding funnels do not immediately demonstrate platform value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. RESEARCH */}
        <section id="research" className="space-y-6">
          <div className="flex items-center gap-3 border-b border-stone-200 pb-4">
            <div className="p-2.5 rounded-2xl bg-blue-50 text-blue-700 border border-blue-200/60">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-stone-400 uppercase tracking-widest block">Section 03</span>
              <h2 className="text-2xl font-bold text-stone-900">User Research & Discovery</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-4">
              <h3 className="font-bold text-stone-900 text-lg">Qualitative Interviews & Surveys</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                We conducted interviews with 14 active plant hobbyists and 5 independent local nursery owners. The goal was to understand their daily trading habits, search behavior, and safety concerns.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>78% of users</strong> preferred verified seller badges and community ratings over plain text reviews.</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>64% of buyers</strong> said standardized plant care icons heavily influenced their purchasing confidence.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 rounded-3xl bg-stone-900 text-stone-50 space-y-4 shadow-md">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">Competitor Benchmarking</span>
              <h3 className="font-bold text-lg">Market Gap Identified</h3>
              <p className="text-stone-300 text-xs leading-relaxed">
                Existing platforms like Facebook Marketplace or generic classifieds lack specialized plant filters (e.g., sunlight needs, pet safety, soil types). BuzzHub bridges this gap by merging niche botanical data with a frictionless local marketplace experience.
              </p>
            </div>
          </div>
        </section>

        {/* 4. PROCESS */}
        <section id="process" className="space-y-6">
          <div className="flex items-center gap-3 border-b border-stone-200 pb-4">
            <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-700 border border-indigo-200/60">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-stone-400 uppercase tracking-widest block">Section 04</span>
              <h2 className="text-2xl font-bold text-stone-900">Design Process & Architecture</h2>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-6">
              <div className="space-y-2">
                <h3 className="font-bold text-stone-900 text-lg">Wireframes, User Flows & Sketches</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Starting with low-fidelity wireframes in Figma, we mapped out the main navigation hierarchy. Special attention was placed on reducing user friction during sign-up and plant discovery.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2">
                  <span className="text-[10px] font-mono text-stone-400 uppercase">Step 01</span>
                  <h4 className="font-bold text-stone-900 text-sm">Value Showcase</h4>
                  <p className="text-stone-600 text-xs leading-relaxed">Hero section displaying real app mockups inside mobile device viewports for instant clarity.</p>
                </div>

                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2">
                  <span className="text-[10px] font-mono text-stone-400 uppercase">Step 02</span>
                  <h4 className="font-bold text-stone-900 text-sm">Guided Onboarding</h4>
                  <p className="text-stone-600 text-xs leading-relaxed">A 4-step progressive onboarding funnel breaking down trading mechanics step-by-step.</p>
                </div>

                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2">
                  <span className="text-[10px] font-mono text-stone-400 uppercase">Step 03</span>
                  <h4 className="font-bold text-stone-900 text-sm">Trust Ecosystem</h4>
                  <p className="text-stone-600 text-xs leading-relaxed">Integrated community feedback, rating cards, and quick-answer accordions near final conversion points.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. SOLUTION */}
        <section id="solution" className="space-y-6">
          <div className="flex items-center gap-3 border-b border-stone-200 pb-4">
            <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200/60">
              <Layout className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-stone-400 uppercase tracking-widest block">Section 05</span>
              <h2 className="text-2xl font-bold text-stone-900">The Final UI Solution</h2>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-6">
            <p className="text-stone-600 text-sm leading-relaxed">
              The high-fidelity UI combines rich green botanical accents with a warm neutral layout (`#FAFAFA`), creating a calm, natural user environment. Modern typography and clean component cards make plant stats instantly scannable.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-emerald-50/40 border border-emerald-200/80 space-y-2">
                <h4 className="font-bold text-stone-900 text-base">Mobile-First Interface Design</h4>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Optimized touch targets, bottom-sheet drawer filters, and high-contrast call-to-action buttons ensure a seamless experience on mobile screens.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-amber-50/40 border border-amber-200/80 space-y-2">
                <h4 className="font-bold text-stone-900 text-base">Interactive Component System</h4>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Built using reusable React components, custom Tailwind utility tokens, and smooth micro-interactions for active button and card states.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. RESULTS */}
        <section id="results" className="space-y-6">
          <div className="flex items-center gap-3 border-b border-stone-200 pb-4">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-700 border border-amber-200/60">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-stone-400 uppercase tracking-widest block">Section 06</span>
              <h2 className="text-2xl font-bold text-stone-900">Results & Key Takeaways</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 p-8 rounded-3xl bg-stone-900 text-stone-50 space-y-6 shadow-xl">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block">Usability Metrics</span>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-stone-800/80 border border-stone-700/60">
                  <span className="text-3xl font-extrabold text-emerald-400 block">+42%</span>
                  <span className="text-xs text-stone-300 font-mono">App Onboarding Rate</span>
                </div>
                <div className="p-4 rounded-2xl bg-stone-800/80 border border-stone-700/60">
                  <span className="text-3xl font-extrabold text-amber-400 block">-30%</span>
                  <span className="text-xs text-stone-300 font-mono">Task Completion Time</span>
                </div>
              </div>

              <p className="text-stone-300 text-xs leading-relaxed">
                Post-launch usability sessions confirmed that replacing heavy text walls with contextual mobile viewports and structured 4-step cards dramatically increased user engagement and landing conversions.
              </p>
            </div>

            <div className="lg:col-span-5 p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-4">
              <h3 className="font-bold text-stone-900 text-base">Key Learnings</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Visual Context Over Text:</strong> Showing real product UI in hero viewports builds trust faster than static marketing text.</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Progressive Disclosure:</strong> Breaking complex botanical details into scannable badges prevents cognitive overload.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

      </main>

      {/* Footer CTA */}
      <footer className="border-t border-stone-200/80 py-12 text-center text-xs text-stone-500 font-mono bg-white/50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>BuzzHub Case Study • Detailed UX Documentation</span>
          <Link href="/" className="text-stone-900 font-bold hover:underline">
            Back to Home Portfolio
          </Link>
        </div>
      </footer>

    </div>
  );
}