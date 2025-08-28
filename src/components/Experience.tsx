import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    company: "Brock University",
    role: "Software Engineer-Research Assistant",
    duration: "Jan 2024 – Jul 2025",
    location: "Ontario, Canada",
    achievements: [
      "Spring Boot microservices with Spring Security & AOP, reducing code duplication by 35%",
      "Docker & Kubernetes deployment with Terraform & Ansible on AWS EKS with VPC/security group",
      "Python & AWS SageMaker ML model deployment, improving prediction accuracy by 35%",
      "Centralized logging with Grafana + Prometheus and PromQL queries, increasing fault diagnosis accuracy by 20%",
      "Data pipelines & backend services using R, Python, Java, SQL"
    ],
    technologies: [
      "Spring Boot", "Docker", "Kubernetes", "Terraform", "Ansible", 
      "AWS EKS", "Python", "SageMaker", "Grafana", "Prometheus"
    ]
  },
  {
    company: "Captivate X",
    role: "SWE Intern",
    duration: "May 2024 – Dec 2024",
    location: "Remote",
    achievements: [
      "Next.js + React dashboards with PostgreSQL & MongoDB for analytics",
      "Redux state management & TypeScript for reduced UI latency & runtime errors",
      "Auth0 authentication flows with role-based access control",
      "Dockerized services with multi-stage builds on AWS EC2 & S3",
      "Real-time notifications using WebSockets & Redis"
    ],
    technologies: [
      "Next.js", "React", "Redux", "TypeScript", "PostgreSQL", 
      "MongoDB", "Auth0", "Docker", "AWS EC2", "WebSockets", "Redis"
    ]
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building scalable solutions and driving innovation across different domains
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="glass-card hover-lift animate-slide-up">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary">{exp.role}</h3>
                      <h4 className="text-xl font-semibold">{exp.company}</h4>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h5 className="font-semibold mb-3 text-foreground">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="font-semibold mb-3 text-foreground">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary"
                          className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}