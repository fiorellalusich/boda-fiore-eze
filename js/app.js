document.addEventListener("DOMContentLoaded", function(){

    const abrir = document.getElementById("circulo");
    const inicio = document.getElementById("inicio");
    

    // Al cargar la página no se puede hacer scroll
    document.body.style.overflow = "hidden";

    abrir.addEventListener("click", function(){

        inicio.classList.add("ocultar");

       

        setTimeout(function(){

            inicio.style.display = "none";

            // Ahora sí habilitamos el scroll
            document.body.style.overflowY = "auto";

        },800);


});
// MODAL REGALOS

const abrirRegalo = document.getElementById("abrirRegalo");
const modalRegalo = document.getElementById("modalRegalo");
const cerrarRegalo = document.getElementById("cerrarRegalo");


abrirRegalo.addEventListener("click", function(){

    modalRegalo.classList.add("mostrar");

});


cerrarRegalo.addEventListener("click", function(){

    modalRegalo.classList.remove("mostrar");

});
});

    // CONTADOR

    const fechaBoda = new Date("November 14, 2026 19:00:00").getTime();


    function actualizarCuenta(){

        const ahora = new Date().getTime();

        const diferencia = fechaBoda - ahora;


        const dias = Math.floor(
            diferencia / (1000 * 60 * 60 * 24)
        );


        const horas = Math.floor(
            (diferencia % (1000 * 60 * 60 * 24))
            /(1000 * 60 * 60)
        );


        const minutos = Math.floor(
            (diferencia % (1000 * 60 * 60))
            /(1000 * 60)
        );


        document.getElementById("dias").innerHTML =
        String(dias).padStart(3,"0");

        document.getElementById("horas").innerHTML =
        String(horas).padStart(2,"0");

        document.getElementById("minutos").innerHTML =
        String(minutos).padStart(2,"0");

    }


    actualizarCuenta();

    setInterval(actualizarCuenta,60000);
