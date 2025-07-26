import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Star, Trophy } from "lucide-react"

export function ScholarshipSection() {
  const scholarships = [
    {
      title: "DYPIU Excellence Scholarship",
      category: "Academic Merit",
      description: "Awarded for consistent high CGPA and exceptional performance during B.Tech in CSE (AI Specialization) at DY Patil International University.",
      icon: GraduationCap,
      accentColor: "from-blue-500 to-indigo-600",
      badgeColor: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
    },
    {
      title: "Army Welfare Education Society Scholarship",
      category: "Educational Support", 
      description: "Merit-based scholarship awarded for outstanding academic achievement and discipline.",
      icon: Award,
      accentColor: "from-emerald-500 to-teal-600",
      badgeColor: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300"
    }
  ]

  return (
    <section id="scholarships" className="py-16 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full mr-3">
              <Trophy className="h-6 w-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Academic Scholarships</h2>
          </div>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Recognition of academic excellence and outstanding performance throughout my educational journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {scholarships.map((scholarship, index) => {
            const IconComponent = scholarship.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden bg-slate-800 dark:bg-slate-900 border border-slate-700 dark:border-slate-600 hover:border-slate-500 dark:hover:border-slate-400 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/20 dark:hover:shadow-slate-900/40"
              >
                {/* Gradient accent line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${scholarship.accentColor}`} />
                
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    {/* Icon */}
                    <div className={`flex-shrink-0 p-3 bg-gradient-to-r ${scholarship.accentColor} text-white rounded-xl shadow-lg`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      {/* Title */}
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-slate-100 transition-colors">
                          {scholarship.title}
                        </h3>
                        <Badge className={`${scholarship.badgeColor} font-medium`}>
                          <Star className="h-3 w-3 mr-1" />
                          {scholarship.category}
                        </Badge>
                      </div>
                      
                      {/* Description */}
                      <p className="text-slate-300 dark:text-slate-400 leading-relaxed">
                        {scholarship.description}
                      </p>
                      
                      {/* Decorative element */}
                      <div className="flex items-center pt-2">
                        <div className={`h-px flex-1 bg-gradient-to-r ${scholarship.accentColor} opacity-30`} />
                        <GraduationCap className="h-4 w-4 text-slate-500 mx-3" />
                        <div className={`h-px flex-1 bg-gradient-to-l ${scholarship.accentColor} opacity-30`} />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}