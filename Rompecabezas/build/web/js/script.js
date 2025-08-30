let puzzleContainer = document.getElementById("puzzle");
let mensaje = document.getElementById("mensaje");


let piezas = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 
    'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/9.jpg', 'img/10.jpg', 'img/11.jpg',
    'img/12.jpg', 'img/13.jpg', 'img/14.jpg', 'img/15.jpg', ""];
let estado = [];


function mezclar(array) {
    let copia = [...array]; 
    for (let i = copia.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }

    return copia; 
}



function dibujar() {
    puzzleContainer.innerHTML = "";
    estado.forEach((valor, i) => {
        let celda = document.createElement("div");
        celda.classList.add("celda");
        if (valor === "") {
            celda.classList.add("vacio");
        } else {
            let imagen = document.createElement("img");
            imagen.src = valor;
            imagen.alt = `Pieza ${i + 1}`;
            celda.appendChild(imagen);
            celda.addEventListener("click", () => mover(i));
            
        }
        puzzleContainer.appendChild(celda);
    });
}

function mover(indice) {
    let vacio = estado.indexOf("");
    let filas = 4;
    let col = indice % filas;
    let fila = Math.floor(indice / filas);
    let colVacio = vacio % filas;
    let filaVacio = Math.floor(vacio / filas);
    

    if ((Math.abs(col - colVacio) === 1 && fila === filaVacio) ||
        (Math.abs(fila - filaVacio) === 1 && col === colVacio)) {
        [estado[indice], estado[vacio]] = [estado[vacio], estado[indice]];
        dibujar();
        verificar();
    }
}


function verificar() {
    if (JSON.stringify(estado) === JSON.stringify(piezas)) {
        mensaje.innerText = "Felicidades, has completado el rompecabezas";
    }
}





let tiempo = 600;
let tiempoDos;
 function iniciarJuego() {
    if (!tiempoDos) {
        tiempoDos = setInterval(() => {
            if (tiempo > 0) {
                tiempo--;

                let min = Math.floor(tiempo / 60);
               let sec = tiempo % 60;
                 min = min < 10 ? "0" + min : min;
                sec = sec < 10 ? "0" + sec : sec;

                document.getElementById("cronometro").innerText = min + ":" + sec;
            } else {
                clearInterval(tiempoDos);
                window.alert("Pierdes el Juego, tiempo Terminado");
                reiniciar();
            }
        }, 1000);
    }
}


function reiniciar() {
    clearInterval(tiempoDos);
    tiempoDos = null;
    tiempo = 600; 
    document.getElementById("cronometro").innerText = "10:00"; 
    estado = mezclar(piezas);
    mensaje.innerText = "";
    dibujar();

}
function cerrarModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    }
}

reiniciar();








