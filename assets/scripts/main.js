const ids = ['id-tarjeta-1-imagen-1', 'id-tarjeta-1-imagen-2', 'id-tarjeta-1-imagen-3', 'id-tarjeta-1-imagen-4', 'id-tarjeta-1-imagen-5', 'id-tarjeta-1-imagen-6'];

ids.forEach(function(id) {
  document.getElementById(id).addEventListener('click', function() {
    this.querySelector('.tarjeta').classList.toggle('volteada');
  });
});

const botonAtras = document.getElementById("boton-atras");
const botonAdelante = document.getElementById("boton-adelante");
const carrusel = document.getElementById("carrusel");

botonAtras.addEventListener("click", () => {
    carrusel.scrollBy({
        left: -300,
        behavior: 'smooth'
    });
});

botonAdelante.addEventListener("click", () => {
    carrusel.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const starField = document.querySelector('.stars');
  const numberOfStars = 150;
  for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      const x = Math.random() * starField.offsetWidth;
      const y = Math.random() * starField.offsetHeight;

      star.style.left = `${x}px`;
      star.style.top = `${y}px`;
      
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      starField.appendChild(star);
  }
});

// Selecciona el enlace y la imagen dentro de él
const header = document.getElementById('soyunid');
const boton = document.querySelector('.boton-3');
const botonImagen = document.querySelector('.boton-3 img');
function handleScroll() {
    if (window.scrollY < 20) {
        header.style.background="transparent";

        botonImagen.classList.remove('boton-3-despues');
        botonImagen.classList.add('boton-3-antes');
        boton.setAttribute('href', '#footer');
        botonImagen.setAttribute('alt', 'Ir al final');
        botonImagen.setAttribute('title', 'Ir al final');
    } else {
        header.style.background="linear-gradient(to right, #0d0d0d, #041537)";
        
        botonImagen.classList.remove('boton-3-antes');
        botonImagen.classList.add('boton-3-despues');
        boton.setAttribute('href', '#inicio');
        botonImagen.setAttribute('alt', 'Ir al inicio');
        botonImagen.setAttribute('title', 'Ir al inicio');
    }
}
window.addEventListener('scroll', handleScroll);
handleScroll();

// Script para reproducir sonido de buho
const imagenBuho = document.getElementById('imagen-buho');
const audioBuho = document.getElementById('audio-buho');
imagenBuho.addEventListener('click', function() {
    audioBuho.play();
});

// Script para el menú del celular
const opciones = document.querySelectorAll('.nav-ul-li a');
const mainmenu = document.getElementById('id_contenedor_menu_main');
const menu = document.getElementById('menu-celular');

function menu_celular() {
    menu.style.display = "flex";
    opciones.forEach(opcion => {
        mainmenu.appendChild(opcion);
        opcion.addEventListener('click', menu_celular_cerrar);
    });
    console.log(opciones);
}
function menu_celular_cerrar(){
    menu.style.display = "none";
}

//Script para copiar el correo al porta papeles
const direccion = document.getElementById('id_direccion').textContent;
function copiarcorreo() {
    navigator.clipboard.writeText(direccion)
        .catch(err => {
            console.error('Error al copiar: ', err);
        });
}