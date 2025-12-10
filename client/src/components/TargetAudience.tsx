import { Users, Book, School, Church } from "lucide-react";
import { motion } from "framer-motion";

export function TargetAudience() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Pra quem é?</h2>
        <p className="text-muted-foreground mb-12 max-w-lg mx-auto">
          Nossos kits são perfeitos para quem quer educar e entreter crianças com fé e criatividade.
        </p>

        <div className="grid grid-cols-1 gap-4">
          <TargetCard 
            icon={Users} 
            title="Pais e Mães" 
            description="Atividades educativas para seus filhos aprenderem e se divertirem longe das telas."
            emoji="👨‍👩‍👧‍👦"
          />
          <TargetCard 
            icon={Book} 
            title="Professores de EBD" 
            description="Materiais prontos para suas aulas serem mais dinâmicas e envolventes."
            emoji="📖"
          />
          <TargetCard 
            icon={School} 
            title="Escolas Cristãs" 
            description="Conteúdo educacional bíblico para usar durante todo o ano letivo."
            emoji="🏫"
          />
          <TargetCard 
            icon={Church} 
            title="Ministérios Infantis" 
            description="Recursos para engajar crianças em cultos, células e eventos especiais."
            emoji="⛪"
          />
        </div>
      </div>
    </section>
  );
}

function TargetCard({ title, description, emoji }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl p-6 shadow-sm border border-pink-50 flex flex-col items-center text-center hover:shadow-md transition-shadow"
    >
      <div className="text-4xl mb-4">{emoji}</div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </motion.div>
  );
}
