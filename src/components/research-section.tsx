import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Microscope, ChevronRight } from "lucide-react"

export function ResearchSection() {
  const patents = [
    {
      title: "Smart Blind Stick",
      number: "Design Patent No. 413548-001",
      description: "Innovative assistive technology for visually impaired individuals"
    },
    {
      title: "Memristor Array for Brain-o-morphic Engineering",
      number: "Utility Patent No. 202421068436",
      description: "Neural network hardware implementation using memristor technology"
    },
    {
      title: "Rain Inducing Flute",
      number: "Design Patent No. 427900-001",
      description: "Novel acoustic-based weather modification device"
    }
  ]

  const researchInterests = [
    "Reinforcement Learning (MountainCar-v0, OpenAI Gym)",
    "Advanced Regression Models & Analysis"
  ]

  return (
    <section id="research" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Research & Patents</h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Published research and patent portfolio spanning innovative designs and brain-inspired computing solutions.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Patents Section */}
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border-none">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-600 text-white rounded-lg mr-4">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Patents Portfolio</h3>
                  <p className="text-slate-600 dark:text-slate-300">6 Patents Filed</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {patents.map((patent, index) => (
                  <Card key={index} className="bg-white/70 dark:bg-slate-800/50 border border-white/20">
                    <CardContent className="p-4">
                      <h4 className="font-bold mb-1">{patent.title}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{patent.number}</p>
                      <p className="text-sm">{patent.description}</p>
                    </CardContent>
                  </Card>
                ))}
                
                <div className="text-center pt-4">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    View All Patents
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Research Section */}
          <Card className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/10 dark:to-purple-900/10 border-none">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-violet-600 text-white rounded-lg mr-4">
                  <Microscope className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Research Work</h3>
                  <p className="text-slate-600 dark:text-slate-300">Published & Presented</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <Card className="bg-white/70 dark:bg-slate-800/50 border border-white/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">Memristor Research</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      Presented at ACMESGA 2k24 Conference
                    </p>
                    <p className="text-sm mb-4">
                      Advanced research on memristor-based neuromorphic computing architectures for brain-inspired AI systems.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Neuromorphic Computing", "Memristors", "AI Hardware", "3D Modeling"].map((tag, index) => (
                        <Badge key={index} className="bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/70 dark:bg-slate-800/50 border border-white/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">Cane Vision</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      Presented at I3CEET Conference
                    </p>
                    <p className="text-sm mb-4">
                      AI-powered smart stick designed to assist visually impaired individuals using object detection, vibration feedback, and ultrasonic sensing. Filed for patent and developed using embedded systems and Edge Impulse for custom model training.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Assistive Technology", "Edge Impulse", "Embedded AI"].map((tag, index) => (
                        <Badge key={index} className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/70 dark:bg-slate-800/50 border border-white/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">AI/ML Research Interests</h4>
                    <ul className="text-sm space-y-2">
                      {researchInterests.map((interest, index) => (
                        <li key={index} className="flex items-center">
                          <ChevronRight className="h-4 w-4 text-violet-600 mr-2" />
                          {interest}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
