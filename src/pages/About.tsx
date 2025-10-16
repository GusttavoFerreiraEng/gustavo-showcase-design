import Header from "@/components/Header";
import Footer from "@/components/Footer";
import profilePhoto from "@/assets/profile-photo.jpg";
import { Card } from "@/components/ui/card";
import { Code, Palette, Rocket, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Code,
      title: "Código Limpo",
      description: "Escrevo código maintível, escalável e bem documentado.",
    },
    {
      icon: Palette,
      title: "Design Focado",
      description: "Crio interfaces intuitivas e experiências memoráveis.",
    },
    {
      icon: Rocket,
      title: "Inovação",
      description: "Sempre buscando as melhores e mais modernas soluções.",
    },
    {
      icon: Users,
      title: "Colaboração",
      description: "Trabalho em equipe para alcançar resultados excepcionais.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          {/* Hero */}
          <div className="mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Sobre <span className="text-gradient">Mim</span>
            </h1>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* Bio Section */}
          <div className="flex flex-col md:flex-row gap-12 mb-20 items-center animate-fade-in">
            <div className="flex-shrink-0">
              <img
                src={profilePhoto}
                alt="Gustavo Ferreira"
                className="w-64 h-64 rounded-2xl object-cover shadow-xl"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Desenvolvedor Full Stack & Designer UI/UX
              </h2>
              <p className="text-base mb-4">
                Minha jornada no desenvolvimento web começou há mais de 5 anos,
                quando descobri minha paixão por transformar ideias em
                realidade através do código. Desde então, venho me dedicando a
                criar soluções digitais que não apenas funcionam perfeitamente,
                mas também proporcionam experiências excepcionais aos usuários.
              </p>
              <p className="text-base mb-4">
                Com formação em Ciência da Computação e experiência prática em
                diversos projetos, desenvolvi uma abordagem única que combina
                habilidades técnicas sólidas com um olhar atento ao design e à
                usabilidade. Acredito que o melhor código é aquele que resolve
                problemas reais de forma elegante e eficiente.
              </p>
              <p className="text-base mb-4">
                Atualmente, trabalho com tecnologias modernas como React,
                TypeScript, Node.js e diversas ferramentas do ecossistema
                JavaScript. Estou sempre aprendendo e me atualizando sobre as
                últimas tendências e melhores práticas da indústria.
              </p>
              <p className="text-base">
                Quando não estou codificando, gosto de contribuir com a
                comunidade open source, escrever sobre tecnologia e mentorar
                desenvolvedores iniciantes. Acredito no poder da colaboração e
                do compartilhamento de conhecimento para construir um futuro
                digital melhor para todos.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Meus Valores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow"
                >
                  <value.icon
                    size={40}
                    className="text-primary mb-4"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-lg font-bold mb-3">{value.title}</h3>
                  <p className="text-sm">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
