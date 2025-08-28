import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import profilePhoto from "@/assets/profile-photo.jpg"

export function Hero() {
  const handleScroll = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center animate-fade-in">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src={profilePhoto}
                alt="Romeen Wadsariya"
                className="w-48 h-48 rounded-full object-cover glass-card-lg hover-lift"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="text-gradient">Romeen</span>{" "}
                <span className="text-foreground">Wadsariya</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Passionate Software Engineer & Full-Stack Developer
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Cloud & AI/ML Enthusiast specializing in scalable, secure applications
              </p>
            </div>

            {/* Brief Intro */}
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hands-on experience in <span className="text-primary font-semibold">Java Spring Boot</span>, 
                <span className="text-primary font-semibold"> Node.js</span>, 
                <span className="text-primary font-semibold"> React</span>, 
                <span className="text-primary font-semibold"> Next.js</span>, 
                <span className="text-accent font-semibold"> Kubernetes</span>, 
                <span className="text-accent font-semibold"> AWS</span>, 
                <span className="text-accent font-semibold"> Terraform</span>, and 
                <span className="text-accent font-semibold"> AI/ML</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button
                size="lg"
                onClick={() => handleScroll("#projects")}
                className="group hover-glow rounded-full px-8"
              >
                View Projects
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleScroll("#contact")}
                className="hover-lift rounded-full px-8"
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 pt-8">
              <a
                href="https://github.com/Rwadsariya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors hover-lift"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/romeen-wadsariya-607348249/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors hover-lift"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:rominwadsariya@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors hover-lift"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}