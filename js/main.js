// Selecciona elementos
const boton = document.getElementById('miBoton');
const texto = document.getElementById('miTexto');
const statusP = document.getElementById('status');

if (!statusP) {
    console.warn('No se encontró #status en el DOM.');
}

function setStatus(msg) {
    if (statusP) statusP.textContent = msg;
}

if (boton) {
    boton.addEventListener('mouseenter', () => {
        setStatus('No clickes que no funciono');
    });

    boton.addEventListener('mouseleave', () => {
        // Cuando el cursor salga del botón
        setStatus('Porque no quieres estar dentro del texto?');
    });

    boton.addEventListener('click', (e) => {
        // Al hacer click en el botón
        setStatus('PORQUE CLICKAS SI NO FUNCIONO!!');
        // pequeña animación visual 
        try {
            boton.animate([
                { transform: 'scale(1)' },
                { transform: 'scale(0.97)' },
                { transform: 'scale(1)' }
            ], { duration: 160, easing: 'ease-out' });
        } catch (err) {
        }
    });
} else {
    console.warn('No se encontró #miBoton en el DOM.');
}

if (texto) {
    texto.addEventListener('mouseenter', () => {
        setStatus('No te cansas de estar dentro de mi?');
    });

    texto.addEventListener('mouseleave', () => {
        setStatus('Porque no quieres estar dentro del texto?');
    });

    texto.addEventListener('focus', () => setStatus('No te cansas de estar dentro de mi?'));
    texto.addEventListener('blur', () => setStatus('Porque no quieres estar dentro del texto?'));
}