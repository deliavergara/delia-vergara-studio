import { buildMaterialUrl } from "@/lib/supabase-config";

export const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img 
        src={buildMaterialUrl("Foto portada", "DSC_0124.jpg")}
        alt="Hero background" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Subtle gradient overlay to ensure logo readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/10" />
      
      {/* Logo overlay */}
      <div className="absolute inset-0 flex items-start justify-center pt-20">
        <button 
          onClick={() => window.location.href = '/'}
          className="hover:opacity-70 transition-elegant cursor-pointer"
        >
          <img 
            src={buildMaterialUrl("Logo", "logo gcasi blanco_Mesa de trabajo 1.png")}
            alt="Delia Vergara Logo" 
            className="h-32 w-auto opacity-50"
          />
        </button>
      </div>
    </section>
  );
};