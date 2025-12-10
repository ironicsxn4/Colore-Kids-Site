import { motion } from "framer-motion";
import { Star, MessageCircle } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const reviews = [
  {
    id: 1,
    name: "Tia Renata",
    role: "Professora de Escola Dominical",
    location: "Porto Alegre, RS",
    text: "Uso o Kit há 3 meses e as crianças nunca cansam! Sempre tem atividade nova. Material lindo e muito bem feito. Super vale o preço! ☀️",
    rating: 5,
    color: "bg-red-400"
  },
  {
    id: 2,
    name: "Amanda Ferreira",
    role: "Mãe e Educadora",
    location: "Brasília, DF",
    text: "Meu filho de 5 anos estava viciado no tablet. Comprei o Kit e ele esqueceu o eletrônico! Agora ele pede: 'mãe, imprime aquele livrinho?' Gratidão!",
    rating: 5,
    color: "bg-brand-pink"
  },
  {
    id: 3,
    name: "Pastora Júlia",
    role: "Líder de Ministério Infantil",
    location: "São Paulo, SP",
    text: "Material incrível para o culto infantil. As crianças amam e aprendem brincando. Facilitou muito meu planejamento semanal!",
    rating: 5,
    color: "bg-purple-400"
  },
  {
    id: 4,
    name: "Mariana Costa",
    role: "Mãe de 3",
    location: "Curitiba, PR",
    text: "Salvou minhas férias! Muita coisa boa pra fazer com eles. O melhor investimento que fiz esse ano para a educação dos meus filhos.",
    rating: 5,
    color: "bg-blue-400"
  },
  {
    id: 5,
    name: "Lucas Santos",
    role: "Pai e Professor",
    location: "Belo Horizonte, MG",
    text: "Qualidade impressionante. As ilustrações são lindas e o conteúdo é muito fiel aos princípios cristãos. Recomendo demais.",
    rating: 5,
    color: "bg-green-400"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4 text-brand-pink">
            <MessageCircle className="fill-current" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">O que dizem sobre nós</h2>
          </div>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Centenas de pais, professores e líderes confiam na Colore Kids
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {reviews.map((review) => (
              <CarouselItem key={review.id} className="pl-4 md:basis-1/2 lg:basis-1/3 h-auto">
                <div className="h-full p-1">
                  <TestimonialCard review={review} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="-left-12 border-brand-pink text-brand-pink hover:bg-pink-50 hover:text-brand-pink" />
            <CarouselNext className="-right-12 border-brand-pink text-brand-pink hover:bg-pink-50 hover:text-brand-pink" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

function TestimonialCard({ review }: { review: any }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-3xl shadow-sm border border-pink-50 flex flex-col h-full"
    >
      <div className="flex gap-1 text-brand-yellow mb-4">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} className="fill-current w-5 h-5" />
        ))}
      </div>
      <p className="text-foreground mb-6 flex-grow leading-relaxed">"{review.text}"</p>
      <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
        <div className={`w-12 h-12 rounded-full ${review.color} flex items-center justify-center text-white font-bold text-xl`}>
          {review.name[0]}
        </div>
        <div>
          <h4 className="font-bold text-foreground">{review.name}</h4>
          <p className="text-xs text-muted-foreground">{review.role}</p>
          <div className="flex items-center gap-1 text-xs text-brand-pink mt-1">
            <span className="w-2 h-2 bg-brand-pink rounded-full"></span>
            {review.location}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
