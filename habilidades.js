/* ============================================================
   Carrusel de habilidades — arrastre, rueda, teclado,
   indicadores y animación kintsugi al entrar en vista.
   ============================================================ */

function deslizarHabilidades(direccion) {
    const carrusel = document.getElementById('carruselHabilidades');
    if (!carrusel) return;
    const tarjeta = carrusel.querySelector('.tarjeta-habilidad');
    if (!tarjeta) return;
    const estilos = getComputedStyle(carrusel.querySelector('.pista-habilidades'));
    const espacio = parseFloat(estilos.gap) || 40;
    const ancho = tarjeta.getBoundingClientRect().width + espacio;
    carrusel.scrollBy({ left: direccion * ancho * 2, behavior: 'smooth' });
}

function initCarruselHabilidades() {
    const carrusel = document.getElementById('carruselHabilidades');
    const pista = document.getElementById('pistaHabilidades');
    const contenedorIndicadores = document.getElementById('indicadoresHabilidades');
    if (!carrusel || !pista || !contenedorIndicadores) return;

    const tarjetas = Array.from(pista.querySelectorAll('.tarjeta-habilidad'));

    // Construir indicadores dinámicamente
    tarjetas.forEach((tarjeta, indice) => {
        const punto = document.createElement('button');
        punto.className = 'indicador-punto';
        punto.type = 'button';
        punto.setAttribute('aria-label', `Ir a la habilidad ${indice + 1}`);
        punto.addEventListener('click', () => {
            tarjeta.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        });
        contenedorIndicadores.appendChild(punto);
    });
    const puntos = Array.from(contenedorIndicadores.children);
    if (puntos[0]) puntos[0].classList.add('activo');

    // Revela la grieta dorada y marca el indicador activo
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            const indice = tarjetas.indexOf(entrada.target);
            if (entrada.isIntersecting) {
                entrada.target.classList.add('en-vista');
                if (entrada.intersectionRatio > 0.55) {
                    puntos.forEach((p) => p.classList.remove('activo'));
                    if (puntos[indice]) puntos[indice].classList.add('activo');
                }
            }
        });
    }, { root: carrusel, threshold: [0.25, 0.55, 0.9] });

    tarjetas.forEach((t) => observador.observe(t));

    // Arrastrar con mouse/puntero
    let arrastrando = false;
    let inicioX = 0;
    let scrollInicio = 0;
    let seMovio = false;

    carrusel.addEventListener('pointerdown', (evento) => {
        arrastrando = true;
        seMovio = false;
        carrusel.classList.add('arrastrando');
        inicioX = evento.clientX;
        scrollInicio = carrusel.scrollLeft;
    });

    window.addEventListener('pointermove', (evento) => {
        if (!arrastrando) return;
        const delta = evento.clientX - inicioX;
        if (Math.abs(delta) > 4) seMovio = true;
        carrusel.scrollLeft = scrollInicio - delta;
    });

    window.addEventListener('pointerup', () => {
        arrastrando = false;
        carrusel.classList.remove('arrastrando');
    });

    // Evita que un arrastre dispare el enlace "Ver Proyecto" style click en tarjetas
    carrusel.addEventListener('click', (evento) => {
        if (seMovio) {
            evento.preventDefault();
            evento.stopPropagation();
        }
    }, true);

    // Rueda del mouse vertical -> desplazamiento horizontal
    carrusel.addEventListener('wheel', (evento) => {
        if (Math.abs(evento.deltaY) > Math.abs(evento.deltaX)) {
            evento.preventDefault();
            carrusel.scrollLeft += evento.deltaY;
        }
    }, { passive: false });

    // Navegación por teclado
    carrusel.addEventListener('keydown', (evento) => {
        if (evento.key === 'ArrowRight') deslizarHabilidades(1);
        if (evento.key === 'ArrowLeft') deslizarHabilidades(-1);
    });
}

document.addEventListener('DOMContentLoaded', initCarruselHabilidades);
