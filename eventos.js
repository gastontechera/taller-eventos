document.addEventListener('DOMContentLoaded', function () {

    const divBoton = document.querySelector("div");
    const button = document.querySelector("button");

    divBoton.addEventListener('click', () => {
        alert("Hola! Soy el div");
    });

    button.addEventListener('click', (event) => {
        alert("como estas");
        event.stopPropagation();
    });

});