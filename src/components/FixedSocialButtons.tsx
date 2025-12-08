import { buildSupabaseUrl } from "@/lib/supabase-config";

const FixedSocialButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a href="https://wa.me/34625857127" target="_blank" rel="noopener noreferrer">
        <div className="flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 hover:scale-105" style={{backgroundColor: '#EDEDED'}}>
          <img
            src={buildSupabaseUrl("productos/material_de_apoyo/iconos/iconos_2.png")}
            alt="WhatsApp"
            className="w-5 h-5"
          />
          <span className="font-avenir-light font-light text-sm" style={{color: '#353333'}}>WhatsApp</span>
        </div>
      </a>

      <a href="https://www.instagram.com/deliavergaras" target="_blank" rel="noopener noreferrer">
        <div className="flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 hover:scale-105" style={{backgroundColor: '#EDEDED'}}>
          <img
            src={buildSupabaseUrl("productos/material_de_apoyo/iconos/iconos_1.png")}
            alt="Instagram"
            className="w-5 h-5"
          />
          <span className="font-avenir-light font-light text-sm" style={{color: '#353333'}}>@deliavergaras</span>
        </div>
      </a>
    </div>
  );
};

export default FixedSocialButtons;
