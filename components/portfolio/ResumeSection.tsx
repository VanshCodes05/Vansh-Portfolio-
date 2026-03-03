"use client"

import React, { useEffect, useRef, useState } from "react"
import { useReveal } from "@/hooks/use-reveal"
import { Download } from "lucide-react"

/* ── Colorful tech stack icons (official brand colors) ── */
const techStack = [
  {
    name: "React",
    color: "#61DAFB",
    bg: "#20232a",
    svg: (
      <svg viewBox="0 0 24 24" fill="#61DAFB" className="w-6 h-6">
        <path d="M12 10.11A1.89 1.89 0 1 1 10.11 12 1.9 1.9 0 0 1 12 10.11M7.37 20c.63.38 2-.2 3.6-1.7a24.22 24.22 0 0 1-1.51-1.9A22.7 22.7 0 0 1 7.06 16c-.51 2.14-.32 3.61.31 4m.71-5.74-.29-.51a7.91 7.91 0 0 0-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47m-2.62 4.29c.35.02.71.03 1 .03s.65-.01 1-.03l-1-1.74-1 1.74m8.93-12.5c-.37-.64-1.44-.83-2.98-.53a23.42 23.42 0 0 1 .27 2.21 23.42 23.42 0 0 1 2.06.85c1.23-.98 1.28-1.94.65-2.53M17.34 15c.32-.55.57-1.09.76-1.59l-1.28-.37c-.17.5-.38 1.03-.61 1.58l1.13.38m1.23-3-.74-.27c-.06.31-.14.62-.24.96l.74.22c.2-.64.24-.91.24-.91m-9.77 7.42c1.6 1.5 2.97 2.08 3.6 1.7.63-.39.82-1.86.31-4a22.7 22.7 0 0 1-2.4.36 24.22 24.22 0 0 1-1.51 1.94M8.61 12l-.81-1.5c-.3-.53-.57-1.05-.78-1.55-.87.38-1.65.83-2.28 1.32a13.83 13.83 0 0 0 0 3.46c.63.49 1.41.94 2.28 1.32.21-.5.48-1.02.78-1.55L8.61 12m8.54-3.64c.51-2.14.32-3.61-.31-4-.63-.38-2 .2-3.6 1.7a24.22 24.22 0 0 1 1.51 1.9 22.7 22.7 0 0 1 2.4.4m1.23 7.06-.74-.22c.1.34.18.65.24.96l.74-.27s-.04-.27-.24-.47m-2.76 3.36c.51-2.14.32-3.61-.31-4-.63-.38-2 .2-3.6 1.7a24.22 24.22 0 0 1 1.51 1.9 22.7 22.7 0 0 1 2.4.4" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    color: "#68A063",
    bg: "#1a2516",
    svg: (
      <svg viewBox="0 0 24 24" fill="#68A063" className="w-6 h-6">
        <path d="M11.998 24a2.685 2.685 0 0 1-1.345-.362L7.14 21.601c-.506-.283-.259-.384-.09-.442.637-.222.765-.271 1.443-.657.071-.04.165-.025.239.017l2.637 1.563c.095.053.23.053.32 0l10.267-5.922c.094-.055.154-.165.154-.279V7.955c0-.116-.06-.222-.156-.279L11.688 1.758a.276.276 0 0 0-.319 0L1.104 7.677C1.007 7.734.946 7.84.946 7.957V19.8c0 .113.06.219.158.273l2.81 1.623c1.528.764 2.463-.136 2.463-1.04V9.08c0-.167.134-.297.3-.297h1.308c.164 0 .298.13.298.297v11.576c0 2.04-1.112 3.21-3.046 3.21-.595 0-1.063 0-2.372-.644l-2.693-1.553A2.69 2.69 0 0 1 0 19.8V7.957c0-.935.499-1.807 1.305-2.273L11.572.11a2.71 2.71 0 0 1 2.712 0L24.55 5.684A2.692 2.692 0 0 1 25.856 7.957V19.8a2.692 2.692 0 0 1-1.306 2.273l-10.267 5.925a2.668 2.668 0 0 1-1.285.002zm3.184-8.178c-4.493 0-5.427-2.062-5.427-3.792 0-.165.133-.297.297-.297h1.334c.148 0 .272.107.295.252.202 1.363.803 2.05 3.503 2.05 2.155 0 3.073-.488 3.073-1.634 0-.66-.261-1.15-3.623-1.48-2.808-.278-4.545-.896-4.545-3.14 0-2.07 1.745-3.304 4.671-3.304 3.287 0 4.914 1.14 5.117 3.59.008.085-.02.166-.077.228a.295.295 0 0 1-.218.096h-1.34a.296.296 0 0 1-.288-.234c-.32-1.422-1.098-1.878-3.194-1.878-2.352 0-2.626.82-2.626 1.434 0 .745.323 0.963 3.514 1.381 3.156.414 4.646 1.003 4.646 3.224-.005 2.24-1.869 3.504-5.106 3.504z" />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    color: "#47A248",
    bg: "#0f1f0f",
    svg: (
      <svg viewBox="0 0 24 24" fill="#47A248" className="w-6 h-6">
        <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
      </svg>
    ),
  },
  {
    name: "Express",
    color: "#999",
    bg: "#1a1a1a",
    svg: (
      <svg viewBox="0 0 24 24" fill="#999" className="w-6 h-6">
        <path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 12.2v-.623zM1.108 10.33h8.57c-.058-3.026-2.029-5.1-4.136-5.007-2.44.113-4.323 2.108-4.434 5.007z" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    color: "#3178C6",
    bg: "#0f1b30",
    svg: (
      <svg viewBox="0 0 24 24" fill="#3178C6" className="w-6 h-6">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    color: "#fff",
    bg: "#111",
    svg: (
      <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c2.04 0 3.96-.51 5.64-1.41L6.36 8.1A.37.37 0 0 0 6 8.37v7.26a.375.375 0 0 1-.75 0V8.37a1.12 1.12 0 0 1 1.11-1.12 1.1 1.1 0 0 1 .95.54l9.72 12.99A12 12 0 0 0 24 12c0-6.627-5.373-12-12-12zm5.25 17.25a.375.375 0 0 1-.75 0V10.5a.375.375 0 0 1 .75 0v6.75z" />
      </svg>
    ),
  },
  {
    name: "TailwindCSS",
    color: "#06B6D4",
    bg: "#0a1f24",
    svg: (
      <svg viewBox="0 0 24 24" fill="#06B6D4" className="w-6 h-6">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: "Git",
    color: "#F05032",
    bg: "#1f0e0a",
    svg: (
      <svg viewBox="0 0 24 24" fill="#F05032" className="w-6 h-6">
        <path d="M23.546 10.93L13.067.452a1.55 1.55 0 0 0-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 0 1 2.327 2.341l2.658 2.66a1.838 1.838 0 1 1-1.1 1.059L12.93 9.023v6.876a1.839 1.839 0 1 1-1.51-.07V8.99a1.836 1.836 0 0 1-.999-2.416L7.684 3.818 .454 11.048a1.55 1.55 0 0 0 0 2.188l10.48 10.478a1.55 1.55 0 0 0 2.187 0l10.425-10.425a1.55 1.55 0 0 0 0-2.188" />
      </svg>
    ),
  },
]

const frontendSkills = [
  { name: "React.js", level: 90 },
  { name: "JavaScript / TS", level: 85 },
  { name: "HTML & CSS", level: 95 },
  { name: "TailwindCSS", level: 88 },
]

const backendSkills = [
  { name: "Node.js", level: 82 },
  { name: "Express.js", level: 80 },
  { name: "MongoDB", level: 78 },
  { name: "MySQL", level: 70 },
]

const experience = [
  {
    period: "2024 — Present",
    role: "Full Stack Developer",
    company: "Freelance",
    desc: "Building end-to-end MERN stack web applications for clients, integrating APIs, and optimising for performance.",
  },
  {
    period: "2023",
    role: "Frontend Developer Intern",
    company: "Tech Startup, India",
    desc: "Built responsive UI components and integrated REST APIs using React and TailwindCSS.",
  },
  {
    period: "2022",
    role: "Web Dev Trainee",
    company: "Coding Institute",
    desc: "Intensive MERN stack training; shipped 5+ full-stack projects.",
  },
]

const education = [
  {
    period: "2025 – 2029",
    degree: "B.Tech — Computer Science",
    institution: "University of India",
  },
]

const whatCanIDo = [
  "Full Stack Web Applications",
  "REST API Design & Integration",
  "Responsive UI Development",
  "Database Design & Optimization",
  "Performance & SEO Optimization",
  "Code Review & Mentoring",
]

function SkillBar({ name, level, visible }: { name: string; level: number; visible: boolean }) {
  return (
    <div className="mb-5">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-semibold text-[var(--text-mid)] uppercase tracking-wider">{name}</span>
        <span className="text-[10px] font-bold text-[var(--highlight)]">{level}%</span>
      </div>
      <div className="w-full h-[3px] bg-[var(--divider)] rounded-full relative overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full rounded-full bg-[var(--highlight)] skill-bar-fill"
          style={{ width: visible ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  )
}

export default function ResumeSection() {
  const ref = useReveal()
  const sectionRef = useRef<HTMLElement>(null)
  const [skillsVisible, setSkillsVisible] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setSkillsVisible(true) },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="resume"
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a0a0e 0%, #07070b 50%, #09090c 100%)" }}
    >
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,107,43,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,43,0.025) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Warm key light — centered top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top, rgba(255,107,43,0.055) 0%, transparent 65%)" }}
      />

      {/* Teal depth — bottom right */}
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at bottom right, rgba(0,212,200,0.035) 0%, transparent 65%)" }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 95% 90% at 50% 50%, transparent 30%, rgba(0,0,0,0.55) 100%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10" ref={ref as React.RefObject<HTMLDivElement>}>
        {/* Header */}
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <span className="text-[var(--highlight)] text-[10px] font-bold tracking-[0.3em] uppercase">
                03 — Resume
              </span>
              <div className="flex-1 h-px bg-[var(--divider)] w-16" />
            </div>
            <h2
              className="font-black text-[var(--text-bright)] uppercase leading-none"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", letterSpacing: "-0.02em" }}
            >
              My Skills
            </h2>
          </div>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2.5 px-6 py-3 border border-[var(--highlight)] text-[var(--highlight)] text-[10px] font-bold tracking-[0.2em] uppercase rounded-sm hover:bg-[var(--highlight)] hover:text-[var(--background)] transition-all duration-200 self-start md:self-auto"
          >
            <Download size={12} />
            Download CV
          </a>
        </div>

        {/* Tech stack icons row */}
        <div className="reveal mb-14">
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[var(--text-dim)] mb-5">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center gap-2 group cursor-default"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/5 transition-all duration-200 group-hover:scale-110 group-hover:border-white/15"
                  style={{ background: tech.bg }}
                >
                  {tech.svg}
                </div>
                <span
                  className="text-[9px] font-semibold uppercase tracking-wider transition-colors duration-200"
                  style={{ color: "var(--text-dim)" }}
                >
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {/* Col 1 — Skills */}
          <div className="reveal">
            <h3 className="text-[10px] font-bold tracking-[0.25em] uppercase text-[var(--text-dim)] border-b border-[var(--divider)] pb-3 mb-6">
              Frontend
            </h3>
            {frontendSkills.map((s) => (
              <SkillBar key={s.name} {...s} visible={skillsVisible} />
            ))}

            <h3 className="text-[10px] font-bold tracking-[0.25em] uppercase text-[var(--text-dim)] border-b border-[var(--divider)] pb-3 mb-6 mt-10">
              Backend
            </h3>
            {backendSkills.map((s) => (
              <SkillBar key={s.name} {...s} visible={skillsVisible} />
            ))}
          </div>

          {/* Col 2 — Experience & Education */}
          <div className="reveal delay-200">
            <h3 className="text-[10px] font-bold tracking-[0.25em] uppercase text-[var(--text-dim)] border-b border-[var(--divider)] pb-3 mb-6">
              Experience
            </h3>

            <div className="relative pl-5 border-l border-[var(--divider)] space-y-7 mb-10">
              {experience.map((exp, i) => (
                <div key={i} className="relative">
                  {/* Dot */}
                  <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-[var(--highlight)] border-2 border-[var(--background)]" />
                  <span className="text-[9px] font-bold text-[var(--highlight)] uppercase tracking-[0.15em] block mb-1">
                    {exp.period}
                  </span>
                  <p className="text-xs font-bold text-[var(--text-bright)] uppercase tracking-wide mb-0.5">
                    {exp.role}
                  </p>
                  <p className="text-[10px] text-[var(--teal)] font-medium mb-1.5">{exp.company}</p>
                  <p className="text-[11px] text-[var(--text-dim)] leading-relaxed">{exp.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="text-[10px] font-bold tracking-[0.25em] uppercase text-[var(--text-dim)] border-b border-[var(--divider)] pb-3 mb-6">
              Education
            </h3>
            {education.map((edu, i) => (
              <div key={i}>
                <span className="text-[9px] font-bold text-[var(--highlight)] uppercase tracking-[0.15em] block mb-1">
                  {edu.period}
                </span>
                <p className="text-xs font-bold text-[var(--text-bright)] uppercase tracking-wide mb-0.5">
                  {edu.degree}
                </p>
                <p className="text-[11px] text-[var(--text-dim)] italic">{edu.institution}</p>
              </div>
            ))}
          </div>

          {/* Col 3 — What I do */}
          <div className="reveal delay-400">
            <h3 className="text-[10px] font-bold tracking-[0.25em] uppercase text-[var(--text-dim)] border-b border-[var(--divider)] pb-3 mb-6">
              What Can I Do?
            </h3>
            <ul className="space-y-3 mb-12">
              {whatCanIDo.map((item) => (
                <li key={item} className="flex items-start gap-3 text-xs text-[var(--text-dim)] leading-relaxed">
                  <span className="text-[var(--highlight)] font-bold mt-px flex-shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="text-[10px] font-bold tracking-[0.25em] uppercase text-[var(--text-dim)] border-b border-[var(--divider)] pb-3 mb-6">
              Interests
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Open Source", "System Design", "UI / UX", "DSA", "Tech Blogging"].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 text-[10px] font-medium border border-[var(--border)] text-[var(--text-dim)] rounded-sm hover:border-[var(--teal)] hover:text-[var(--teal)] transition-colors duration-150 uppercase tracking-wider cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
