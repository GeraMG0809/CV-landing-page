var imagenes = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg'];
var cont = 0;
var interval;

function carrusel(contenedor) {
    var img = contenedor.querySelector('img');

    function cambiarImagen(direction) {
        cont += direction;

        if (cont < 0) {
            cont = imagenes.length - 1;
        } else if (cont >= imagenes.length) {
            cont = 0;
        }

        img.src = imagenes[cont];
    }

    function avanzar() {
        cambiarImagen(1);
    }

    function retroceder() {
        cambiarImagen(-1);
    }

    function startInterval() {
        interval = setInterval(avanzar, 3000); 
    }

    function stopInterval() {
        clearInterval(interval);
    }

    contenedor.addEventListener('click', (e) => {
        let tgt = e.target;

        if (tgt.classList.contains('atras')) {
            retroceder();
        } else if (tgt.classList.contains('adelante')) {
            avanzar();
        }

        
        stopInterval();
        startInterval();
    });

    
    startInterval();
}

document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector('.contenedor');
    carrusel(contenedor);
});
