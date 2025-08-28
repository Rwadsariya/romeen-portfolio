import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TypewriterText } from "@/components/TypewriterText"
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
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 200
      }
    }
  };

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 snap-start">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center w-full"
        >
          {/* Left Column - Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-4">
              <motion.h1 
                variants={titleVariants}
                initial="hidden"
                animate="visible"
                className="text-5xl md:text-7xl font-bold leading-tight"
              >
                {"Hey, I am a".split("").map((char, index) => (
                  <motion.span key={index} variants={letterVariants}>
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}{" "}
                <motion.span 
                  className="text-gradient block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5, duration: 0.8, type: "spring" }}
                >
                  <TypewriterText
                    words={["Software Developer", "Full Stack Engineer", "Cloud Architect", "DevOps Enthusiast"]}
                    delay={2000}
                    speed={150}
                    deleteSpeed={100}
                    pauseTime={3000}
                  />
                </motion.span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl text-muted-foreground max-w-lg leading-relaxed"
              >
                Building scalable applications with modern technologies and cloud infrastructure. 
                Passionate about creating efficient, user-focused solutions.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  onClick={() => handleScroll("contact")}
                  className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Get In Touch
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                    animate={{ x: ["0%", "200%"] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => handleScroll("projects")}
                  className="group"
                >
                  View Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              variants={itemVariants}
              className="flex gap-6"
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
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Enhanced Tech Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            {/* Floating Profile Image */}
            <motion.div
              animate={{
                y: [-10, 10, -10],
                rotate: [-1, 1, -1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="mb-8 flex justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="relative w-48 h-48 rounded-full overflow-hidden shadow-2xl border-4 border-primary/20"
              >
                <img
                  src="/lovable-uploads/2835804e-039a-4f91-ae5e-57761e2f6534.png"
                  alt="Romeen Wadsariya"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </motion.div>
            </motion.div>

            {/* Enhanced Technology Grid - 5x4 Layout */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-4 gap-3"
            >
              {/* Row 1 - Frontend */}
              <motion.div variants={itemVariants} className="bg-card/50 backdrop-blur-sm rounded-xl p-3 hover:bg-primary/10 transition-colors group cursor-pointer">
                <motion.img src={reactLogo} alt="React" className="h-8 w-8 mx-auto mb-2" whileHover={{ rotate: 180 }} />
                <span className="text-xs font-medium text-center block">React</span>
              </motion.div>
              
              <motion.div variants={itemVariants} className="bg-card/50 backdrop-blur-sm rounded-xl p-3 hover:bg-primary/10 transition-colors group cursor-pointer">
                <motion.img src={nextjsLogo} alt="Next.js" className="h-8 w-8 mx-auto mb-2 dark:invert" whileHover={{ scale: 1.2 }} />
                <span className="text-xs font-medium text-center block">Next.js</span>
              </motion.div>
              
              <motion.div variants={itemVariants} className="bg-card/50 backdrop-blur-sm rounded-xl p-3 hover:bg-primary/10 transition-colors group cursor-pointer">
                <motion.img src={nodejsLogo} alt="Node.js" className="h-8 w-8 mx-auto mb-2" whileHover={{ rotate: -180 }} />
                <span className="text-xs font-medium text-center block">Node.js</span>
              </motion.div>
              
              <motion.div variants={itemVariants} className="bg-card/50 backdrop-blur-sm rounded-xl p-3 hover:bg-primary/10 transition-colors group cursor-pointer">
                <motion.img src={vscodeLogo} alt="VS Code" className="h-8 w-8 mx-auto mb-2" whileHover={{ scale: 1.2 }} />
                <span className="text-xs font-medium text-center block">VS Code</span>
              </motion.div>

              {/* Row 2 - Backend */}
              <motion.div variants={itemVariants} className="bg-card/50 backdrop-blur-sm rounded-xl p-3 hover:bg-accent/10 transition-colors group cursor-pointer">
                <motion.img src={springLogo} alt="Spring Boot" className="h-8 w-8 mx-auto mb-2" whileHover={{ rotate: 180 }} />
                <span className="text-xs font-medium text-center block">Spring</span>
              </motion.div>
              
              <motion.div variants={itemVariants} className="bg-card/50 backdrop-blur-sm rounded-xl p-3 hover:bg-accent/10 transition-colors group cursor-pointer">
                <motion.img src={javaLogo} alt="Java" className="h-8 w-8 mx-auto mb-2" whileHover={{ scale: 1.2 }} />
                <span className="text-xs font-medium text-center block">Java</span>
              </motion.div>
              
              <motion.div variants={itemVariants} className="bg-card/50 backdrop-blur-sm rounded-xl p-3 hover:bg-accent/10 transition-colors group cursor-pointer">
                <motion.img src={pythonLogo} alt="Python" className="h-8 w-8 mx-auto mb-2" whileHover={{ rotate: -180 }} />
                <span className="text-xs font-medium text-center block">Python</span>
              </motion.div>
              
              <motion.div variants={itemVariants} className="bg-card/50 backdrop-blur-sm rounded-xl p-3 hover:bg-accent/10 transition-colors group cursor-pointer">
                <motion.img src={gitLogo} alt="Git" className="h-8 w-8 mx-auto mb-2" whileHover={{ scale: 1.2 }} />
                <span className="text-xs font-medium text-center block">Git</span>
              </motion.div>

              {/* Row 3 - Databases */}
              <motion.div variants={itemVariants} className="bg-card/50 backdrop-blur-sm rounded-xl p-3 hover:bg-emerald-500/10 transition-colors group cursor-pointer">
                <motion.img src={mongodbLogo} alt="MongoDB" className="h-8 w-8 mx-auto mb-2" whileHover={{ rotate: 10 }} />
                <span className="text-xs font-medium text-center block">MongoDB</span>
              </motion.div>
              
              <motion.div variants={itemVariants} className="bg-card/50 backdrop-blur-sm rounded-xl p-3 hover:bg-emerald-500/10 transition-colors group cursor-pointer">
                <motion.img src={postgresqlLogo} alt="PostgreSQL" className="h-8 w-8 mx-auto mb-2" whileHover={{ rotate: -10 }} />
                <span className="text-xs font-medium text-center block">PostgreSQL</span>
              </motion.div>
              
              <motion.div variants={itemVariants} className="bg-card/50 backdrop-blur-sm rounded-xl p-3 hover:bg-emerald-500/10 transition-colors group cursor-pointer">
                <motion.img src={redisLogo} alt="Redis" className="h-8 w-8 mx-auto mb-2" whileHover={{ rotate: 15 }} />
                <span className="text-xs font-medium text-center block">Redis</span>
              </motion.div>
              
              <motion.div variants={itemVariants} className="bg-card/50 backdrop-blur-sm rounded-xl p-3 hover:bg-emerald-500/10 transition-colors group cursor-pointer">
                <motion.img src={awsLogo} alt="AWS" className="h-8 w-8 mx-auto mb-2" whileHover={{ scale: 1.2 }} />
                <span className="text-xs font-medium text-center block">AWS</span>
              </motion.div>

              {/* Row 4 - DevOps & Cloud */}
              <motion.div variants={itemVariants} className="bg-card/50 backdrop-blur-sm rounded-xl p-3 hover:bg-blue-500/10 transition-colors group cursor-pointer">
                <motion.img src={dockerLogo} alt="Docker" className="h-8 w-8 mx-auto mb-2" whileHover={{ rotate: 360 }} />
                <span className="text-xs font-medium text-center block">Docker</span>
              </motion.div>
              
              <motion.div variants={itemVariants} className="bg-card/50 backdrop-blur-sm rounded-xl p-3 hover:bg-blue-500/10 transition-colors group cursor-pointer">
                <motion.img src={kubernetesLogo} alt="Kubernetes" className="h-8 w-8 mx-auto mb-2" whileHover={{ scale: 1.2 }} />
                <span className="text-xs font-medium text-center block">Kubernetes</span>
              </motion.div>
              
              <motion.div variants={itemVariants} className="bg-card/50 backdrop-blur-sm rounded-xl p-3 hover:bg-blue-500/10 transition-colors group cursor-pointer">
                <motion.img src={terraformLogo} alt="Terraform" className="h-8 w-8 mx-auto mb-2" whileHover={{ rotate: -180 }} />
                <span className="text-xs font-medium text-center block">Terraform</span>
              </motion.div>
              
              <motion.div variants={itemVariants} className="bg-card/50 backdrop-blur-sm rounded-xl p-3 hover:bg-blue-500/10 transition-colors group cursor-pointer">
                <motion.img src={ansibleLogo} alt="Ansible" className="h-8 w-8 mx-auto mb-2" whileHover={{ scale: 1.2 }} />
                <span className="text-xs font-medium text-center block">Ansible</span>
              </motion.div>

              {/* Row 5 - Monitoring & Tools */}
              <motion.div variants={itemVariants} className="bg-card/50 backdrop-blur-sm rounded-xl p-3 hover:bg-orange-500/10 transition-colors group cursor-pointer">
                <motion.img src={grafanaLogo} alt="Grafana" className="h-8 w-8 mx-auto mb-2" whileHover={{ rotate: 10 }} />
                <span className="text-xs font-medium text-center block">Grafana</span>
              </motion.div>
              
              <motion.div variants={itemVariants} className="bg-card/50 backdrop-blur-sm rounded-xl p-3 hover:bg-orange-500/10 transition-colors group cursor-pointer">
                <motion.img src={linuxLogo} alt="Linux" className="h-8 w-8 mx-auto mb-2" whileHover={{ scale: 1.2 }} />
                <span className="text-xs font-medium text-center block">Linux</span>
              </motion.div>
              
              <motion.div variants={itemVariants} className="col-span-2 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm rounded-xl p-4 hover:from-primary/20 hover:to-accent/20 transition-colors group cursor-pointer">
                <div className="text-center">
                  <span className="text-sm font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    +More Technologies
                  </span>
                  <div className="text-xs text-muted-foreground mt-1">
                    Always Learning
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}