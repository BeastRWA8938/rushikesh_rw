import { Button } from "@/components/ui/button"
import { Download, Mail, Github, Linkedin } from "lucide-react"
import profilePhoto from "@/assets/images/profile/profile-photo.jpg"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="pt-20 pb-16 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Rushikesh</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              B.Tech CSE (AI Specialization) Student passionate about <strong>AI/ML Engineering</strong>. 
              Building intelligent systems and pursuing research in reinforcement learning and neural networks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="bg-gradient-to-r from-primary to-violet-600 hover:from-primary/90 hover:to-violet-600/90 transform hover:scale-105 transition-all">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button variant="outline" onClick={scrollToContact}>
                Get In Touch
              </Button>
            </div>
            <div className="flex space-x-6">
              <a href="mailto:rushikeshwaghmode688@gmail.com" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
                <Mail className="h-6 w-6" />
              </a>
              <a href="https://github.com/BeastRWA8938" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/rushikesh-waghmode-967162239" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="animate-fade-in lg:animate-slide-up">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-violet-100/50 dark:from-primary/20 dark:to-violet-900/30 rounded-2xl flex items-center justify-center overflow-hidden">
                <img 
                  src={profilePhoto} 
                  alt="Professional headshot of Rushikesh Waghmore" 
                  className="rounded-2xl h-full object-contain" 
                  style={{ width: 'auto', maxHeight: '100%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
