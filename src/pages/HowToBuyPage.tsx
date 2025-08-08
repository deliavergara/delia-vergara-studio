<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Formulario Joyería</title>
<style>
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow-y: auto; /* Scroll principal */
    scroll-behavior: smooth;
  }

  /* Contenedor principal con scroll snap */
  .contenedor {
    height: 100vh;
    overflow-y: auto;
    scroll-snap-type: y mandatory;
  }

  /* Secciones que encajan con snap */
  section {
    height: 100vh;
    scroll-snap-align: start;
    position: relative;
  }

  /* Fondo imagen */
  .bg {
    background-size: cover;
    background-position: center;
    height: 100%;
    width: 100%;
  }

  /* Contenedor de texto */
  .contenido {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    color: white;
    padding: 20px;
    overflow-y: auto; /* Mantener scroll interno si hay mucho texto */
    scrollbar-width: none; /* Firefox: ocultar barra */
  }
  .contenido::-webkit-scrollbar { /* Chrome, Safari, Edge: ocultar barra */
    display: none;
  }

  /* Evitar que la última sección rebote */
  section:last-child {
    scroll-snap-align: end;
  }
</style>
</head>
<body>

<div class="contenedor">

  <!-- Sección 1 -->
  <section>
    <div class="bg" style="background-image:url('foto1.jpg');"></div>
    <div class="contenido">
      <h1>1 Elige tu tipo de joya</h1>
      <p><strong>En stock:</strong></p>
      <p>Piezas listas para envío inmediato desde Valencia (España) o Santiago (Chile).</p>
      <p><strong>Por encargo:</strong></p>
      <p>La mayoría de mis diseños se pueden volver a producir especialmente para ti.</p>
    </div>
  </section>

  <!-- Sección 2 -->
  <section>
    <div class="bg" style="background-image:url('foto2.jpg');"></div>
    <div class="contenido">
      <h1>2 Elige tu material</h1>
      <p>Oro, plata o platino, según tu preferencia y presupuesto.</p>
    </div>
  </section>

  <!-- Sección 3 -->
  <section>
    <div class="bg" style="background-image:url('foto3.jpg');"></div>
    <div class="contenido">
      <h1>3 Finaliza tu pedido</h1>
      <p>Indícanos tus datos y te contactaremos para confirmar tu joya.</p>
    </div>
  </section>

</div>

</body>
</html>
