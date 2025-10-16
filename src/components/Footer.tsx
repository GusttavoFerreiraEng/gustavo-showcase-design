import { Github, Linkedin, Mail, Instagram } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/gustavoferreira",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/gustavoferreira",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:gustavo@email.com",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/gustavoferreira",
    },
  ];

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(var(--text-body))] hover:text-primary transition-colors"
                aria-label={link.name}
              >
                <link.icon size={24} />
              </a>
            ))}
          </div>
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Gustavo Ferreira. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
