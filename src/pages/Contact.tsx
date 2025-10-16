import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso! Retornarei em breve.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "gustavo@email.com",
      link: "mailto:gustavo@email.com",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "+55 (11) 98765-4321",
      link: "tel:+5511987654321",
    },
    {
      icon: MapPin,
      title: "Localização",
      content: "São Paulo, SP - Brasil",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Entre em <span className="text-gradient">Contato</span>
            </h1>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-center text-base max-w-2xl mx-auto">
              Tem um projeto em mente? Quer discutir uma oportunidade de
              colaboração? Estou sempre aberto a novos desafios e conexões.
              Entre em contato comigo!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 animate-fade-in">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <info.icon
                  size={40}
                  className="text-primary mx-auto mb-4"
                  strokeWidth={1.5}
                />
                <h3 className="text-lg font-bold mb-2">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-sm text-[hsl(var(--text-body))] hover:text-primary transition-colors"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-sm text-[hsl(var(--text-body))]">
                    {info.content}
                  </p>
                )}
              </Card>
            ))}
          </div>

          <Card className="max-w-3xl mx-auto p-8 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Envie uma Mensagem
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome Completo
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className="text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Assunto
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Sobre o que você quer falar?"
                  className="text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Escreva sua mensagem aqui..."
                  rows={6}
                  className="text-sm resize-none"
                />
              </div>
              <Button type="submit" className="w-full gap-2" size="lg">
                <Send size={18} />
                Enviar Mensagem
              </Button>
            </form>
          </Card>

          <div className="mt-16 text-center animate-fade-in">
            <h2 className="text-2xl font-bold mb-6">Conecte-se Comigo</h2>
            <p className="text-base mb-8 max-w-2xl mx-auto">
              Também estou presente nas principais redes sociais e plataformas
              profissionais. Siga-me para acompanhar meus projetos, artigos e
              atualizações sobre tecnologia.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
