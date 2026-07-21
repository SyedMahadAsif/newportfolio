import React from 'react';
import {
  ArrowUpRight,
  Sparkles,
  Layers,
  Mail,
  CheckCircle2,
  Globe,
  Share2,
  Code2,
  Compass,
  Zap,
  LayoutGrid,
  ExternalLink,
  Award,
  Briefcase,
  Trophy,
  MapPin
} from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      date: "2026",
      title: "Dexnive Enterprise Web Platform",
      description: "End-to-end design and frontend development for high-performance enterprise interfaces built with Next.js, React, and Tailwind CSS.",
      tags: ["Next.js", "React.js", "Tailwind CSS", "UI/UX Design"],
      imageBg: "bg-gradient-to-br from-slate-200/50 via-stone-200/40 to-indigo-100/40",
      type: "Web Application",
      metrics: "End-to-End Delivery"
    },
    {
      date: "2025",
      title: "LaunchBox Ecosystem & UI Components",
      description: "Bridging Figma & Framer wireframes to code. Architected scalable frontend component design systems to streamline client deliverables.",
      tags: ["Figma", "Framer", "React.js", "Design Systems"],
      imageBg: "bg-gradient-to-br from-emerald-100/40 via-stone-200/40 to-teal-100/30",
      type: "Design & Code System",
      metrics: "Google Certified UX Architecture"
    },
    {
      date: "2024",
      title: "Startup Grind Community Web Experience",
      description: "Interactive event and community platform designed to optimize user flows, engagement, and seamless registration funnels.",
      tags: ["UX Research", "Wireframing", "Prototyping", "User Flows"],
      imageBg: "bg-gradient-to-br from-amber-100/50 via-stone-200/40 to-orange-100/40",
      type: "Community Platform",
      metrics: "Conversion-Focused UX"
    }
  ];

  const experience = [
    {
      role: "UI/UX Designer & Web Developer",
      company: "Dexnive",
      period: "JAN 2026 — PRESENT",
      description: "Owned product experiences end-to-end: from wireframes and Figma/Framer prototypes to production React/Next.js code."
    },
    {
      role: "UI/UX Designer & Web Developer",
      company: "LaunchBox Pakistan",
      period: "JUL 2024 — DEC 2025",
      description: "Architected scalable frontend components and wireframes to bridge design systems with code execution."
    },
    {
      role: "UI/UX Designer",
      company: "Startup Grind Karachi",
      period: "FEB 2023 — JUL 2024",
      description: "Designed intuitive user flows, interaction models, and digital assets for regional tech startup events."
    },
    {
      role: "UI/UX Designer",
      company: "Rehan Foundation",
      period: "APR 2022 — JAN 2023",
      description: "Focused on user-centered design principles, wireframing, and accessibility optimization."
    }
  ];

  const education = [
    {
      degree: "Higher Diploma in Software Engineering (ADSE)",
      institution: "Aptech Pakistan",
      period: "2019 — 2023",
      highlights: ["Gold Medalist — 1st Position Holder", "Aptech Vision Hackathon Winner (2021)"],
      description: "Focused on full-stack software development, modern web architecture, database design, and object-oriented programming."
    },
    {
      degree: "Google Professional UX Design Certificate",
      institution: "Coursera / Google",
      period: "CERTIFIED",
      highlights: ["Google Certified UX Architecture"],
      description: "Mastered end-to-end UX foundations, user research, wireframing, prototyping in Figma, and usability testing."
    }
  ];

  const tickerItems = [
    "GOOGLE CERTIFIED UX DESIGNER",
    "FRONTEND DEVELOPER",
    "REACT.JS & NEXT.JS",
    "TAILWIND CSS",
    "FIGMA & FRAMER",
    "GOLD MEDALIST"
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-stone-900 font-sans selection:bg-stone-900 selection:text-stone-50 antialiased relative">

      {/* 1. Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#FAFAFA]/80 border-b border-stone-200/80">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-bold text-sm tracking-tight text-stone-900">
              Syed Mahad <span className="text-stone-400 font-normal">/ UI/UX Designer &amp; Web Developer</span>
            </span>
          </div>

          <nav className="flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-stone-500">
            <a href="#work" className="hover:text-stone-900 transition-colors hidden sm:block">Work</a>
            <a href="#skills" className="hover:text-stone-900 transition-colors hidden sm:block">Skills</a>
            <a href="#experience" className="hover:text-stone-900 transition-colors hidden sm:block">Experience</a>
          </nav>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative max-w-4xl mx-auto px-6 py-12 sm:py-16 overflow-hidden">
        {/* Subtle Background Grid */}
        <div
          className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M0 32V0h32' fill='none' stroke='%23a8a29e' stroke-opacity='0.25' stroke-width='1'/%3E%3C/svg%3E")`
          }}
        />

        {/* Ambient Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-gradient-to-tr from-amber-200/15 via-indigo-200/15 to-emerald-200/15 blur-3xl -z-10 rounded-full pointer-events-none" />

        <div className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-5">

          {/* Profile Avatar & Status */}
          <div className="relative">
            <img
              src="/profile.jfif"
              alt="Mahad"
              className="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl object-cover ring-1 ring-stone-900/10 shadow-md transition-transform duration-300 hover:scale-105"
            />
            <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-4 w-4 rounded-full bg-emerald-500 ring-2 ring-[#FAFAFA]" title="Available for work" />
            </span>
          </div>

          {/* Certification Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-stone-300/60 bg-stone-100/80 backdrop-blur-md text-[11px] font-medium text-stone-700 shadow-2xs">
            <Sparkles className="w-3 h-3 text-amber-500 shrink-0" />
            <span>Google Certified UI/UX Designer</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-900 leading-[1.15]">
            Mahad — <span className="text-stone-500 font-normal">UI/UX Designer &amp; Frontend Developer</span>
          </h1>

          {/* Bio Paragraph */}
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-xl">
            Turning ideas into polished digital products from design to code. I design and build intuitive, user-centered digital experiences by combining strong UI/UX principles (Figma &amp; Framer) with modern frontend development (React.js, Next.js &amp; Tailwind CSS).
          </p>

          {/* CTA Actions */}
          <div className="flex items-center justify-center gap-3 pt-1">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mahadasif89@gmail.com"
              className="px-5 py-2.5 rounded-xl bg-stone-900 text-white font-medium text-xs hover:bg-stone-800 transition-all flex items-center gap-2 shadow-sm hover:shadow-md"
            >
              <Mail className="w-3.5 h-3.5" />
              Get in touch
            </a>

            <a
              href="https://www.linkedin.com/in/syedmahad"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-stone-200/60 border border-stone-300/60 text-stone-700 font-medium text-xs hover:bg-stone-200 transition-all flex items-center gap-1.5 shadow-2xs"
            >
              LinkedIn
              <ExternalLink className="w-3 h-3 text-stone-400" />
            </a>
          </div>

          {/* Skill Tags */}
          <div className="pt-2 flex flex-wrap justify-center gap-2">
            <span className="px-3 py-1 rounded-lg bg-stone-200/50 border border-stone-300/50 text-[11px] font-medium text-stone-700 flex items-center gap-1.5">
              <Zap className="w-3 h-3 text-amber-500" /> UI/UX (Figma)
            </span>
            <span className="px-3 py-1 rounded-lg bg-stone-200/50 border border-stone-300/50 text-[11px] font-medium text-stone-700 flex items-center gap-1.5">
              <LayoutGrid className="w-3 h-3 text-blue-500" /> Web (Next.js, Tailwind)
            </span>
          </div>

        </div>
      </section>

      {/* 3. Ticker Marquee */}
      <div className="relative w-full overflow-hidden bg-stone-900 py-4 shadow-inner group">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-stone-900 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-stone-900 to-transparent" />

        <div className="flex w-max animate-[marquee_25s_linear_infinite] group-hover:[animation-play-state:paused]">
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <div
              key={idx}
              className="flex shrink-0 items-center gap-8 px-8 whitespace-nowrap text-xs font-mono uppercase tracking-widest text-stone-100"
            >
              <span>{item}</span>
              <span className="text-amber-500/80">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Selected Work Section */}
      <section id="work" className="max-w-6xl mx-auto px-6 py-24 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200/80 pb-6">
          <div>
            <span className="text-xs font-mono text-stone-400 uppercase tracking-widest">Portfolio</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-stone-900 mt-1">Featured Experience &amp; Projects</h2>
          </div>
          <span className="text-xs font-mono text-stone-400">DESIGN → CODE WORKFLOW</span>
        </div>

        <div className="space-y-12">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group rounded-3xl bg-stone-100/60 border border-stone-200/80 hover:border-stone-300 p-6 sm:p-10 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xs hover:shadow-lg hover:-translate-y-0.5"
            >
              {/* Project Info Left */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-stone-200/70 border border-stone-300/50 text-stone-700 text-xs font-mono">
                    {project.date}
                  </span>
                  <span className="text-xs font-mono text-stone-400 uppercase">{project.type}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 group-hover:text-stone-700 transition-colors">
                  {project.title}
                </h3>

                <p className="text-stone-600 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics Callout */}
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-100/60 border border-emerald-200/80 px-3 py-1.5 rounded-xl">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{project.metrics}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg bg-stone-200/50 border border-stone-300/50 text-stone-700 text-xs font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href="https://syedmahad.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-stone-900 hover:text-stone-600 group-hover:translate-x-1 transition-all"
                  >
                    View Project Case Study <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-stone-900" />
                  </a>
                </div>
              </div>

              {/* Project Preview Right */}
              <div className="lg:col-span-7">
                <div className={`w-full h-72 sm:h-96 rounded-2xl ${project.imageBg} border border-stone-300/50 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.01] transition-transform duration-500 shadow-inner`}>
                  <div className="relative z-10 text-stone-600 font-mono text-xs border border-stone-300/80 bg-stone-100/90 backdrop-blur-sm px-5 py-2.5 rounded-xl shadow-xs">
                    [{project.type} Mockup Preview]
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Skills & Tooling Section */}
      <section id="skills" className="max-w-6xl mx-auto px-6">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200/80 pb-6">
            <div>
              <span className="text-xs font-mono text-stone-400 uppercase tracking-widest">
                Technical &amp; Creative Toolkit
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-stone-900 mt-1">
                Skills &amp; Expertise
              </h2>
            </div>
            <span className="text-xs font-mono text-stone-400">
              END-TO-END PRODUCT DEVELOPMENT
            </span>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* UI/UX Design Category */}
            <div className="p-8 rounded-3xl bg-stone-100/60 border border-stone-200/80 shadow-xs space-y-6 hover:border-stone-300 transition-all">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-amber-100/60 text-amber-700 border border-amber-200/60">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900">UI/UX Design</h3>
                  <p className="text-xs text-stone-500 font-mono">User-Centered Architecture</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-mono uppercase text-stone-400 tracking-wider mb-2.5">
                    Core Specialties
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Wireframing", "Interactive Prototyping", "UX Research", "User Flows", "Design Systems", "Information Architecture", "Usability Testing"].map((skill, i) => (
                      <span
                        key={i}
                        className="px-3.5 py-1.5 rounded-xl bg-stone-200/50 border border-stone-300/50 text-stone-700 text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <h4 className="text-xs font-mono uppercase text-stone-400 tracking-wider mb-2.5">
                    Design Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Figma", "Framer", "Adobe XD", "FigJam"].map((tool, i) => (
                      <span
                        key={i}
                        className="px-3.5 py-1.5 rounded-xl bg-amber-100/50 border border-amber-200/60 text-amber-900 text-xs font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Frontend Engineering Category */}
            <div className="p-8 rounded-3xl bg-stone-100/60 border border-stone-200/80 shadow-xs space-y-6 hover:border-stone-300 transition-all">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-blue-100/60 text-blue-700 border border-blue-200/60">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900">Frontend Engineering</h3>
                  <p className="text-xs text-stone-500 font-mono">Modern Web Development</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-mono uppercase text-stone-400 tracking-wider mb-2.5">
                    Frameworks &amp; Languages
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js", "React.js", "TypeScript", "JavaScript (ES6+)", "HTML5 / CSS3"].map((tech, i) => (
                      <span
                        key={i}
                        className="px-3.5 py-1.5 rounded-xl bg-stone-200/50 border border-stone-300/50 text-stone-700 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <h4 className="text-xs font-mono uppercase text-stone-400 tracking-wider mb-2.5">
                    Styling &amp; Tooling
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Tailwind CSS", "Shadcn/ui", "Lucide Icons", "Git & GitHub", "Vercel", "Responsive Web Design"].map((tool, i) => (
                      <span
                        key={i}
                        className="px-3.5 py-1.5 rounded-xl bg-blue-100/50 border border-blue-200/60 text-blue-900 text-xs font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Experience & Education Section */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-20 border-t border-stone-200/80">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200/80 pb-6 mb-12">
          <div>
            <span className="text-xs font-mono text-stone-400 uppercase tracking-widest">Career &amp; Qualifications</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-stone-900 mt-1">
              Work Experience &amp; Education
            </h2>
          </div>
          <span className="text-xs font-mono text-stone-400">PROVEN TRACK RECORD</span>
        </div>

        <div className="space-y-16">

          {/* Work History */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-3">
              <div className="inline-flex items-center gap-2 text-stone-900 font-bold text-lg">
                <div className="p-2 rounded-xl bg-stone-200/70 text-stone-900 border border-stone-300/60">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3>Work History</h3>
              </div>
              <p className="text-stone-500 text-sm leading-relaxed">
                Full-time design and frontend engineering roles across tech platforms and digital agencies.
              </p>
            </div>

            <div className="lg:col-span-8 divide-y divide-stone-200/80 bg-stone-100/60 border border-stone-200/80 rounded-3xl p-4 sm:p-6 shadow-xs">
              {experience.map((exp, idx) => (
                <div key={idx} className="py-5 first:pt-2 last:pb-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 group hover:bg-stone-200/40 rounded-2xl px-4 transition-colors">
                  <div className="space-y-1">
                    <h4 className="font-bold text-stone-900 group-hover:text-stone-700 transition-colors text-base">{exp.role}</h4>
                    <p className="text-xs font-semibold text-emerald-800 font-mono">{exp.company}</p>
                    <p className="text-xs text-stone-500 max-w-lg pt-1 leading-relaxed">{exp.description}</p>
                  </div>
                  <span className="text-xs font-mono text-stone-500 bg-stone-200/60 px-3 py-1 rounded-full shrink-0 border border-stone-300/50">
                    {exp.period}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Credentials */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-3">
              <div className="inline-flex items-center gap-2 text-stone-900 font-bold text-lg">
                <div className="p-2 rounded-xl bg-amber-100/60 text-amber-800 border border-amber-200/60">
                  <Trophy className="w-5 h-5" />
                </div>
                <h3>Education &amp; Credentials</h3>
              </div>
              <p className="text-stone-500 text-sm leading-relaxed">
                Formal degree in software engineering alongside specialized professional UX certifications.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-4">
              {education.map((edu, idx) => (
                <div key={idx} className="p-6 sm:p-8 rounded-3xl bg-stone-100/60 border border-stone-200/80 shadow-xs space-y-4 hover:border-stone-300 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200/60 pb-4">
                    <div>
                      <h4 className="font-bold text-stone-900 text-lg">{edu.degree}</h4>
                      <span className="text-xs font-semibold text-stone-500 font-mono">{edu.institution}</span>
                    </div>
                    <span className="text-xs font-mono text-stone-500 bg-stone-200/60 px-3 py-1 rounded-full self-start sm:self-center border border-stone-300/50">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {edu.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {edu.highlights.map((highlight, hIdx) => (
                      <span
                        key={hIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-100/60 border border-amber-200/70 text-amber-900 text-xs font-semibold"
                      >
                        <Trophy className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 7. Call To Action / Footer */}
      <footer id="contact" className="max-w-6xl mx-auto px-6 pb-16 pt-8">
        <div className="rounded-3xl bg-stone-900 text-stone-50 p-10 sm:p-20 text-center relative overflow-hidden shadow-2xl">

          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
              Let's Work Together
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Ready to turn complex ideas into intuitive products?
            </h2>

            <p className="text-stone-400 text-sm max-w-md mx-auto">
              Open for full-time roles, design system consulting, and frontend engineering projects.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4 relative z-20">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mahadasif89@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-stone-100 text-stone-900 font-bold text-sm hover:bg-stone-200 transition-all shadow-lg hover:scale-105 cursor-pointer"
              >
                <Mail className="w-4 h-4" /> Send Email
              </a>

              <a
                href="https://www.linkedin.com/in/syedmahad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-stone-800 text-white font-bold text-sm hover:bg-stone-700 transition-all shadow-lg hover:scale-105 border border-stone-700 cursor-pointer"
              >
                LinkedIn Profile <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="pt-16 mt-16 border-t border-stone-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-stone-500 relative z-20">
            <span>© {new Date().getFullYear()} Syed Mahad. Karachi, Pakistan.</span>

            <div className="flex gap-6 text-stone-400">
              <a
                href="https://www.linkedin.com/in/syedmahad"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors cursor-pointer"
              >
                LinkedIn
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mahadasif89@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors cursor-pointer"
              >
                Contact
              </a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}