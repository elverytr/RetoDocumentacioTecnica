let lateral = document.getElementById('navbar');
let main = document.getElementById('main-doc');

function mostrar_ocultar() {
    if (document.body.clientWidth <= 700) {
        if (lateral.style.visibility == 'hidden') {
            lateral.style.visibility = 'visible';
        } else {
            lateral.style.visibility = 'hidden';
        }
    }
}
window.onresize = resize;

function resize() {
    if (document.body.clientWidth > 700) {
        lateral.style.visibility = 'visible'
    }
}