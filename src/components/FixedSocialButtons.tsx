import { buildGitHubRawUrl } from "@/lib/config";

const FixedSocialButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <a href="https://wa.me/34625857127" target="_blank" rel="noopener noreferrer">
        <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105" style={{backgroundColor: '#EDEDED'}}>
          <img 
            src={buildGitHubRawUrl("public/lovable-uploads/Material%20de%20Apoyo/Iconos/ICONO%20WHATSAP.png")} 
            alt="WhatsApp" 
            className="h-4 w-4"
          />
          <span className="font-avenir-light font-light text-sm" style={{color: '#353333'}}>WhatsApp</span>
        </div>
      </a>

      <a href="https://instagram.com/deliavergaras" target="_blank" rel="noopener noreferrer">
        <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105" style={{backgroundColor: '#EDEDED'}}>
          <img 
            src={buildGitHubRawUrl("public/lovable-uploads/Material%20de%20Apoyo/Iconos/ICONO%20INSTAGRAM.png")} 
            alt="Instagram" 
            className="h-4 w-4"
          />
          <span className="font-avenir-light font-light text-sm" style={{color: '#353333'}}>@deliavergaras</span>
        </div>
      </a>
    </div>
  );
};

export default FixedSocialButtons;