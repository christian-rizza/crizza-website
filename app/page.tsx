import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-12">
        <div className="max-w-3xl mx-auto">
          {/* Profile Image */}
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

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">Christian Rizza</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Technical Architect with 10+ years of programming experience across gaming, web, and eCommerce industries. I
            specialize in leading digital transformation programs and building scalable enterprise solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="text-sm">
              Adobe Commerce
            </Badge>
            <Badge variant="secondary" className="text-sm">
              Headless Commerce
            </Badge>
            <Badge variant="secondary" className="text-sm">
              Cloud Architecture
            </Badge>
            <Badge variant="secondary" className="text-sm">
              Team Leadership
            </Badge>
            <Badge variant="secondary" className="text-sm">
              Digital Transformation
            </Badge>
          </div>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/experiments">View Experiments</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/experience">Career Journey</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">15+</CardTitle>
              <CardDescription>Years Experience</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">50+</CardTitle>
              <CardDescription>Projects Delivered</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">12</CardTitle>
              <CardDescription>Active Experiments</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">About Me</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Hi, I'm Christian Rizza, a Technical Architect with over 10 years of programming experience across
                gaming, web, and eCommerce industries. I've supported sales managers, delivery teams, and business
                owners in planning and delivering large digital transformation programs, primarily focused on
                replatforming e-commerce solutions worldwide.
              </p>
              <p className="text-muted-foreground">
                At Vaimo, I've helped build high-performing architect teams, established processes for discovery and
                solution design on enterprise projects, and supported professional development. I'm passionate about
                creating scalable, future-proof solutions and mentoring the next generation of technical talent.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  London, UK
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
