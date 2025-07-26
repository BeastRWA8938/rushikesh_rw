import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, GraduationCap } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "R&D Intern",
      company: "Arusan Automation Pvt Ltd",
      type: "IoT Hardware",
      description: "Worked on IoT hardware projects including Smart Bell Systems, Smart Blind Stick, Smart Glasses for Blind People, Remote controlled Mannequin with motor driver integration and various other innovative hardware solutions.",
      skills: ["IoT Hardware", "Smart Systems", "Motor Drivers", "Assistive Technology"],
      borderColor: "border-l-4 border-blue-600"
    },
    {
      title: "Research Intern",
      company: "Inje University, South Korea",
      flag: "🇰🇷",
      type: "International",
      description: "Conducted research in advanced computing systems and neural network implementations, focusing on hardware-software integration for AI applications.",
      skills: ["Neural Networks", "Hardware Integration", "Research Methodology"],
      borderColor: "border-l-4 border-primary"
    },
    {
      title: "Data Science Intern",
      company: "Think of It Foundation",
      description: "Extracted and scraped large-scale electoral data using Python, BeautifulSoup, and Selenium for comprehensive political data analysis and visualization.",
      skills: ["Python", "Web Scraping", "Data Analysis"],
      borderColor: "border-l-4 border-emerald-600"
    }
  ]

  const achievements = [
    {
      title: "Academic Excellence",
      subtitle: "Mathematics & Research",
      icon: <Trophy className="h-6 w-6" />,
      color: "from-yellow-50 to-orange-50 dark:from-yellow-900/10 dark:to-orange-900/10",
      borderColor: "border-yellow-200/50 dark:border-yellow-800/30",
      items: [
        { text: "Ganit Week - 1st Prize", icon: "🥇" },
        { text: "IMO Bronze Medal", icon: "🥉" },
        { text: "IMO Silver Medal", icon: "🥈" }
      ]
    },
    {
      title: "Karate Achievements",
      subtitle: "Martial Arts Excellence",
      icon: <Award className="h-6 w-6" />,
      color: "from-red-50 to-pink-50 dark:from-red-900/10 dark:to-pink-900/10",
      borderColor: "border-red-200/50 dark:border-red-800/30",
      items: [
        { text: "Gold Medal - Kata (3rd Class)", icon: "🥇" },
        { text: "Silver Medal - Kata & Fighting (9th Class)", icon: "🥈" }
      ]
    }
  ]

  return (
    <section className="py-16 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Achievements</h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            International research experience and notable achievements in academics and extracurricular activities.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Internship Experience */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">Internship Experience</h3>
            
            {experiences.map((exp, index) => (
              <Card key={index} className={`bg-slate-50 dark:bg-slate-900 ${exp.borderColor}`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold">{exp.title}</h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    {exp.flag && (
                      <div className="text-right text-sm text-slate-500">
                        <div>{exp.flag} {exp.type}</div>
                      </div>
                    )}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-3">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Achievements */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">Achievements & Awards</h3>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className={`bg-gradient-to-r ${achievement.color} border ${achievement.borderColor}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="text-slate-700 dark:text-slate-300 mr-4">
                        {achievement.icon}
                      </div>
                      <div>
                        <h4 className="font-bold">{achievement.title}</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300">{achievement.subtitle}</p>
                      </div>
                    </div>
                    
                    {achievement.items ? (
                      <ul className="space-y-2 text-sm">
                        {achievement.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center">
                            <span className="mr-2">{item.icon}</span>
                            {item.text}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm">
                        <strong>{achievement.description}</strong>
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
