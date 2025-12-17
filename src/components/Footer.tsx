import { Github, Mail, FileText } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold gradient-text">NextTrack</span>
            <span className="text-muted-foreground">API</span>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="#docs" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <FileText className="w-4 h-4" />
              Documentation
            </a>
            <a 
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a 
              href="mailto:contact@nexttrack.dev" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>Final Year Project — Music Recommendation API</p>
          <p className="mt-2">Built with React, TypeScript, and love for music.</p>
        </div>
      </div>
    </footer>
  );
};
