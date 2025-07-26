import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Download, Gamepad2 } from "lucide-react"

// Import project images
import smartBlindStickImage from "@/assets/images/projects/smart-blind-stick.jpg"
import mazeSolvingRobotImage from "@/assets/images/projects/maze-solving-robot.jpg"
import housePricePredictionImage from "@/assets/images/projects/house-price-prediction.jpg"
import spaceSenseAppImage from "@/assets/images/projects/space-sense-app.jpg"
import parkingManagementImage from "@/assets/images/projects/parking-management.jpg"
import flappyBirdCloneImage from "@/assets/images/projects/flappy-bird-clone.jpg"

export function ProjectsSection() {
  const projects = [
    {
      title: "Smart Blind Stick",
      category: "AI/IoT",
      categoryColor: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
      description: "Object detection system using ESP32-CAM and ultrasonic sensors, trained via Roboflow. Presented at I3CEET Conference.",
      image: smartBlindStickImage,
      tags: ["ESP32-CAM", "Roboflow", "Computer Vision"]
    },
    {
      title: "Maze-Solving Robot",
      category: "Robotics",
      categoryColor: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
      description: "Autonomous navigation system with manual and automatic modes using Raspberry Pi and gamepad controls. Used in robotics competition at PCCOER.",
      image: mazeSolvingRobotImage,
      tags: ["Raspberry Pi", "Python", "Path Planning"]
    },
    {
      title: "House Price Prediction",
      category: "ML",
      categoryColor: "bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400",
      description: "Comparative analysis of Linear, Decision Tree, and Random Forest Regression models on housing dataset. Achieved optimal performance with ensemble methods.",
      image: housePricePredictionImage,
      tags: ["Scikit-learn", "Pandas", "Regression"]
    },
    {
      title: "Space Sense App",
      category: "Desktop",
      categoryColor: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",
      description: "Windows application built with Electron that visualizes file sizes and disk usage, similar to CleanMyMac's Space Lens feature.",
      image: spaceSenseAppImage,
      tags: ["Electron", "JavaScript", "Node.js"],
      buttons: [
        { label: "Code", icon: <Github className="h-4 w-4" />, variant: "default" as const, url: "https://github.com/BeastRWA8938/space-sense" }
      ]
    },
    {
      title: "Parking Management",
      category: "Full-Stack",
      categoryColor: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
      description: "Comprehensive parking space management system with real-time availability tracking, built with React frontend and Node.js backend.",
      image: parkingManagementImage,
      tags: ["React", "Firebase", "Express"],
      buttons: [
        { label: "Code", icon: <Github className="h-4 w-4" />, variant: "default" as const, url: "https://github.com/BeastRWA8938/psms" }
      ]
    },
    {
      title: "Flappy Bird Clone",
      category: "Game Dev",
      categoryColor: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
      description: "Classic Flappy Bird game recreation developed in Unity using C# with physics-based gameplay and score tracking system.",
      image: flappyBirdCloneImage,
      tags: ["Unity", "C#", "Game Physics"]
    }
  ]

  return (
    <section id="projects" className="py-16 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Showcase of innovative projects spanning AI/ML, robotics, web development, and embedded systems.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 overflow-hidden card-hover">
              <img 
                src={project.image} 
                alt={`${project.title} project screenshot`}
                className="w-full h-48 object-cover" 
              />
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <Badge className={project.categoryColor}>
                    {project.category}
                  </Badge>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                {project.buttons && (
                  <div className="flex space-x-3">
                    {project.buttons.map((button, buttonIndex) => (
                      <Button 
                        key={buttonIndex}
                        variant={button.variant}
                        size="sm"
                        className="flex-1"
                        onClick={() => window.open(button.url, '_blank')}
                      >
                        {button.icon}
                        <span className="ml-2">{button.label}</span>
                      </Button>
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
