import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Head of Architecture",
    company: "Vaimo Europe and Middle East",
    location: "London, UK",
    duration: "Jan 2025 - Present",
    type: "Full-time",
    description:
      "Leading a distributed team of Technical Architects across Europe and the Middle East, setting architecture standards and ensuring solution consistency in enterprise ecommerce implementations.",
    achievements: [
      "Drive technical strategy and process optimisation across markets",
      "Support project discovery, solution design, and architecture reviews for complex B2C and B2B platforms",
      "Mentor architects and developers on integration approaches and long-term scalability",
      "Establish architecture standards for enterprise ecommerce implementations",
    ],
    technologies: [
      "Adobe Commerce",
      "Headless Commerce",
      "Enterprise Architecture",
      "Team Leadership",
      "Process Optimization",
    ],
  },
  {
    title: "Lead Technical Architect",
    company: "Vaimo UK",
    location: "London, UK",
    duration: "Aug 2021 - Dec 2024",
    type: "Full-time",
    description:
      "Led the UK architecture function, delivering major clients with scalable and future-proof ecommerce solutions. Championed best practices in technical discovery, audits, solution design, and team development.",
    achievements: [
      "Delivered scalable and future-proof ecommerce solutions for major clients",
      "Standardised frameworks to support repeatable success across projects",
      "Partnered with cross-disciplinary teams to define platform strategy and align technical scope with business outcomes",
      "Actively contributed during presales, project scoping, and RFPs",
      "Produced end-to-end architecture documentation, risk assessments, and high-level estimates",
    ],
    technologies: ["Adobe Commerce", "Solution Architecture", "Technical Discovery", "Risk Assessment", "Presales"],
  },
  {
    title: "Technical Architect",
    company: "Vaimo UK",
    location: "London, UK",
    duration: "Jan 2019 - Aug 2021",
    type: "Full-time",
    description:
      "Acted as solution architect across enterprise ecommerce projects, designing technical solutions and guiding project delivery through scalable, secure systems.",
    achievements: [
      "Designed technical solutions for enterprise ecommerce projects",
      "Collaborated with top-tier partners (Deloitte, Accenture) to align strategy and technical planning",
      "Delivered architecture and system requirement documentation",
      "Supported delivery teams with proactive troubleshooting and code quality supervision",
    ],
    technologies: ["Adobe Commerce", "System Architecture", "Enterprise Solutions", "Documentation", "Code Quality"],
  },
  {
    title: "Backend Lead Developer",
    company: "Vaimo UK",
    location: "London, UK",
    duration: "Jan 2016 - Jan 2019",
    type: "Full-time",
    description:
      "Delivered key back-end functionality and API integrations for Magento (Adobe Commerce) platforms, covering payment, shipping, and ERP systems.",
    achievements: [
      "Delivered backend functionality and API integrations for Adobe Commerce platforms",
      "Drove backend team process improvements and served as Scrum Master",
      "Collaborated with frontend and QA teams for seamless feature delivery",
      "Ensured platform stability and performance optimization",
    ],
    technologies: ["Adobe Commerce", "Magento", "API Integration", "Payment Systems", "ERP Integration", "Scrum"],
  },
]

const clientExperience = [
  {
    client: "Berry Brothers & Rudd",
    location: "London, UK",
    duration: "Mar 2022 - Feb 2024",
    role: "Lead Architect",
    description:
      "Led discovery and implementation workshop for digital transformation rebuild of multiple integrated system applications.",
    achievements: [
      "Coordinated team of 4 architects on multiple work streams",
      "Delivered technical solution designs for headless, composable eCommerce project",
      "Implemented Vue Storefront, Amplience CMS, Adobe Commerce, Microsoft Azure apps and Akeneo PIM",
      "Established foundation of scalable architecture in collaboration with client's technical team",
      "Facilitated communication with technical and business stakeholders",
    ],
    technologies: ["Vue Storefront", "Amplience CMS", "Adobe Commerce", "Microsoft Azure", "Akeneo PIM"],
  },
  {
    client: "British American Tobacco",
    location: "London, UK",
    duration: "Mar 2020 - Mar 2022",
    role: "Global Magento/System Architect",
    description:
      "Responsible for Magento solutions for global markets (ENA, APAC). Reviewed solution designs and supported decision-making alongside Head of architects.",
    achievements: [
      "Managed Magento solutions for global markets (ENA, APAC)",
      "Defined and refined governance processes for SIs and partners globally",
      "Designed technical solutions and supported System Integrators during implementations",
      "Coordinated performance reviews and code audits to improve code maintainability",
    ],
    technologies: ["Adobe Commerce", "Magento", "Global Architecture", "Performance Optimization"],
  },
  {
    client: "Champion - Hanes Group",
    location: "London, UK",
    duration: "Feb 2020 - Mar 2020",
    role: "Magento/System Architect",
    description:
      "Worked closely with client, developers and BAs to build Magento solutions and translate business requirements into technical details.",
    achievements: [
      "Designed technical integrations from Magento to 3PL providers",
      "Advised and mentored development groups",
      "Led implementation team",
    ],
    technologies: ["Adobe Commerce", "Magento", "3PL Integration", "Team Leadership"],
  },
  {
    client: "Kurt Geiger",
    location: "London, UK",
    duration: "Sep 2019 - Nov 2019",
    role: "Magento/System Architect",
    description: "Supported platform and software migration from Magento 1 to Magento 2.",
    achievements: [
      "Led platform migration from Magento 1 to Magento 2",
      "Wrote integration tests and test generators for process automation",
    ],
    technologies: ["Adobe Commerce", "Magento", "Platform Migration", "Test Automation"],
  },
  {
    client: "Dyson Ltd",
    location: "London, UK",
    duration: "May 2018 - Jan 2019",
    role: "Magento Lead Developer",
    description:
      "Coordinated technical platform enhancements with POs and Project Managers. Provided technical leadership for development team.",
    achievements: [
      "Coordinated technical platform enhancements with POs and Project Managers",
      "Provided technical leadership and resolved functional and technical issues",
      "Analyzed performance and hosting infrastructure for Black Friday and marketing campaigns",
    ],
    technologies: ["Adobe Commerce", "Magento", "Performance Analysis", "Infrastructure"],
  },
]

const education = [
  {
    degree: "Bachelor's degree in Computer Science",
    school: "University of Catania",
    location: "Catania, Italy",
    duration: "2008 - 2012",
    focus: "Computer Science fundamentals and software development",
  },
]

const certifications = [
  "TOGAF Standard (2024)",
  "Adobe Commerce Certified Expert",
  "Google Cloud Platform Certified",
  "Magento Certified Solution Specialist",
]

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Career Journey</h1>
          <p className="text-xl text-muted-foreground">
            10+ years of technical leadership in eCommerce and digital transformation
          </p>
        </div>

        {/* Core Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Core Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-foreground">{exp.company}</CardDescription>
                    </div>
                    <Badge variant="outline">{exp.type}</Badge>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{exp.description}</p>

                  <div>
                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Client Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Notable Client Projects</h2>
          <div className="space-y-6">
            {clientExperience.map((client, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <CardTitle className="text-xl">{client.client}</CardTitle>
                      <CardDescription className="text-lg font-medium text-foreground">{client.role}</CardDescription>
                    </div>
                    <Badge variant="secondary">Client Project</Badge>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {client.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {client.location}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{client.description}</p>

                  <div>
                    <h4 className="font-semibold mb-2">Key Deliverables:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {client.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {client.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{edu.degree}</CardTitle>
                  <CardDescription className="text-base font-medium text-foreground">{edu.school}</CardDescription>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {edu.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {edu.location}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{edu.focus}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills & Certifications Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Leadership & Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Technical Solution Architecture & Design</li>
                  <li>• Team Leadership & Mentoring</li>
                  <li>• Cross-functional Collaboration</li>
                  <li>• Conflict Resolution & Decision-Making</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Technical Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Adobe Commerce (Magento) Platform</li>
                  <li>• Headless & Composable Commerce</li>
                  <li>• API Integration & Third-party Systems</li>
                  <li>• CI/CD Practices & DevOps</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
