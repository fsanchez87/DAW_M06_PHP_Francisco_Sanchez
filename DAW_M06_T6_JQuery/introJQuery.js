$(document).ready(ini);
function ini() {

    //7.2 Una vez iniciada la web el elemento #divMobil se muestre de color azul.  
    $("#divMobil").css("color", "blue");

    //7.3 Al entrar el ratón encima de #setBlueColor establezca al div #divMobil un color de fondo verde.
    $("#setBlueColor").mouseenter(function () {
        $("#divMobil").css("background-color", "green");
    });

    //7.4 Al clicar sobre #setBlueColor establezca al div #divMobil un color de fondo azul.
    $("#setBlueColor").click(function () {
        $("#divMobil").css("background-color", "blue");
    });

    //7.5 Al quitar el ratón  de encima de #setBlueColor , establezca al div #divMobil un color de fondo naranja.
    $("#setBlueColor").mouseleave(function () {
        $("#divMobil").css("background-color", "orange");
    });

    //7.6 Al clicar sobre #setRedColor   establezca al div #divMobil un color de fondo rojo.
    $("#setRedColor").click(function () {
        $("#divMobil").css("background-color", "red");
    });
    
    //8.2 Al clicar sobre #setInvisible se oculte el div #divMobil con la función .fadeOut()
    $("#setInvisible").click(function () {
        $("#divMobil").fadeOut();
    });
    
    //8.3 Al clicar sobre #setVisible se muestre  el div #divMobil con la función.fadeIn()
    $("#setVisible").click(function () {
        $("#divMobil").fadeIn()();
    });
    
    //8.4 Al clicar sobre #toggleVisible se alterne entre visible / invisible el div #divMobil con la función.fadeToggle()
    $("#toggleVisible").click(function () {
        $("#divMobil").fadeToggle()();
    });
    
    //9.2 Al clicar sobre #incSize aumente en “50px” la altura del elemento #divMobil con una transición de 1.5 segundos.
    //9.3 Al clicar sobre #decSize disminuya “50px” la altura del elemento #divMobil con una transición de 2 segundos. 
    //9.4 Al clicar sobre #incRight aumente “50px” la distancia a la izquierda del elemento #divMobil con una transición de 1.5 segundos
    //9.5 Al clicar sobre # decRight disminuya “50px” la distancia a la izquierda del elemento #divMobil con una transición de 1.5 segundos. 
    //9.6 Al situar el ratón sobre la imagen , el div #infoImg ocupe el 100% de la altura de la imagen con una transición de 1 segundo. Al quitar el ratón de encima, el div #infoImg ocupe de nuevo el 30% de la imagen con una transición de 1 segundo.
    //9.7 Al clicar encima de #movContinuo se mueva continuamente el elemento #divMobil de izquierda a derecha. Para conseguirlo utiliza la propiedad complete de animate para que una vez haya terminado la animación hacia la derecha, llame a una función que realize la animación a la izquierda.
    //9.8 Al clicar por segunda vez sobre #movContinuo se detenga el movimiento #de divMobil con la función .stop( ).

}


