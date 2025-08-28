import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Cpu, Terminal } from "lucide-react"
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

export function Hero() {
  const handleScroll = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const techLogos = [
    { src: reactLogo, name: "React", alt: "React" },
    { src: nextjsLogo, name: "Next.js", alt: "Next.js" },
    { src: springLogo, name: "Spring", alt: "Spring Boot" },
    { src: pythonLogo, name: "Python", alt: "Python" },
    { src: terraformLogo, name: "Terraform", alt: "Terraform" },
    { src: ansibleLogo, name: "Ansible", alt: "Ansible" },
    { src: dockerLogo, name: "Docker", alt: "Docker" },
    { src: kubernetesLogo, name: "K8s", alt: "Kubernetes" },
    { src: mongodbLogo, name: "MongoDB", alt: "MongoDB" },
    { src: nodejsLogo, name: "Node.js", alt: "Node.js" },
    { src: awsLogo, name: "AWS", alt: "Amazon Web Services" },
    { src: javaLogo, name: "Java", alt: "Java" }
  ]

  return (
    <section id="home" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Column - Message */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-tight">
                <span className="block text-muted-foreground">Hey,</span>
                <span className="block">I am a</span>
                <span className="block text-primary">Software</span>
                <span className="block text-primary">Developer</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Building scalable applications with modern technologies and cloud infrastructure. 
                Passionate about creating efficient, user-focused solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-300">
              <Button
                size="lg"
                onClick={() => handleScroll("#contact")}
                className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 font-semibold"
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleScroll("#projects")}
                className="rounded-full px-8 font-semibold border-2"
              >
                View Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 animate-fade-in animation-delay-600">
              <a
                href="https://github.com/Rwadsariya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="font-medium">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/romeen-wadsariya-607348249/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="font-medium">LinkedIn</span>
              </a>
              <a
                href="mailto:rominwadsariya@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="font-medium">Email</span>
              </a>
            </div>
          </div>

          {/* Right Column - Image and Tech Grid */}
          <div className="animate-scale-in animation-delay-300">
            <div className="grid grid-cols-4 grid-rows-4 gap-4 h-[600px]">
              
              {/* Main Profile Image - Takes 2x3 space */}
              <div className="col-span-2 row-span-3 rounded-3xl overflow-hidden shadow-xl group">
                <img
                  src="/lovable-uploads/2835804e-039a-4f91-ae5e-57761e2f6534.png"
                  alt="Romeen Wadsariya"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Tech Icons Grid - Different sizes */}
              {/* Top right - React */}
              <div className="col-span-1 row-span-1 bg-card rounded-2xl p-4 flex flex-col items-center justify-center hover:bg-accent/50 transition-colors group cursor-pointer">
                <img src={reactLogo} alt="React" className="h-8 w-8 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium mt-1 text-muted-foreground">React</span>
              </div>

              {/* Far top right - Next.js */}
              <div className="col-span-1 row-span-1 bg-card rounded-2xl p-4 flex flex-col items-center justify-center hover:bg-accent/50 transition-colors group cursor-pointer">
                <img src={nextjsLogo} alt="Next.js" className="h-8 w-8 group-hover:scale-110 transition-transform filter dark:invert" />
                <span className="text-xs font-medium mt-1 text-muted-foreground">Next.js</span>
              </div>

              {/* Middle right - Spring Boot & Java */}
              <div className="col-span-2 row-span-1 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-4 flex items-center justify-center space-x-4 hover:from-primary/10 hover:to-accent/10 transition-colors">
                <img src={springLogo} alt="Spring Boot" className="h-10 w-10" />
                <img src={javaLogo} alt="Java" className="h-10 w-10" />
                <span className="font-semibold text-foreground">Backend</span>
              </div>

              {/* Bottom left under image - Python */}
              <div className="col-span-1 row-span-1 bg-card rounded-2xl p-4 flex flex-col items-center justify-center hover:bg-accent/50 transition-colors group cursor-pointer">
                <img src={pythonLogo} alt="Python" className="h-8 w-8 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium mt-1 text-muted-foreground">Python</span>
              </div>

              {/* Bottom center under image - MongoDB */}
              <div className="col-span-1 row-span-1 bg-card rounded-2xl p-4 flex flex-col items-center justify-center hover:bg-accent/50 transition-colors group cursor-pointer">
                <img src={mongodbLogo} alt="MongoDB" className="h-8 w-8 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium mt-1 text-muted-foreground">MongoDB</span>
              </div>

              {/* Bottom right - DevOps tools */}
              <div className="col-span-2 row-span-1 bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 rounded-2xl p-4 flex items-center justify-between">
                <div className="flex space-x-2">
                  <img src={dockerLogo} alt="Docker" className="h-6 w-6" />
                  <img src={kubernetesLogo} alt="Kubernetes" className="h-6 w-6" />
                  <img src={terraformLogo} alt="Terraform" className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground">DevOps</div>
                  <div className="text-lg font-bold text-primary">Cloud Native</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}