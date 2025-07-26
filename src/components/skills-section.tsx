import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Brain, Globe, Cpu, Wrench, Server } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-8 w-8" />,
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 90 }
      ]
    },
    {
      title: "AI/ML",
      icon: <Brain className="h-8 w-8" />,
      color: "text-violet-600 dark:text-violet-400",
      bgColor: "bg-violet-100 dark:bg-violet-900/30",
      tags: ["PyTorch", "Scikit-learn", "OpenAI Gym", "Reinforcement Learning", "Regression Models"]
    },
    {
      title: "Web Development",
      icon: <Globe className="h-8 w-8" />,
      color: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
      tags: ["React.js", "Node.js", "Express.js", "Firebase", "MySQL"]
    },
    {
      title: "Embedded Systems",
      icon: <Cpu className="h-8 w-8" />,
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-100 dark:bg-orange-900/30",
      tags: ["Raspberry Pi", "ESP32", "Arduino", "ESP32-CAM"]
    },
    {
      title: "Tools & Others",
      icon: <Wrench className="h-8 w-8" />,
      color: "text-indigo-600 dark:text-indigo-400",
      bgColor: "bg-indigo-100 dark:bg-indigo-900/30",
      tags: ["Git/GitHub", "Electron", "Blender", "Fusion 360", "Unity"]
    },
    {
      title: "Data Extraction",
      icon: <Server className="h-8 w-8" />,
      color: "text-red-600 dark:text-red-400",
      bgColor: "bg-red-100 dark:bg-red-900/30",
      tags: ["BeautifulSoup", "Selenium", "Web Scraping", "Data Processing"]
    }
  ]

  return (
    <section id="skills" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Comprehensive skill set spanning AI/ML, web development, embedded systems, and data processing.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover border border-slate-200 dark:border-slate-700">
              <CardContent className="p-6">
                <div className={`${category.color} mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                
                {category.skills ? (
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center justify-between">
                        <span className="text-sm">{skill.name}</span>
                        <div className="w-24 h-2 bg-slate-200 dark:bg-slate-700 rounded-full">
                          <div 
                            className="h-2 bg-primary rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {category.tags?.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className={category.bgColor}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
