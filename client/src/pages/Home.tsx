import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { Testimonials } from "@/components/Testimonials";
import { Steps } from "@/components/Steps";
import { TargetAudience } from "@/components/TargetAudience";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* Video Section */}
        <section className="py-10 px-4 bg-black">
          <div className="max-w-4xl mx-auto">
            <div className="relative pt-[56.25%] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
              <iframe 
                src="https://player.vimeo.com/video/1144183295?h=8353325c58&badge=0&autopause=0&player_id=0&app_id=58479" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
                className="absolute top-0 left-0 w-full h-full"
                title="Colore Kids VSL"
              ></iframe>
            </div>
            <p className="text-center text-white/60 mt-4 text-sm">Assista ao vídeo para ver como funciona</p>
          </div>
        </section>

        {/* Product Section */}
        <ProductGrid />
        
        <Testimonials />
        <Steps />
        <TargetAudience />
      </main>
      <Footer />
    </div>
  );
}
