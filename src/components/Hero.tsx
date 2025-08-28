import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code, Cloud } from "lucide-react"
import profilePhoto from "@/assets/profile-photo.jpg"

export function Hero() {
  const handleScroll = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 hero-gradient opacity-10"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Floating Icons */}
          <div className="absolute top-20 left-10 animate-float animation-delay-1000">
            <Code className="h-8 w-8 text-primary/30" />
          </div>
          <div className="absolute top-32 right-10 animate-float animation-delay-2000">
            <Cloud className="h-8 w-8 text-accent/30" />
          </div>
          <div className="absolute bottom-40 left-20 animate-float animation-delay-3000">
            <Sparkles className="h-6 w-6 text-secondary/30" />
          </div>

          {/* Profile Photo with enhanced effects */}
          <div className="mb-12 flex justify-center animate-scale-in">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative">
                <img
                  src={profilePhoto}
                  alt="Romeen Wadsariya"
                  className="w-56 h-56 rounded-full object-cover border-4 border-background shadow-2xl hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-transparent to-accent/20 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Main Content with staggered animations */}
          <div className="space-y-8">
            <div className="space-y-4 animate-fade-in">
              <div className="relative inline-block">
                <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none">
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x">
                    Romeen
                  </span>
                  <br />
                  <span className="text-foreground">Wadsariya</span>
                </h1>
                <div className="absolute -top-2 -right-2 animate-pulse">
                  <Sparkles className="h-8 w-8 text-accent" />
                </div>
              </div>
              
              <div className="space-y-3 animate-slide-up animation-delay-300">
                <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Software Engineer & Full-Stack Developer
                </p>
                <p className="text-xl text-muted-foreground font-medium max-w-3xl mx-auto">
                  Cloud & AI/ML Enthusiast crafting scalable, intelligent solutions
                </p>
              </div>
            </div>

            {/* Enhanced Tech Stack Display */}
            <div className="max-w-5xl mx-auto animate-fade-in animation-delay-600">
              <div className="glass-card p-6 rounded-2xl border border-primary/20">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Expertise in{" "}
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold border border-primary/20 hover:bg-primary/20 transition-colors">
                    Java Spring Boot
                  </span>{" "}
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold border border-primary/20 hover:bg-primary/20 transition-colors">
                    Node.js
                  </span>{" "}
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold border border-primary/20 hover:bg-primary/20 transition-colors">
                    React
                  </span>{" "}
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent/10 text-accent font-semibold border border-accent/20 hover:bg-accent/20 transition-colors">
                    Kubernetes
                  </span>{" "}
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent/10 text-accent font-semibold border border-accent/20 hover:bg-accent/20 transition-colors">
                    AWS
                  </span>{" "}
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-semibold border border-secondary/20 hover:bg-secondary/20 transition-colors">
                    AI/ML
                  </span>
                </p>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 animate-slide-up animation-delay-900">
              <Button
                size="lg"
                onClick={() => handleScroll("#projects")}
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold rounded-full px-10 py-4 text-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center">
                  View Projects
                  <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleScroll("#contact")}
                className="group relative border-2 border-primary/30 hover:border-primary text-foreground hover:text-primary font-semibold rounded-full px-10 py-4 text-lg backdrop-blur-sm bg-background/50 hover:bg-primary/5 transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center">
                  Get In Touch
                  <Mail className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </Button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex justify-center items-center gap-8 pt-8 animate-fade-in animation-delay-1200">
              <a
                href="https://github.com/Rwadsariya"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full bg-background/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Github className="h-6 w-6 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
                <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="https://www.linkedin.com/in/romeen-wadsariya-607348249/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full bg-background/50 backdrop-blur-sm border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
                <div className="absolute inset-0 rounded-full bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="mailto:rominwadsariya@gmail.com"
                className="group relative p-3 rounded-full bg-background/50 backdrop-blur-sm border border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Mail className="h-6 w-6 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
                <div className="absolute inset-0 rounded-full bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-muted-foreground font-medium">Scroll to explore</span>
          <div className="p-2 rounded-full border border-primary/30 bg-background/50 backdrop-blur-sm">
            <ArrowDown className="h-5 w-5 text-primary animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}