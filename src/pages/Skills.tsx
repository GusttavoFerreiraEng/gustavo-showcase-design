import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React / Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Vue.js", level: 80 },
        { name: "JavaScript ES6+", level: 95 },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "REST API", level: 90 },
        { name: "GraphQL", level: 75 },
        { name: "Python", level: 70 },
        { name: "PostgreSQL", level: 80 },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Vite & Webpack", level: 85 },
        { name: "Jest & Testing", level: 80 },
        { name: "CI/CD", level: 75 },
      ],
    },
    {
      title: "Design & UX",
      skills: [
        { name: "Figma", level: 85 },
        { name: "UI/UX Design", level: 80 },
        { name: "Responsive Design", level: 95 },
        { name: "Accessibility", level: 85 },
        { name: "Adobe XD", level: 75 },
        { name: "Prototyping", level: 80 },
      ],
    },
  ];

  const softSkills = [
    "Comunicação Efetiva",
    "Trabalho em Equipe",
    "Resolução de Problemas",
    "Gestão de Tempo",
    "Adaptabilidade",
    "Pensamento Crítico",
    "Liderança",
    "Aprendizado Contínuo",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Minhas <span className="text-gradient">Habilidades</span>
            </h1>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-center text-base max-w-2xl mx-auto">
              Ao longo da minha carreira, desenvolvi expertise em diversas
              tecnologias e ferramentas. Estou sempre aprendendo e me
              atualizando para oferecer as melhores soluções.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 animate-fade-in">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6">
                <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm text-[hsl(var(--text-body))]">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-center mb-12">
              Soft Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {softSkills.map((skill, index) => (
                <Card
                  key={index}
                  className="p-4 text-center hover:shadow-lg transition-shadow"
                >
                  <p className="text-sm font-medium">{skill}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-20 animate-fade-in">
            <h2 className="text-3xl font-bold text-center mb-12">
              Certificações & Formação
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">
                  Bacharelado em Ciência da Computação
                </h3>
                <p className="text-sm text-[hsl(var(--text-body))]">
                  Universidade Federal - 2019
                </p>
              </Card>
              <Card className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">
                  AWS Certified Developer
                </h3>
                <p className="text-sm text-[hsl(var(--text-body))]">
                  Amazon Web Services - 2022
                </p>
              </Card>
              <Card className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">
                  React Professional Certificate
                </h3>
                <p className="text-sm text-[hsl(var(--text-body))]">
                  Meta - 2023
                </p>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Skills;
