let lateral = document.getElementById('navbar');
let main = document.getElementById('main-doc');

function mostrar_ocultar() {
    if (document.body.clientWidth <= 500) {
        if (lateral.style.visibility == 'hidden') {
            lateral.style.cssText = `visibility: visible;
                                     transition: visibility 10s ease-in;
                                     `
        } else {
            lateral.style.visibility = 'hidden';
        }
    }
}
window.onresize = resize;

function resize() {
    if (document.body.clientWidth > 500) {
        lateral.style.visibility = 'visible'
    }
}