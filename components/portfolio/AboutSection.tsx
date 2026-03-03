"use client"

import React from "react"
import Image from "next/image"
import { MapPin, Mail, ExternalLink } from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"

const skills = [
  "React.js", "Node.js", "MongoDB", "Express.js",
  "TailwindCSS", "REST APIs", "Git & GitHub", "MySQL",
  "TypeScript", "Next.js",
]

export default function AboutSection() {
  const ref = useReveal()

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #09090c 0%, #0b0b0f 50%, #060608 100%)" }}
    >
      {/* Grid bg */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,107,43,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,43,0.02) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Diagonal cinematic slice of warm light */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: "linear-gradient(115deg, rgba(255,107,43,0.04) 0%, transparent 40%)",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 90% 80% at 50% 50%, transparent 35%, rgba(0,0,0,0.5) 100%)",
        }}
      />

      {/* Teal fill light — bottom left */}
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at bottom left, rgba(0,212,200,0.04) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="reveal mb-16">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-[var(--highlight)] text-[10px] font-bold tracking-[0.3em] uppercase">
              02 — About
            </span>
            <div className="flex-1 h-px bg-[var(--divider)]" />
          </div>
          <h2
            className="font-black text-[var(--text-bright)] uppercase leading-none"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", letterSpacing: "-0.02em" }}
          >
            Who I Am
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-20">
          {/* LEFT: Portrait */}
          <div className="reveal-left relative flex-shrink-0 w-full max-w-[300px] lg:w-[340px] mx-auto lg:mx-0">
            {/* Teal accent strip */}
            <div className="absolute -left-3 top-8 bottom-8 w-0.5 bg-[var(--teal)] rounded-full" />

            {/* Image frame */}
            <div className="relative corner-bracket overflow-hidden rounded-sm">
              <Image
                src="/avatar.jpg"
                alt="Vansh Saini portrait"
                width={280}
                height={360}
                className="rounded-xl object-cover"
                style={{
                  filter: "grayscale(15%) contrast(1.12) brightness(0.85) saturate(1.05)",
                }}
              />
              {/* Overlay gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--surface)] to-transparent" />

              {/* Location chip */}
              <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-[var(--surface)]/80 backdrop-blur-sm border border-[var(--border)] px-3 py-1.5 rounded-sm">
                <MapPin size={10} className="text-[var(--teal)]" />
                <span className="text-[10px] text-[var(--text-mid)] font-medium">India</span>
              </div>
            </div>

            {/* Email below image */}
            <div className="mt-5 flex items-center gap-2 text-[var(--text-dim)] text-xs">
              <Mail size={11} className="text-[var(--highlight)]" />
              <a
                href="mailto:vanshsaini8457@gmail.com"
                className="hover:text-[var(--highlight)] transition-colors"
              >
                vanshsaini8457@gmail.com
              </a>
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="reveal-right flex-1">
            {/* Gold quote bar + bio */}
            <div className="flex gap-5 mb-10">
              <div className="w-0.5 bg-[var(--highlight)] flex-shrink-0 rounded-full" />
              <div>
                <p className="text-[var(--foreground)] text-base leading-[1.85] font-light mb-6">
                  I&apos;m a{" "}
                  <span className="text-[var(--text-bright)] font-semibold">Full Stack Developer</span>{" "}
                  focused on building modern, scalable, and performance-driven web applications
                  using React, Node.js, and MongoDB. I enjoy turning complex problems into clean,
                  efficient solutions.
                </p>
                <p className="text-[var(--text-dim)] text-sm leading-[1.85]">
                  My greatest strength is bridging design and engineering to create seamless user
                  experiences. I take pride in writing code that is readable, maintainable, and
                  built to last. Currently open to freelance and full-time opportunities.
                </p>
              </div>
            </div>

            {/* Skills grid */}
            <div className="mb-10">
              <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[var(--text-dim)] mb-4">
                Core Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="group px-3 py-1.5 text-[10px] font-semibold tracking-[0.15em] uppercase border border-[var(--border)] text-[var(--text-dim)] rounded-sm hover:border-[var(--highlight)] hover:text-[var(--highlight)] hover:bg-[var(--highlight)]/5 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Info row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 pt-8 border-t border-[var(--divider)]">
              {[
                { label: "Location", value: "Roorkee, Uttrakhand, India" },
                { label: "Availability", value: "Open to Work" },
                { label: "Experience", value: "2+ Years" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[var(--text-dim)] mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm font-bold text-[var(--text-bright)]">{item.value}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--highlight)] border-b border-[var(--highlight)]/40 hover:border-[var(--highlight)] pb-0.5 transition-colors"
              >
                Get in touch
                <ExternalLink size={11} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
