import logoImg from "@assets/generated_images/cute_logo_icon_of_a_sheep_or_lamb.png";
import { Mail, ArrowUp } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useState } from "react";

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-pink-50 to-white pt-20 pb-10 px-4 border-t border-pink-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <img src={logoImg} alt="Colore Kids" className="w-8 h-8" />
            <span className="font-heading text-xl font-bold text-brand-pink">Colore Kids</span>
          </div>
          <p className="text-muted-foreground max-w-xs mb-6">
            PDFs fofos e educativos para entreter crianças longe do celular, com fé e criatividade.
          </p>
          
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
            <Mail className="w-4 h-4" />
            <span>suporte@colorekids.com.br</span>
          </div>
          <p className="text-xs text-muted-foreground/60">Respondemos em até 24h úteis</p>
        </div>

        <div className="col-span-1 md:col-span-2">
          <h4 className="font-bold text-foreground mb-4">Perguntas Frequentes</h4>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-pink-100">
              <AccordionTrigger className="text-foreground hover:text-brand-pink hover:no-underline">
                Como recebo o material?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                O acesso chega no seu e-mail logo após a confirmação do pagamento. É só baixar e imprimir!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-pink-100">
              <AccordionTrigger className="text-foreground hover:text-brand-pink hover:no-underline">
                Preciso pagar mensalidade?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Não! O pagamento é único e você tem acesso vitalício ao material que comprou.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-pink-100">
              <AccordionTrigger className="text-foreground hover:text-brand-pink hover:no-underline">
                Qual a idade recomendada?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Nossos materiais são ideais para crianças de 2 a 8 anos, com atividades adaptáveis.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-pink-100">
              <AccordionTrigger className="text-foreground hover:text-brand-pink hover:no-underline">
                Posso imprimir quantas vezes?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sim! O arquivo é seu. Você pode imprimir quantas vezes quiser para seus filhos ou alunos.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className="border-t border-pink-100 pt-8 text-center">
        <p className="text-muted-foreground text-sm mb-2">© 2025 Colore Kids. Todos os direitos reservados.</p>
        <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
          Feito com <span className="text-brand-pink">♥</span> para crianças de verdade
        </p>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-brand-pink hover:bg-pink-600 text-white p-4 rounded-full shadow-lg shadow-pink-200 transition-all hover:scale-110 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </footer>
  );
}
