import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Plataforma completa de e-commerce com carrinho de compras, sistema de pagamento integrado e painel administrativo. Desenvolvida com React, Node.js e MongoDB.",
      image: project1,
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Mobile Banking App",
      description:
        "Aplicativo mobile de banco digital com recursos de transferências, pagamentos, investimentos e gestão financeira. Interface moderna e intuitiva com foco em segurança.",
      image: project2,
      tags: ["React Native", "TypeScript", "Firebase"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Portfolio Builder",
      description:
        "Ferramenta online para criação de portfólios profissionais com diversos templates personalizáveis. Sistema de arrastar e soltar para facilitar a edição.",
      image: project3,
      tags: ["React", "TailwindCSS", "Vite"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management System",
      description:
        "Sistema completo de gerenciamento de tarefas e projetos com recursos de colaboração em tempo real, notificações e relatórios de produtividade.",
      image: project1,
      tags: ["Next.js", "PostgreSQL", "Prisma"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Dashboard para análise e gerenciamento de múltiplas redes sociais em um único lugar. Visualização de métricas, agendamento de posts e relatórios detalhados.",
      image: project2,
      tags: ["Vue.js", "Express", "Chart.js"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "AI Content Generator",
      description:
        "Plataforma que utiliza inteligência artificial para gerar conteúdo de marketing, posts para redes sociais e descrições de produtos de forma automatizada.",
      image: project3,
      tags: ["React", "Python", "OpenAI"],
      demoUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Meus <span className="text-gradient">Projetos</span>
            </h1>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-center text-base max-w-2xl mx-auto">
              Conheça alguns dos projetos que desenvolvi ao longo da minha
              carreira. Cada um representa um desafio único e uma oportunidade
              de aprendizado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-sm mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-secondary text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" className="flex-1 gap-2" asChild>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 gap-2"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} />
                        Código
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
