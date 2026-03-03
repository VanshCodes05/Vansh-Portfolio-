"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [active, setActive] = useState("Home")
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleNav = (label: string, href: string) => {
    setActive(label)
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#060608]/92 backdrop-blur-xl border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo mark */}
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <div className="absolute inset-0 border border-[var(--highlight)]/40 rotate-45" />
            <span className="text-[var(--highlight)] font-black text-sm z-10">V</span>
          </div>
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--text-mid)]">
            Vansh Saini
          </span>
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleNav(link.label, link.href)}
                className={`relative text-[11px] font-semibold tracking-[0.22em] uppercase transition-colors duration-200 group ${
                  active === link.label
                    ? "text-[var(--highlight)]"
                    : "text-[var(--text-dim)] hover:text-foreground"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px transition-all duration-300 bg-[var(--highlight)] ${
                    active === link.label ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNav("Contact", "#contact") }}
            className="px-5 py-2 text-[10px] font-bold tracking-[0.2em] uppercase border border-[var(--highlight)] text-[var(--highlight)] hover:bg-[var(--highlight)] hover:text-[var(--background)] transition-all duration-200 rounded-sm"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--surface)]/95 backdrop-blur-xl border-b border-[var(--border)] px-6 py-5 flex flex-col gap-5">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.label, link.href)}
              className={`text-sm font-semibold tracking-[0.15em] uppercase text-left transition-colors ${
                active === link.label
                  ? "text-[var(--highlight)]"
                  : "text-[var(--text-dim)] hover:text-foreground"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
