import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Target, Languages } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">Passionate about building intelligent solutions that make a difference. With a background in AI, 3D modeling, and embedded systems, I love experimenting with ideas, working on impactful projects, and exploring the intersection of hardware and software.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-none card-hover">
            <CardContent className="p-6">
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Education</h3>
              <p className="text-slate-600 dark:text-slate-300">
                <strong>DY Patil International University</strong><br />
                B.Tech CSE (AI Specialization)<br />
                2022–2026
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-900/20 dark:to-violet-800/20 border-none card-hover">
            <CardContent className="p-6">
              <div className="text-violet-600 dark:text-violet-400 mb-4">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Core Focus</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Hands-on experience in AI-based systems, embedded tech, and automation. Skilled in Python and known for developing patent-backed, real-world solutions like smart assistive devices, robotic systems, and data processing tools.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 border-none card-hover">
            <CardContent className="p-6">
              <div className="text-emerald-600 dark:text-emerald-400 mb-4">
                <Languages className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Languages</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-2">
                <strong>Learning German</strong> (A1 → B1)<br />
                <strong>GRE Prep</strong> (Since Feb 2025)
              </p>
              <div className="text-emerald-600 dark:text-emerald-400 font-bold">🇩🇪 MS in Germany</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
