<?php

session_start();
@header("Content-type: application/json; charset=utf-8");

/*
 * 5	Añade un marcador con un máximo de fallos que vaya modificándose cada 
 * vez que el usuario falle y muestre un mensaje si se han realizado todos los 
 * fallos o todos los aciertos. Para controlar los fallos puedes utilizar una 
 * variable global JavaScript.
 */
if (!array_key_exists("contador", $_SESSION)) {
    $_SESSION["contador"] = 0;
}
$contador = $_SESSION["contador"];

//Array con los datos JSON
$jsonResp= array();
//Contador de fallos
$jsonResp['contador']=$_SESSION["contador"];

if (isset($_GET['inicio'])) {     //se ha indicado iniciar un nuevo juego
    $numeroAleatorio = rand(0, 10); //seleccionamos un numero aleatorio entre 0 y 10
    $_SESSION['numeroOculto'] = $numeroAleatorio;
    $jsonResp['numeroOculto'] = $_SESSION['numeroOculto'];
    $_SESSION["contador"]=1; //marcador fallos
    
} else {
    $numeroUsuario = $_GET['numero'];
    $numeroOculto = $_SESSION['numeroOculto'];

    if ($numeroUsuario > $numeroOculto) {
        $jsonResp['encontrado'] = 'No';
        $jsonResp['mensaje'] = 'Has introducido un valor demasiado alto';
        $contador++; //marcador fallos
        $_SESSION["contador"] = $contador; //marcador fallos
    } else {
        if ($numeroUsuario < $numeroOculto) {

            $jsonResp['encontrado'] = 'No';
            $jsonResp['mensaje'] = 'Has introducido un valor demasiado bajo';
            $contador++; //marcador fallos
            $_SESSION["contador"] = $contador; //marcador fallos
        } else {

            $jsonResp['encontrado'] = 'Si';
            $jsonResp['mensaje'] = 'Exacto!';
        }
    }
}

echo json_encode($jsonResp);
?>
