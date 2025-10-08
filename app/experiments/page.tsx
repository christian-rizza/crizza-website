import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const experiments = [
  {
    title: "Microservices Framework",
    description: "Custom framework for building distributed systems with built-in service discovery and load balancing",
    tech: ["Go", "Docker", "Kubernetes"],
  },
  {
    title: "Real-time Analytics Dashboard",
    description: "High-performance dashboard for processing and visualizing streaming data",
    tech: ["React", "WebSocket", "TimescaleDB"],
  },
  {
    title: "CI/CD Pipeline Optimizer",
    description: "Tool for analyzing and optimizing continuous integration pipelines",
    tech: ["Python", "GitHub Actions", "AWS"],
  },
]

export default function Experiments() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-4 text-center text-foreground">Technical Experiments</h1>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Side projects and experiments exploring new technologies and architectural patterns
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {experiments.map((exp, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-card-foreground">{exp.title}</CardTitle>
              <CardDescription className="text-muted-foreground">{exp.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
