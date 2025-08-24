import { buildSupabaseUrl } from "@/lib/supabase-config";

export const AboutSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-20">
          <source src={buildSupabaseUrl("productos/material-de-apoyo/Videos/videos_1.mov")} type="video/mp4" />
        </video>
      </div>
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Texto arriba del video - más pequeño y angosto */}
        <div className="text-center mb-8 max-w-2xl mx-auto">
          
        </div>
        
        {/* Video centrado */}
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <video autoPlay muted loop playsInline className="w-full aspect-[3/4] object-cover rounded-sm">
              <source src={buildSupabaseUrl("productos/material-de-apoyo/Videos/DSC_0326.mov")} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};