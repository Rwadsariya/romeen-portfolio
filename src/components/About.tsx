import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, BookOpen, Award, Users } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { TypewriterText } from "@/components/TypewriterText"

export function About() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section ref={ref} id="about" className="py-20 section-gradient snap-start min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              About <span className="text-gradient">
                <TypewriterText
                  words={["Me", "My Journey", "My Story"]}
                  delay={1000}
                  speed={200}
                  pauseTime={4000}
                />
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Passionate about building scalable solutions and exploring cutting-edge technologies
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio Section */}
            <motion.div variants={slideInLeft} className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="glass-card hover-lift">
                  <CardContent className="p-8">
                    <motion.div 
                      className="space-y-4 text-lg leading-relaxed"
                      variants={containerVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                    >
                      <motion.p variants={itemVariants}>
                        I'm a <span className="text-primary font-semibold">passionate Software Engineer</span> and 
                        <span className="text-primary font-semibold"> Full Stack Developer</span> with hands-on experience 
                        building scalable, secure, and cloud-native applications.
                      </motion.p>
                      
                      <motion.p variants={itemVariants}>
                        My technical toolkit includes <span className="text-accent font-semibold">Java Spring Boot</span>, 
                        <span className="text-accent font-semibold"> Node.js</span>, 
                        <span className="text-accent font-semibold"> React</span>, and 
                        <span className="text-accent font-semibold"> Next.js</span>, backed by strong knowledge of 
                        REST APIs, OAuth2, and microservices architecture.
                      </motion.p>

                      <motion.p variants={itemVariants}>
                        I also enjoy working with tools like <span className="text-primary font-semibold">Kubernetes</span>, 
                        <span className="text-primary font-semibold"> AWS</span>, and 
                        <span className="text-primary font-semibold"> Terraform</span> to streamline cloud deployments 
                        and infrastructure automation.
                      </motion.p>

                      <motion.p variants={itemVariants}>
                        Beyond coding, I care deeply about <span className="text-accent font-semibold">system performance</span>, 
                        <span className="text-accent font-semibold"> developer experience</span>, and 
                        <span className="text-accent font-semibold"> continuous learning</span>. Currently exploring 
                        Kubernetes in-depth and expanding my knowledge in infrastructure-as-code and observability tools.
                      </motion.p>

                      <motion.p 
                        variants={itemVariants}
                        className="text-primary font-medium"
                      >
                        🔍 Always open to connecting with fellow developers, mentors, and teams tackling meaningful engineering problems.
                      </motion.p>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Education Section */}
            <motion.div variants={slideInRight} className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02, rotateY: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="glass-card hover-lift">
                  <CardContent className="p-8">
                    <motion.div 
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    >
                      <motion.div 
                        className="bg-primary/10 p-3 rounded-lg"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <GraduationCap className="h-8 w-8 text-primary" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">Education</h3>
                        <div className="space-y-3">
                          <div>
                            <h4 className="text-lg font-semibold text-primary">
                              Bachelor of Science (Honors) in Computer Science
                            </h4>
                            <p className="text-muted-foreground">Brock University</p>
                            <p className="text-sm text-muted-foreground">May 2022 – Jul 2025</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, rotateX: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="glass-card hover-lift">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <motion.div 
                        className="bg-accent/10 p-3 rounded-lg"
                        whileHover={{ rotate: -360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <BookOpen className="h-8 w-8 text-accent" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-4">Relevant Coursework</h3>
                        <motion.div 
                          className="grid grid-cols-1 gap-2"
                          variants={containerVariants}
                          initial="hidden"
                          animate={isInView ? "visible" : "hidden"}
                        >
                          {[
                            "Data Structures & Algorithms",
                            "Database System",
                            "Software Engineering I & II",
                            "Advanced Object-Oriented Programming",
                            "Cybersecurity",
                            "Computer Networks"
                          ].map((course, index) => (
                            <motion.div 
                              key={index}
                              variants={{
                                hidden: { opacity: 0, x: -20 },
                                visible: { 
                                  opacity: 1, 
                                  x: 0,
                                  transition: { delay: index * 0.1, duration: 0.5 }
                                }
                              }}
                              className="bg-muted/50 px-3 py-2 rounded-md text-sm font-medium hover:bg-muted transition-colors"
                              whileHover={{ scale: 1.05, x: 5 }}
                            >
                              {course}
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Awards & Recognition Section */}
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="glass-card hover-lift">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <motion.div 
                        className="bg-amber-500/10 p-3 rounded-lg"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Award className="h-8 w-8 text-amber-500" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-4">Awards & Recognition</h3>
                        <motion.div 
                          className="space-y-4"
                          variants={containerVariants}
                          initial="hidden"
                          animate={isInView ? "visible" : "hidden"}
                        >
                          {[
                            { title: "Dean's Scholar Award", desc: "Awarded for Year 1, 2, 3, and 4 of undergraduate studies at Brock University", color: "primary" },
                            { title: "Best Youth Volunteer Award", desc: "Recognized by the Government of Ontario for outstanding community service", color: "accent" },
                            { title: "Matching Minds Research Program", desc: "Selected participant for research-based initiatives", color: "primary" },
                            { title: "Alumni Scholarship", desc: "Awarded for academic excellence", color: "accent" }
                          ].map((award, index) => (
                            <motion.div 
                              key={index}
                              variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { 
                                  opacity: 1, 
                                  y: 0,
                                  transition: { delay: index * 0.1, duration: 0.5 }
                                }
                              }}
                              className={`border-l-2 border-${award.color}/20 pl-4 hover:border-${award.color}/50 transition-colors`}
                              whileHover={{ x: 10, scale: 1.02 }}
                            >
                              <h4 className={`font-semibold text-${award.color}`}>{award.title}</h4>
                              <p className="text-sm text-muted-foreground">{award.desc}</p>
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Leadership & Involvement Section */}
              <motion.div
                whileHover={{ scale: 1.02, rotateX: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="glass-card hover-lift">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <motion.div 
                        className="bg-emerald-500/10 p-3 rounded-lg"
                        whileHover={{ rotate: -360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Users className="h-8 w-8 text-emerald-500" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-4">Leadership & Involvement</h3>
                        <motion.div 
                          className="space-y-4"
                          variants={containerVariants}
                          initial="hidden"
                          animate={isInView ? "visible" : "hidden"}
                        >
                          {[
                            { title: "Team Lead, Ismaili Volunteers Canada (IVC)", desc: "Led and coordinated volunteer initiatives, fostering teamwork and community engagement" },
                            { title: "Computer Science Mentor", desc: "Supported incoming COSC students, providing guidance on coursework, projects, and career development" }
                          ].map((role, index) => (
                            <motion.div 
                              key={index}
                              variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { 
                                  opacity: 1, 
                                  y: 0,
                                  transition: { delay: index * 0.1, duration: 0.5 }
                                }
                              }}
                              className="border-l-2 border-emerald-500/20 pl-4 hover:border-emerald-500/50 transition-colors"
                              whileHover={{ x: 10, scale: 1.02 }}
                            >
                              <h4 className="font-semibold text-emerald-600 dark:text-emerald-400">{role.title}</h4>
                              <p className="text-sm text-muted-foreground">{role.desc}</p>
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}