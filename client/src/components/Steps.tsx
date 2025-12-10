import { Heart, Sparkles, Printer } from "lucide-react";
import { motion } from "framer-motion";

export function Steps() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Como funciona?</h2>
          <p className="text-muted-foreground">
            É super simples! Em 3 passos você já tem material educativo de qualidade.
          </p>
        </div>

        <div className="grid gap-8">
          <StepCard 
            number="1"
            title="Escolha o kit"
            description="Navegue pelos nossos kits e escolha o que mais combina com suas necessidades."
            icon={Heart}
            iconColor="text-white"
            iconBg="bg-brand-pink"
          />
          <StepCard 
            number="2"
            title="Pague online com segurança"
            description="Cartão, PIX ou boleto. Pagamento 100% seguro e protegido."
            icon={Sparkles}
            iconColor="text-white"
            iconBg="bg-brand-orange"
          />
          <StepCard 
            number="3"
            title="Receba e imprima em casa"
            description="PDFs chegam no seu e-mail em minutos. Imprima quantas vezes quiser!"
            icon={Printer}
            iconColor="text-white"
            iconBg="bg-blue-500"
          />
        </div>
      </div>
    </section>
  );
}

function StepCard({ number, title, description, icon: Icon, iconColor, iconBg }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white border-2 border-gray-100 rounded-3xl p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-sm hover:border-brand-pink/30 transition-colors"
    >
      <div className={`flex-shrink-0 w-16 h-16 ${iconBg} rounded-2xl flex items-center justify-center shadow-md shadow-pink-100`}>
        <Icon className={`w-8 h-8 ${iconColor}`} />
      </div>
      <div>
        <div className="flex items-baseline gap-3 mb-2">
          <span className="text-6xl font-heading font-bold text-gray-100">{number}</span>
          <h3 className="text-xl font-bold text-foreground -ml-2">{title}</h3>
        </div>
        <p className="text-muted-foreground pl-1">{description}</p>
      </div>
    </motion.div>
  );
}
