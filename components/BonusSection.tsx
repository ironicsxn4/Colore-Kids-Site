import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import activityKitImg from "@assets/image_1765019278890.png";
import memoryGameImg from "@assets/image_1765019274089.png";
import comicBookImg from "@assets/generated_images/christian_comic_book_cover_for_kids.png";

const bonuses = [
  {
    id: 1,
    title: "Kit Premium de Atividades",
    description: "Dinâmicas e lições prontas para professores de Escola Dominical.",
    originalPrice: 47.90,
    image: activityKitImg,
  },
  {
    id: 2,
    title: "Memorize a Bíblia — Edição Kids",
    description: "Jogo da memória divertido para aprender versículos brincando.",
    originalPrice: 37.90,
    image: memoryGameImg,
  },
  {
    id: 3,
    title: "10 Histórias em Quadrinhos",
    description: "Uma coleção incrível de histórias bíblicas em formato de quadrinhos.",
    originalPrice: 29.90,
    image: comicBookImg,
  }
];

export function BonusSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="bg-purple-100 p-3 rounded-full">
              <Gift className="w-8 h-8 text-purple-600" />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Presentes Exclusivos pra Você! 🎁
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprando hoje o pacote de desenhos, você leva totalmente <span className="font-bold text-purple-600">GRÁTIS</span> esses três bônus incríveis:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {bonuses.map((bonus, index) => (
            <BonusCard key={bonus.id} bonus={bonus} index={index} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-purple-100 border border-purple-200 rounded-2xl p-6 shadow-sm">
            <p className="text-purple-800 font-bold text-lg md:text-xl">
              Valor Total dos Bônus: <span className="text-red-500 line-through">R$ {(bonuses.reduce((acc, curr) => acc + curr.originalPrice, 0)).toFixed(2).replace('.', ',')}</span> <span className="text-green-600 ml-2">GRÁTIS</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BonusCard({ bonus, index }: { bonus: any, index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-white rounded-3xl overflow-hidden shadow-lg border-2 border-purple-50 hover:border-purple-200 transition-colors group relative"
    >
      <div className="absolute top-4 right-4 z-10">
        <span className="bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md uppercase tracking-wide">
          Grátis
        </span>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
        <div className="h-48 sm:h-full relative overflow-hidden bg-gray-50">
          <img 
            src={bonus.image} 
            alt={bonus.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
          />
        </div>
        
        <div className="p-6 flex flex-col justify-center">
          <span className="text-xs font-bold text-purple-500 mb-2 uppercase tracking-wider">Bônus #{index + 1}</span>
          <h3 className="font-heading font-bold text-xl text-foreground leading-tight mb-3">
            {bonus.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            {bonus.description}
          </p>
          <div className="mt-auto">
            <p className="text-xs text-muted-foreground mb-1">Vendido separadamente por:</p>
            <p className="text-xl font-bold text-red-400 line-through">
              R$ {bonus.originalPrice.toFixed(2).replace('.', ',')}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
