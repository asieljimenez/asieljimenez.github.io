/* Texto desvancedio del encabezado */
const texto = document.getElementById("id-contenedor-encabezado");

window.addEventListener("scroll", () => {
    const scroll = window.scrollY;

    const opacidad = 1 - scroll / 500;

    texto.style.opacity = Math.max(opacidad, 0);
});





const contenedorPetalos = document.querySelector(".petalos");

function crearPetalo() {

    const petalo = document.createElement("div");

    petalo.classList.add("petalo");


    // posición inicial
    petalo.style.left = Math.random() * 100 + "vw";


    // detectar móvil
    const esMovil = window.innerWidth <= 700;


    // tamaños más pequeños en móvil
    const tamaño = esMovil ?
        Math.random() * 10 + 8 :
        Math.random() * 20 + 15;


    petalo.style.width = tamaño + "px";
    petalo.style.height = tamaño * 0.7 + "px";


    // duración más rápida en móvil (menos carga)
    const duracion = esMovil ?
        Math.random() * 4 + 6 :
        Math.random() * 5 + 10;


    petalo.style.animationDuration =
        duracion + "s," +
        (Math.random() * 2 + 3) + "s," +
        (Math.random() * 2 + 3) + "s";


    petalo.style.animationDelay =
        Math.random() * 5 + "s";


    contenedorPetalos.appendChild(petalo);


    setTimeout(() => {
        petalo.remove();
    }, (duracion + 15) * 1000);

}


// menos partículas en móvil
const intervalo = window.innerWidth <= 700 ? 900 : 800;

setInterval(crearPetalo, intervalo);