<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Juego De Rompecabezas</title>
        <link rel="stylesheet" href="css/estilo.css">
    </head>
    <body>
        <div class="imagenArriba">
            <img src="img/logoMadrid.png" alt="Encabezado del juego">
        </div>
        <div class="main-content">
            <div class="container">
                <h2>Rompecabezas 4x4</h2>
                <p>Haz clic en un fragmento de imagen adyacente al espacio vacío para moverlo.</p>
                <div id="puzzle" class="puzzle"></div>
                <p id="mensaje"></p>
                <div id="cronometro" class="tiempo">10:00</div>
                <div class="botones">
                    <button onclick="iniciarJuego()">Comenzar</button>
                    <button onclick="reiniciar()">Reiniciar</button>
                </div>
            </div>

            <div class="ImagenReferencia">
                <h2>Imagen de Referencia</h2>
                <p>Utiliza esta imagen de referencia para armarlo.</p>
                <img src="img/images.jpg" alt="Imagen de referencia De KIKI MBAPPE">
            </div>
        </div>
        <div id="victoria-modal" class="modal">
         <div class="modal-content">
        <span class="close-button" onclick="cerrarModal('victoria-modal')">&times;</span>
        <h2>Felicidades has ganado! 🎉</h2>
        <p>Has completado el rompecabezas</p>
          </div>
</div>

        <script src="js/script.js"></script>
    </body>
</html>