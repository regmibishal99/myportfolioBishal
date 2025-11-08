import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Award, Calendar } from "lucide-react";

const Experience = () => {
  const education = [
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "Your University Name",
      location: "Kathmandu, Nepal",
      period: "2020 - 2024",
      description:
        "Relevant Coursework: Data Structures & Algorithms, Database Management Systems, Software Engineering, Web Development, Operating Systems, Computer Networks",
      achievements: [
        "Dean's List for Academic Excellence",
        "Led team projects in Software Engineering and Web Development",
        "Active member of University Coding Club",
      ],
    },
  ];

  const experience = [
    {
      title: "Software Development Intern",
      company: "Tech Company Name",
      location: "Kathmandu, Nepal",
      period: "Summer 2023",
      description:
        "Worked on developing web applications and contributed to multiple projects using modern frameworks.",
      highlights: [
        "Developed and maintained responsive web applications using React and Node.js",
        "Collaborated with senior developers in agile team environment",
        "Implemented RESTful APIs and integrated third-party services",
      ],
    },
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      location: "Remote",
      period: "2022 - Present",
      description:
        "Building custom websites and web applications for clients, managing full project lifecycle.",
      highlights: [
        "Delivered 10+ projects for local businesses and startups",
        "Specialized in responsive design and user-friendly interfaces",
        "Managed client relationships and project timelines effectively",
      ],
    },
  ];

  const achievements = [
    {
      title: "University Hackathon Winner",
      description: "1st place in 24-hour coding competition",
      year: "2023",
    },
    {
      title: "Open Source Contributor",
      description: "Active contributor to multiple GitHub projects",
      year: "2022-Present",
    },
    {
      title: "Coding Competition Participant",
      description: "Regular participant in online coding challenges",
      year: "2021-Present",
    },
  ];

  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and professional experience
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-8 w-8 text-accent" />
            <h3 className="text-3xl font-bold">Education</h3>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="p-6 hover-lift card-shadow hover:card-shadow-lg transition-all duration-300 animate-fade-in"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-bold mb-2">{edu.degree}</h4>
                    <p className="text-lg text-foreground/80 font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-muted-foreground">{edu.location}</p>
                  </div>
                  <Badge className="bg-primary/10 text-primary border-primary w-fit mt-2 md:mt-0">
                    <Calendar className="mr-2 h-3 w-3" />
                    {edu.period}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4">{edu.description}</p>
                <div className="space-y-2">
                  {edu.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-sm">{achievement}</p>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="h-8 w-8 text-accent" />
            <h3 className="text-3xl font-bold">Experience</h3>
          </div>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <Card
                key={index}
                className="p-6 hover-lift card-shadow hover:card-shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-bold mb-2">{exp.title}</h4>
                    <p className="text-lg text-foreground/80 font-medium">
                      {exp.company}
                    </p>
                    <p className="text-muted-foreground">{exp.location}</p>
                  </div>
                  <Badge className="bg-accent/10 text-accent border-accent w-fit mt-2 md:mt-0">
                    <Calendar className="mr-2 h-3 w-3" />
                    {exp.period}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent mt-1.5">▹</span>
                      <span className="text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Award className="h-8 w-8 text-accent" />
            <h3 className="text-3xl font-bold">Achievements</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="p-6 text-center hover-lift card-shadow hover:card-shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                <h4 className="text-lg font-bold mb-2">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  {achievement.description}
                </p>
                <Badge variant="outline" className="text-xs">
                  {achievement.year}
                </Badge>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
