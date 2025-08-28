import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, BookOpen } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about building scalable solutions and exploring cutting-edge technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6 animate-slide-up">
            <Card className="glass-card hover-lift">
              <CardContent className="p-8">
                <div className="space-y-4 text-lg leading-relaxed">
                  <p>
                    I'm a <span className="text-primary font-semibold">passionate Software Engineer</span> and 
                    <span className="text-primary font-semibold"> Full Stack Developer</span> with hands-on experience 
                    building scalable, secure, and cloud-native applications.
                  </p>
                  
                  <p>
                    My technical toolkit includes <span className="text-accent font-semibold">Java Spring Boot</span>, 
                    <span className="text-accent font-semibold"> Node.js</span>, 
                    <span className="text-accent font-semibold"> React</span>, and 
                    <span className="text-accent font-semibold"> Next.js</span>, backed by strong knowledge of 
                    REST APIs, OAuth2, and microservices architecture.
                  </p>

                  <p>
                    I also enjoy working with tools like <span className="text-primary font-semibold">Kubernetes</span>, 
                    <span className="text-primary font-semibold"> AWS</span>, and 
                    <span className="text-primary font-semibold"> Terraform</span> to streamline cloud deployments 
                    and infrastructure automation.
                  </p>

                  <p>
                    Beyond coding, I care deeply about <span className="text-accent font-semibold">system performance</span>, 
                    <span className="text-accent font-semibold"> developer experience</span>, and 
                    <span className="text-accent font-semibold"> continuous learning</span>. Currently exploring 
                    Kubernetes in-depth and expanding my knowledge in infrastructure-as-code and observability tools.
                  </p>

                  <p className="text-primary font-medium">
                    🔍 Always open to connecting with fellow developers, mentors, and teams tackling meaningful engineering problems.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education Section */}
          <div className="space-y-6 animate-slide-up">
            <Card className="glass-card hover-lift">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
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
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card hover-lift">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <BookOpen className="h-8 w-8 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-4">Relevant Coursework</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {[
                        "Data Structures & Algorithms",
                        "Database System",
                        "Software Engineering I & II",
                        "Advanced Object-Oriented Programming",
                        "Cybersecurity",
                        "Computer Networks"
                      ].map((course, index) => (
                        <div 
                          key={index}
                          className="bg-muted/50 px-3 py-2 rounded-md text-sm font-medium"
                        >
                          {course}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}