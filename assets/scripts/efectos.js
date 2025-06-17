function crearHoja() {
    const hoja = document.createElement('div');
    hoja.className = 'hoja';
    hoja.style.left = Math.random() * 100 + 'vw';
    hoja.style.animationDuration = Math.random() * 3 + 5 + 's';
    document.querySelector('.hojas').appendChild(hoja);

    hacerArrastrable(hoja);

    hoja.addEventListener('animationend', () => {
        hoja.remove();
    });
}

function hacerArrastrable(hoja) {
    hoja.addEventListener('mousedown', (e) => {
        const offsetX = e.clientX - hoja.getBoundingClientRect().left;
        const offsetY = e.clientY - hoja.getBoundingClientRect().top;

        const moverHoja = (e) => {
            hoja.style.left = e.clientX - offsetX + 'px';
            hoja.style.top = e.clientY - offsetY + 'px';
        };

        document.addEventListener('mousemove', moverHoja);

        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', moverHoja);
        }, { once: true });
    });
}

setInterval(crearHoja, 1000);