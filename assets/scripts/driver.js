import { driver } from '/node_modules/driver.js/dist/driver.js.mjs';

const driveObjet = driver({
    showProgress: true,
    steps: [
        {
            element: '#id-1',
            popover: {
                title: 'Mis proyectos',
                description: 'Esta es la sección de proyectos que he desarrollado.',
            }
        },
        {
            element: '#id-2',
            popover: {
                title: 'Accede al sitio web',
                description: 'Al darle clic en la imagen correspondiente de cada proyecto aparecerá un ojo, el cual te dirigirá al respectivo sitio web',
            }
        },
        {
            element: '#id-3',
            popover: {
                title: 'Mis habilidades',
                description: 'Conoce un poco sobre mis habilidades, lenguajes en los que soy experto; herramientsas, gestores de paquetes, frameworks, librerías, etc y descubre porque soy la mejor opción para tu proyecto y/o emrpesa',
            }
        },
        {
            element: '#formacion',
            popover: {
                title: 'Formación académica',
                description: 'Aquí podrás conocer mi formación académica y acceder a mi C.V.',
            }
        },
        {
            element: '#id-5',
            popover: {
                title: 'Contáctame',
                description: 'Ponte en contacto conmigo a través de mis redes sociales o correo electrónico',
            }
        },
        {
            element: '#id-6',
            popover: {
                title: 'Finalizar',
                description: 'Disfrúta de mi portafolio :D',
            }
        },
    ]
});

// Selecciona el botón
const botonExplorar = document.querySelector('.boton-1');

botonExplorar.addEventListener('click', () => {
    driveObjet.drive();
});