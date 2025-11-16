import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Code } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration. Features include real-time inventory updates and order tracking.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      github: "https://github.com/bishalregmi/ecommerce-project",
      live: "#",
      featured: true,
    },
    {
      title: "Task Management System",
      description:
        "Collaborative task management app with real-time updates, drag-and-drop functionality, team collaboration features, and deadline notifications.",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      github: "https://github.com/bishalregmi/task-manager",
      live: "#",
      featured: true,
    },
    {
      title: "Weather Forecast App",
      description:
        "Interactive weather application providing real-time weather data, 7-day forecasts, location-based searches, and beautiful weather visualizations.",
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
      github: "https://github.com/bishalregmi/weather-app",
      live: "#",
      featured: false,
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media metrics with data visualization, trend analysis, and export functionality. Integrates with multiple social platforms.",
      technologies: ["Python", "Flask", "PostgreSQL", "React", "D3.js"],
      github: "https://github.com/bishalregmi/social-dashboard",
      live: "#",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="section-padding bg-muted/20 code-rain relative">
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore some of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`p-6 hover-lift card-shadow hover:shadow-glow transition-all duration-300 animate-fade-in relative overflow-hidden bg-card/90 backdrop-blur-sm border-primary/20 ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {project.featured && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-accent text-white">Featured</Badge>
                </div>
              )}

              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="outline"
                    className="text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="hover:bg-primary hover:text-primary-foreground"
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button
                  size="sm"
                  asChild
                  className="bg-accent hover:bg-accent/90"
                >
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to see more? Check out my GitHub profile for additional projects
          </p>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="hover:bg-primary hover:text-primary-foreground"
          >
            <a
              href="https://github.com/bishalregmi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
