import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gradient">Romeen Wadsariya</h3>
            <p className="text-muted-foreground">
              Software Engineer & Full-Stack Developer passionate about building 
              scalable solutions and exploring cutting-edge technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {[
                { name: "About", href: "#about" },
                { name: "Experience", href: "#experience" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" }
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    const element = document.querySelector(link.href)
                    element?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex space-x-4">
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
            <p className="text-sm text-muted-foreground">
              Always open to new opportunities and collaborations
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-1">
            © {currentYear} Built with{" "}
            <Heart className="h-4 w-4 text-red-500 fill-current" />{" "}
            by Romeen Wadsariya
          </p>
        </div>
      </div>
    </footer>
  )
}