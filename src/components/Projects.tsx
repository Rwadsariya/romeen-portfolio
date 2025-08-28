import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { TypewriterText } from "@/components/TypewriterText"

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section ref={ref} id="projects" className="py-20 snap-start min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={projectVariants} className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Featured <span className="text-gradient">
                <TypewriterText
                  words={["Projects", "Portfolio", "Work"]}
                  delay={1000}
                  speed={200}
                  pauseTime={4000}
                />
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              variants={projectVariants}
            >
              Showcasing AI/ML projects and cloud-native expertise through real-world applications
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid gap-8"
            variants={containerVariants}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 100, rotateX: -15 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    rotateX: 0,
                    transition: {
                      duration: 0.8,
                      delay: index * 0.2,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }
                  }
                }}
                whileHover={{ 
                  scale: 1.02, 
                  rotateY: 2,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="glass-card hover-lift">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      {/* Project Header */}
                      <motion.div 
                        className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <motion.h3 
                              className="text-2xl font-bold"
                              whileHover={{ scale: 1.05 }}
                            >
                              {project.title}
                            </motion.h3>
                            <motion.div
                              whileHover={{ scale: 1.1, rotate: 5 }}
                            >
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
                            </motion.div>
                          </div>
                          <motion.p 
                            className="text-muted-foreground leading-relaxed mb-4"
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                            transition={{ delay: 0.7 + index * 0.2, duration: 0.6 }}
                          >
                            {project.description}
                          </motion.p>
                        </div>
                        
                        {/* Action Buttons */}
                        <motion.div 
                          className="flex gap-3"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ delay: 0.9 + index * 0.2, duration: 0.6 }}
                        >
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
                          </motion.div>
                          {project.liveUrl !== "#" && (
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
                            </motion.div>
                          )}
                        </motion.div>
                      </motion.div>

                      {/* Features */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 1.1 + index * 0.2, duration: 0.6 }}
                      >
                        <h4 className="font-semibold mb-3">Key Features:</h4>
                        <motion.ul 
                          className="grid md:grid-cols-2 gap-2"
                          variants={{
                            hidden: { opacity: 0 },
                            visible: {
                              opacity: 1,
                              transition: {
                                staggerChildren: 0.1
                              }
                            }
                          }}
                          initial="hidden"
                          animate={isInView ? "visible" : "hidden"}
                        >
                          {project.features.map((feature, featureIndex) => (
                            <motion.li 
                              key={featureIndex} 
                              className="flex items-start gap-3"
                              variants={{
                                hidden: { opacity: 0, x: -10 },
                                visible: { opacity: 1, x: 0 }
                              }}
                              whileHover={{ x: 5, scale: 1.02 }}
                            >
                              <motion.div 
                                className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
                                animate={{ 
                                  scale: [1, 1.2, 1],
                                  opacity: [0.7, 1, 0.7]
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: featureIndex * 0.2
                                }}
                              />
                              <span className="text-muted-foreground text-sm">{feature}</span>
                            </motion.li>
                          ))}
                        </motion.ul>
                      </motion.div>

                      {/* Technologies */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 1.3 + index * 0.2, duration: 0.6 }}
                      >
                        <h4 className="font-semibold mb-3">Technologies:</h4>
                        <motion.div 
                          className="flex flex-wrap gap-2"
                          variants={{
                            hidden: { opacity: 0 },
                            visible: {
                              opacity: 1,
                              transition: {
                                staggerChildren: 0.05
                              }
                            }
                          }}
                          initial="hidden"
                          animate={isInView ? "visible" : "hidden"}
                        >
                          {project.technologies.map((tech, techIndex) => (
                            <motion.div
                              key={techIndex}
                              variants={{
                                hidden: { opacity: 0, scale: 0, rotate: -10 },
                                visible: { 
                                  opacity: 1, 
                                  scale: 1, 
                                  rotate: 0,
                                  transition: { duration: 0.3 }
                                }
                              }}
                              whileHover={{ 
                                scale: 1.1, 
                                rotate: 2,
                                transition: { duration: 0.2 }
                              }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Badge 
                                variant="secondary"
                                className="bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </motion.div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-12"
            variants={projectVariants}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <Card className="glass-card max-w-2xl mx-auto">
              <CardContent className="p-8">
                <motion.h3 
                  className="text-2xl font-bold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1.5, duration: 0.6 }}
                >
                  Interested in More Projects?
                </motion.h3>
                <motion.p 
                  className="text-muted-foreground mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1.7, duration: 0.6 }}
                >
                  Check out my GitHub for additional projects and contributions to open-source software.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 1.9, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button asChild className="hover-glow">
                    <a href="https://github.com/Rwadsariya" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View All Projects
                    </a>
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}