import { buildSupabaseUrl } from "@/lib/supabase-config";

export const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${buildSupabaseUrl("productos/material-de-apoyo/foto-portada/foto_portada_3.png")})`
        }}
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
            src={buildSupabaseUrl("productos/material-de-apoyo/Logo/logo_4.png")}
            alt="Delia Vergara Logo" 
            className="h-32 w-auto opacity-50"
          />
        </button>
      </div>
    </section>
  );
};