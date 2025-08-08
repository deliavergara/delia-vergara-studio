import React from "react";

const HowToBuyPage: React.FC = () => {
  return (
    <div
      style={{
        height: "100vh",
        overflowY: "auto",
        scrollSnapType: "y mandatory",
        scrollBehavior: "smooth",
        margin: 0,
        padding: 0,
      }}
    >
      {/* Sección 1 */}
      <section
        style={{
          height: "100vh",
          scrollSnapAlign: "start",
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundImage: "url('/foto1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            width: "100%",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            color: "white",
            padding: "20px",
            overflowY: "auto",
            scrollbarWidth: "none", // Firefox
          }}
          className="contenido"
        >
          <style>
            {`
              .contenido::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>
          <h1>1 Elige tu tipo de joya</h1>
          <p><strong>En stock:</strong></p>
          <p>Piezas listas para envío inmediato desde Valencia (España) o Santiago (Chile).</p>
          <p><strong>Por encargo:</strong></p>
          <p>La mayoría de mis diseños se pueden volver a producir especialmente para ti.</p>
        </div>
      </section>

      {/* Sección 2 */}
      <section
        style={{
          height: "100vh",
          scrollSnapAlign: "start",
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundImage: "url('/foto2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            width: "100%",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            color: "white",
            padding: "20px",
            overflowY: "auto",
            scrollbarWidth: "none",
          }}
          className="contenido"
        >
          <h1>2 Elige tu material</h1>
          <p>Oro, plata o platino, según tu preferencia y presupuesto.</p>
        </div>
      </section>

      {/* Sección 3 */}
      <section
        style={{
          height: "100vh",
          scrollSnapAlign: "end", // Final sin rebote
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundImage: "url('/foto3.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            width: "100%",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            color: "white",
            padding: "20px",
            overflowY: "auto",
            scrollbarWidth: "none",
          }}
          className="contenido"
        >
          <h1>3 Finaliza tu pedido</h1>
          <p>Indícanos tus datos y te contactaremos para confirmar tu joya.</p>
        </div>
      </section>
    </div>
  );
};

export default HowToBuyPage;
