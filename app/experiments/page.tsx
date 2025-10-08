import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const experiments = [
  {
    title: "Exploring Vercel v0",
    description: "An experimental project investigating Vercel v0, focusing on its capabilities for rapid frontend prototyping, AI-powered code generation, and seamless deployment workflows. The experiment documents setup, integration with existing projects, and evaluates developer experience, performance, and scalability.",
    tech: ["Vercel", "Frontend", "Deployment", "AI", "Prototyping"],
  }
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
