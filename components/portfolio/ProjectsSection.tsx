"use client"

import React from "react"
import Image from "next/image"
import { Github, ExternalLink, ArrowUpRight } from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"

const projects = [
  {
    number: "01",
    title: "DevShop — E-Commerce Platform",
    stack: ["React", "Node.js", "MongoDB", "Stripe"],
    desc: "A full-featured e-commerce platform with cart management, Stripe payments, admin dashboard, JWT auth, and real-time inventory updates.",
    image: "/project-ecommerce.jpg",
    github: "https://github.com/vansh835",
    live: "#",
    featured: true,
  },
  {
    number: "02",
    title: "SyncChat — Real-Time Messenger",
    stack: ["React", "Socket.io", "Node.js", "MongoDB"],
    desc: "Real-time messaging app with WebSocket rooms, online presence indicators, message history, and end-to-end encrypted conversations.",
    image: "/project-chat.jpg",
    github: "https://github.com/vansh835",
    live: "#",
    featured: false,
  },
  {
    number: "03",
    title: "DataPulse — Analytics Dashboard",
    stack: ["Next.js", "TypeScript", "TailwindCSS", "REST API"],
    desc: "A responsive SaaS analytics dashboard with live data charts, user management, role-based access control, and exportable reports.",
    image: "/project-dashboard.jpg",
    github: "https://github.com/vansh835",
    live: "#",
    featured: false,
  },
]

export default function ProjectsSection() {
  const ref = useReveal()

  return (
    <section
      id="projects"
      className="relative py-28 overflow-hidden"
      ref={ref}
      style={{ background: "linear-gradient(180deg, #060608 0%, #08080c 60%, #0a0a0e 100%)" }}
    >
      {/* Subtle diagonal grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 39px, rgba(255,255,255,0.008) 40px)",
        }}
      />

      {/* Teal fill — bottom right */}
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at bottom right, rgba(0,212,200,0.045) 0%, transparent 65%)" }}
      />

      {/* Warm accent — top left */}
      <div
        className="absolute top-0 left-0 w-[400px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top left, rgba(255,107,43,0.04) 0%, transparent 65%)" }}
      />

      {/* Edge vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 95% 85% at 50% 50%, transparent 40%, rgba(0,0,0,0.45) 100%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="reveal mb-16">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-[var(--highlight)] text-[10px] font-bold tracking-[0.3em] uppercase">
              04 — Projects
            </span>
            <div className="h-px bg-[var(--divider)] w-16" />
          </div>
          <h2
            className="font-black text-[var(--text-bright)] uppercase leading-none"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", letterSpacing: "-0.02em" }}
          >
            Featured Work
          </h2>
        </div>

        {/* Project list */}
        <div className="space-y-5">
          {projects.map((project, i) => (
            <article
              key={project.number}
              className={`reveal group relative flex flex-col lg:flex-row bg-[var(--surface-raised)] border border-[var(--border)] rounded-sm overflow-hidden hover:border-[var(--highlight)]/30 transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,107,43,0.08)]`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Left accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[var(--highlight)] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

              {/* Image */}
              <div className="relative w-full lg:w-[280px] xl:w-[320px] h-[180px] lg:h-auto flex-shrink-0 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-[var(--background)]/30 group-hover:bg-transparent transition-colors duration-500" />
                {/* Number overlay */}
                <span className="absolute top-3 left-4 text-3xl font-black text-white/10 select-none">
                  {project.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 p-7 lg:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-black text-[var(--text-bright)] uppercase tracking-wide mb-4">
                    {project.title}
                  </h3>

                  {/* Stack tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[9px] font-bold tracking-[0.2em] uppercase border border-[var(--highlight)]/25 text-[var(--highlight)] bg-[var(--highlight)]/5 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-[var(--text-dim)] text-sm leading-relaxed max-w-lg">
                    {project.desc}
                  </p>
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-6 pt-5 border-t border-[var(--divider)]">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.15em] uppercase text-[var(--text-dim)] hover:text-[var(--highlight)] transition-colors duration-200"
                  >
                    <Github size={13} />
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.15em] uppercase text-[var(--text-dim)] hover:text-[var(--highlight)] transition-colors duration-200"
                  >
                    <ExternalLink size={13} />
                    Live Demo
                  </a>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight size={16} className="text-[var(--highlight)]" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="reveal mt-12 flex justify-center">
          <a
            href="https://github.com/vansh835"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-3.5 border border-[var(--border)] text-[var(--text-mid)] text-[10px] font-bold tracking-[0.2em] uppercase rounded-sm hover:border-[var(--highlight)] hover:text-[var(--highlight)] hover:bg-[var(--highlight)]/5 transition-all duration-200"
          >
            <Github size={14} />
            More Projects on GitHub
            <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </section>
  )
}
