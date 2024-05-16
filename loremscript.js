document.addEventListener("DOMContentLoaded", function() {
    var contador = document.querySelector('.contador');
    var segundos = 10;
    var intervalo = setInterval(function() {
        segundos--;
        contador.textContent = segundos;
        if (segundos === 3) {
            clearInterval(intervalo);
            setTimeout(function() {
                location.reload();
            }, 1000);
        }
    }, 1000);
});
