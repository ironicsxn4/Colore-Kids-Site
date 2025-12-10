import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Palette, BookOpen, Printer } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-12 pb-20 px-4 overflow-hidden text-center">
      {/* Abstract Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-200 rounded-full blur-3xl opacity-50 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-brand-pink/20 rounded-full blur-3xl opacity-50" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-pink to-brand-orange text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg mb-8 hover:scale-105 transition-transform cursor-default">
          <span className="text-yellow-300">✨</span> Material 100% Digital
        </div>

        <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground leading-tight mb-6">
          PDFs fofos pra entreter <br/> as crianças <span className="text-brand-pink">longe do</span> <br/> <span className="text-brand-orange">celular.</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mt-12">
          <HeroCard icon={Palette} label="Desenhos e atividades" color="bg-pink-100 text-brand-pink" />
          <HeroCard icon={BookOpen} label="Kits devocionais" color="bg-purple-100 text-purple-500" />
          <HeroCard icon={Printer} label="Prontos pra imprimir" color="bg-blue-100 text-blue-500" />
        </div>

        <p className="mt-8 text-muted-foreground font-medium flex items-center justify-center gap-2 text-sm sm:text-base flex-wrap">
          Use em casa 🏠 • na igreja ⛪ • ou na escola 🏫
        </p>
      </motion.div>
    </section>
  );
}

function HeroCard({ icon: Icon, label, color }: { icon: any, label: string, color: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl p-6 shadow-sm border-2 border-transparent hover:border-brand-pink/20 transition-all flex flex-col items-center gap-3 group cursor-pointer"
    >
      <div className={`p-4 rounded-full ${color} group-hover:scale-110 transition-transform`}>
        <Icon className="h-6 w-6" />
      </div>
      <span className="font-bold text-foreground">{label}</span>
    </motion.div>
  );
}
