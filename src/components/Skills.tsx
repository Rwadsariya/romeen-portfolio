import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Cloud, Database, BarChart3 } from "lucide-react"

const skillCategories = [
  {
    title: "Software Development & Engineering",
    icon: Code,
    color: "text-primary",
    bgColor: "bg-primary/10",
    skills: [
      "Java", "Spring Boot", "Python", "C#", ".NET", "React", "Next.js", 
      "Node.js", "Express.js", "TypeScript", "JavaScript", "API Development", 
      "Database Design", "Python Scripting", "Bash", "R"
    ]
  },
  {
    title: "Cloud & DevOps Solutions",
    icon: Cloud,
    color: "text-accent",
    bgColor: "bg-accent/10",
    skills: [
      "AWS", "EKS", "EC2", "S3", "Docker", "Kubernetes", "Terraform", 
      "Ansible", "Jenkins", "GitLab CI/CD", "ArgoCD", "Grafana", 
      "Prometheus", "Infrastructure as Code"
    ]
  },
  {
    title: "Database & Storage",
    icon: Database,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    skills: [
      "PostgreSQL", "MongoDB", "MySQL", "Redis", "SQL", "Database Design", 
      "Query Optimization", "Data Modeling", "NoSQL", "Caching Strategies"
    ]
  },
  {
    title: "Data & Analytics",
    icon: BarChart3,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    skills: [
      "Data Engineering", "Data Analysis", "R", "SQL", "Python", 
      "Data Reporting", "ETL Pipelines", "Data Visualization", "Statistics"
    ]
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-20 section-gradient snap-start min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Areas of <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set spanning full-stack development, cloud architecture, and data engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-card hover-lift animate-slide-up">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Category Header */}
                  <div className="flex items-start gap-4">
                    <div className={`${category.bgColor} p-3 rounded-lg`}>
                      <category.icon className={`h-8 w-8 ${category.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="hover:scale-105 transition-transform cursor-default bg-muted/50 hover:bg-muted"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Highlight */}
        <div className="mt-16 text-center animate-fade-in">
          <Card className="glass-card max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Additional Competencies</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">Architecture</h4>
                  <p className="text-sm text-muted-foreground">Microservices, REST APIs, OAuth2, System Design</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-accent">Methodologies</h4>
                  <p className="text-sm text-muted-foreground">Agile, CI/CD, Test-Driven Development, Code Review</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-purple-500">Soft Skills</h4>
                  <p className="text-sm text-muted-foreground">Team Leadership, Problem Solving, Technical Writing</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}