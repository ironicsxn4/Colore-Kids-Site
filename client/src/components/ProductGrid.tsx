import { motion } from "framer-motion";
import { Star, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import coloringBookImg from "@assets/capa_plano_básico_1765142913925.png";
import premiumPlanImg from "@assets/capa_plano_premium_1765142856029.png";
import activityKitImg from "@assets/image_1765019278890.png";
import memoryGameImg from "@assets/image_1765019274089.png";

const plans = [
  {
    id: 1,
    title: "Plano Básico",
    description: "Apenas o essencial para começar a colorir.",
    price: 10.00,
    originalPrice: 29.90,
    discount: 66,
    image: coloringBookImg,
    badge: "ECONÔMICO",
    link: "https://pay.kiwify.com.br/Yvx134d",
    features: [
      "+250 Páginas para Colorir",
      "Acesso Vitalício",
      "PDF Pronto para Imprimir"
    ]
  },
  {
    id: 2,
    title: "Plano Premium",
    description: "A experiência completa com todos os bônus inclusos!",
    price: 19.90,
    originalPrice: 97.90,
    discount: 80,
    image: premiumPlanImg,
    badge: "MAIS VENDIDO",
    highlight: true,
    link: "https://pay.kiwify.com.br/YvYG61F",
    features: [
      "Tudo do Plano Básico",
      "Kit Premium de Atividades (Bônus)",
      "Jogo da Memória Bíblico (Bônus)",
      "10 Histórias em Quadrinhos (Bônus)",
      "Atualizações Gratuitas"
    ]
  }
];

export function ProductGrid() {
  return (
    <section className="py-16 px-4 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center -space-x-2 mb-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-brand-${i === 1 ? 'pink' : i === 2 ? 'orange' : 'yellow'} flex items-center justify-center text-xs font-bold text-white`}>
                😇
              </div>
            ))}
          </div>
          <p className="text-lg font-bold text-foreground max-w-md mx-auto">
            Escolha o melhor plano para sua família ✨
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center max-w-4xl mx-auto items-center">
          {plans.map((plan) => (
            <ProductCard key={plan.id} product={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: any }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={`bg-white rounded-3xl overflow-hidden shadow-sm border ${product.highlight ? 'border-brand-pink shadow-lg shadow-pink-100 scale-105 z-10' : 'border-gray-100'} group relative flex flex-col h-full`}
    >
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        {product.badge && (
          <div className={`absolute top-3 right-3 ${product.highlight ? 'bg-brand-pink text-white' : 'bg-white/90 text-brand-pink'} backdrop-blur text-xs font-bold px-3 py-1 rounded-full shadow-sm`}>
            {product.badge}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-heading font-bold text-2xl text-foreground leading-tight mb-2">{product.title}</h3>
        <p className="text-sm text-muted-foreground mb-6">{product.description}</p>
        
        <div className="flex items-end gap-2 mb-6">
          <span className="text-4xl font-heading font-bold text-brand-pink">R$ {product.price.toFixed(2).replace('.',',')}</span>
          <span className="text-sm text-muted-foreground line-through mb-1">R$ {product.originalPrice.toFixed(2).replace('.',',')}</span>
        </div>

        <ul className="space-y-3 mb-8 flex-grow">
          {product.features.map((feature: string, i: number) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
              <Check className="w-5 h-5 text-green-500 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Button 
          className={`w-full ${product.highlight ? 'bg-brand-pink hover:bg-pink-600 shadow-md shadow-pink-200' : 'bg-gray-800 hover:bg-gray-900'} rounded-xl font-bold py-6 text-lg`}
          onClick={() => window.open(product.link, '_blank')}
        >
          Quero este plano
        </Button>
      </div>
    </motion.div>
  );
}
