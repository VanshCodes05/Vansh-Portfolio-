"use client"

import React, { useState } from "react"
import { Send, Github, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "vanshsaini8457@gmail.com",
    href: "mailto:vanshsaini8457@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7895745198",
    href: "tel:+917895745198",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India — Remote Available",
    href: null,
  },
]

const socials = [
  { icon: Github, href: "https://github.com/vansh835", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/vansh___835", label: "Twitter / X" },
]

export default function ContactSection() {
  const ref = useReveal()
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden"
      ref={ref}
      style={{ background: "linear-gradient(180deg, #08080c 0%, #060608 60%, #040406 100%)" }}
    >
      {/* Grid bg */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,107,43,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,43,0.02) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Cinematic centered glow — the final spotlight */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top, rgba(255,107,43,0.065) 0%, transparent 65%)" }}
      />

      {/* Deep vignette — feels like a stage */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 75% at 50% 40%, transparent 30%, rgba(0,0,0,0.65) 100%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="reveal mb-16">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-[var(--highlight)] text-[10px] font-bold tracking-[0.3em] uppercase">
              05 — Contact
            </span>
            <div className="h-px bg-[var(--divider)] w-16" />
          </div>
          <h2
            className="font-black text-[var(--text-bright)] uppercase leading-none"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", letterSpacing: "-0.02em" }}
          >
            Get In Touch
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 lg:gap-20">
          {/* Left: Info panel — 2 cols */}
          <div className="lg:col-span-2 reveal-left">
            <p className="text-[var(--text-dim)] text-sm leading-relaxed mb-10 max-w-sm">
              I&apos;m currently open to new opportunities. Whether you have a project, a
              question, or just want to say hi — my inbox is always open.
            </p>

            {/* Contact info */}
            <div className="space-y-5 mb-10">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-9 h-9 flex items-center justify-center border border-[var(--border)] bg-[var(--surface-raised)] rounded-sm flex-shrink-0">
                    <Icon size={14} className="text-[var(--highlight)]" />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-[var(--text-dim)] mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-semibold text-[var(--text-mid)] hover:text-[var(--highlight)] transition-colors duration-200"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-[var(--text-mid)]">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social icons */}
            <div>
              <p className="text-[9px] uppercase tracking-[0.2em] text-[var(--text-dim)] mb-4">
                Follow Me
              </p>
              <div className="flex items-center gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 flex items-center justify-center border border-[var(--border)] text-[var(--text-dim)] hover:border-[var(--highlight)] hover:text-[var(--highlight)] hover:bg-[var(--highlight)]/5 transition-all duration-200 rounded-sm"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form — 3 cols */}
          <div className="lg:col-span-3 reveal-right">
            {submitted ? (
              <div className="flex flex-col gap-5 py-12">
                <div className="w-12 h-12 flex items-center justify-center border border-[var(--highlight)] bg-[var(--highlight)]/5 rounded-sm">
                  <Send size={18} className="text-[var(--highlight)]" />
                </div>
                <h3 className="text-2xl font-black text-[var(--text-bright)] uppercase tracking-wide">
                  Message Sent
                </h3>
                <p className="text-[var(--text-dim)] text-sm leading-relaxed max-w-sm">
                  Thanks for reaching out! I&apos;ll get back to you as soon as possible, usually within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setForm({ name: "", email: "", subject: "", message: "" })
                  }}
                  className="self-start text-[10px] font-bold text-[var(--highlight)] border-b border-[var(--highlight)]/40 hover:border-[var(--highlight)] transition-colors pb-0.5 uppercase tracking-widest"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {(["name", "email"] as const).map((field) => (
                    <div key={field}>
                      <label className="block text-[9px] font-bold uppercase tracking-[0.25em] text-[var(--text-dim)] mb-2">
                        {field}
                      </label>
                      <input
                        type={field === "email" ? "email" : "text"}
                        name={field}
                        value={form[field]}
                        onChange={handleChange}
                        required
                        placeholder={field === "name" ? "Your full name" : "your@email.com"}
                        className="w-full bg-[var(--surface-raised)] border border-[var(--border)] text-foreground text-sm px-4 py-3 rounded-sm placeholder:text-[var(--text-dim)]/40 focus:outline-none focus:border-[var(--highlight)] transition-all duration-200"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-[9px] font-bold uppercase tracking-[0.25em] text-[var(--text-dim)] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project inquiry / Collaboration"
                    className="w-full bg-[var(--surface-raised)] border border-[var(--border)] text-foreground text-sm px-4 py-3 rounded-sm placeholder:text-[var(--text-dim)]/40 focus:outline-none focus:border-[var(--highlight)] transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-[9px] font-bold uppercase tracking-[0.25em] text-[var(--text-dim)] mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full bg-[var(--surface-raised)] border border-[var(--border)] text-foreground text-sm px-4 py-3 rounded-sm placeholder:text-[var(--text-dim)]/40 focus:outline-none focus:border-[var(--highlight)] transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-3 px-8 py-3.5 bg-[var(--highlight)] text-[var(--background)] text-[10px] font-black tracking-[0.25em] uppercase rounded-sm hover:bg-white disabled:opacity-60 transition-all duration-200"
                >
                  {loading ? (
                    <span className="w-3.5 h-3.5 border-2 border-[var(--background)]/30 border-t-[var(--background)] rounded-full animate-spin" />
                  ) : (
                    <Send size={12} />
                  )}
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 mt-24 pt-8 border-t border-[var(--divider)]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative w-6 h-6 flex items-center justify-center border border-[var(--highlight)]/30 rotate-45">
              <span className="text-[var(--highlight)] font-black text-[10px]">V</span>
            </div>
            <span className="text-[11px] text-[var(--text-dim)] tracking-[0.2em] uppercase">
              Vansh Saini — Full Stack Developer
            </span>
          </div>
          <p className="text-[11px] text-[var(--text-dim)] tracking-wider">
            &copy; {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </section>
  )
}
