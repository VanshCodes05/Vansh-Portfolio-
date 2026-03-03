"use client"

import Image from "next/image"
import { Github, Linkedin, Twitter, ArrowRight, Code2, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const socials = [
  { icon: Github, href: "https://github.com/vansh835", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/vansh___835", label: "Twitter / X" },
]

const stats = [
  { value: "2+", label: "Years" },
  { value: "10+", label: "Projects" },
  { value: "MERN", label: "Stack" },
  { value: "100%", label: "Passion" },
]

const roles = ["Full Stack Developer", "MERN Stack Engineer", "React Developer", "Node.js Backend Dev"]

export default function HeroSection() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => setRoleIdx((i) => (i + 1) % roles.length), 3200)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(timer)
  }, [])

  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden contour-bg"
      style={{ background: "#060608" }}
    >
      {/* ── DEPTH LAYER 1: Film grain (fixed overlay via CSS .grain on body) ── */}

      {/* ── DEPTH LAYER 2: Hard vignette — crushes outer edges to black ── */}
      <div className="vignette absolute inset-0 pointer-events-none z-[3]" />

      {/* ── DEPTH LAYER 3: Cinematic key light — warm diagonal from top-left ── */}
      <div className="key-light" />

      {/* ── DEPTH LAYER 4: Teal fill / counter light — bottom-right ── */}
      <div className="fill-light" />

      {/* ── DEPTH LAYER 5: Spotlight cone — aimed at avatar region ── */}
      <div className="spotlight" />

      {/* ── DEPTH LAYER 6: Fine grid — very subtle ── */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,107,43,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,43,0.022) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* ── DEPTH LAYER 7: Large hero glow — centered on avatar ── */}
      <div
        className="absolute top-[-15%] right-[-5%] w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,107,43,0.075) 0%, rgba(255,107,43,0.02) 40%, transparent 70%)",
          filter: "blur(1px)",
        }}
      />

      {/* ── DEPTH LAYER 8: Deep teal counter glow ── */}
      <div
        className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,212,200,0.05) 0%, transparent 65%)",
          filter: "blur(2px)",
        }}
      />

      {/* ── DEPTH LAYER 9: Ground shadow ── */}
      <div className="ground-plane" />

      {/* ── DEPTH LAYER 10: Horizontal depth lines ── */}
      <div className="absolute inset-x-0 bottom-[22%] h-px bg-[var(--border)] opacity-25 pointer-events-none z-[2]" />
      <div className="absolute inset-x-0 top-[18%] h-px bg-[var(--border)] opacity-15 pointer-events-none z-[2]" />

      {/* ── DEPTH LAYER 11: Noise ── */}
      <div className="noise-overlay absolute inset-0 pointer-events-none z-[4]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-28 pb-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-10">

          {/* ── LEFT: Text ── */}
          <div className="flex-1 max-w-xl">

            {/* Status badge */}
            <div
              className={`inline-flex items-center gap-2.5 mb-8 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-sm border"
                style={{ borderColor: "rgba(255,107,43,0.35)", background: "rgba(255,107,43,0.07)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--highlight)] animate-pulse" />
                <span className="text-[10px] font-black tracking-[0.28em] uppercase text-[var(--highlight)]">
                  Available for Work
                </span>
              </div>
            </div>

            {/* Name block */}
            <div
              className={`mb-6 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "130ms" }}
            >
              <p
                className="font-medium text-[var(--text-mid)] uppercase tracking-[0.18em] mb-2"
                style={{ fontSize: "clamp(0.7rem, 1.5vw, 0.9rem)" }}
              >
                Hello, I&apos;m
              </p>
              <h1 className="leading-[0.88] tracking-tight">
                <span
                  className="block font-black text-[var(--text-bright)] uppercase"
                  style={{
                    fontSize: "clamp(4rem, 11vw, 8.5rem)",
                    letterSpacing: "-0.03em",
                    textShadow: "0 0 80px rgba(255,107,43,0.2)",
                  }}
                >
                  VANSH
                </span>
                <span
                  className="block font-black uppercase"
                  style={{
                    fontSize: "clamp(4rem, 11vw, 8.5rem)",
                    letterSpacing: "-0.03em",
                    WebkitTextStroke: "2px var(--highlight)",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  SAINI
                </span>
              </h1>
            </div>

            {/* Animated role */}
            <div
              className={`flex items-center gap-3 mb-8 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: "230ms" }}
            >
              <Code2 size={13} className="text-[var(--highlight)] flex-shrink-0" />
              <span
                key={roleIdx}
                className="text-sm font-semibold tracking-[0.1em] uppercase text-[var(--text-mid)] animate-fade-up"
              >
                {roles[roleIdx]}
              </span>
            </div>

            {/* Divider */}
            <div
              className={`h-px bg-[var(--divider)] mb-9 transition-all duration-1000 ${
                visible ? "w-full opacity-100" : "w-0 opacity-0"
              }`}
              style={{ transitionDelay: "300ms" }}
            />

            {/* CTA buttons */}
            <div
              className={`flex flex-wrap gap-4 mb-11 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: "360ms" }}
            >
              <button
                onClick={() => scrollTo("#projects")}
                className="group relative flex items-center gap-3 px-8 py-3.5 text-[11px] font-black tracking-[0.22em] uppercase overflow-hidden rounded-sm transition-all duration-200"
                style={{
                  background: "var(--highlight)",
                  color: "var(--background)",
                  boxShadow: "0 4px 24px rgba(255,107,43,0.35)",
                }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  View Work
                  <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
                </span>
                {/* Hover brighten layer */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-200" />
              </button>
              <button
                onClick={() => scrollTo("#contact")}
                className="px-8 py-3.5 border text-[11px] font-bold tracking-[0.22em] uppercase rounded-sm transition-all duration-200"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--text-mid)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--highlight)"
                  e.currentTarget.style.color = "var(--highlight)"
                  e.currentTarget.style.background = "rgba(255,107,43,0.05)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)"
                  e.currentTarget.style.color = "var(--text-mid)"
                  e.currentTarget.style.background = ""
                }}
              >
                Hire Me
              </button>
            </div>

            {/* Stats row */}
            <div
              className={`flex flex-wrap gap-0 mb-10 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "460ms" }}
            >
              {stats.map((s, i) => (
                <div key={s.label} className="flex items-stretch">
                  <div className="pr-8 flex flex-col">
                    <span
                      className="font-black text-[var(--text-bright)] leading-none mb-1"
                      style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
                    >
                      {s.value}
                    </span>
                    <span className="text-[9px] text-[var(--text-dim)] uppercase tracking-[0.22em]">
                      {s.label}
                    </span>
                  </div>
                  {i < stats.length - 1 && (
                    <div className="w-px bg-[var(--divider)] mr-8 self-stretch" />
                  )}
                </div>
              ))}
            </div>

            {/* Socials */}
            <div
              className={`flex items-center gap-3 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "550ms" }}
            >
              <span className="text-[9px] text-[var(--text-dim)] uppercase tracking-[0.25em]">
                Find me
              </span>
              <div className="w-6 h-px bg-[var(--divider)]" />
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center border rounded-sm transition-all duration-200"
                  style={{ borderColor: "var(--border)", color: "var(--text-dim)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--highlight)"
                    e.currentTarget.style.color = "var(--highlight)"
                    e.currentTarget.style.background = "rgba(255,107,43,0.08)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)"
                    e.currentTarget.style.color = "var(--text-dim)"
                    e.currentTarget.style.background = ""
                  }}
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Avatar ── */}
          <div
            className={`relative flex-shrink-0 w-[270px] sm:w-[310px] lg:w-[400px] transition-all duration-1000 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
            }`}
            style={{ transitionDelay: "180ms" }}
          >
            {/* Outer warm glow ring */}
            <div
              className="absolute -inset-6 rounded-sm pointer-events-none animate-glow-pulse"
              style={{ background: "radial-gradient(ellipse, rgba(255,107,43,0.12) 0%, transparent 70%)" }}
            />

            {/* Corner bracket decoration */}
            <div className="relative corner-bracket">
              {/* Left accent strip */}
              <div
                className="absolute -left-3 top-10 bottom-10 w-0.5 rounded-full"
                style={{ background: "linear-gradient(to bottom, transparent, var(--highlight), transparent)" }}
              />

              {/* Teal right strip */}
              <div
                className="absolute -right-3 top-1/4 bottom-1/4 w-px rounded-full"
                style={{ background: "linear-gradient(to bottom, transparent, var(--teal), transparent)" }}
              />

              {/* Avatar image */}
              <div className="relative overflow-hidden rounded-sm scan-line">
                <Image
                  src="/avatar.png"
                  alt="Vansh Saini — Full Stack Developer"
                  width={400}
                  height={520}
                  className="w-full object-cover object-top"
                  style={{
                    filter: "contrast(1.18) brightness(0.88) saturate(1.15) sepia(0.08)",
                  }}
                  priority
                />
                {/* Bottom gradient fade to background */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-28"
                  style={{ background: "linear-gradient(to top, var(--background), transparent)" }}
                />
                {/* Warm key light color overlay — feels lit by the scene */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,107,43,0.08) 0%, transparent 55%, rgba(0,212,200,0.05) 100%)",
                    mixBlendMode: "screen",
                  }}
                />
              </div>

              {/* Floating MERN badge — bottom-right */}
              <div
                className="absolute -bottom-5 -right-5 border px-5 py-3 rounded-sm"
                style={{
                  background: "var(--surface-raised)",
                  borderColor: "rgba(255,107,43,0.3)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                }}
              >
                <p className="text-[8px] text-[var(--text-dim)] uppercase tracking-widest mb-0.5">Stack</p>
                <p className="text-xs font-black text-[var(--highlight)]">MERN</p>
              </div>

              {/* Floating availability badge — top-right */}
              <div
                className="absolute -top-3 -right-3 flex items-center gap-1.5 border px-3 py-1.5 rounded-sm"
                style={{
                  background: "var(--surface-raised)",
                  borderColor: "rgba(0,212,200,0.3)",
                }}
              >
                <Zap size={9} style={{ color: "var(--teal)" }} />
                <span className="text-[9px] font-bold uppercase tracking-wider" style={{ color: "var(--teal)" }}>
                  Open to Work
                </span>
              </div>
            </div>

            {/* Vertical year label */}
            <div className="absolute -right-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 opacity-40">
              <div className="w-px h-14 bg-[var(--divider)]" />
              <span
                className="text-[9px] font-bold text-[var(--text-dim)] uppercase tracking-widest"
                style={{ writingMode: "vertical-rl" }}
              >
                2025 — 2029
              </span>
              <div className="w-px h-14 bg-[var(--divider)]" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-35">
        <div className="w-px h-10 bg-[var(--highlight)] animate-pulse" />
        <span className="text-[8px] text-[var(--text-dim)] uppercase tracking-widest">Scroll</span>
      </div>
    </section>
  )
}
