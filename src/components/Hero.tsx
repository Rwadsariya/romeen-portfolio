import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Code2, Database, Server, Brain, Cloud, Cpu, Terminal, Layers } from "lucide-react"

export function Hero() {
  const handleScroll = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const techIcons = [
    { icon: Code2, name: "React", color: "text-blue-500" },
    { icon: Server, name: "Node.js", color: "text-green-500" },
    { icon: Database, name: "Database", color: "text-purple-500" },
    { icon: Cloud, name: "AWS", color: "text-orange-500" },
    { icon: Brain, name: "AI/ML", color: "text-pink-500" },
    { icon: Cpu, name: "DevOps", color: "text-indigo-500" },
    { icon: Terminal, name: "CLI", color: "text-gray-500" },
    { icon: Layers, name: "Docker", color: "text-cyan-500" }
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
              {/* Top right - Small icon */}
              <div className="col-span-1 row-span-1 bg-card rounded-2xl p-4 flex items-center justify-center hover:bg-accent/50 transition-colors group cursor-pointer">
                <Code2 className="h-8 w-8 text-blue-500 group-hover:scale-110 transition-transform" />
              </div>

              {/* Far top right - Small icon */}
              <div className="col-span-1 row-span-1 bg-card rounded-2xl p-4 flex items-center justify-center hover:bg-accent/50 transition-colors group cursor-pointer">
                <Server className="h-8 w-8 text-green-500 group-hover:scale-110 transition-transform" />
              </div>

              {/* Middle right - Tall icon */}
              <div className="col-span-2 row-span-1 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-4 flex items-center justify-center space-x-4 hover:from-primary/10 hover:to-accent/10 transition-colors">
                <Cloud className="h-10 w-10 text-orange-500" />
                <span className="font-semibold text-foreground">Cloud & DevOps</span>
              </div>

              {/* Bottom left under image */}
              <div className="col-span-1 row-span-1 bg-card rounded-2xl p-4 flex items-center justify-center hover:bg-accent/50 transition-colors group cursor-pointer">
                <Database className="h-8 w-8 text-purple-500 group-hover:scale-110 transition-transform" />
              </div>

              {/* Bottom center under image */}
              <div className="col-span-1 row-span-1 bg-card rounded-2xl p-4 flex items-center justify-center hover:bg-accent/50 transition-colors group cursor-pointer">
                <Brain className="h-8 w-8 text-pink-500 group-hover:scale-110 transition-transform" />
              </div>

              {/* Bottom right - Wide experience box */}
              <div className="col-span-2 row-span-1 bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Experience</div>
                  <div className="text-2xl font-bold text-primary">2+ Years</div>
                </div>
                <div className="flex space-x-2">
                  <Cpu className="h-6 w-6 text-indigo-500" />
                  <Terminal className="h-6 w-6 text-gray-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}