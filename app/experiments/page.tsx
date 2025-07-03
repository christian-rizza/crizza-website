import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ExternalLink, Github } from "lucide-react"

const experiments = [
  {
title: "Exploring Vercel v0: Next-Gen Frontend Experimentation",
description:
"An experimental project investigating Vercel v0, focusing on its capabilities for rapid frontend prototyping, AI-powered code generation, and seamless deployment workflows. The experiment documents setup, integration with existing projects, and evaluates developer experience, performance, and scalability.",
tags: ["Vercel", "Frontend", "AI", "Prototyping", "Deployment"],
date: "2025-07-01",
status: "Active",
github: "#",
demo: "www.crizza.com"
}
]

export default function ExperimentsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Technical Experiments</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of my ongoing research, prototypes, and technical explorations. Each experiment represents a
            deep dive into emerging technologies and architectural patterns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiments.map((experiment, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge
                    variant={
                      experiment.status === "Active"
                        ? "default"
                        : experiment.status === "Completed"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {experiment.status}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(experiment.date).toLocaleDateString()}
                  </div>
                </div>
                <CardTitle className="text-xl">{experiment.title}</CardTitle>
                <CardDescription className="text-base">{experiment.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {experiment.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={experiment.github}>
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>
                  </Button>
                  {experiment.demo && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={experiment.demo}>
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
