import { Code2, Rocket, Users, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack & Mobile Development",
      description: "Expertise in web technologies and Flutter mobile apps",
    },
    {
      icon: Rocket,
      title: "Problem Solver",
      description: "Analytical mindset with passion for elegant solutions",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative approach with strong communication skills",
    },
    {
      icon: Award,
      title: "Continuous Learner",
      description: "Always exploring new technologies and best practices",
    },
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm a passionate Software Engineer with a deep love for crafting
              efficient, scalable solutions to complex problems. Currently
              pursuing my degree in Software Engineering, I combine academic
              knowledge with hands-on experience in full-stack web development 
              and mobile app development using Flutter.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              My journey in software development is driven by curiosity and a
              commitment to writing clean, maintainable code. I thrive in
              environments that challenge me to learn and grow, whether it's
              mastering a new framework or optimizing system performance.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Beyond coding, I believe in the power of technology to transform
              lives. I'm constantly exploring emerging technologies and
              contributing to open-source projects. When I'm not coding, you'll
              find me reading tech blogs, participating in hackathons, or
              mentoring fellow developers.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Kathmandu, Nepal
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                Open to Opportunities
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 hover-lift card-shadow hover:card-shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <item.icon className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
