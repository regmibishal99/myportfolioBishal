import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container-custom px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Bishal Regmi. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1 flex items-center justify-center md:justify-start gap-1">
              Built with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> using React & TypeScript
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/bishalregmi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-accent/10 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/bishalregmi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-accent/10 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:bishalregmi0123@gmail.com"
              className="p-2 rounded-full hover:bg-accent/10 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
