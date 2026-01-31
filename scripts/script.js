document.addEventListener('DOMContentLoaded', () => {

    const titulo = document.querySelector('.nosotros-texto h2');

    if (!titulo) return; // seguridad por si no existe

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                titulo.classList.add('animar');
                observer.unobserve(titulo);
            }
        });
    }, {
        threshold: 0.5
    });

    observer.observe(titulo);

});

document.addEventListener('DOMContentLoaded', () => {
    const titulos = document.querySelectorAll('.animar-titulo, .seccion-animada');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aparecer');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.4
    });

    titulos.forEach(titulo => observer.observe(titulo));
});

document.querySelectorAll('.navegacion a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('activo');
    });
});



