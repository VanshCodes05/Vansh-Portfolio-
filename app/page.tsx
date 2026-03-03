import Navbar from "@/components/portfolio/Navbar"
import HeroSection from "@/components/portfolio/HeroSection"
import AboutSection from "@/components/portfolio/AboutSection"
import ResumeSection from "@/components/portfolio/ResumeSection"
import ProjectsSection from "@/components/portfolio/ProjectsSection"
import ContactSection from "@/components/portfolio/ContactSection"

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ResumeSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
