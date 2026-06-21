/* Texto desvancedio del encabezado */
const texto = document.getElementById("id-contenedor-encabezado");

window.addEventListener("scroll", () => {
    const scroll = window.scrollY;

    const opacidad = 1 - scroll / 500;

    texto.style.opacity = Math.max(opacidad, 0);
});





const contenedorPetalos = document.querySelector(".petalos");

function crearPetalo(){

    const petalo = document.createElement("div");

    petalo.classList.add("petalo");


    // posición inicial
    petalo.style.left = Math.random() * 100 + "vw";


    // tamaños aleatorios
    const tamaño = Math.random() * 20 + 15;

    petalo.style.width = tamaño + "px";
    petalo.style.height = tamaño * 0.7 + "px";


    // caída más lenta
    const duracion = Math.random() * 5 + 10;

    petalo.style.animationDuration =
        duracion + "s," +
        (Math.random() * 2 + 3) + "s," +
        (Math.random() * 2 + 3) + "s";


    // menos aparición junta
    petalo.style.animationDelay =
        Math.random() * 5 + "s";


    contenedorPetalos.appendChild(petalo);


    // eliminar después de terminar realmente
    setTimeout(()=>{
    petalo.remove();
}, (duracion + 15) * 1000);

}


setInterval(crearPetalo,400);