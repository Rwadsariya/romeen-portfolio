import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Code2, Database, Server, Brain, Cloud, Cpu, Terminal, Layers } from "lucide-react"
import profilePhoto from "@/assets/profile-photo.jpg"

export function Hero() {
  const handleScroll = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const techIcons = [
    { icon: Code2, name: "Frontend", delay: "0s" },
    { icon: Server, name: "Backend", delay: "0.2s" },
    { icon: Database, name: "Database", delay: "0.4s" },
    { icon: Cloud, name: "Cloud", delay: "0.6s" },
    { icon: Brain, name: "AI/ML", delay: "0.8s" },
    { icon: Cpu, name: "DevOps", delay: "1s" },
    { icon: Terminal, name: "Tools", delay: "1.2s" },
    { icon: Layers, name: "Architecture", delay: "1.4s" }
  ]

  return (
    <section id="home" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column - Main Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Status Badge */}
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">Available for work</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4 animate-slide-up animation-delay-300">
              <h1 className="text-5xl lg:text-7xl font-black tracking-tight">
                Hi, I'm a{" "}
                <span className="text-primary">Software</span>
                <br />
                <span className="text-primary">Engineer</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                I have 2+ years of experience building scalable full-stack applications 
                with modern technologies and cloud infrastructure.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-600">
              <Button
                size="lg"
                onClick={() => handleScroll("#contact")}
                className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 font-semibold"
              >
                Contact Me
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleScroll("#projects")}
                className="rounded-full px-8 font-semibold border-2"
              >
                View Projects
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 animate-fade-in animation-delay-900">
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

          {/* Right Column - Profile & Tech Grid */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Profile Photo */}
            <div className="flex justify-center lg:justify-end animate-scale-in animation-delay-300">
              <div className="relative">
                <img
                  src={profilePhoto}
                  alt="Romeen Wadsariya"
                  className="w-80 h-80 object-cover rounded-3xl shadow-xl"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
              </div>
            </div>

            {/* Tech Stack Grid */}
            <div className="animate-fade-in animation-delay-600">
              <h3 className="text-lg font-semibold mb-6 text-center lg:text-right">Technologies I work with</h3>
              <div className="grid grid-cols-4 gap-4">
                {techIcons.map(({ icon: Icon, name, delay }, index) => (
                  <div
                    key={name}
                    className="group relative p-4 rounded-2xl bg-card hover:bg-accent/50 transition-all duration-300 cursor-pointer hover:scale-105"
                    style={{ animationDelay: delay }}
                  >
                    <div className="animate-fade-in">
                      <Icon className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors duration-300 mx-auto" />
                      <p className="text-xs font-medium mt-2 text-center text-muted-foreground group-hover:text-foreground transition-colors">
                        {name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Summary Card */}
            <div className="animate-slide-up animation-delay-900">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">Experience</span>
                    <span className="text-2xl font-bold text-primary">2+ years</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Brock University</span>
                      <span className="text-muted-foreground">Research Assistant</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Captivate X</span>
                      <span className="text-muted-foreground">SWE Intern</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}