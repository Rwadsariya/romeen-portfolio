import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "ConnectX – AI-Driven Conversational Platform",
    description: "An intelligent conversational platform leveraging OpenAI API for dynamic response generation and user interactions. Built with modern web technologies for optimal performance and user experience.",
    technologies: ["Next.js", "TypeScript", "Prisma", "Zod", "Tailwind CSS", "OpenAI API"],
    features: [
      "Intelligent user interactions with AI",
      "Dynamic response generation",
      "Type-safe database operations with Prisma",
      "Form validation with Zod",
      "Responsive design with Tailwind CSS"
    ],
    githubUrl: "https://github.com/Rwadsariya/ConnectX_4p02",
    liveUrl: "#",
    category: "AI/ML"
  },
  {
    title: "Kubernetes Next.js Shopping App",
    description: "A comprehensive DevOps and cloud project showcasing enterprise-level deployment practices. Features secure infrastructure, automated CI/CD pipelines, and comprehensive monitoring.",
    technologies: ["AWS EKS", "Kubernetes", "Next.js", "Jenkins", "ArgoCD", "Terraform", "Ansible", "Grafana"],
    features: [
      "Secure VPC configuration on AWS EKS",
      "Automated CI/CD pipelines with Jenkins & ArgoCD",
      "Infrastructure as Code with Terraform & Ansible",
      "Comprehensive monitoring with Grafana",
      "Scalable Kubernetes deployment"
    ],
    githubUrl: "https://github.com/Rwadsariya/kubernetes-nextjs-shopping-app",
    liveUrl: "#",
    category: "DevOps"
  },
  {
    title: "Saloon Booking Microservice Application",
    description: "A real-time booking system built with microservices architecture. Features live notifications, responsive UI, and seamless user experience for salon management.",
    technologies: ["Spring Boot", "React", "Redux", "MySQL", "WebSockets", "RabbitMQ", "Docker"],
    features: [
      "Microservices architecture with Spring Boot",
      "Real-time notifications with WebSockets",
      "State management with Redux",
      "Message queuing with RabbitMQ",
      "Containerized with Docker",
      "Responsive React interface"
    ],
    githubUrl: "https://github.com/Rwadsariya/Salon_booking_microservice",
    liveUrl: "#",
    category: "Full-Stack"
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20 snap-start min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing AI/ML projects and cloud-native expertise through real-world applications
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card hover-lift animate-slide-up">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Project Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        <Badge 
                          variant="secondary"
                          className={`
                            ${project.category === 'AI/ML' ? 'bg-purple-500/10 text-purple-500' : ''}
                            ${project.category === 'DevOps' ? 'bg-accent/10 text-accent' : ''}
                            ${project.category === 'Full-Stack' ? 'bg-primary/10 text-primary' : ''}
                          `}
                        >
                          {project.category}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {project.description}
                      </p>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="hover-glow"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      {project.liveUrl !== "#" && (
                        <Button
                          size="sm"
                          asChild
                          className="hover-glow"
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="secondary"
                          className="bg-muted/50 hover:bg-muted transition-colors"
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

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in">
          <Card className="glass-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Interested in More Projects?</h3>
              <p className="text-muted-foreground mb-6">
                Check out my GitHub for additional projects and contributions to open-source software.
              </p>
              <Button asChild className="hover-glow">
                <a href="https://github.com/Rwadsariya" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View All Projects
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}