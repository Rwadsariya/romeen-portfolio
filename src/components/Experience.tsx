import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { TypewriterText } from "@/components/TypewriterText"

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

  const slideInVariants = {
    hidden: { opacity: 0, x: -100, rotateY: -30 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 1
      }
    }
  };

  return (
    <section ref={ref} id="experience" className="py-20 snap-start min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={slideInVariants} className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Professional <span className="text-gradient">
                <TypewriterText
                  words={["Experience", "Journey", "Growth"]}
                  delay={1000}
                  speed={200}
                  pauseTime={4000}
                />
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              variants={slideInVariants}
            >
              Building scalable solutions and driving innovation across different domains
            </motion.p>
          </motion.div>

          <motion.div 
            className="space-y-8"
            variants={containerVariants}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { 
                    opacity: 0, 
                    y: 100,
                    rotateX: -30
                  },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    rotateX: 0,
                    transition: {
                      duration: 0.8,
                      delay: index * 0.2
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
                      {/* Header */}
                      <motion.div 
                        className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                      >
                        <div>
                          <motion.h3 
                            className="text-2xl font-bold text-primary"
                            whileHover={{ scale: 1.05 }}
                          >
                            {exp.role}
                          </motion.h3>
                          <motion.h4 
                            className="text-xl font-semibold"
                            whileHover={{ x: 5 }}
                          >
                            {exp.company}
                          </motion.h4>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                          <motion.div 
                            className="flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                          >
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">{exp.duration}</span>
                          </motion.div>
                          <motion.div 
                            className="flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                          >
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{exp.location}</span>
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* Achievements */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.7 + index * 0.2, duration: 0.6 }}
                      >
                        <h5 className="font-semibold mb-3 text-foreground">Key Achievements:</h5>
                        <motion.ul className="space-y-2">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <motion.li 
                              key={achievementIndex} 
                              className="flex items-start gap-3"
                              initial={{ opacity: 0, x: -10 }}
                              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                              transition={{ 
                                delay: 0.8 + index * 0.2 + achievementIndex * 0.1,
                                duration: 0.4 
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
                                  delay: achievementIndex * 0.2
                                }}
                              />
                              <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                            </motion.li>
                          ))}
                        </motion.ul>
                      </motion.div>

                      {/* Technologies */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                      >
                        <h5 className="font-semibold mb-3 text-foreground">Technologies Used:</h5>
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
                          {exp.technologies.map((tech, techIndex) => (
                            <motion.div
                              key={techIndex}
                              variants={{
                                hidden: { opacity: 0, scale: 0, y: 10 },
                                visible: { 
                                  opacity: 1, 
                                  scale: 1, 
                                  y: 0,
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
                                className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-pointer"
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
        </motion.div>
      </div>
    </section>
  )
}