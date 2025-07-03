import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <div className="w-[150px] h-[150px] mx-auto">
              <Image
                src="https://avatars.githubusercontent.com/u/8734360"
                alt="Christian Rizza"
                width={150}
                height={150}
                className="rounded-full border-4 border-gray-200 shadow-lg"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Christian Rizza</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">Technical Architect & Software Engineer</p>
          <div className="flex justify-center gap-4 mb-8">
            <Button variant="outline" size="sm" asChild>
              <a href="https://github.com/crizza" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://linkedin.com/in/christianrizza" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="mailto:christian@rizza.dev">
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </a>
            </Button>
          </div>
        </div>

        {/* About Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">About Me</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed mb-4">
                I'm a passionate technical architect with over a decade of experience building scalable software
                solutions. I specialize in cloud architecture, distributed systems, and leading engineering teams to
                deliver high-quality products.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not architecting systems, you'll find me experimenting with new technologies, contributing to
                open source projects, or mentoring fellow developers.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Skills Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Core Technologies</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Python",
              "AWS",
              "Docker",
              "Kubernetes",
              "PostgreSQL",
              "Redis",
              "GraphQL",
              "REST APIs",
            ].map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  E-Commerce Platform
                  <ExternalLink className="w-4 h-4" />
                </CardTitle>
                <CardDescription>Scalable microservices architecture serving millions of users</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Built a distributed e-commerce platform using Node.js, React, and AWS services. Implemented
                  event-driven architecture with 99.9% uptime.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    Node.js
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    React
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    AWS
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Real-time Analytics
                  <ExternalLink className="w-4 h-4" />
                </CardTitle>
                <CardDescription>High-throughput data processing pipeline</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Designed and implemented a real-time analytics system processing 100M+ events daily using Apache Kafka
                  and ClickHouse.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    Kafka
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    ClickHouse
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Python
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  DevOps Automation
                  <ExternalLink className="w-4 h-4" />
                </CardTitle>
                <CardDescription>CI/CD pipeline and infrastructure as code</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Automated deployment processes reducing release time by 80% using Terraform, GitHub Actions, and
                  Kubernetes.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    Terraform
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Kubernetes
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    GitHub Actions
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
