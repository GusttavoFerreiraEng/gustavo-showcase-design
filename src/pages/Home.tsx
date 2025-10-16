import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import profilePhoto from "@/assets/profile-photo.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative py-20 md:py-32 overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.95)), url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12 animate-fade-in">
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Olá, sou{" "}
                  <span className="text-gradient">Gustavo Ferreira</span>
                </h1>
                <p className="text-base md:text-lg mb-4">
                  Desenvolvedor Full Stack apaixonado por criar experiências
                  digitais incríveis e soluções inovadoras. Com expertise em
                  tecnologias modernas, transformo ideias em realidade através
                  de código limpo e eficiente.
                </p>
                <p className="text-base md:text-lg mb-8">
                  Especializado em React, TypeScript, Node.js e design
                  responsivo. Trabalho para entregar produtos de alta qualidade
                  que superam as expectativas dos usuários e clientes.
                </p>
                <div className="flex gap-4 justify-center md:justify-start">
                  <Link to="/projetos">
                    <Button className="gap-2">
                      Ver Projetos <ArrowRight size={16} />
                    </Button>
                  </Link>
                  <Link to="/contato">
                    <Button variant="outline">Entrar em Contato</Button>
                  </Link>
                </div>
              </div>
              <div className="flex-shrink-0">
                <img
                  src={profilePhoto}
                  alt="Gustavo Ferreira"
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-primary/20"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="animate-fade-in">
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  50+
                </h3>
                <p className="text-sm">Projetos Concluídos</p>
              </div>
              <div className="animate-fade-in">
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  5+
                </h3>
                <p className="text-sm">Anos de Experiência</p>
              </div>
              <div className="animate-fade-in">
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  30+
                </h3>
                <p className="text-sm">Clientes Satisfeitos</p>
              </div>
              <div className="animate-fade-in">
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  100%
                </h3>
                <p className="text-sm">Dedicação</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
