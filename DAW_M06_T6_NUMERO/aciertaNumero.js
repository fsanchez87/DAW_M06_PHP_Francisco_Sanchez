window.addEventListener("load", ini, false);
function ini() {

}

/*
 * 2	Programa en  “aciertaNumero.js” las funciones necesarias para que al 
 * clicar encima de #inicioXML:
 * 2.2 Se envíe una petición AJAX a aciertaNumeroXML.php con el parámetro: inicio=si
 */
function inicioXML() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            functionRespInicioXML(this);
        }
    };
    xmlHttp.open("GET", "aciertaNumeroXML.php?inicio=si", true);
    xmlHttp.send();
}

/*
 * 2.3	extrae el número aleatorio de la respuesta generada por PHP y muéstralo por consola. 
 * 2.4	Muestra un mensaje en el DIV #mensaje avisando que se ha generado un nuevo número.
 */
function functionRespInicioXML(xmlHttp) {
    var infoXML = xmlHttp.responseXML;
    var numero = infoXML.getElementsByTagName("inicio");
    var valorNumero = numero[0].childNodes[0].nodeValue;
    console.log(valorNumero);

    document.getElementById("mensaje").innerHTML = "Se ha generado un nuevo número";
}

/*
 * 3	Programa en  “aciertaNumero.js” las funciones necesarias para que al clicar encima de #checkAjaxXML:
 * 3.2	  se envíe una petición AJAX a aciertaNumeroXML.php con el parámetro: numero=valor introducido dentro del input #numero
 */
function checkAjaxXML() {
    var valorIntroducido = document.getElementById("numero").value;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            functionRespCheckAjaxXML(this);
        }
    };
    xmlHttp.open("GET", "aciertaNumeroXML.php?numero=" + valorIntroducido, true);
    xmlHttp.send();
}

/* 
 * 3.3	extrae ,de la respuesta generada por PHP , si se ha encontrado el valor y el mensaje retornado por el servidor.
 * 3.4	Muestra el mensaje en el DIV #mensaje y el valor de encontrado dentro del DIV #encontrado.
 */
function functionRespCheckAjaxXML(xmlHttp) {
    var infoXML = xmlHttp.responseXML;

    var fallos = infoXML.getElementsByTagName("fallos");
    var valorFallos = fallos[0].childNodes[0].nodeValue;
    var encontrado = infoXML.getElementsByTagName("encontrado");
    var valorEncontrado = encontrado[0].childNodes[0].nodeValue;
    var mensaje = infoXML.getElementsByTagName("mensaje");
    var valorMensaje = mensaje[0].childNodes[0].nodeValue;

    document.getElementById("encontrado").innerHTML = valorEncontrado;
    document.getElementById("mensaje").innerHTML = valorMensaje;
    
    /*
     * 5	Añade un marcador con un máximo de fallos que vaya modificándose cada 
     * vez que el usuario falle y muestre un mensaje si se han realizado todos los 
     * fallos o todos los aciertos. Para controlar los fallos puedes utilizar una 
     * variable global JavaScript.
     */
    var numFallos = 5;//controlamos el número de fallos
    var intentos = numFallos - valorFallos; // intentos restantes

    if (valorFallos < numFallos) {
        document.getElementById("fallos").innerHTML = "Quedan " + intentos + " intentos de " + numFallos;
    } else if (valorFallos == numFallos) {
        document.getElementById("fallos").innerHTML = "Has agotado los intentos, vuelve a generar un número";
    } else {
        document.getElementById("fallos").innerHTML = "Has acertado en " + intentos;
    }

}
/*
 * 4	Crea un archivo de nombre aciertaNumeroJSON.php que realice las mismas 
 * funciones que aciertaNumeroXML.php pero retornando una estructura JSON y añade 
 * las funciones  Javascript para realicar las consultas de inicio y check 
 * correspondientes. Es decir:
 * 
 * 4.2	Al clicar encima del DIV #inicioJSON se debe enviar una petición AJAX a 
 * aciertaNumeroJSON.php  para que genere un número aleatorio y lo retorne dentro 
 * de una estructura JSON. Al recibir la respuesta se ha de mostrar el número por 
 * consola y mostrar un mensaje en #mensaje avisando que se ha generado un nuevo número.
 */

function inicioJSON() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            functionRespInicioJSON(this);
        }
    };
    xmlHttp.open("GET", "aciertaNumeroJSON.php?inicio=si", true);
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xmlHttp.send();
}

function functionRespInicioJSON(xmlHttp) {
    var texto = xmlHttp.responseText;
    var respJSON = JSON.parse(texto);
    console.log(respJSON.numeroOculto);

    document.getElementById("mensaje").innerHTML = "Se ha generado un nuevo número";
}

/* 4.3	Al clicar encima del DIV #checkAjaxJSON  se debe enviar una petición AJAX 
 * a aciertaNumeroJSON.php  recibiendo el valor del input  #numero para retornar 
 * en formato JSON  los parámetros “encontrado” y “mensaje” indicando si se ha 
 * encontrado y un mensaje que se deberán mostrar en los DIV #encontrado y #mensaje
 */
function checkAjaxJSON() {
    var valorIntroducido = document.getElementById("numero").value;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            functionRespCheckAjaxJSON(this);
        }
    };
    xmlHttp.open("GET", "aciertaNumeroJSON.php?numero=" + valorIntroducido, true);
    xmlHttp.send();
}

function functionRespCheckAjaxJSON(xmlHttp) {
    var texto = xmlHttp.responseText;
    var respJSON = JSON.parse(texto);

    document.getElementById("encontrado").innerHTML = respJSON.encontrado;
    document.getElementById("mensaje").innerHTML = respJSON.mensaje;
    
    
    /*
     * 5	Añade un marcador con un máximo de fallos que vaya modificándose cada 
     * vez que el usuario falle y muestre un mensaje si se han realizado todos los 
     * fallos o todos los aciertos. Para controlar los fallos puedes utilizar una 
     * variable global JavaScript.
     */
    var valorFallos = respJSON.contador;
    var numFallos = 5;//controlamos el número de fallos
    var intentos = numFallos - valorFallos; // intentos restantes

    if (valorFallos < numFallos) {
        document.getElementById("fallos").innerHTML = "Quedan " + intentos + " intentos de " + numFallos;
    } else if (valorFallos == numFallos) {
        document.getElementById("fallos").innerHTML = "Has agotado los intentos, vuelve a generar un número";
    } else {
        document.getElementById("fallos").innerHTML = "Has acertado en " + intentos;
    }
}