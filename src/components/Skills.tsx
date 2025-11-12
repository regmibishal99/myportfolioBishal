import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Java", "Python", "JavaScript", "TypeScript", "C++", "SQL", "Dart"],
      color: "primary",
    },
    {
      category: "Frontend Development",
      skills: ["React", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "Redux"],
      color: "accent",
    },
    {
      category: "Mobile Development",
      skills: ["Flutter", "Dart", "Android", "iOS", "Firebase", "Material Design"],
      color: "primary",
    },
    {
      category: "Backend Development",
      skills: ["Node.js", "Express", "Spring Boot", "REST APIs", "GraphQL"],
      color: "primary",
    },
    {
      category: "Databases",
      skills: ["MySQL", "MongoDB", "PostgreSQL", "Redis", "Firebase"],
      color: "accent",
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "GitHub", "Docker", "Linux", "VS Code", "Postman"],
      color: "primary",
    },
    {
      category: "Concepts & Methodologies",
      skills: [
        "OOP",
        "Data Structures",
        "Algorithms",
        "Agile",
        "CI/CD",
        "Testing",
      ],
      color: "accent",
    },
  ];

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 hover-lift card-shadow hover:card-shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-bold mb-4 text-foreground">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant={category.color === "primary" ? "default" : "secondary"}
                    className={`${
                      category.color === "accent"
                        ? "bg-accent hover:bg-accent/90 text-white"
                        : "bg-primary hover:bg-primary/90"
                    } px-3 py-1 text-sm font-medium`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
