import { Button } from "@/components/ui/button";
import logoImg from "@assets/generated_images/cute_logo_icon_of_a_sheep_or_lamb.png";

export function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md py-3 px-4 sm:px-6 lg:px-8 border-b border-pink-100 relative z-40">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logoImg} alt="Colore Kids Logo" className="h-10 w-10 object-contain" />
          <span className="font-heading text-2xl text-brand-pink font-bold">Colore Kids</span>
        </div>
      </div>
    </nav>
  );
}
