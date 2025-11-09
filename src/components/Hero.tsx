import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.9), rgba(6, 182, 212, 0.8)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-custom px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
          <div className="mb-6">
            <div className="flex justify-center mb-8">
              <Avatar className="h-40 w-40 border-4 border-white/20 shadow-2xl hover-lift">
                <AvatarImage src={profilePhoto} alt="Bishal Regmi" />
                <AvatarFallback className="text-4xl bg-primary text-white">BR</AvatarFallback>
              </Avatar>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Bishal Regmi
            </h1>
            <div className="text-2xl md:text-3xl font-semibold mb-4 text-cyan-200">
              Software Engineer & Problem Solver
            </div>
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
              Passionate about building elegant solutions to complex problems.
              Transforming ideas into powerful, scalable software.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="bg-accent hover:bg-accent/90 text-white font-semibold shadow-lg hover-lift"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold shadow-lg hover-lift"
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
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover-lift"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/bishalregmi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover-lift"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:bishalregmi0123@gmail.com"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover-lift"
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
        <ArrowDown className="h-8 w-8 text-white" />
      </button>
    </section>
  );
};

export default Hero;
