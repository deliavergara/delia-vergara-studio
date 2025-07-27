export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <img
            src="/lovable-uploads/Material de Apoyo/Logo/logo gris_Mesa de trabajo 1.png"
            alt="Delia Vergara Logo"
            className="h-12 mx-auto mb-6"
          />
          <p className="text-muted-foreground mb-6">
            Joyería artesanal única, elaborada a mano en Valencia, España
          </p>
        </div>
        
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4 text-foreground">Contáctame</h3>
          <div className="space-y-2">
            <p className="text-muted-foreground">
              📧 <a href="mailto:contacto@deliavergara.com" className="hover:text-primary transition-colors">
                contacto@deliavergara.com
              </a>
            </p>
            <p className="text-muted-foreground">
              📱 <a href="https://wa.me/34123456789" className="hover:text-primary transition-colors">
                WhatsApp
              </a>
            </p>
            <p className="text-muted-foreground">
              📍 Valencia, España
            </p>
          </div>
        </div>
        
        <div className="border-t border-border pt-6">
          <p className="text-sm text-muted-foreground">
            © 2024 Delia Vergara. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};