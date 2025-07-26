import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ResearchSection } from "@/components/research-section"
import { ScholarshipSection } from "@/components/scholarship-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"
import { Mail, Github, Linkedin } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ResearchSection />
      <ScholarshipSection />
      <ExperienceSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Rushikesh Waghmore</h3>
              <p className="text-slate-300 mb-4">
                B.Tech CSE (AI Specialization) Student passionate about AI/ML Engineering and research.
              </p>
              <div className="flex space-x-4">
                <a href="mailto:rushikeshwaghmode688@gmail.com" className="text-slate-400 hover:text-primary transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
                <a href="https://github.com/BeastRWA8938" className="text-slate-400 hover:text-primary transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com/in/rushikesh-waghmode-967162239" className="text-slate-400 hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-300">
                {["About", "Skills", "Projects", "Research", "Scholarships", "Contact"].map((link) => (
                  <li key={link}>
                    <button 
                      onClick={() => document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" })}
                      className="hover:text-primary transition-colors"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Currently Working On</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>🎓 B.Tech CSE (AI Specialization)</li>
                <li>🔬 Neuromorphic Computing Research</li>
                <li>🇩🇪 Learning German for MS Programs</li>
                <li>📚 GRE Preparation (Feb 2025)</li>
                <li>🚀 Seeking AI/ML Internships</li>
              </ul>
            </div>
            
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Rushikesh Waghmore. All rights reserved.</p>
            <p className="text-sm mt-2">Built with React, Tailwind CSS, and TypeScript</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
