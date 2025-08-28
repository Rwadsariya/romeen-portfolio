import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import reactLogo from "@/assets/tech/react.svg"
import nextjsLogo from "@/assets/tech/nextjs.svg"
import springLogo from "@/assets/tech/spring.svg"
import pythonLogo from "@/assets/tech/python.svg"
import terraformLogo from "@/assets/tech/terraform.svg"
import ansibleLogo from "@/assets/tech/ansible.svg"
import dockerLogo from "@/assets/tech/docker.svg"
import kubernetesLogo from "@/assets/tech/kubernetes.svg"
import mongodbLogo from "@/assets/tech/mongodb.svg"
import nodejsLogo from "@/assets/tech/nodejs.svg"
import awsLogo from "@/assets/tech/aws.svg"
import javaLogo from "@/assets/tech/java.svg"
import linuxLogo from "@/assets/tech/linux.svg"
import grafanaLogo from "@/assets/tech/grafana.svg"
import redisLogo from "@/assets/tech/redis.svg"
import postgresqlLogo from "@/assets/tech/postgresql.svg"
import gitLogo from "@/assets/tech/git.svg"
import vscodeLogo from "@/assets/tech/vscode.svg"

export function Hero() {
  const handleScroll = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="home" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Column - Message */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="overflow-hidden">
                <motion.h1 
                  className="text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.span 
                    className="block text-muted-foreground"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                  >
                    Hey,
                  </motion.span>
                  <motion.span 
                    className="block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    I am a
                  </motion.span>
                  <motion.span 
                    className="block text-primary"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    Software
                  </motion.span>
                  <motion.span 
                    className="block text-primary"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    Developer
                  </motion.span>
                </motion.h1>
              </div>
              
              <motion.p 
                className="text-xl text-muted-foreground max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Building scalable applications with modern technologies and cloud infrastructure. 
                Passionate about creating efficient, user-focused solutions.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  onClick={() => handleScroll("#contact")}
                  className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get In Touch
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => handleScroll("#projects")}
                  className="rounded-full px-8 font-semibold border-2 hover:bg-accent/10 hover:border-accent transition-all duration-300"
                >
                  View Work
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              {[
                { href: "https://github.com/Rwadsariya", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/romeen-wadsariya-607348249/", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:rominwadsariya@gmail.com", icon: Mail, label: "Email" }
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>
                  <span className="font-medium group-hover:text-primary transition-colors">{label}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Image and Tech Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="grid grid-cols-4 grid-rows-5 gap-4 h-[700px]">
              
              {/* Main Profile Image - Takes 2x3 space */}
              <motion.div 
                className="col-span-2 row-span-3 rounded-3xl overflow-hidden shadow-xl group relative"
                animate={{
                  y: [-5, 5, -5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="/lovable-uploads/2835804e-039a-4f91-ae5e-57761e2f6534.png"
                  alt="Romeen Wadsariya"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              {/* Tech Icons Grid - Enhanced with new icons */}
              <motion.div 
                className="col-span-2 row-span-2 grid grid-cols-2 gap-2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* React */}
                <motion.div 
                  className="bg-card rounded-2xl p-3 flex flex-col items-center justify-center hover:bg-accent/20 transition-colors group cursor-pointer shadow-md hover:shadow-lg"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <motion.img 
                    src={reactLogo} 
                    alt="React" 
                    className="h-8 w-8"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="text-xs font-medium mt-1 text-muted-foreground group-hover:text-foreground transition-colors">React</span>
                </motion.div>

                {/* Next.js */}
                <motion.div 
                  className="bg-card rounded-2xl p-3 flex flex-col items-center justify-center hover:bg-accent/20 transition-colors group cursor-pointer shadow-md hover:shadow-lg"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <motion.img 
                    src={nextjsLogo} 
                    alt="Next.js" 
                    className="h-8 w-8 filter dark:invert"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="text-xs font-medium mt-1 text-muted-foreground group-hover:text-foreground transition-colors">Next.js</span>
                </motion.div>

                {/* Node.js */}
                <motion.div 
                  className="bg-card rounded-2xl p-3 flex flex-col items-center justify-center hover:bg-accent/20 transition-colors group cursor-pointer shadow-md hover:shadow-lg"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <motion.img 
                    src={nodejsLogo} 
                    alt="Node.js" 
                    className="h-8 w-8"
                    whileHover={{ rotate: -180 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="text-xs font-medium mt-1 text-muted-foreground group-hover:text-foreground transition-colors">Node.js</span>
                </motion.div>

                {/* VS Code */}
                <motion.div 
                  className="bg-card rounded-2xl p-3 flex flex-col items-center justify-center hover:bg-accent/20 transition-colors group cursor-pointer shadow-md hover:shadow-lg"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <motion.img 
                    src={vscodeLogo} 
                    alt="VS Code" 
                    className="h-8 w-8"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="text-xs font-medium mt-1 text-muted-foreground group-hover:text-foreground transition-colors">VS Code</span>
                </motion.div>
              </motion.div>

              {/* Backend Technologies - Spring Boot & Java */}
              <motion.div 
                className="col-span-2 row-span-1 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-4 flex items-center justify-center space-x-4 hover:from-primary/20 hover:to-accent/20 transition-colors shadow-md hover:shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.img 
                  src={springLogo} 
                  alt="Spring Boot" 
                  className="h-10 w-10"
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.img 
                  src={javaLogo} 
                  alt="Java" 
                  className="h-10 w-10"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="font-semibold text-foreground">Backend</span>
              </motion.div>

              {/* Database Section */}
              <motion.div 
                className="col-span-2 row-span-1 grid grid-cols-3 gap-2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* MongoDB */}
                <motion.div 
                  className="bg-card rounded-xl p-2 flex flex-col items-center justify-center hover:bg-accent/20 transition-colors group cursor-pointer shadow-md hover:shadow-lg"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <motion.img 
                    src={mongodbLogo} 
                    alt="MongoDB" 
                    className="h-6 w-6"
                    whileHover={{ rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="text-xs font-medium mt-1 text-muted-foreground group-hover:text-foreground transition-colors">MongoDB</span>
                </motion.div>

                {/* PostgreSQL */}
                <motion.div 
                  className="bg-card rounded-xl p-2 flex flex-col items-center justify-center hover:bg-accent/20 transition-colors group cursor-pointer shadow-md hover:shadow-lg"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <motion.img 
                    src={postgresqlLogo} 
                    alt="PostgreSQL" 
                    className="h-6 w-6"
                    whileHover={{ rotate: -10 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="text-xs font-medium mt-1 text-muted-foreground group-hover:text-foreground transition-colors">PostgreSQL</span>
                </motion.div>

                {/* Redis */}
                <motion.div 
                  className="bg-card rounded-xl p-2 flex flex-col items-center justify-center hover:bg-accent/20 transition-colors group cursor-pointer shadow-md hover:shadow-lg"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <motion.img 
                    src={redisLogo} 
                    alt="Redis" 
                    className="h-6 w-6"
                    whileHover={{ rotate: 15 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="text-xs font-medium mt-1 text-muted-foreground group-hover:text-foreground transition-colors">Redis</span>
                </motion.div>
              </motion.div>

              {/* DevOps & Cloud Section */}
              <motion.div 
                className="col-span-4 row-span-1 bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 rounded-2xl p-4 flex items-center justify-between shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                whileHover={{ scale: 1.01 }}
              >
                <motion.div 
                  className="flex space-x-3"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {[
                    { src: dockerLogo, alt: "Docker", name: "Docker" },
                    { src: kubernetesLogo, alt: "Kubernetes", name: "K8s" },
                    { src: terraformLogo, alt: "Terraform", name: "Terraform" },
                    { src: awsLogo, alt: "AWS", name: "AWS" },
                    { src: grafanaLogo, alt: "Grafana", name: "Grafana" },
                    { src: linuxLogo, alt: "Linux", name: "Linux" },
                    { src: gitLogo, alt: "Git", name: "Git" }
                  ].map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      className="group relative"
                      variants={itemVariants}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <img src={tech.src} alt={tech.alt} className="h-8 w-8" />
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {tech.name}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  <div className="text-sm font-medium text-muted-foreground">DevOps & Cloud</div>
                  <div className="text-lg font-bold text-primary">Infrastructure</div>
                </motion.div>
              </motion.div>

              {/* Python */}
              <motion.div 
                className="col-span-1 row-span-1 bg-card rounded-2xl p-3 flex flex-col items-center justify-center hover:bg-accent/20 transition-colors group cursor-pointer shadow-md hover:shadow-lg"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <motion.img 
                  src={pythonLogo} 
                  alt="Python" 
                  className="h-8 w-8"
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="text-xs font-medium mt-1 text-muted-foreground group-hover:text-foreground transition-colors">Python</span>
              </motion.div>

              {/* Ansible */}
              <motion.div 
                className="col-span-1 row-span-1 bg-card rounded-2xl p-3 flex flex-col items-center justify-center hover:bg-accent/20 transition-colors group cursor-pointer shadow-md hover:shadow-lg"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <motion.img 
                  src={ansibleLogo} 
                  alt="Ansible" 
                  className="h-8 w-8"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="text-xs font-medium mt-1 text-muted-foreground group-hover:text-foreground transition-colors">Ansible</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}