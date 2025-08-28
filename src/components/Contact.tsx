import { useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react"
import { sendContactEmail, type ContactFormData } from "@/lib/emailjs"
import { motion, useInView } from "framer-motion"
import { TypewriterText } from "@/components/TypewriterText"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const formData = new FormData(e.target as HTMLFormElement)
      const contactData: ContactFormData = {
        firstName: formData.get('firstName') as string,
        lastName: formData.get('lastName') as string,
        email: formData.get('email') as string,
        subject: formData.get('subject') as string,
        message: formData.get('message') as string
      }

      await sendContactEmail(contactData)
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      })
      
      // Reset form
      const form = e.target as HTMLFormElement
      form.reset()
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rominwadsariya@gmail.com",
      href: "mailto:rominwadsariya@gmail.com",
      color: "text-primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (289) 929-8672",
      href: "tel:+12899298672",
      color: "text-accent"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "romeen-wadsariya",
      href: "https://www.linkedin.com/in/romeen-wadsariya-607348249/",
      color: "text-blue-500"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Rwadsariya",
      href: "https://github.com/Rwadsariya",
      color: "text-purple-500"
    }
  ]

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

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} id="contact" className="py-20 section-gradient snap-start min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={slideInLeft} className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Get In <span className="text-gradient">
                <TypewriterText
                  words={["Touch", "Contact", "Connect"]}
                  delay={1000}
                  speed={200}
                  pauseTime={4000}
                />
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              variants={slideInLeft}
            >
              Let's discuss opportunities, collaborate on projects, or just connect as fellow developers
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={slideInLeft} className="space-y-8">
              <div>
                <motion.h3 
                  className="text-2xl font-bold mb-6"
                  whileHover={{ x: 5 }}
                >
                  Let's Connect
                </motion.h3>
                <motion.p 
                  className="text-muted-foreground mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  I'm always interested in hearing about new opportunities, innovative projects, 
                  and connecting with fellow developers. Whether you're looking for a collaborator, 
                  have a technical question, or just want to chat about technology, feel free to reach out!
                </motion.p>
              </div>

              <motion.div 
                className="space-y-4"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.7
                    }
                  }
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    whileHover={{ 
                      scale: 1.02, 
                      x: 10,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <Card className="glass-card hover-lift">
                      <CardContent className="p-6">
                        <a 
                          href={contact.href}
                          target={contact.href.startsWith('http') ? '_blank' : undefined}
                          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="flex items-center space-x-4 group"
                        >
                          <motion.div 
                            className={`p-3 rounded-lg bg-muted/50 group-hover:bg-muted transition-colors`}
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                          >
                            <contact.icon className={`h-6 w-6 ${contact.color}`} />
                          </motion.div>
                          <div className="flex-1">
                            <motion.p 
                              className="font-medium text-foreground group-hover:text-primary transition-colors"
                              whileHover={{ x: 5 }}
                            >
                              {contact.label}
                            </motion.p>
                            <p className="text-muted-foreground">{contact.value}</p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={slideInRight}>
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 2 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="glass-card">
                  <CardContent className="p-8">
                    <motion.h3 
                      className="text-2xl font-bold mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    >
                      Send a Message
                    </motion.h3>
                    <motion.form 
                      onSubmit={handleSubmit} 
                      className="space-y-6"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.1,
                            delayChildren: 0.7
                          }
                        }
                      }}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                    >
                      <motion.div 
                        className="grid md:grid-cols-2 gap-4"
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0 }
                        }}
                      >
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input 
                            id="firstName" 
                            name="firstName"
                            placeholder="John" 
                            required 
                            className="bg-background/50"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input 
                            id="lastName" 
                            name="lastName"
                            placeholder="Doe" 
                            required 
                            className="bg-background/50"
                          />
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="space-y-2"
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0 }
                        }}
                      >
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          name="email"
                          type="email" 
                          placeholder="john.doe@example.com" 
                          required 
                          className="bg-background/50"
                        />
                      </motion.div>
                      
                      <motion.div 
                        className="space-y-2"
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0 }
                        }}
                      >
                        <Label htmlFor="subject">Subject</Label>
                        <Input 
                          id="subject" 
                          name="subject"
                          placeholder="Let's discuss a project opportunity" 
                          required 
                          className="bg-background/50"
                        />
                      </motion.div>
                      
                      <motion.div 
                        className="space-y-2"
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0 }
                        }}
                      >
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          id="message" 
                          name="message"
                          placeholder="Hi Romeen, I'd love to discuss..." 
                          rows={5}
                          required 
                          className="bg-background/50 resize-none"
                        />
                      </motion.div>
                      
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0 }
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          type="submit" 
                          className="w-full hover-glow group" 
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <motion.div 
                                className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </motion.form>
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