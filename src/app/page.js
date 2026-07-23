"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ArrowUpRight,
  Sparkles,
  Mail,
  Compass,
  LayoutGrid,
  ExternalLink,
  Briefcase,
  Trophy,
  User,
  FileText,
  FolderKanban,
  Download,
  Code2,
  CheckCircle2,
  MapPin,
  Globe,
  Palette,
} from "lucide-react";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("All");
  const [activeSection, setActiveSection] = useState("work");

  // Ref to prevent scroll-spy overriding active section during smooth scroll
  const isManualScroll = useRef(false);
  const scrollTimeout = useRef(null);

  const handleNavClick = (id) => {
    // 1. Instantly highlight on single click
    setActiveSection(id);

    // 2. Lock scroll-spy calculations temporarily
    isManualScroll.current = true;

    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    // 3. Re-enable scroll-spy after smooth scroll finishes
    scrollTimeout.current = setTimeout(() => {
      isManualScroll.current = false;
    }, 800);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Ignore scroll-spy if smooth scroll animation is currently active
      if (isManualScroll.current) return;

      const isMobile = window.innerWidth < 1024;
      const sections = isMobile
        ? ["about", "work", "experience", "skills", "contact"]
        : ["work", "experience", "skills", "contact"];

      // Check boundary condition for bottom of page (#contact)
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60;

      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }

      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

const projects = [
  {
    date: "2024",
    title: "My Garage Outlet",
    description:
      "A community-driven mobile platform designed to help users discover, host, and share local garage sales. Connects thrifters, bargain hunters, and hosts in one social marketplace to locate unique local finds or list items for sale.",
    tags: ["UX Research", "Wireframing", "Prototyping", "User Flows"],
    image: "/garage2.png",
    imageBg:
      "bg-gradient-to-br from-amber-100/60 via-stone-200/50 to-orange-100/40",
    type: "Community Platform",
    metrics: "Conversion-Focused UX",
    figmaLink: "https://www.figma.com/proto/dT5yx8LeJ8wR6n0B2GUjzg/Garage-Outlet?node-id=1-2&t=mpzOMH2W7szLC6OH-1",
    liveLink: "https://mygarageoutlet-landing.vercel.app", // <--- Add live site link here
  },
  {
    date: "2026",
    title: "Carter Boating",
    description:
      "Carter Boating simplifies the boat rental process by bridging the gap between adventure-seeking renters and boat owners. The goal was to design a clean, trustworthy landing page and mobile app interface that drives app downloads, streamlines vessel discovery, and delivers a frictionless booking flow.",
    tags: ["Next.js", "React.js", "Tailwind CSS", "UI/UX Design"],
    image: "/carter.png",
    imageBg:
      "bg-gradient-to-br from-slate-200/80 via-stone-200/50 to-emerald-100/40",
    type: "Web Application",
    metrics: "End-to-End Delivery",
    figmaLink: "https://www.figma.com/proto/d1B6sdxuFL6nE6NsysxO5r/Carter-Boating?node-id=0-1&t=DvlVOMlRj3jl1aWh-1",
    liveLink: "https://carterboating.vercel.app", // <--- Add live site link here
  },
  {
    date: "2025",
    title: "Buzzhub - Landing Page",
    description:
      "Buzzhub is a modern dispensary marketplace platform designed to bridge legal producers, retailers, and consumers through a seamless mobile shopping experience and web landing page. The design uses vibrant greenery aesthetics, clean card layouts, and strong app conversion funneling",
    tags: ["Figma", "React.js", "Tailwind CSS", "Design Systems"],
    image: "/buzzhubapp.png",
    imageBg:
      "bg-gradient-to-br from-emerald-100/60 via-stone-200/50 to-teal-100/40",
    type: "Design & Code System",
    metrics: "Google Certified UX Architecture",
    figmaLink: "https://www.figma.com/proto/h9OVkII2HlroO3iH6CHUzB/Buzzhub---Landing-Page?node-id=0-1&t=KqrJ2pxq4zdKus4a-1",
    liveLink: "https://buzzhub-landing.vercel.app", // <--- Add live site link here
  },
  {
    date: "2024",
    title: "Family Physics",
    description:
      "This is a high-energy fitness and personal training app landing page designed to connect users with expert coaches, structured workout programs, and training services.It showcases the mobile app's core features, highlights trainer credentials and community stats, and drives user conversions through a contact form and app download call-to-actions (Google Play & App Store).",
    tags: ["UX Research", "Wireframing", "Prototyping", "User Flows"],
    image: "/family.png",
    imageBg:
      "bg-gradient-to-br from-amber-100/60 via-stone-200/50 to-orange-100/40",
    type: "Community Platform",
    metrics: "Conversion-Focused UX",
    figmaLink: "https://www.figma.com/proto/eI2caCQDcUxVZj0fP7nfgo/Family-Physics?node-id=0-1&t=cyKb9rwwUXSXiDDr-1",
    liveLink: null, // <--- Add live site link here
  },
];
  const experience = [
    {
      role: "UI/UX Designer & Web Developer",
      company: "Dexnive",
      period: "JAN 2026 — PRESENT",
      description:
        "Owned product experiences end-to-end: from wireframes and Figma prototypes to production React/Next.js code.",
    },
    {
      role: "UI/UX Designer & Web Developer",
      company: "LaunchBox Pakistan",
      period: "JUL 2024 — DEC 2025",
      description:
        "Architected scalable frontend components and wireframes to bridge design systems with code execution.",
    },
    {
      role: "UI/UX Designer",
      company: "Startup Grind Karachi",
      period: "FEB 2023 — JUL 2024",
      description:
        "Designed intuitive user flows, interaction models, and digital assets for regional tech startup events.",
    },
    {
      role: "UI/UX Designer",
      company: "Rehan Foundation",
      period: "APR 2022 — JAN 2023",
      description:
        "Focused on user-centered design principles, wireframing, and accessibility optimization.",
    },
  ];

  const education = [
    {
      degree: "Higher Diploma in Software Engineering (ADSE)",
      institution: "Aptech Pakistan",
      period: "2019 — 2023",
      highlights: [
        "Gold Medalist — 1st Position Holder",
        "Aptech Vision Hackathon Winner (2021)",
      ],
      description:
        "Focused on full-stack software development, modern web architecture, database design, and object-oriented programming.",
    },
    {
      degree: "Google Professional UX Design Certificate",
      institution: "Coursera / Google",
      period: "CERTIFIED",
      highlights: ["Google Certified UX Architecture"],
      description:
        "Mastered end-to-end UX foundations, user research, wireframing, prototyping in Figma, and usability testing.",
    },
  ];

  const navLinks = [
    { id: "about", label: "ABOUT", icon: User, desktop: false },
    { id: "work", label: "PROJECTS", icon: FolderKanban, desktop: true },
    { id: "experience", label: "RESUME", icon: FileText, desktop: true },
    { id: "skills", label: "SKILLS", icon: Compass, desktop: true },
    { id: "contact", label: "CONTACT", icon: Mail, desktop: true },
  ];

  return (
    <div className="min-h-screen bg-[#F3F4F6] text-stone-900 font-sans selection:bg-emerald-500 selection:text-white antialiased p-3 sm:p-6 lg:p-8 pb-20 lg:pb-8">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <div className="max-w-[1440px] mx-auto space-y-5">
        {/* Top Header Nav (Desktop) */}
        <header className="hidden lg:flex items-center justify-between bg-white/95 border border-stone-200/80 rounded-2xl p-3 px-6 shadow-xs sticky top-4 z-50 backdrop-blur-md">
          <div className="flex items-center gap-3">
            {/* <div className="p-2 rounded-xl bg-stone-900 text-white">
              <LayoutGrid className="w-4 h-4 text-emerald-400" />
            </div> */}
            <span className="font-bold text-sm text-stone-900 tracking-tight">
              Syed Mahad
            </span>
          </div>

          <nav className="flex items-center gap-1.5 bg-stone-100/80 p-1.5 rounded-xl border border-stone-200/60">
            {navLinks
              .filter((link) => link.desktop)
              .map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => handleNavClick(link.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold tracking-wider transition-all duration-200 ${
                      isActive
                        ? "text-white bg-stone-900 shadow-sm"
                        : "text-stone-600 hover:text-stone-900 hover:bg-white/80"
                    }`}
                  >
                    <Icon
                      className={`w-3.5 h-3.5 ${
                        isActive ? "text-emerald-400" : ""
                      }`}
                    />
                    {link.label}
                  </a>
                );
              })}
          </nav>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mahadasif89@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-2xs"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Hire Me</span>
          </a>
        </header>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* Profile Sidebar */}
 <section
  id="about"
  className="w-full max-w-full lg:col-span-4 bg-white/90 backdrop-blur-xl text-stone-900 border border-stone-200/80 rounded-3xl p-6 shadow-xl shadow-stone-200/50 space-y-6 lg:sticky lg:top-24 scroll-mt-28 relative overflow-hidden transition-all"
>
  {/* Header: Status Pill */}
  <div className="flex justify-between items-center relative z-10">
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs text-emerald-700 font-medium">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
      </span>
      Available for work
    </div>
  </div>

  {/* Profile Section */}
  <div className="flex items-center gap-4 relative z-10">
    <div className="relative shrink-0">
      <img
        src="/profile.jfif"
        alt="Syed Mahad"
        className="w-20 h-20 rounded-2xl object-cover object-center ring-1 ring-stone-200/80 shadow-md"
      />
      <span className="absolute -bottom-1 -right-1 bg-emerald-500 p-1 rounded-lg ring-2 ring-white text-white shadow-sm">
        <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
      </span>
    </div>

    <div className="space-y-1 min-w-0 flex-1">
      <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900 truncate">
        Syed Mahad
      </h1>
      <p className="text-stone-600 text-xs font-medium truncate">
        UI/UX Designer &amp; Frontend Developer
      </p>
      <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium pt-0.5">
        <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="truncate">Karachi, Pakistan</span>
      </div>
    </div>
  </div>

  {/* Bio Card */}
  <div className="p-4 rounded-2xl bg-stone-50/80 border border-stone-200/60 space-y-2 relative z-10">
    <span className="text-[11px] font-mono uppercase text-stone-500 font-semibold tracking-wider block">
      About Me
    </span>
    <p className="text-stone-600 text-xs leading-relaxed font-normal">
      UI/UX Designer who builds what he designs. I craft intuitive user flows, wireframes, and high-fidelity interfaces in Figma, then bring them to life using Next.js & Tailwind CSS. I focus on turning complex ideas into simple, accessible, and responsive digital products—end to end.
    </p>
  </div>

  {/* Actions & Social Links */}
  <div className="space-y-3 relative z-10 pt-1">
    {/* Main CTAs */}
    <div className="grid grid-cols-2 gap-2.5">
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=mahadasif89@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="group h-11 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-medium text-xs flex items-center justify-center gap-2 transition-all duration-150 active:scale-[0.98] shadow-sm"
      >
        <Mail className="w-4 h-4 opacity-90 group-hover:scale-105 transition-transform" />
        <span className="truncate">Contact</span>
      </a>

      <a
        href="/cv.pdf"
        download="cv.pdf"
        className="group h-11 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs flex items-center justify-center gap-2 transition-all duration-150 active:scale-[0.98] shadow-sm"
      >
        <Download className="w-4 h-4 text-stone-400 group-hover:text-stone-200 transition-colors" />
        <span className="truncate">Download CV</span>
      </a>
    </div>

    {/* Social Cards */}
    <div className="grid grid-cols-2 gap-2.5">
      <a
        href="https://www.linkedin.com/in/syedmahad"
        target="_blank"
        rel="noreferrer"
        className="group h-11 px-3.5 rounded-xl bg-white hover:bg-stone-50 text-stone-700 hover:text-stone-900 text-xs font-medium flex items-center justify-between border border-stone-200/80 shadow-2xs transition-all duration-150"
      >
        <div className="flex items-center gap-2 min-w-0">
          <img
            src="/linkedin.png"
            alt="LinkedIn"
            className="w-5 h-5 shrink-0 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
          />
          <span className="truncate">LinkedIn</span>
        </div>
        <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
      </a>

      <a
        href="https://dribbble.com/syedmahad"
        target="_blank"
        rel="noreferrer"
        className="group h-11 px-3.5 rounded-xl bg-white hover:bg-stone-50 text-stone-700 hover:text-stone-900 text-xs font-medium flex items-center justify-between border border-stone-200/80 shadow-2xs transition-all duration-150"
      >
        <div className="flex items-center gap-2 min-w-0">
          <img
            src="/dribbble.svg"
            alt="Dribbble"
            className="w-5 h-5 shrink-0 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
          />
          <span className="truncate">Dribbble</span>
        </div>
        <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
      </a>
    </div>
  </div>
</section>

          {/* Main Content Area */}
          <main className="lg:col-span-8 bg-white border border-stone-200/80 rounded-3xl p-5 sm:p-8 space-y-12">
            {/* Works Section */}
            <section id="work" className="space-y-6 scroll-mt-28">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-5">
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-emerald-500 inline-block" />
                  <h2 className="text-2xl font-extrabold tracking-tight text-stone-900">
                   Projects
                  </h2>
                </div>
              </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
  {projects
    .filter((p) => activeTab === "All" || p.type === activeTab)
    .map((project, idx) => (
      <div
        key={idx}
        className="group rounded-2xl bg-stone-50 border border-stone-200/80 hover:border-stone-300 p-4 transition-all duration-300 flex flex-col justify-between space-y-4 hover:shadow-md"
      >
        {/* Project Image Container */}
        <div
          className={`w-full h-72 rounded-xl ${project.imageBg} border border-stone-200 flex items-center justify-center relative overflow-hidden transition-transform duration-300`}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
          ) : null}
        </div>

        <div className="space-y-3 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-1">
              {/* Optional metrics/date */}
            </div>
            <h3 className="text-lg font-bold text-stone-900 group-hover:text-emerald-600 transition-colors">
              {project.title}
            </h3>
            <p className="text-stone-600 text-xs leading-relaxed mt-1">
              {project.description}
            </p>
          </div>

     <div className="pt-2 flex items-center gap-2">
  {/* Figma Button - Secondary Style */}
  {project.figmaLink && (
    <a
      href={project.figmaLink}
      target="_blank"
      rel="noreferrer"
      className="flex-1 py-2.5 px-3 rounded-xl  bg-stone-900 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all border border-stone-300/50 shadow-2xs group/btn"
    >
      <Palette className="w-3.5 h-3.5 text-white group-hover/btn:scale-110 transition-transform" />
      <span>Figma</span>
      <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
    </a>
  )}

  {/* Live Site Button - Primary Style */}
  {project.liveLink && (
    <a
  href={project.liveLink}
  target="_blank"
  rel="noreferrer"
  className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-50/80 hover:bg-emerald-600 border border-emerald-200/60 hover:border-emerald-600 text-emerald-950 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 shadow-2xs hover:shadow-md hover:shadow-emerald-600/20 group/btn"
>
  <Globe className="w-3.5 h-3.5 text-emerald-600 group-hover/btn:text-white transition-colors" />
  <span>Live Site</span>
  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600/70 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
</a>
  )}
</div>
        </div>
      </div>
    ))}
</div>
            </section>

            {/* Experience & Education */}
            <section
              id="experience"
              className="pt-6 space-y-6 scroll-mt-28"
            >
              <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                <h3 className="text-xl font-extrabold text-stone-900 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-emerald-500" /> Career &amp;
                  Qualifications
                </h3>
                <span className="text-xs font-mono text-stone-400">
                  EXPERIENCE &amp; EDUCATION
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-stone-400 font-bold">
                    Work History
                  </h4>
                  <div className="space-y-3">
                    {experience.map((exp, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-stone-50 border border-stone-200/70 space-y-1.5"
                      >
                        <div className="flex justify-between items-start gap-2">
                          <h5 className="font-bold text-stone-900 text-xs">
                            {exp.role}
                          </h5>
                          <span className="text-[10px] font-mono text-stone-500 bg-stone-200/60 px-2 py-0.5 rounded shrink-0">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-emerald-700 font-mono text-[11px] font-semibold">
                          {exp.company}
                        </p>
                        <p className="text-stone-500 text-xs leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-stone-400 font-bold">
                    Education &amp; Credentials
                  </h4>
                  <div className="space-y-3">
                    {education.map((edu, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-stone-50 border border-stone-200/70 space-y-2"
                      >
                        <div className="flex justify-between items-start gap-2">
                          <div>
                            <h5 className="font-bold text-stone-900 text-xs">
                              {edu.degree}
                            </h5>
                            <p className="text-stone-500 font-mono text-[11px]">
                              {edu.institution}
                            </p>
                          </div>
                          <span className="text-[10px] font-mono text-stone-500 bg-stone-200/60 px-2 py-0.5 rounded shrink-0">
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-stone-600 text-xs leading-relaxed">
                          {edu.description}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {edu.highlights.map((h, hIdx) => (
                            <span
                              key={hIdx}
                              className="inline-flex items-center gap-1 text-[10px] font-semibold bg-amber-100 text-amber-800 px-2 py-0.5 rounded"
                            >
                              <Trophy className="w-3 h-3 text-amber-600" /> {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section id="skills" className="pt-6 space-y-6 scroll-mt-28">
              <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                <h3 className="text-xl font-extrabold text-stone-900 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-emerald-500" /> Skills &amp;
                  Toolkit
                </h3>
                <span className="text-xs font-mono text-stone-400">
                  DESIGN &amp; CODE
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-800 border border-emerald-200">
                      <Compass className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900 text-sm">
                        UI/UX Design
                      </h4>
                      <p className="text-[11px] text-stone-500 font-mono">
                        User-Centered Architecture
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">
                      Specialties
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        "Wireframing",
                        "Interactive Prototyping",
                        "UX Research",
                        "User Flows",
                        "Design Systems",
                        "Usability Testing",
                      ].map((s, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-white border border-stone-200 text-stone-700 text-xs font-medium"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 pt-1">
                    <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">
                      Tools
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {["Figma", "Framer", "FigJam"].map((t, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-200/70 text-amber-900 text-xs font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-100 text-blue-800 border border-blue-200">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900 text-sm">
                        Frontend Engineering
                      </h4>
                      <p className="text-[11px] text-stone-500 font-mono">
                        Modern Web Development
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">
                      Frameworks &amp; Languages
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        "Next.js",
                        "React.js",
                        "TypeScript",
                        "JavaScript (ES6+)",
                        "HTML5 / CSS3",
                      ].map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-white border border-stone-200 text-stone-700 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 pt-1">
                    <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">
                      Styling &amp; Tooling
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        "Tailwind CSS",
                        "Shadcn/ui",
                        "Lucide Icons",
                        "Git & GitHub",
                        "Vercel",
                      ].map((tool, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-200/70 text-blue-900 text-xs font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Footer */}
            <footer id="contact" className="pt-6 scroll-mt-28">
              <div className="rounded-2xl bg-stone-900 text-white p-8 sm:p-10 text-center space-y-5 relative overflow-hidden">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">
                  Let's Work Together
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Ready to turn complex ideas into intuitive products?
                </h3>
                <p className="text-stone-400 text-xs max-w-md mx-auto">
                  Open for full-time roles, design system consulting, and
                  frontend engineering projects.
                </p>
                <div className="flex flex-wrap justify-center gap-3 pt-2">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=mahadasif89@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-white text-stone-900 font-bold text-xs hover:bg-stone-100 transition-all flex items-center gap-2"
                  >
                    <Mail className="w-3.5 h-3.5" /> Send Email
                  </a>
                  <a
                    href="https://www.linkedin.com/in/syedmahad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-stone-800 text-white font-bold text-xs hover:bg-stone-700 transition-all border border-stone-700 flex items-center gap-2"
                  >
                    LinkedIn Profile{" "}
                    <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
                  </a>
                </div>
                <div className="pt-6 border-t border-stone-800 text-[11px] font-mono text-stone-500">
                  © {new Date().getFullYear()} Syed Mahad. Karachi, Pakistan.
                </div>
              </div>
            </footer>
          </main>
        </div>
      </div>

      {/* Floating Bottom Navigation (Mobile) */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 lg:hidden z-50 bg-stone-900/90 backdrop-blur-md border border-stone-700/80 p-2 rounded-2xl shadow-xl flex items-center gap-1.5">
        {navLinks.map((link) => {
          const Icon = link.icon;
          const isActive = activeSection === link.id;
          return (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => handleNavClick(link.id)}
              className={`p-2.5 rounded-xl flex items-center justify-center transition-all ${
                isActive
                  ? "bg-emerald-500 text-white"
                  : "text-stone-400 hover:text-white hover:bg-stone-800"
              }`}
              aria-label={link.label}
            >
              <Icon className="w-4 h-4" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
