import { buildGitHubRawUrl } from "@/lib/config";

export const AboutSection = () => {
  return (
    <section className="bg-background py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Video a la izquierda */}
          <div className="lg:col-span-2">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full aspect-video object-cover rounded-sm"
            >
              <source src={buildGitHubRawUrl("public/lovable-uploads/Material%20de%20Apoyo/Videos/DSC_0326.mov")} type="video/mp4" />
            </video>
          </div>
          
          {/* Texto a la derecha */}
          <div className="lg:col-span-3 flex flex-col justify-center space-y-4 lg:pl-4">
            <p className="text-lg font-avenir-heavy font-heavy text-muted-foreground tracking-body leading-relaxed">
              Delia Vergara es una marca de diseño de joyería con esencia orgánica. Piezas únicas, elaboradas a mano en mi taller en Valencia.
            </p>
            <p className="text-lg font-avenir-light font-light text-muted-foreground tracking-body leading-relaxed">
              La mayoría de las piezas son producidas en ediciones limitadas y están sujetas a cambios, ya que constantemente busco innovar con nuevos diseños.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};