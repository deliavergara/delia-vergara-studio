import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contacto");
  };

  return (
    <footer className="bg-background py-24">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Cada pieza está diseñada y creada a mano en mi taller de Valencia. 
            Si tienes alguna pregunta o quieres crear algo especial, no dudes en contactarme.
          </p>
          
          <button
            onClick={handleContactClick}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-md hover:bg-primary/90 transition-colors text-lg"
          >
            Contáctame
          </button>
        </div>
      </div>
    </footer>
  );
};