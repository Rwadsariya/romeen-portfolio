import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Cloud, Database, BarChart3 } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { TypewriterText } from "@/components/TypewriterText"

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section ref={ref} id="skills" className="py-20 section-gradient snap-start min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={cardVariants} className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Areas of <span className="text-gradient">
                <TypewriterText
                  words={["Expertise", "Mastery", "Knowledge"]}
                  delay={1000}
                  speed={200}
                  pauseTime={4000}
                />
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              variants={cardVariants}
            >
              Comprehensive skill set spanning full-stack development, cloud architecture, and data engineering
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.03, 
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="glass-card hover-lift h-full">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      {/* Category Header */}
                      <motion.div 
                        className="flex items-start gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                      >
                        <motion.div 
                          className={`${category.bgColor} p-3 rounded-lg`}
                          whileHover={{ 
                            rotate: 360, 
                            scale: 1.1,
                            transition: { duration: 0.5 }
                          }}
                        >
                          <category.icon className={`h-8 w-8 ${category.color}`} />
                        </motion.div>
                        <div className="flex-1">
                          <motion.h3 
                            className="text-xl font-bold mb-2"
                            whileHover={{ x: 5 }}
                          >
                            {category.title}
                          </motion.h3>
                        </div>
                      </motion.div>

                      {/* Skills Grid */}
                      <motion.div 
                        className="flex flex-wrap gap-2"
                        variants={{
                          hidden: { opacity: 0 },
                          visible: {
                            opacity: 1,
                            transition: {
                              staggerChildren: 0.05,
                              delayChildren: 0.7 + index * 0.1
                            }
                          }
                        }}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                      >
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skillIndex}
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
                              className="hover:scale-105 transition-transform cursor-default bg-muted/50 hover:bg-muted"
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Skills Highlight */}
          <motion.div 
            className="mt-16"
            variants={cardVariants}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <Card className="glass-card max-w-4xl mx-auto">
              <CardContent className="p-8">
                <motion.h3 
                  className="text-2xl font-bold mb-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  Additional Competencies
                </motion.h3>
                <motion.div 
                  className="grid md:grid-cols-3 gap-6 text-center"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.2,
                        delayChildren: 1.4
                      }
                    }
                  }}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  {[
                    { title: "Architecture", desc: "Microservices, REST APIs, OAuth2, System Design", color: "primary" },
                    { title: "Methodologies", desc: "Agile, CI/CD, Test-Driven Development, Code Review", color: "accent" },
                    { title: "Soft Skills", desc: "Team Leadership, Problem Solving, Technical Writing", color: "purple-500" }
                  ].map((comp, index) => (
                    <motion.div 
                      key={index}
                      className="space-y-2"
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <h4 className={`font-semibold text-${comp.color}`}>{comp.title}</h4>
                      <p className="text-sm text-muted-foreground">{comp.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}