import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden hero-gradient code-rain">
      {/* Code pattern overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <pre className="text-xs leading-relaxed text-primary/20 font-mono whitespace-pre-wrap break-words p-4">
{`const developer = {
  name: "Bishal Regmi",
  skills: ["React", "TypeScript", "Node.js", "Flutter"],
  passion: "Building elegant solutions",
};

function createAwesomeApps() {
  return developer.skills.map(skill => ({
    skill,
    mastery: "expert"
  }));
}

// Always learning, always coding
while(true) {
  learn();
  code();
  innovate();
}`}
        </pre>
      </div>
      <div className="container-custom px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground animate-fade-in">
          <div className="mb-6">
            <div className="flex justify-center mb-8">
              <Avatar className="h-40 w-40 border-4 border-primary-foreground/20 shadow-2xl hover-lift ring-4 ring-primary-glow/30">
                <AvatarImage src={profilePhoto} alt="Bishal Regmi" />
                <AvatarFallback className="text-4xl bg-primary text-primary-foreground">BR</AvatarFallback>
              </Avatar>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
              Bishal Regmi
            </h1>
            <div className="text-2xl md:text-3xl font-semibold mb-4 gradient-text">
              Software Engineer & Problem Solver
            </div>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Passionate about building elegant solutions to complex problems.
              Transforming ideas into powerful, scalable software.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="bg-accent hover:bg-accent-glow text-accent-foreground font-semibold shadow-glow hover-lift"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-primary-foreground/80 text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold shadow-lg hover-lift backdrop-blur-sm bg-primary/20"
            >
              <a href="/resume.pdf" download="Bishal_Regmi_Resume.pdf">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>

          <div className="flex gap-4 justify-center">
            <a
              href="https://github.com/bishalregmi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 backdrop-blur-sm transition-all duration-300 hover-lift ring-2 ring-primary-foreground/20 hover:ring-primary-glow/50"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/bishalregmi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 backdrop-blur-sm transition-all duration-300 hover-lift ring-2 ring-primary-foreground/20 hover:ring-primary-glow/50"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:bishalregmi0123@gmail.com"
              className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 backdrop-blur-sm transition-all duration-300 hover-lift ring-2 ring-primary-foreground/20 hover:ring-primary-glow/50"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="h-8 w-8 text-primary-foreground" />
      </button>
    </section>
  );
};

export default Hero;
