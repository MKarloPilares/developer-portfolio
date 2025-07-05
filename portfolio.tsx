"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Github,
  ExternalLink,
  Mail,
  Linkedin,
  Facebook,
  Code,
  Database,
  Globe,
  Smartphone,
  Server,
  Brain,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const projects = [
    {
      title: "MediCrypt",
      description:
        "Decentralized medical record management and sharing application powered by blockchain, IPFS, and NFTs.",
      image: "/medicrypt.png",
      technologies: ["React", "Typescript",  "Solidity", "IPFS", "NFT"],
      github: "https://github.com/MKarloPilares/MediCrypt",
      category: "dApp/Full Stack",
    },
    {
      title: "UB Admissions System",
      description:
        "Revamped university admissions system with modern UI and enhanced user experience.",
      image: "/admission.png",
      technologies: ["PHP", "Laravel", "MySQL", "Bootstrap"],
      github: "",
      category: "Web App/Full Stack",
    },
    {
      title: "Lancer's Guild",
      description:
        "Mobile e-commerce platform for freelancers to sell their services.",
      image: "/LG.png",
      technologies: ["Typescript", "Javascript", "NodeJS", "React", "Expo"],
      github: "https://github.com/MKarloPilares/Lancers-Guild",
      category: "Mobile App/Full Stack",
    },
    {
      title: "UBestination Registration System",
      description:
        "Registration system for guests during the University of Batangas' open house event.",
      image: "/Bestination.png",
      technologies: ["PHP", "MySQL", "Bootstrap"],
      github: "https://github.com/MKarloPilares/bestination-registration-archive",
      category: "Web App/Full Stack",
    },
    {
      title: "CICT Days Registration System",
      description:
        "Registration and lottery system for the College of Information and Communications Technology Days event.",
      image: "/cictdays.png",
      technologies: ["Typescript", "NextJS", "MySQL"],
      github: "https://github.com/MKarloPilares/cict-days-reg",
      category: "Web App/Full Stack",
    },
    {
      title: "Televault Escrow Smart Contract",
      description:
        "Escrow smart contract for conversion of vaulted bellscoin to ethereum and vice versa.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Solidity", "Hardhat", "NFT"],
      github: "https://github.com/MKarloPilares/multisig-escrow-smart-contract",
      category: "Smart Contract/Back end",
    },
  ]

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "Bootstrap", "Typescript", "Javascript", "HTML/CSS"] },
    { category: "Backend", items: ["Node.js", "Python", "PHP", "Laravel", "Solidity"]},
    { category: "Database", items: ["MySQL"] },
    { category: "Mobile", items: ["React Native", "Expo"] },
    {category: "Version Control", items: ["Git", "GitHub"]},
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="w-full px-4 md:px-6 flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code className="h-6 w-6" />
            <span className="font-bold text-xl">Mhar Karlo Pilares</span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-6">
              <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
                Skills
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full px-4 md:px-6 py-24 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Full Stack Developer</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Passionate about creating innovative software solutions that solve real-world problems. Specializing in
              web development, mobile apps, and decentralized technologies.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Button size="lg" asChild>
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/MKarloPilares" target="_blank">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/mkarlopilares" target="_blank">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.facebook.com/karlo.pilares.1" target="_blank">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full px-4 md:px-6 py-24">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              I'm a recent graduate with a degree in Information Technology, passionate in bringing ideas to life through
              code. I love turning complex problems into simple and intuitive solutions through full-stack development.
            </p>
            <p>
              My expertise spans across modern web technologies, mobile applications, and emerging technologies like blockchain.
              I'm always eager to learn new technologies and take on challenging projects that push the
              boundaries of what's possible.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full px-4 md:px-6 py-24">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience across different technologies
              and domains.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-contain" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                  <CardTitle className="line-clamp-1">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center space-x-2">
                    {project.github ? (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.github} target="_blank">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                    ) : (<p className="text-xs text-muted-foreground italic">Due to institutional confidentiality, the source code is not publicly available.</p>) }
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full px-4 md:px-6 py-24 bg-muted/50">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Skills & Technologies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of the technologies and tools I work with regularly.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skillGroup, index) => {
              const icons = {
                Frontend: Globe,
                Backend: Server,
                Database: Database,
                Mobile: Smartphone,
                "Cloud & DevOps": Server,
                "AI/ML": Brain,
              }
              const Icon = icons[skillGroup.category as keyof typeof icons] || Code

              return (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon className="h-5 w-5" />
                      <span>{skillGroup.category}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full px-4 md:px-6 py-24">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground">
            I'm always interested in new opportunities and exciting projects. Whether you have a project in mind or just
            want to chat about technology, feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="mailto:karlo29pilares@gmail.com">
                <Mail className="h-5 w-5 mr-2" />
                Send Email
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://www.linkedin.com/in/mkarlopilares" target="_blank">
                <Linkedin className="h-5 w-5 mr-2" />
                Connect on LinkedIn
              </Link>
            </Button>
          </div>

          <Separator className="my-8" />

          <div className="flex items-center justify-center space-x-6">
            <Link
              href="https://github.com/MKarloPilares"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/mkarlopilares"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://www.facebook.com/karlo.pilares.1"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="w-full px-4 md:px-6 text-center text-muted-foreground">
          <p>&copy; 2025 Mhar Karlo Pilares. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
