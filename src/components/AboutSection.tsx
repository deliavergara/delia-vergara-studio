import { buildGitHubRawUrl } from "@/lib/config";
export const AboutSection = () => {
  return <section className="bg-background py-6">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Texto arriba del video - más pequeño y angosto */}
        <div className="text-center mb-8 max-w-2xl mx-auto">
          
        </div>
        
        {/* Video centrado */}
        <div className="flex justify-center">
          <div className="w-full max-w-xl">
            <video autoPlay muted loop playsInline className="w-full aspect-[3/4] object-cover rounded-sm">
              <source src={buildGitHubRawUrl("public/lovable-uploads/Material%20de%20Apoyo/Videos/DSC_0326.mov")} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>;
};